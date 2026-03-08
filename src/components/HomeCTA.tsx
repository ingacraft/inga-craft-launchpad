import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { getWhatsAppLink } from "@/config/site";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";

const HomeCTA = () => {
  return (
    <section className="py-24 px-6 bg-background/30">
      <div className="max-w-4xl mx-auto text-center">
        <FadeInUpWrapper>
          <Card className="glass-card border-primary/20 shadow-glow overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
            <CardContent className="pt-12 pb-12 relative z-10">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Vamos conversar?</p>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="gradient-text-primary">
                  Pronto para levar seu negócio ao próximo nível?
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Entre em contato e descubra como podemos transformar suas ideias em soluções digitais de alto impacto.
              </p>
              <Button
                size="lg"
                className="gradient-primary text-primary-foreground font-semibold px-12 py-6 text-lg hover:scale-105 transition-transform group"
                onClick={() => window.open(getWhatsAppLink(), "_blank")}
              >
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </FadeInUpWrapper>
      </div>
    </section>
  );
};

export default HomeCTA;
