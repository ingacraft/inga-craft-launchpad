import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Users, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-tech-setup.jpg";
import logo from "@/assets/ingacraft-logo.png";
import { getWhatsAppLink } from "@/config/site";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const trustBadges = [
  { icon: Shield, label: "Segurança garantida" },
  { icon: Clock, label: "Entregas no prazo" },
  { icon: Users, label: "Clientes satisfeitos" },
  { icon: CheckCircle, label: "Suporte dedicado" },
];

const Hero = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Logo entrance
      gsap.from(logoRef.current, {
        y: 40, opacity: 0, scale: 0.9, duration: 1.2, ease: "power3.out",
      });
      // Floating orb
      gsap.to(orbRef.current, {
        y: -30, duration: 3.5, ease: "sine.inOut", yoyo: true, repeat: -1,
      });
      // Subtle bg parallax on scroll
      gsap.to(bgRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: { trigger: bgRef.current, start: "top top", end: "bottom top", scrub: true },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-screen gradient-hero flex items-center justify-center overflow-hidden pt-20 rounded-b-[40px]">
      <div
        ref={bgRef}
        className="absolute inset-0 opacity-25 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      {/* Warm + cool ambient glows */}
      <div ref={orbRef} className="pointer-events-none absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full opacity-40 blur-3xl"
           style={{ background: "radial-gradient(circle, hsl(25 95% 55% / 0.55), transparent 70%)" }} />
      <div className="pointer-events-none absolute -bottom-40 -right-32 w-[520px] h-[520px] rounded-full opacity-40 blur-3xl"
           style={{ background: "radial-gradient(circle, hsl(270 70% 55% / 0.55), transparent 70%)" }} />

      <FadeInUpWrapper className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="mb-8 flex justify-center">
          <img
            ref={logoRef}
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
