import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowDown } from "lucide-react";
import { getWhatsAppLink } from "@/config/site";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";
import heroImg from "@/assets/ecommerce-hero.jpg";

const EcommerceHero = () => {
  return (
    <section className="relative h-[85vh] flex items-center justify-center px-6 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-fixed opacity-40"
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      <div className="absolute inset-0 gradient-hero opacity-60" />

      <FadeInUpWrapper className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          Sua <span className="gradient-text-primary">Loja Virtual</span>{" "}
          começa aqui
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Venda 24 horas por dia, 7 dias por semana. Alcance clientes em todo o Brasil com uma loja virtual profissional e segura.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="hero"
            size="lg"
            onClick={() =>
              window.open(
                getWhatsAppLink("Olá! Gostaria de criar minha loja virtual com a IngaCraft."),
                "_blank"
              )
            }
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            Quero minha loja virtual
          </Button>
          <Button
            variant="glass"
            size="lg"
            onClick={() => document.getElementById("stats")?.scrollIntoView({ behavior: "smooth" })}
          >
            <ArrowDown className="w-5 h-5 mr-2" />
            Ver Vantagens
          </Button>
        </div>
      </FadeInUpWrapper>
    </section>
  );
};

export default EcommerceHero;
