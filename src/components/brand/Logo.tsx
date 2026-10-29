import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { mark: "w-5 h-5", text: "text-lg" },
  md: { mark: "w-7 h-7", text: "text-xl" },
  lg: { mark: "w-9 h-9", text: "text-3xl" },
};

/** Wordmark da IngaCraft: quadrado coral com o símbolo de código "</>" + nome em Archivo. */
const Logo = ({ className, size = "md" }: LogoProps) => (
  <span className={cn("inline-flex items-center gap-2", className)}>
    <svg viewBox="0 0 24 24" aria-hidden className={cn(sizes[size].mark, "shrink-0")}>
      <rect width="24" height="24" rx="4" fill="hsl(var(--coral))" />
      <path
        d="M9 8 5 12l4 4M15 8l4 4-4 4M13.2 6.5l-2.4 11"
        fill="none"
        stroke="hsl(var(--ink))"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    <span className={cn("font-display font-black tracking-[-0.04em] leading-none", sizes[size].text)}>
      {siteConfig.name}
    </span>
  </span>
);

export default Logo;
