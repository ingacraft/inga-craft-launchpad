import { Link } from "react-router-dom";
import Marquee from "@/components/brand/Marquee";
import { campaignConfig, isCampaignActive } from "@/config/campaign";

/** Barra fina de campanha no topo. Some quando a campanha está desativada. */
const CampaignBar = () => {
  if (!isCampaignActive()) return null;

  return (
    <Link
      to={{ pathname: "/", hash: "#black-november" }}
      className="block bg-ink text-lime border-b border-white/10 hover:bg-ink-soft transition-colors"
      aria-label={`${campaignConfig.campaignName}: ver ofertas especiais`}
    >
      <Marquee
        items={campaignConfig.topBar.map((t) => t.toUpperCase())}
        label={campaignConfig.topBar.join(" • ")}
        duration={45}
        className="h-8 items-center"
        itemClassName="font-mono text-[11px] font-medium tracking-[0.18em]"
      />
    </Link>
  );
};

export default CampaignBar;
