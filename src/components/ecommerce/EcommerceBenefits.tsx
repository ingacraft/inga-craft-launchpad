import { Card, CardContent } from "@/components/ui/card";
import { Clock, Globe, Wallet, BarChart3 } from "lucide-react";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";

const benefits = [
  {
    icon: Clock,
    title: "Venda 24/7",
    items: ["Sua loja nunca fecha", "Vendas mesmo enquanto você dorme", "Alcance clientes em qualquer horário"],
    borderClass: "rotating-border-blue",
  },
  {
    icon: Globe,
    title: "Alcance Nacional",
    items: ["Venda para todo Brasil", "Sem limites geográficos", "Expanda seus negócios"],
    borderClass: "rotating-border-green",
  },
  {
    icon: Wallet,
    title: "Menor Custo",
    items: ["Sem aluguel de ponto físico", "Equipe reduzida", "Escalável"],
    borderClass: "rotating-border-blue",
  },
  {
    icon: BarChart3,
    title: "Dados e Métricas",
    items: ["Saiba o que vende mais", "Conheça seu cliente", "Otimize suas vendas"],
    borderClass: "rotating-border-green",
  },
];

const EcommerceBenefits = () => {
  return (
    <section className="py-24 px-6 bg-background/30">
      <div className="max-w-7xl mx-auto">
        <FadeInUpWrapper className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Por que ter uma{" "}
            <span className="gradient-text-primary">Loja Virtual</span>?
          </h2>
        </FadeInUpWrapper>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <FadeInUpWrapper key={b.title} delay={i * 0.1}>
                <Card className={`glass-card hover:scale-105 transition-all duration-300 h-full ${b.borderClass}`}>
                  <CardContent className="pt-8 pb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{b.title}</h3>
                    <ul className="space-y-2">
                      {b.items.map((item) => (
                        <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-0.5">•</span>
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

export default EcommerceBenefits;
