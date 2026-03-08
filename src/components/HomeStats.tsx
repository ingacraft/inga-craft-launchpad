import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Award, TrendingUp, HeadsetIcon } from "lucide-react";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";

const stats = [
  {
    icon: Briefcase,
    number: "+50",
    label: "projetos entregues",
    color: "text-primary",
    borderClass: "rotating-border-blue",
  },
  {
    icon: Award,
    number: "100%",
    label: "de comprometimento com qualidade",
    color: "text-secondary",
    borderClass: "rotating-border-green",
  },
  {
    icon: TrendingUp,
    number: "3x",
    label: "mais resultados com tecnologia certa",
    color: "text-primary",
    borderClass: "rotating-border-blue",
  },
  {
    icon: HeadsetIcon,
    number: "24/7",
    label: "suporte e acompanhamento",
    color: "text-secondary",
    borderClass: "rotating-border-green",
  },
];

const HomeStats = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <FadeInUpWrapper key={stat.label} delay={index * 0.15}>
                <Card className={`glass-card text-center hover:scale-105 transition-all duration-300 ${stat.borderClass}`}>
                  <CardContent className="pt-8 pb-6">
                    <Icon className={`w-7 h-7 mx-auto mb-3 ${stat.color}`} />
                    <p className={`text-3xl md:text-4xl font-bold mb-1 ${stat.color}`}>
                      {stat.number}
                    </p>
                    <p className="text-xs md:text-sm text-muted-foreground leading-snug">
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

export default HomeStats;
