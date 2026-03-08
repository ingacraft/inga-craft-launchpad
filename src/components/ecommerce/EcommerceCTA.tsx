import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import { getWhatsAppLink } from "@/config/site";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";

const EcommerceCTA = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <FadeInUpWrapper>
          <Card className="glass-card border-primary/20 shadow-glow overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
            <CardContent className="pt-12 pb-12 relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="gradient-text-primary">
                  Pronto para vender online?
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Entre em contato e vamos criar a loja virtual ideal para o seu negócio
              </p>
              <Button
                size="lg"
                className="gradient-primary text-primary-foreground font-semibold px-12 py-6 text-lg hover:scale-105 transition-transform"
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
            </CardContent>
          </Card>
        </FadeInUpWrapper>
      </div>
    </section>
  );
};

export default EcommerceCTA;
