import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, TrendingUp, Shield } from "lucide-react";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";

const benefits = [
  {
    icon: Globe,
    title: "Alcance mais clientes",
    description:
      "Apareça no Google, compartilhe nas redes sociais e seja encontrado por quem realmente precisa dos seus serviços. Um site amplia seu alcance muito além do boca a boca.",
    border: "border-primary/40 hover:border-primary",
    iconBg: "gradient-primary",
  },
  {
    icon: TrendingUp,
    title: "Aumente suas vendas",
    description:
      "Capte leads qualificados, venda seus produtos e serviços 24 horas por dia. Um site bem estruturado transforma visitantes em clientes de forma automática.",
    border: "border-secondary/40 hover:border-secondary",
    iconBg: "gradient-secondary",
  },
  {
    icon: Shield,
    title: "Credibilidade profissional",
    description:
      "Transmita confiança com uma presença digital de qualidade. Mostre seu portfólio, depoimentos e diferenciais. Quem tem site profissional vende mais.",
    border: "border-primary/40 hover:border-primary",
    iconBg: "gradient-primary",
  },
];

const WebDevBenefits = () => {
  return (
    <section className="py-24 px-6 bg-background/50" id="beneficios">
      <div className="max-w-7xl mx-auto">
        <FadeInUpWrapper className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Por que ter um{" "}
            <span className="gradient-text-secondary">site profissional?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No mundo atual, quem não está na internet perde clientes todos os dias.
          </p>
        </FadeInUpWrapper>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <FadeInUpWrapper key={benefit.title} delay={index * 0.2}>
                <Card
                  className={`glass-card border-2 ${benefit.border} hover:scale-105 transition-all duration-500 h-full`}
                >
                  <CardHeader className="text-center pb-2">
                    <div
                      className={`w-16 h-16 mx-auto rounded-full ${benefit.iconBg} flex items-center justify-center mb-4 shadow-glow`}
                    >
                      <Icon className="w-8 h-8 text-foreground" />
                    </div>
                    <CardTitle className="text-xl font-bold">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
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

export default WebDevBenefits;
