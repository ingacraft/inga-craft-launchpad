import ServiceHero from "@/components/service/ServiceHero";
import websiteOnScreen from "@/assets/website-on-screen.jpg";

const WebDevHero = () => (
  <ServiceHero
    eyebrow="Desenvolvimento web"
    title={
      <>
        Seu negócio merece <span className="text-coral">estar na internet.</span>
      </>
    }
    description="Criamos sites e landing pages que geram resultados reais: mais clientes, mais vendas e mais credibilidade para a sua marca."
    image={websiteOnScreen}
    imageAlt="Site responsivo exibido em uma tela"
    primaryLabel="Solicitar orçamento"
    whatsappMessage="Olá! Gostaria de solicitar um orçamento para desenvolvimento web."
    secondaryLabel="Conhecer benefícios"
    secondaryTarget="beneficios"
  />
);

export default WebDevHero;
