import StarRating from "@/components/shared/StarRating";

/** "Rated 4.9/5 on Google" credential chip. */
export default function GoogleBadge() {
  return (
    <div className="flex items-center gap-3 border border-hairline bg-background px-4 py-3">
      <svg viewBox="0 0 24 24" className="size-5 shrink-0" aria-hidden="true">
        <path
          fill="#4285F4"
          d="M23.5 12.27c0-.86-.08-1.68-.22-2.47H12v4.68h6.45a5.52 5.52 0 0 1-2.39 3.62v3h3.86c2.26-2.08 3.58-5.15 3.58-8.83z"
        />
        <path
          fill="#34A853"
          d="M12 24c3.24 0 5.96-1.08 7.94-2.9l-3.86-3a7.2 7.2 0 0 1-10.72-3.78H1.38v3.09A11.99 11.99 0 0 0 12 24z"
        />
        <path
          fill="#FBBC05"
          d="M5.36 14.32a7.18 7.18 0 0 1 0-4.62V6.61H1.38a12 12 0 0 0 0 10.8l3.98-3.09z"
        />
        <path
          fill="#EA4335"
          d="M12 4.77c1.76 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.69 1.38 6.61l3.98 3.09A7.16 7.16 0 0 1 12 4.77z"
        />
      </svg>
      <div>
        <StarRating label="Rated 4.9 out of 5" />
        <p className="mt-1 text-xs font-semibold text-foreground">
          Rated 4.9/5 on Google
        </p>
      </div>
    </div>
  );
}
