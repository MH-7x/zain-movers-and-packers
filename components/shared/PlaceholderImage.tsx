import Image from "next/image";
import { cn } from "cn";

/**
 * Renders a real photo when `src` is supplied, and otherwise an inline neutral
 * placeholder of exactly the same intrinsic size — so swapping in final
 * photography later never shifts the layout.
 *
 * No external placeholder service is used: the fallback is a self-contained
 * SVG data URI.
 */
export interface PlaceholderImageProps {
  width: number;
  height: number;
  alt: string;
  /** Final photography, once available. Falls back to the neutral block. */
  src?: string;
  /** Short caption drawn inside the fallback block, for build-time orientation. */
  label?: string;
  className?: string;
  /** Set on above-the-fold hero imagery only. */
  priority?: boolean;
  sizes?: string;
}

function placeholderSrc(width: number, height: number, label?: string) {
  const text = label ?? `${width} × ${height}`;
  // Drawn in the upper third so it never collides with the caption overlays
  // that several heroes place along the bottom edge of the image.
  const fontSize = Math.max(12, Math.round(Math.min(width, height) / 22));

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="presentation">
<rect width="${width}" height="${height}" fill="#E5E5E5"/>
<rect x="0.5" y="0.5" width="${width - 1}" height="${height - 1}" fill="none" stroke="#D2D2D2"/>
<text x="50%" y="22%" fill="#8A8A8A" font-family="Inter, system-ui, sans-serif" font-size="${fontSize}" letter-spacing="1" text-anchor="middle" dominant-baseline="middle">${escapeXml(text)}</text>
</svg>`;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export default function PlaceholderImage({
  width,
  height,
  alt,
  src,
  label,
  className,
  priority = false,
  sizes,
}: PlaceholderImageProps) {
  const isPlaceholder = !src;

  return (
    <Image
      src={src ?? placeholderSrc(width, height, label)}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      loading={priority ? "eager" : "lazy"}
      sizes={sizes}
      unoptimized={isPlaceholder}
      className={cn("bg-[#E5E5E5] object-cover", className)}
    />
  );
}
