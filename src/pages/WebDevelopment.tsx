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

const WebDevelopment = () => {
  useGsapScroll();
  return (
    <div className="min-h-screen bg-background pt-20">
      <Navigation />
      <WebDevHero />
      <SectionShell surface="b"><WebDevStats /></SectionShell>
      <SectionShell surface="a"><WebDevBenefits /></SectionShell>
      <SectionShell surface="c"><WebDevLandingPage /></SectionShell>
      <SectionShell surface="a"><WebDevInstitutional /></SectionShell>
      <SectionShell surface="d" flat><WebDevCTA /></SectionShell>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default WebDevelopment;
