import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import HomeStats from "@/components/HomeStats";
import Services from "@/components/Services";
import About from "@/components/About";
import HomeCTA from "@/components/HomeCTA";
import Contact from "@/components/Contact";
import SocialMedia from "@/components/SocialMedia";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SectionShell from "@/components/SectionShell";
import { useGsapScroll } from "@/hooks/useGsapScroll";

const Index = () => {
  useGsapScroll();

  return (
    <div className="min-h-screen pt-20 bg-background">
      <Navigation />
      <Hero />
      <SectionShell surface="b"><HomeStats /></SectionShell>
      <SectionShell surface="a"><Services /></SectionShell>
      <SectionShell surface="c"><About /></SectionShell>
      <SectionShell surface="d"><HomeCTA /></SectionShell>
      <SectionShell surface="a"><Contact /></SectionShell>
      <SectionShell surface="b" flat><SocialMedia /></SectionShell>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
