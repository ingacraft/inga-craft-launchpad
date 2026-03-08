import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layers, Briefcase, BookOpen, Users, ShieldCheck } from "lucide-react";
import { getWhatsAppLink } from "@/config/site";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";
import institutionalExample from "@/assets/institutional-site-example.jpg";

const features = [
  { icon: Layers, text: "Múltiplas páginas organizadas" },
  { icon: Briefcase, text: "Portfólio de trabalhos e projetos" },
  { icon: BookOpen, text: "Blog para conteúdo e SEO" },
  { icon: Users, text: "Apresentação da equipe e história" },
  { icon: ShieldCheck, text: "SSL, responsivo e hospedagem segura" },
];

const WebDevInstitutional = () => {
  return (
    <section className="py-24 px-6 bg-background/50">
      <div className="max-w-7xl mx-auto">
        <FadeInUpWrapper className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-secondary/10 text-secondary border border-secondary/30 mb-4">
            Opção 2
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-secondary">Site Institucional</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            O cartão de visitas digital completo da sua empresa. Transmita credibilidade, apresente sua equipe e conquiste a confiança do cliente.
          </p>
        </FadeInUpWrapper>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Features */}
          <FadeInUpWrapper delay={0.1}>
            <div className="space-y-5 order-2 lg:order-1">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-lg glass-card border border-secondary/20 hover:border-secondary/50 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-full gradient-secondary flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-foreground" />
                    </div>
                    <p className="text-foreground font-medium">{feature.text}</p>
                  </div>
                );
              })}

              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold w-full mt-6 text-lg"
                onClick={() =>
                  window.open(
                    getWhatsAppLink("Olá! Gostaria de saber mais sobre criação de Site Institucional."),
                    "_blank"
                  )
                }
              >
                Quero meu Site Institucional
              </Button>
            </div>
          </FadeInUpWrapper>

          {/* Image Card */}
          <FadeInUpWrapper delay={0.2}>
            <Card className="overflow-hidden border-2 border-secondary/30 hover:border-secondary transition-all duration-500 group order-1 lg:order-2">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={institutionalExample}
                    alt="Exemplo de Site Institucional moderno"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-sm font-semibold text-secondary">Exemplo de Site Institucional</p>
                    <p className="text-xs text-muted-foreground">Presença digital completa e profissional</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeInUpWrapper>
        </div>
      </div>
    </section>
  );
};

export default WebDevInstitutional;
