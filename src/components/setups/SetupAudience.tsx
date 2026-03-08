import { Card, CardContent } from "@/components/ui/card";
import { Gamepad2, Briefcase, Palette, Video, Code2, Building2, Sofa } from "lucide-react";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";

const audiences = [
  { icon: Gamepad2, title: "Gamers", color: "text-secondary" },
  { icon: Briefcase, title: "Profissionais Home Office", color: "text-primary" },
  { icon: Palette, title: "Designers e Editores", color: "text-secondary" },
  { icon: Video, title: "Streamers e Criadores", color: "text-primary" },
  { icon: Code2, title: "Programadores", color: "text-secondary" },
  { icon: Building2, title: "Arquitetos e Engenheiros", color: "text-primary" },
  { icon: Sofa, title: "Quem quer conforto e estilo", color: "text-secondary" },
];

const SetupAudience = () => {
  return (
    <section className="py-24 px-6 bg-background/30">
      <div className="max-w-7xl mx-auto">
        <FadeInUpWrapper className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Para{" "}
            <span className="gradient-text-primary">quem é?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Nossos setups atendem diferentes perfis e necessidades
          </p>
        </FadeInUpWrapper>

        <div className="flex flex-wrap justify-center gap-4">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            const borderClass = index % 2 === 0 ? "rotating-border-blue" : "rotating-border-green";
            return (
              <FadeInUpWrapper key={audience.title} delay={index * 0.08}>
                <Card className={`glass-card hover:scale-105 transition-all duration-300 ${borderClass}`}>
                  <CardContent className="pt-6 pb-6 px-8 flex items-center gap-3">
                    <Icon className={`w-6 h-6 ${audience.color}`} />
                    <p className="text-sm font-semibold whitespace-nowrap">{audience.title}</p>
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

export default SetupAudience;
