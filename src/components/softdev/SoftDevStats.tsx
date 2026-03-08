import { Card, CardContent } from "@/components/ui/card";
import { Zap, Server, ShieldCheck, Gauge } from "lucide-react";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";

const stats = [
  {
    icon: Zap,
    number: "+40%",
    label: "de produtividade com sistemas automatizados",
    color: "text-secondary",
    borderClass: "rotating-border-green",
  },
  {
    icon: Server,
    number: "99.9%",
    label: "de disponibilidade (uptime)",
    color: "text-primary",
    borderClass: "rotating-border-blue",
  },
  {
    icon: ShieldCheck,
    number: "60%",
    label: "redução em erros manuais",
    color: "text-secondary",
    borderClass: "rotating-border-green",
  },
  {
    icon: Gauge,
    number: "3x",
    label: "mais rápido na execução de tarefas",
    color: "text-primary",
    borderClass: "rotating-border-blue",
  },
];

const SoftDevStats = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <FadeInUpWrapper className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text-primary">Números que comprovam:</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Sistemas sob medida geram resultados reais para o seu negócio.
          </p>
        </FadeInUpWrapper>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <FadeInUpWrapper key={stat.number} delay={index * 0.15}>
                <Card className={`glass-card text-center hover:scale-105 transition-all duration-300 ${stat.borderClass}`}>
                  <CardContent className="pt-8 pb-6">
                    <Icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                    <p className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color}`}>
                      {stat.number}
                    </p>
                    <p className="text-sm text-muted-foreground leading-snug">
                      {stat.label}
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

export default SoftDevStats;
