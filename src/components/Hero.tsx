import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Monitor, GraduationCap } from "lucide-react";
import heroImage from "@/assets/hero-tech-setup.jpg";
import logo from "@/assets/ingacraft-logo.png";
import { siteConfig, getWhatsAppLink } from "@/config/site";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";

const Hero = () => {
  return (
    <section className="relative min-h-screen gradient-hero flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Parallax Effect - bg-fixed removed on mobile for iOS compatibility */}
      <div 
        className="absolute inset-0 opacity-70 bg-cover bg-center bg-no-repeat md:bg-fixed"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 gradient-hero opacity-60"></div>
      
      {/* Floating Icons */}
      <div className="absolute top-32 left-10 animate-float opacity-40 hidden lg:block">
        <Code size={64} className="text-accent" aria-hidden="true" />
      </div>
      <div className="absolute top-40 right-16 animate-float opacity-40 hidden lg:block" style={{ animationDelay: "1s" }}>
        <Monitor size={48} className="text-primary" aria-hidden="true" />
      </div>
      <div className="absolute bottom-32 left-20 animate-float opacity-40 hidden lg:block" style={{ animationDelay: "2s" }}>
        <GraduationCap size={56} className="text-accent" aria-hidden="true" />
      </div>

      {/* Content */}
      <FadeInUpWrapper className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="mb-8 flex justify-center">
          <img 
            src={logo} 
            alt="IngaCraft - Desenvolvimento Web, Software e Setups Personalizados"
            className="w-64 sm:w-80 md:w-96 lg:w-[28rem] h-auto animate-pulse-slow"
            loading="eager"
          />
        </div>
        
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6">
          Desenvolvimento Web • Desenvolvimento Software • Setups Personalizados
        </p>
        
        <p className="text-base sm:text-lg text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
          Transforme suas ideias em soluções digitais inovadoras.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="hero" 
            size="lg" 
            className="group hover:scale-105 transition-transform"
            onClick={() => window.open(getWhatsAppLink(), "_blank")}
          >
            Solicitar Orçamento
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="hover:scale-105 transition-transform border-primary/50 hover:bg-primary/10"
            onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Conhecer Serviços
          </Button>
        </div>
      </FadeInUpWrapper>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;