import BnHero from "@/components/campaign/BnHero";
import BnWhy from "@/components/campaign/BnWhy";
import BnDiscount from "@/components/campaign/BnDiscount";
import BnPlans from "@/components/campaign/BnPlans";
import BnSteps from "@/components/campaign/BnSteps";
import BnFaq from "@/components/campaign/BnFaq";
import BnCta from "@/components/campaign/BnCta";
import Marquee from "@/components/brand/Marquee";
import { campaignConfig, isCampaignActive } from "@/config/campaign";

/**
 * Bloco completo da Black November no topo da home.
 * Some sozinho quando a campanha termina (ver `src/config/campaign.ts`).
 */
const BlackNovemberLanding = () => {
  if (!isCampaignActive()) return null;

  return (
    <>
      <BnHero />
      <BnWhy />
      <BnDiscount />
      <div className="border-y-2 border-ink bg-lime text-ink">
        <Marquee
          items={campaignConfig.strip.map((t) => t.toUpperCase())}
          label={campaignConfig.strip.join(" • ")}
          separator="✳"
          duration={40}
          className="py-3"
          itemClassName="font-display text-xl sm:text-2xl font-black tracking-[-0.02em]"
        />
      </div>
      <BnPlans />
      <BnSteps />
      <BnFaq />
      <BnCta />
    </>
  );
};

export default BlackNovemberLanding;
