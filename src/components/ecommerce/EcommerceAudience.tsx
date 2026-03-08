import { Card, CardContent } from "@/components/ui/card";
import { Store, Lightbulb, Factory, Truck, User, ShoppingBag } from "lucide-react";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";

const audiences = [
  { icon: Store, title: "Lojas físicas que querem vender online" },
  { icon: Lightbulb, title: "Empreendedores digitais" },
  { icon: Factory, title: "Produtores e fabricantes" },
  { icon: Truck, title: "Distribuidores e atacados" },
  { icon: User, title: "Profissionais autônomos" },
  { icon: ShoppingBag, title: "Quem quer começar a vender" },
];

const EcommerceAudience = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <FadeInUpWrapper className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Para <span className="gradient-text-primary">quem</span> é?
          </h2>
        </FadeInUpWrapper>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {audiences.map((a, i) => {
            const Icon = a.icon;
            const borderClass = i % 2 === 0 ? "rotating-border-blue" : "rotating-border-green";
            return (
              <FadeInUpWrapper key={a.title} delay={i * 0.1}>
                <Card className={`glass-card text-center hover:scale-105 transition-all duration-300 ${borderClass}`}>
                  <CardContent className="pt-6 pb-6">
                    <Icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                    <p className="font-medium text-sm">{a.title}</p>
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

export default EcommerceAudience;
