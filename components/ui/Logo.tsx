import { cn } from "@/lib/utils/cn";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  variant?: "white" | "primary" | "dark";
}

export function Logo({
  className,
  iconOnly = false,
  variant = "primary",
}: LogoProps) {
  const isWhite = variant === "white";

  return (
    <div className={cn("flex items-center gap-2.5 group", className)}>
      <div
        className={cn(
          "relative w-10 h-10 flex items-center justify-center transition-all duration-500",
          !iconOnly && "shrink-0",
        )}
      >
        {/* Background Shape */}
        <div
          className={cn(
            "absolute inset-0 rounded-xl rotate-45 transition-all duration-500 group-hover:rotate-[135deg]",
            isWhite ? "bg-white" : "bg-primary shadow-glow-primary",
          )}
        />

        {/* T + X Integrated Symbol */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 w-6 h-6"
        >
          {/* Stylized T (Solid & Modern) */}
          <path
            d="M6 6H18M12 6V18"
            stroke={isWhite ? "#FF8A00" : "white"}
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Stylized X (Solar Pulse / Grid Style) */}
          <path
            d="M17 13L21 17L17 21"
            stroke={isWhite ? "#0066FF" : "rgba(255,255,255,0.7)"}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 13L3 17L7 21"
            stroke={isWhite ? "#0066FF" : "rgba(255,255,255,0.7)"}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {!iconOnly && (
        <div className="flex flex-col">
          <span
            className={cn(
              "font-heading font-bold text-xl tracking-tight leading-none",
              isWhite ? "text-white" : "text-text-primary",
            )}
          >
            Trivent<span className="text-primary">X</span>
          </span>
          <span
            className={cn(
              "text-[10px] font-bold tracking-[0.2em] uppercase leading-none mt-1",
              isWhite ? "text-white/60" : "text-primary",
            )}
          >
            Energy LLP
          </span>
        </div>
      )}
    </div>
  );
}
