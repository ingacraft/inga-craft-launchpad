import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/config/site";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Images
import setupGamerPro from "@/assets/IMG-20251004-WA0097.jpg";
import workstationCreative from "@/assets/cpujapa.jpg";
import setupStreamer from "@/assets/IMG-20251004-WA0099.jpg";
import officePremium from "@/assets/IMG-20251004-WA0098.jpg";
import gamingCompact from "@/assets/cpujapaa.jpg";
import devStation from "@/assets/IMG-20251004-WA0096.jpg";
import cpuGamer from "@/assets/setup16.jpg";

// Section components
import SetupStats from "@/components/setups/SetupStats";
import SetupBenefits from "@/components/setups/SetupBenefits";
import SetupTypes from "@/components/setups/SetupTypes";
import SetupItems from "@/components/setups/SetupItems";
import SetupProcess from "@/components/setups/SetupProcess";
import SetupAudience from "@/components/setups/SetupAudience";
import SetupCTA from "@/components/setups/SetupCTA";

const portfolioItems = [
  { id: 1, image: setupGamerPro },
  { id: 2, image: workstationCreative },
  { id: 3, image: setupStreamer },
  { id: 4, image: officePremium },
  { id: 5, image: gamingCompact },
  { id: 6, image: devStation },
];

const SetupsPersonalizados = () => {
  return (
    <div className="min-h-screen pt-20">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center px-6 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-fixed opacity-60"
          style={{ backgroundImage: `url(${cpuGamer})` }}
        />
        <div className="absolute inset-0 gradient-hero opacity-50" />

        <FadeInUpWrapper className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Monte seu{" "}
            <span className="gradient-text-primary">Setup dos Sonhos</span>{" "}
            com a <span className="gradient-text-primary">IngaCraft</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Setups personalizados, ergonômicos e eficientes — criados sob medida para o seu estilo, conforto e desempenho.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="hero"
              size="lg"
              onClick={() =>
                window.open(
                  getWhatsAppLink("Olá! Gostaria de solicitar um orçamento para montagem de setup personalizado."),
                  "_blank"
                )
              }
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Peça seu Orçamento
            </Button>
            <Button
              variant="glass"
              size="lg"
              onClick={() => document.getElementById("stats")?.scrollIntoView({ behavior: "smooth" })}
            >
              Ver Benefícios
            </Button>
          </div>
        </FadeInUpWrapper>
      </section>

      {/* Stats */}
      <div id="stats">
        <SetupStats />
      </div>

      {/* Benefits */}
      <SetupBenefits />

      {/* Setup Types */}
      <SetupTypes />

      {/* Gallery */}
      <section className="py-24 px-6 bg-background/30" id="portfolio">
        <div className="max-w-7xl mx-auto">
          <FadeInUpWrapper className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Galeria de{" "}
              <span className="gradient-text-primary">Setups</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Confira alguns dos projetos únicos que já entregamos
            </p>
          </FadeInUpWrapper>

          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[Autoplay({ delay: 3000, stopOnInteraction: false })]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {portfolioItems.map((item) => (
                <CarouselItem key={item.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="glass-card border-0 shadow-lg overflow-hidden">
                    <div className="relative h-[500px] w-full flex items-center justify-center bg-background/50">
                      <img
                        src={item.image}
                        alt="Setup personalizado"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* Items */}
      <SetupItems />

      {/* Process */}
      <SetupProcess />

      {/* Audience */}
      <SetupAudience />

      {/* CTA */}
      <SetupCTA />

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default SetupsPersonalizados;
