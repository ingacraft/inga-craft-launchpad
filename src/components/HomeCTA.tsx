import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { getWhatsAppLink } from "@/config/site";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";
import n8nBg from "@/assets/n8n-automation-bg.jpg";

const HomeCTA = () => {
  return (
    <section
      className="relative border-t border-border bg-[hsl(var(--surface-d))] bg-no-repeat bg-cover bg-center md:bg-fixed"
      style={{ backgroundImage: `url(${n8nBg})` }}
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/40" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <FadeInUpWrapper className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <div className="eyebrow mb-6">Próximo passo</div>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.035em] text-foreground leading-[1.02]">
              Vamos conversar sobre o seu próximo projeto.
            </h2>
            <p className="mt-6 text-muted-foreground max-w-xl leading-relaxed">
              Resposta em até 24 horas úteis. Diagnóstico técnico e proposta comercial sem custo.
            </p>
          </div>
          <div className="md:col-span-4 flex md:justify-end gap-3">
            <Button
              variant="hero"
              size="lg"
              className="group"
              onClick={() => window.open(getWhatsAppLink(), "_blank")}
            >
              Iniciar conversa
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </FadeInUpWrapper>
      </div>
    </section>
  );
};

export default HomeCTA;
