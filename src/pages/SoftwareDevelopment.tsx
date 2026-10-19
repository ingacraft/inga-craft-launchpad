import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import devStation from "@/assets/dev-station.jpg";
import ServiceHero from "@/components/service/ServiceHero";
import SoftDevStats from "@/components/softdev/SoftDevStats";
import SoftDevBenefits from "@/components/softdev/SoftDevBenefits";
import SoftDevSystemTypes from "@/components/softdev/SoftDevSystemTypes";
import SoftDevFeatures from "@/components/softdev/SoftDevFeatures";
import SoftDevUseCases from "@/components/softdev/SoftDevUseCases";
import SoftDevProcess from "@/components/softdev/SoftDevProcess";
import SoftDevCTA from "@/components/softdev/SoftDevCTA";
import SectionShell from "@/components/SectionShell";
import { useGsapScroll } from "@/hooks/useGsapScroll";
import { usePageMeta } from "@/hooks/usePageMeta";

const SoftwareDevelopment = () => {
  useGsapScroll();
  usePageMeta(
    "Desenvolvimento de software sob medida | IngaCraft",
    "Sistemas personalizados, escaláveis e seguros para empresas e projetos que precisam de tecnologia real.",
  );
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <ServiceHero
          eyebrow="Software sob medida"
          title={
            <>
              Desenvolvimento de software <span className="text-coral">sob medida.</span>
            </>
          }
          description="Sistemas personalizados, escaláveis e seguros para empresas e projetos que precisam de tecnologia real."
          image={devStation}
          imageAlt="Estação de trabalho de desenvolvimento de software"
          primaryLabel="Solicitar orçamento"
          whatsappMessage="Olá! Gostaria de solicitar um orçamento para desenvolvimento de software."
          secondaryLabel="Ver funcionalidades"
          secondaryTarget="stats"
        />

        <SectionShell surface="b" id="stats"><SoftDevStats /></SectionShell>
        <SectionShell surface="a"><SoftDevBenefits /></SectionShell>
        <SectionShell surface="c"><SoftDevSystemTypes /></SectionShell>
        <SectionShell surface="a"><SoftDevFeatures /></SectionShell>
        <SectionShell surface="d"><SoftDevUseCases /></SectionShell>
        <SectionShell surface="a"><SoftDevProcess /></SectionShell>
        <SoftDevCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default SoftwareDevelopment;
