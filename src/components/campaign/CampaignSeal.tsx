import { cn } from "@/lib/utils";

interface CampaignSealProps {
  text: string;
  className?: string;
}

/** Selo circular com texto girando ao redor (estático com prefers-reduced-motion). */
const CampaignSeal = ({ text, className }: CampaignSealProps) => {
  const ring = `${text} • ${text} • `;

  return (
    <div aria-hidden className={cn("relative aspect-square", className)}>
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full motion-safe:animate-[spin_18s_linear_infinite]">
        <defs>
          <path id="seal-circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
        </defs>
        <circle cx="100" cy="100" r="98" fill="hsl(var(--lime))" />
        <text
          fill="hsl(var(--ink))"
          style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 15, fontWeight: 600, letterSpacing: "0.18em" }}
        >
          <textPath href="#seal-circle">{ring}</textPath>
        </text>
      </svg>
      <div className="absolute inset-[26%] flex items-center justify-center rounded-full bg-ink">
        <svg viewBox="0 0 24 24" className="h-1/2 w-1/2">
          <path d="M12 1 23 12 12 23 1 12Z" fill="hsl(var(--coral))" />
          <path d="M12 8.5 15.5 12 12 15.5 8.5 12Z" fill="hsl(var(--lime))" />
        </svg>
      </div>
    </div>
  );
};

export default CampaignSeal;
