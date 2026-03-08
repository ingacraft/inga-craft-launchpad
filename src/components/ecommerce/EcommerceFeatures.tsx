import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";

const features = [
  "Catálogo de produtos completo",
  "Carrinho de compras",
  "Checkout seguro",
  "Múltiplas formas de pagamento",
  "Cálculo de frete automático",
  "Gestão de estoque",
  "Emissão de notas fiscais",
  "Cupons e promoções",
  "Avaliações de clientes",
  "Páginas de categorias",
  "Busca avançada",
  "Filtros por atributos",
];

const EcommerceFeatures = () => {
  return (
    <section className="py-24 px-6 bg-background/30">
      <div className="max-w-7xl mx-auto">
        <FadeInUpWrapper className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Funcionalidades{" "}
            <span className="gradient-text-primary">Essenciais</span>
          </h2>
        </FadeInUpWrapper>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {features.map((feat, i) => (
            <FadeInUpWrapper key={feat} delay={i * 0.05}>
              <Card className={`glass-card hover:scale-105 transition-all duration-300 ${i % 2 === 0 ? "rotating-border-blue" : "rotating-border-green"}`}>
                <CardContent className="py-5 px-4 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm font-medium">{feat}</span>
                </CardContent>
              </Card>
            </FadeInUpWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcommerceFeatures;
