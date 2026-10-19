import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import WebDevHero from "@/components/webdev/WebDevHero";
import WebDevStats from "@/components/webdev/WebDevStats";
import WebDevBenefits from "@/components/webdev/WebDevBenefits";
import WebDevLandingPage from "@/components/webdev/WebDevLandingPage";
import WebDevInstitutional from "@/components/webdev/WebDevInstitutional";
import WebDevCTA from "@/components/webdev/WebDevCTA";
import SectionShell from "@/components/SectionShell";
import { useGsapScroll } from "@/hooks/useGsapScroll";
import { usePageMeta } from "@/hooks/usePageMeta";

const WebDevelopment = () => {
  useGsapScroll();
  usePageMeta(
    "Desenvolvimento web: sites institucionais e landing pages | IngaCraft",
    "Sites institucionais e landing pages que geram mais clientes, mais vendas e mais credibilidade para a sua marca.",
  );
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <WebDevHero />
        <SectionShell surface="b"><WebDevStats /></SectionShell>
        <SectionShell surface="a"><WebDevBenefits /></SectionShell>
        <SectionShell surface="d"><WebDevLandingPage /></SectionShell>
        <SectionShell surface="a"><WebDevInstitutional /></SectionShell>
        <WebDevCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default WebDevelopment;
