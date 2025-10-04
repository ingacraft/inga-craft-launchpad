import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import SocialMedia from "@/components/SocialMedia";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen pt-20">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Contact />
      <SocialMedia />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
