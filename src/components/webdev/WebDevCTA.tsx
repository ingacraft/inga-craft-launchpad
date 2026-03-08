import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/config/site";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";

const WebDevCTA = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <FadeInUpWrapper>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Pronto para{" "}
            <span className="gradient-text-primary">levar seu negócio</span>{" "}
            para o digital?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Fale com a nossa equipe, conte sobre o seu projeto e receba uma proposta personalizada. Sem compromisso.
          </p>
          <Button
            size="lg"
            className="gradient-primary text-foreground font-semibold px-10 py-4 text-lg"
            onClick={() =>
              window.open(
                getWhatsAppLink("Olá! Gostaria de solicitar um orçamento para desenvolvimento web."),
                "_blank"
              )
            }
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Falar com um Especialista
          </Button>
        </FadeInUpWrapper>
      </div>
    </section>
  );
};

export default WebDevCTA;
