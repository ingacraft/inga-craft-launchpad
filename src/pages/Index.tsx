import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import HomeHero from "@/components/home/HomeHero";
import Positioning from "@/components/home/Positioning";
import Solutions from "@/components/home/Solutions";
import Process from "@/components/home/Process";
import Projects from "@/components/home/Projects";
import AboutSection from "@/components/home/AboutSection";
import Faq from "@/components/home/Faq";
import FinalCta from "@/components/home/FinalCta";
import BlackNovemberLanding from "@/components/campaign/BlackNovemberLanding";
import { siteConfig } from "@/config/site";
import { usePageMeta } from "@/hooks/usePageMeta";

const Index = () => {
  usePageMeta(siteConfig.seo.title, siteConfig.seo.description);

  return (
    <div className="min-h-screen bg-background">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-lime focus:px-4 focus:py-2 focus:font-bold focus:text-ink"
      >
        Pular para o conteúdo
      </a>
      <Navigation />
      <main id="conteudo">
        {/* Campanha temporária no topo — desative em src/config/campaign.ts */}
        <BlackNovemberLanding />
        <HomeHero />
        <Positioning />
        <Solutions />
        <Process />
        <Projects />
        <AboutSection />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
