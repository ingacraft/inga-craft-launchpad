import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import WebDevHero from "@/components/webdev/WebDevHero";
import WebDevStats from "@/components/webdev/WebDevStats";
import WebDevBenefits from "@/components/webdev/WebDevBenefits";
import WebDevLandingPage from "@/components/webdev/WebDevLandingPage";
import WebDevInstitutional from "@/components/webdev/WebDevInstitutional";
import WebDevCTA from "@/components/webdev/WebDevCTA";

const WebDevelopment = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <Navigation />
      <WebDevHero />
      <WebDevStats />
      <WebDevBenefits />
      <WebDevLandingPage />
      <WebDevInstitutional />
      <WebDevCTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default WebDevelopment;
