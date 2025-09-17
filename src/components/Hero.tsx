import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Monitor, GraduationCap } from "lucide-react";
import heroImage from "@/assets/hero-tech-setup.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen gradient-hero flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 opacity-25">
        <img 
          src={heroImage} 
          alt="Modern tech workspace with multiple monitors and development setup"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-80"></div>
      </div>
      
      {/* Floating Icons */}
      <div className="absolute top-20 left-10 animate-float opacity-30">
        <Code size={64} className="text-accent" />
      </div>
      <div className="absolute top-32 right-16 animate-float opacity-30" style={{ animationDelay: "1s" }}>
        <Monitor size={48} className="text-primary" />
      </div>
      <div className="absolute bottom-20 left-20 animate-float opacity-30" style={{ animationDelay: "2s" }}>
        <GraduationCap size={56} className="text-accent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            IngaCraft
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Desenvolvimento Web • Setups Personalizados • Cursos de Tecnologia
        </p>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
          Transformamos suas ideias em soluções digitais inovadoras. Criamos experiências web únicas, 
          montamos setups de alta performance e capacitamos profissionais através de cursos especializados.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Button variant="hero" size="lg" className="group">
            Começar Projeto
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="glass" size="lg">
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