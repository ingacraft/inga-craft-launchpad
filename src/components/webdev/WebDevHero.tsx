import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/config/site";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";
import websiteOnScreen from "@/assets/website-on-screen.jpg";

const WebDevHero = () => {
  return (
    <section className="relative h-[85vh] flex items-center justify-center px-6 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-fixed opacity-60"
        style={{ backgroundImage: `url(${websiteOnScreen})` }}
      />
      <div className="absolute inset-0 gradient-hero opacity-70" />
      <FadeInUpWrapper className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text-primary">Seu negócio merece</span>
            <br />
            <span className="text-foreground">estar na internet</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Criamos sites e landing pages que geram resultados reais: mais clientes, mais vendas e mais credibilidade para a sua marca.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="gradient-primary text-foreground font-semibold px-8 py-3 text-lg"
              onClick={() =>
                window.open(
                  getWhatsAppLink("Olá! Gostaria de solicitar um orçamento para desenvolvimento web."),
                  "_blank"
                )
              }
            >
              Solicitar Orçamento
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-semibold px-8 py-3 text-lg"
              onClick={() => document.getElementById("beneficios")?.scrollIntoView({ behavior: "smooth" })}
            >
              Conhecer Benefícios
            </Button>
          </div>
        </div>
      </FadeInUpWrapper>
    </section>
  );
};

export default WebDevHero;
