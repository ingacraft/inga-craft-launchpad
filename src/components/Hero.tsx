import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Monitor, GraduationCap } from "lucide-react";
import heroImage from "@/assets/hero-tech-setup.jpg";
import { siteConfig, getWhatsAppLink } from "@/config/site";

const Hero = () => {
  return (
    <section className="relative min-h-screen gradient-hero flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 opacity-60">
        <img 
          src={heroImage} 
          alt="Modern tech workspace with multiple monitors and development setup showcasing IngaCraft professional environment"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 gradient-hero opacity-80"></div>
      </div>
      
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
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            {siteConfig.name}
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Desenvolvimento Web • Setups Personalizados • Cursos de Tecnologia
        </p>
        
        <p className="text-base sm:text-lg text-muted-foreground mb-10 max-w-3xl mx-auto animate-fade-in leading-relaxed" style={{ animationDelay: "0.4s" }}>
          {siteConfig.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Button 
            variant="hero" 
            size="lg" 
            className="group hover:scale-105 transition-transform"
            onClick={() => window.open(getWhatsAppLink(), "_blank")}
          >
            Começar Projeto
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="glass" 
            size="lg" 
            className="hover:scale-105 transition-transform"
            onClick={() => window.location.href = siteConfig.routes.portfolio}
          >
            Ver Portfólio
          </Button>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;