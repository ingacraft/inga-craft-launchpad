import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Armchair, Zap, Sparkles, Rocket } from "lucide-react";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";

const benefits = [
  {
    icon: Armchair,
    title: "Ergonomia e Saúde",
    borderClass: "rotating-border-green",
    items: [
      "Prevenção de lesões",
      "Postura correta",
      "Mais conforto no dia a dia",
    ],
  },
  {
    icon: Zap,
    title: "Produtividade",
    borderClass: "rotating-border-blue",
    items: [
      "Tudo ao seu alcance",
      "Menos interrupções",
      "Fluxo de trabalho otimizado",
    ],
  },
  {
    icon: Sparkles,
    title: "Estética e Organização",
    borderClass: "rotating-border-green",
    items: [
      "Ambiente agradável",
      "Cabos organizados",
      "Identidade visual personalizada",
    ],
  },
  {
    icon: Rocket,
    title: "Performance",
    borderClass: "rotating-border-blue",
    items: [
      "Hardware adequado",
      "Sem gargalos",
      "Roda tudo que precisa",
    ],
  },
];

const SetupBenefits = () => {
  return (
    <section className="py-24 px-6 bg-background/30">
      <div className="max-w-7xl mx-auto">
        <FadeInUpWrapper className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Por que ter um{" "}
            <span className="gradient-text-primary">Setup Personalizado?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Vantagens que transformam sua experiência no computador
          </p>
        </FadeInUpWrapper>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <FadeInUpWrapper key={benefit.title} delay={index * 0.1}>
                <Card className={`glass-card hover:scale-105 transition-all duration-300 h-full ${benefit.borderClass}`}>
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {benefit.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </FadeInUpWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SetupBenefits;
