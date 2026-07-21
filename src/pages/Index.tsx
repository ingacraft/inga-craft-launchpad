import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import HomeStats from "@/components/HomeStats";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import HomeCTA from "@/components/HomeCTA";
import Contact from "@/components/Contact";
import SocialMedia from "@/components/SocialMedia";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <HomeStats />
      <Services />
      <About />
      <Testimonials />
      <HomeCTA />
      <Contact />
      <SocialMedia />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
