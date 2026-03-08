import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, DollarSign, Search, Clock, Smartphone, ShoppingCart } from "lucide-react";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";

const stats = [
  { icon: TrendingUp, number: "+30%", label: "de aumento em vendas com loja virtual", color: "text-primary", borderClass: "rotating-border-blue" },
  { icon: DollarSign, number: "R$ 2,68 bi", label: "faturamento do e-commerce brasileiro", color: "text-secondary", borderClass: "rotating-border-green" },
  { icon: Search, number: "87%", label: "dos consumidores pesquisam online antes de comprar", color: "text-primary", borderClass: "rotating-border-blue" },
  { icon: Clock, number: "24/7", label: "sua loja sempre aberta", color: "text-secondary", borderClass: "rotating-border-green" },
  { icon: Smartphone, number: "60%", label: "das compras são feitas pelo celular", color: "text-primary", borderClass: "rotating-border-blue" },
  { icon: ShoppingCart, number: "+40%", label: "de conversão com checkout otimizado", color: "text-secondary", borderClass: "rotating-border-green" },
];

const EcommerceStats = () => {
  return (
    <section id="stats" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <FadeInUpWrapper className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            O <span className="gradient-text-primary">E-commerce</span> em números
          </h2>
          <p className="text-lg text-muted-foreground">
            Dados que mostram o potencial das vendas online
          </p>
        </FadeInUpWrapper>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <FadeInUpWrapper key={stat.number} delay={index * 0.1}>
                <Card className={`glass-card text-center hover:scale-105 transition-all duration-300 ${stat.borderClass}`}>
                  <CardContent className="pt-8 pb-6">
                    <Icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                    <p className={`text-3xl md:text-4xl font-bold mb-2 ${stat.color}`}>{stat.number}</p>
                    <p className="text-sm text-muted-foreground leading-snug">{stat.label}</p>
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

export default EcommerceStats;
