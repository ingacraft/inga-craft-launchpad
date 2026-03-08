import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import devStation from "@/assets/dev-station.jpg";
import { getWhatsAppLink } from "@/config/site";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";
import SoftDevStats from "@/components/softdev/SoftDevStats";
import SoftDevBenefits from "@/components/softdev/SoftDevBenefits";
import SoftDevSystemTypes from "@/components/softdev/SoftDevSystemTypes";
import SoftDevFeatures from "@/components/softdev/SoftDevFeatures";
import SoftDevUseCases from "@/components/softdev/SoftDevUseCases";
import SoftDevProcess from "@/components/softdev/SoftDevProcess";
import SoftDevCTA from "@/components/softdev/SoftDevCTA";

const SoftwareDevelopment = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center px-6 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-fixed opacity-70"
          style={{ backgroundImage: `url(${devStation})` }}
        />
        <div className="absolute inset-0 gradient-hero opacity-60" />
        <FadeInUpWrapper className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text-primary">Desenvolvimento de Software Sob Medida</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Sistemas personalizados, escaláveis e seguros para empresas e projetos que precisam de tecnologia real.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="gradient-primary text-primary-foreground font-semibold px-8 py-3"
                onClick={() => window.open(getWhatsAppLink("Olá! Gostaria de solicitar um orçamento para desenvolvimento de software."), "_blank")}
              >
                Solicitar Orçamento
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="font-semibold px-8 py-3"
                onClick={() => document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Funcionalidades
              </Button>
            </div>
          </div>
        </FadeInUpWrapper>
      </section>

      <div id="stats">
        <SoftDevStats />
      </div>
      <SoftDevBenefits />
      <SoftDevSystemTypes />
      <SoftDevFeatures />
      <SoftDevUseCases />
      <SoftDevProcess />
      <SoftDevCTA />

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default SoftwareDevelopment;
