import { execFileSync } from "node:child_process";
import { readdirSync, statSync } from "node:fs";
import { join } from "node:path";

/**
 * Resolves the most recent modification date across one or more paths
 * (files or directories, relative to the repo root), so a sitemap entry's
 * `lastModified` tracks real edits to that page instead of the build time.
 *
 * Primary source is git history, via a single `git log` call covering all
 * given paths at once — cheap even across many sitemap entries. This works
 * both locally and on Vercel, whose build step checks out the repo with its
 * `.git` directory intact. Vercel shallow-clones by default, which can hide
 * the true last-changed commit for a page that hasn't been touched in a
 * while; set `VERCEL_DEEP_CLONE=1` in the project's environment variables to
 * fetch full history instead.
 *
 * In development only, also falls back to filesystem mtimes, to cover edits
 * made since the last commit while iterating with `next dev`. That fallback
 * is skipped in production builds on purpose: scanning directories by a
 * dynamic path makes Next's build tracer bundle the whole project into the
 * deployed function, and a production build is always a fresh git checkout
 * anyway, so git history alone is both sufficient and accurate there.
 *
 * Finally falls back to the current time if no source is available (no git
 * repo, no matching history).
 */
export function getLastModified(paths: string[]): Date {
  const root = process.cwd();
  let latest = gitLastModified(root, paths);

  if (process.env.NODE_ENV !== "production") {
    for (const p of paths) {
      const mtime = latestMtime(join(root, p));
      if (mtime && (!latest || mtime > latest)) latest = mtime;
    }
  }

  return latest ?? new Date();
}

function gitLastModified(root: string, paths: string[]): Date | null {
  try {
    const out = execFileSync(
      "git",
      ["log", "-1", "--format=%cI", "--", ...paths],
      { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] },
    ).trim();
    return out ? new Date(out) : null;
  } catch {
    // Not a git checkout, git isn't installed, or no commit touches these
    // paths yet — fall through to the filesystem.
    return null;
  }
}

function latestMtime(absPath: string): Date | null {
  let stat;
  try {
    stat = statSync(absPath);
  } catch {
    return null; // Path doesn't exist (renamed/removed since) — ignore it.
  }

  if (stat.isFile()) return stat.mtime;
  if (!stat.isDirectory()) return null;

  let latest = stat.mtime;
  for (const entry of readdirSync(absPath)) {
    const childLatest = latestMtime(join(absPath, entry));
    if (childLatest && childLatest > latest) latest = childLatest;
  }
  return latest;
}
