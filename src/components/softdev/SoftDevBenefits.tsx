import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, BarChart3, ShieldCheck, TrendingUp } from "lucide-react";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";

const benefits = [
  {
    icon: Bot,
    title: "Automação de Processos",
    borderClass: "rotating-border-green",
    items: [
      "Elimine tarefas repetitivas",
      "Reduza erros humanos",
      "Aumente a eficiência da equipe",
    ],
  },
  {
    icon: BarChart3,
    title: "Dados em Tempo Real",
    borderClass: "rotating-border-blue",
    items: [
      "Relatórios automáticos",
      "Dashboard intuitivo",
      "Decisões baseadas em dados",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Segurança e Conformidade",
    borderClass: "rotating-border-green",
    items: [
      "Dados protegidos",
      "Backup automático",
      "Conformidade com LGPD",
    ],
  },
  {
    icon: TrendingUp,
    title: "Escalabilidade",
    borderClass: "rotating-border-blue",
    items: [
      "Cresça sem preocupações",
      "Adicione funcionalidades",
      "Integrações com outras ferramentas",
    ],
  },
];

const SoftDevBenefits = () => {
  return (
    <section className="py-24 px-6 bg-background/30">
      <div className="max-w-7xl mx-auto">
        <FadeInUpWrapper className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Por que ter um{" "}
            <span className="gradient-text-primary">Sistema Sob Medida?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Vantagens que transformam a operação do seu negócio
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

export default SoftDevBenefits;
