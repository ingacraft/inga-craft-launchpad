import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { mark: "w-4 h-4", text: "text-lg" },
  md: { mark: "w-5 h-5", text: "text-xl" },
  lg: { mark: "w-7 h-7", text: "text-3xl" },
};

/** Wordmark da IngaCraft: losango coral (inspirado no símbolo) + nome em Archivo. */
const Logo = ({ className, size = "md" }: LogoProps) => (
  <span className={cn("inline-flex items-center gap-2", className)}>
    <svg viewBox="0 0 24 24" aria-hidden className={cn(sizes[size].mark, "shrink-0")}>
      <path d="M12 1 23 12 12 23 1 12Z" fill="hsl(var(--coral))" />
      <path d="M12 8.5 15.5 12 12 15.5 8.5 12Z" fill="hsl(var(--lime))" />
    </svg>
    <span className={cn("font-display font-black tracking-[-0.04em] leading-none", sizes[size].text)}>
      {siteConfig.name}
    </span>
  </span>
);

export default Logo;
