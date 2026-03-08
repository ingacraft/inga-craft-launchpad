import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Users, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-tech-setup.jpg";
import logo from "@/assets/ingacraft-logo.png";
import { getWhatsAppLink } from "@/config/site";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";

const trustBadges = [
  { icon: Shield, label: "Segurança garantida" },
  { icon: Clock, label: "Entregas no prazo" },
  { icon: Users, label: "Clientes satisfeitos" },
  { icon: CheckCircle, label: "Suporte dedicado" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen gradient-hero flex items-center justify-center overflow-hidden pt-20">
      <div 
        className="absolute inset-0 opacity-50 bg-cover bg-center bg-no-repeat md:bg-fixed"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 gradient-hero opacity-70" />

      <FadeInUpWrapper className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="mb-8 flex justify-center">
          <img 
            src={logo} 
            alt="IngaCraft - Desenvolvimento Web, Software e Setups Personalizados"
            className="w-56 sm:w-72 md:w-80 lg:w-96 h-auto"
            loading="eager"
          />
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          Soluções em{" "}
          <span className="gradient-text-primary">Tecnologia</span>
          {" "}para{" "}
          <span className="gradient-text-secondary">seu Negócio</span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
          Desenvolvimento Web • Software Sob Medida • Setups Personalizados
        </p>

        <p className="text-sm sm:text-base text-muted-foreground mb-10 max-w-2xl mx-auto">
          Transformamos ideias em soluções digitais robustas, seguras e escaláveis. 
          Comprometidos com qualidade, prazos e resultados reais para sua empresa.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            variant="hero" 
            size="lg" 
            className="group"
            onClick={() => window.open(getWhatsAppLink(), "_blank")}
          >
            Solicitar Orçamento
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-primary/50 hover:bg-primary/10"
            onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Conhecer Serviços
          </Button>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {trustBadges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div key={badge.label} className="flex items-center gap-2 text-muted-foreground">
                <Icon className="w-4 h-4 text-primary" />
                <span className="text-xs sm:text-sm font-medium">{badge.label}</span>
              </div>
            );
          })}
        </div>
      </FadeInUpWrapper>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
