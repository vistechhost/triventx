import Image from "next/image";
import { cn } from "@/lib/utils/cn";

interface LogoProps {
  className?: string;
  /** Shows only the square icon, e.g. in the collapsed admin sidebar. */
  iconOnly?: boolean;
  /**
   * `primary`: full-colour logo, swapped for the reversed one in dark mode.
   * `white`: reversed logo for dark backgrounds such as the footer.
   */
  variant?: "primary" | "white";
  priority?: boolean;
}

// Source artwork: public/brand/triventx-logo*.png, 720 × 195.
const LOGO_WIDTH = 720;
const LOGO_HEIGHT = 195;
const ALT = "TriventX Energy";

export function Logo({ className, iconOnly = false, variant = "primary", priority = false }: LogoProps) {
  if (iconOnly) {
    return (
      <Image
        src="/brand/triventx-icon-512.png"
        alt={ALT}
        width={40}
        height={40}
        className={cn("h-10 w-10 rounded-xl", className)}
      />
    );
  }

  const sizing = cn("h-11 md:h-14 w-auto", className);

  if (variant === "white") {
    return (
      <Image
        src="/brand/triventx-logo-reversed.png"
        alt={ALT}
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        preload={priority}
        className={sizing}
      />
    );
  }

  return (
    <>
      <Image
        src="/brand/triventx-logo.png"
        alt={ALT}
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        preload={priority}
        className={cn(sizing, "dark:hidden")}
      />
      <Image
        src="/brand/triventx-logo-reversed.png"
        alt={ALT}
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        // Only one of the pair is visible, so load it eagerly rather than preloading both.
        loading={priority ? "eager" : undefined}
        className={cn(sizing, "hidden dark:block")}
      />
    </>
  );
}
