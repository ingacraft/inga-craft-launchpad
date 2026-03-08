import { Card, CardContent } from "@/components/ui/card";
import { Search, Zap, Shield, Settings } from "lucide-react";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";

const advantages = [
  {
    icon: Search,
    title: "SEO Otimizado",
    items: ["Apareça no Google", "URLs amigáveis", "Meta tags automáticas"],
    borderClass: "rotating-border-blue",
  },
  {
    icon: Zap,
    title: "Velocidade",
    items: ["Carregamento rápido", "Experiência mobile", "Taxa de rejeição menor"],
    borderClass: "rotating-border-green",
  },
  {
    icon: Shield,
    title: "Segurança",
    items: ["Certificado SSL", "Proteção contra fraudes", "Dados dos clientes seguros"],
    borderClass: "rotating-border-blue",
  },
  {
    icon: Settings,
    title: "Gestão Simplificada",
    items: ["Painel administrativo", "Controle total", "Atualizações fáceis"],
    borderClass: "rotating-border-green",
  },
];

const EcommerceAdvantages = () => {
  return (
    <section className="py-24 px-6 bg-background/30">
      <div className="max-w-7xl mx-auto">
        <FadeInUpWrapper className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Vantagens <span className="gradient-text-primary">Competitivas</span>
          </h2>
        </FadeInUpWrapper>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((a, i) => {
            const Icon = a.icon;
            return (
              <FadeInUpWrapper key={a.title} delay={i * 0.1}>
                <Card className={`glass-card hover:scale-105 transition-all duration-300 h-full ${a.borderClass}`}>
                  <CardContent className="pt-8 pb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{a.title}</h3>
                    <ul className="space-y-2">
                      {a.items.map((item) => (
                        <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="text-secondary">✓</span>
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

export default EcommerceAdvantages;
