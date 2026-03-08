import { Card, CardContent } from "@/components/ui/card";
import { Ruler, Armchair, Monitor, Cpu, Keyboard, Lightbulb, Cable, Grip, Mouse, Paintbrush } from "lucide-react";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";

const items = [
  { icon: Ruler, title: "Mesas (tamanho, altura, formato)" },
  { icon: Armchair, title: "Cadeiras ergonômicas" },
  { icon: Monitor, title: "Monitores (quantidade, tamanho)" },
  { icon: Cpu, title: "Computadores sob medida" },
  { icon: Keyboard, title: "Periféricos (teclado, mouse, headset)" },
  { icon: Lightbulb, title: "Iluminação (RGB, luz de preenchimento)" },
  { icon: Cable, title: "Organização de cabos" },
  { icon: Grip, title: "Suportes e braços articulados" },
  { icon: Mouse, title: "Acessórios ergonômicos" },
  { icon: Paintbrush, title: "Decoração personalizada" },
];

const SetupItems = () => {
  return (
    <section className="py-24 px-6 bg-background/30">
      <div className="max-w-7xl mx-auto">
        <FadeInUpWrapper className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Itens que{" "}
            <span className="gradient-text-primary">Personalizamos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Cada detalhe pensado para o seu conforto e produtividade
          </p>
        </FadeInUpWrapper>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {items.map((item, index) => {
            const Icon = item.icon;
            const borderClass = index % 2 === 0 ? "rotating-border-blue" : "rotating-border-green";
            return (
              <FadeInUpWrapper key={item.title} delay={index * 0.05}>
                <Card className={`glass-card hover:scale-105 transition-all duration-300 ${borderClass}`}>
                  <CardContent className="pt-6 pb-6 flex flex-col items-center text-center gap-3">
                    <Icon className="w-7 h-7 text-primary" />
                    <p className="text-xs md:text-sm font-medium leading-tight">{item.title}</p>
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

export default SetupItems;
