import Marquee from "@/components/brand/Marquee";
import { campaignConfig, isCampaignActive } from "@/config/campaign";
import { cn } from "@/lib/utils";

interface CampaignStripProps {
  className?: string;
  reverse?: boolean;
}

/** Faixa larga de campanha, levemente inclinada. Some com a campanha desativada. */
const CampaignStrip = ({ className, reverse = false }: CampaignStripProps) => {
  if (!isCampaignActive()) return null;

  return (
    <div className={cn("relative z-10 overflow-hidden py-6", className)}>
      <div className={cn("-mx-4 border-y-2 border-ink bg-lime text-ink", reverse ? "rotate-1" : "-rotate-1")}>
        <Marquee
          items={campaignConfig.strip.map((t) => t.toUpperCase())}
          label={campaignConfig.strip.join(" • ")}
          separator="✦"
          duration={30}
          className="py-3"
          itemClassName="font-display text-2xl sm:text-3xl font-black tracking-[-0.02em]"
        />
      </div>
    </div>
  );
};

export default CampaignStrip;
