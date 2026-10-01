import Image from "next/image";
import Link from "next/link";
import { cn } from "cn";

/** Intrinsic dimensions of each lockup, used only to preserve aspect ratio. */
const LOGO = {
  dark: { src: "/logo.svg", width: 669, height: 177 },
  light: { src: "/logo-white.svg", width: 481, height: 128 },
} as const;

export default function Logo({
  className,
  tone = "dark",
}: {
  className?: string;
  /** "dark" = full-colour logo for light surfaces, "light" = white logo for dark bands. */
  tone?: "dark" | "light";
}) {
  const logo = LOGO[tone];

  return (
    <Link
      href="/"
      aria-label="Zain Movers and Packers — home"
      className={cn("flex shrink-0 items-center", className)}
    >
      <Image
        src={logo.src}
        alt="Zain Movers and Packers"
        width={logo.width}
        height={logo.height}
        preload
        className="h-9 w-auto sm:h-10"
      />
    </Link>
  );
}
