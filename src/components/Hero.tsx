import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { getWhatsAppLink } from "@/config/site";

/**
 * Editorial hero — Noir & Ember.
 * Fixed grid backdrop, ember glow, oversized display headline, KPI ruler at bottom.
 */
const kpis = [
  { value: "50+", label: "Projetos entregues" },
  { value: "8+",  label: "Anos de experiência" },
  { value: "100%", label: "Comprometimento" },
  { value: "24/7", label: "Suporte dedicado" },
];

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden pt-24 pb-10 bg-background">
      {/* Ambient ember glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      {/* Precision grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 50%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center">
        <div className="max-w-4xl">
          <div className="eyebrow mb-8">
            <span>Tecnologia corporativa</span>
            <span className="text-border">/</span>
            <span>Maringá — PR</span>
          </div>

          <h1 className="font-display text-[42px] sm:text-6xl lg:text-7xl xl:text-[88px] font-semibold leading-[1.02] tracking-[-0.04em] text-foreground mb-8">
            Engenharia de software<br />
            e infraestrutura para{" "}
            <span className="relative inline-block">
              <span className="text-primary">empresas sérias</span>
              <span
                aria-hidden
                className="absolute inset-x-0 -bottom-2 h-[3px] bg-primary/60"
              />
            </span>
            .
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
            Construímos sistemas web, software sob medida e estações de trabalho de
            alta performance — com processos claros, prazos cumpridos e resultado
            que a diretoria consegue medir.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="hero"
              size="lg"
              className="group"
              onClick={() => window.open(getWhatsAppLink(), "_blank")}
            >
              Iniciar um projeto
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Conhecer serviços
            </Button>
          </div>
        </div>
      </div>

      {/* KPI ruler */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-border">
          {kpis.map((kpi) => (
            <div
              key={kpi.label}
              className="py-6 lg:py-8 px-1 lg:px-6 border-r last:border-r-0 border-border lg:[&:nth-child(2)]:border-r-0 lg:[&:nth-child(2)]:lg:border-r"
            >
              <div className="font-display text-3xl lg:text-4xl font-semibold text-foreground tracking-tight">
                {kpi.value}
              </div>
              <div className="text-xs lg:text-sm text-muted-foreground mt-1.5">
                {kpi.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
