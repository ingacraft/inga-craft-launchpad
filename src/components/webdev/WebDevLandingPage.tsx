import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Zap, Rocket, BarChart3, Clock } from "lucide-react";
import { getWhatsAppLink } from "@/config/site";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";
import landingPageExample from "@/assets/landing-page-example.jpg";

const features = [
  { icon: Target, text: "Foco total em um único objetivo" },
  { icon: Zap, text: "Alta taxa de conversão" },
  { icon: Rocket, text: "Ideal para lançamentos e promoções" },
  { icon: BarChart3, text: "Métricas claras de resultados" },
  { icon: Clock, text: "Implementação rápida" },
];

const WebDevLandingPage = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <FadeInUpWrapper className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/30 mb-4">
            Opção 1
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Landing Page</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma página única, focada em conversão. Perfeita para captar leads, vender um produto ou divulgar uma promoção.
          </p>
        </FadeInUpWrapper>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Card */}
          <FadeInUpWrapper delay={0.1}>
            <Card className="overflow-hidden border-2 border-primary/30 hover:border-primary transition-all duration-500 group">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={landingPageExample}
                    alt="Exemplo de Landing Page moderna"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-sm font-semibold text-primary">Exemplo de Landing Page</p>
                    <p className="text-xs text-muted-foreground">Design moderno com foco em conversão</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeInUpWrapper>

          {/* Features */}
          <FadeInUpWrapper delay={0.2}>
            <div className="space-y-5">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-lg glass-card border border-primary/20 hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-foreground" />
                    </div>
                    <p className="text-foreground font-medium">{feature.text}</p>
                  </div>
                );
              })}

              <Button
                size="lg"
                className="gradient-primary text-foreground font-semibold w-full mt-6 text-lg"
                onClick={() =>
                  window.open(
                    getWhatsAppLink("Olá! Gostaria de saber mais sobre criação de Landing Page."),
                    "_blank"
                  )
                }
              >
                Quero minha Landing Page
              </Button>
            </div>
          </FadeInUpWrapper>
        </div>
      </div>
    </section>
  );
};

export default WebDevLandingPage;
