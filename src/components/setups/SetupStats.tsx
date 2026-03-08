import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Server, Eye, Clock } from "lucide-react";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";

const stats = [
  {
    icon: TrendingUp,
    number: "+30%",
    label: "de produtividade com setup ergonômico",
    color: "text-secondary",
    borderClass: "rotating-border-green",
  },
  {
    icon: Server,
    number: "56%",
    label: "menos dores nas costas com cadeira adequada",
    color: "text-primary",
    borderClass: "rotating-border-blue",
  },
  {
    icon: Eye,
    number: "42%",
    label: "redução de fadiga visual com monitores corretos",
    color: "text-secondary",
    borderClass: "rotating-border-green",
  },
  {
    icon: Clock,
    number: "8h",
    label: "por dia em média as pessoas passam no computador",
    color: "text-primary",
    borderClass: "rotating-border-blue",
  },
];

const SetupStats = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <FadeInUpWrapper className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text-primary">Números que importam:</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Um bom setup vai muito além da estética — é saúde e produtividade.
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

export default SetupStats;
