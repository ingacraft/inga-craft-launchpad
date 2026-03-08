import { Card, CardContent } from "@/components/ui/card";
import { Building2, Search, Clock, Award } from "lucide-react";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";

const stats = [
  {
    icon: Building2,
    number: "73%",
    label: "das empresas investem em site próprio",
    color: "text-secondary",
    borderClass: "rotating-border-green",
  },
  {
    icon: Search,
    number: "85%",
    label: "dos consumidores pesquisam online antes de comprar",
    color: "text-primary",
    borderClass: "rotating-border-blue",
  },
  {
    icon: Clock,
    number: "24/7",
    label: "seu negócio sempre aberto na internet",
    color: "text-secondary",
    borderClass: "rotating-border-green",
  },
  {
    icon: Award,
    number: "3x",
    label: "mais credibilidade com um site profissional",
    color: "text-primary",
    borderClass: "rotating-border-blue",
  },
];

const WebDevStats = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <FadeInUpWrapper className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text-primary">Números que comprovam:</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ter um site não é mais opcional — é essencial.
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

export default WebDevStats;
