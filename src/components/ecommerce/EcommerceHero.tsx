import ServiceHero from "@/components/service/ServiceHero";
import heroImg from "@/assets/ecommerce-hero.jpg";

const EcommerceHero = () => (
  <ServiceHero
    eyebrow="E-commerce"
    title={
      <>
        Sua <span className="text-coral">loja virtual</span> começa aqui.
      </>
    }
    description="Venda 24 horas por dia, 7 dias por semana. Alcance clientes em todo o Brasil com uma loja virtual profissional e segura."
    image={heroImg}
    imageAlt="Loja virtual exibida em diferentes dispositivos"
    primaryLabel="Quero minha loja virtual"
    whatsappMessage="Olá! Gostaria de criar minha loja virtual com a IngaCraft."
    secondaryLabel="Ver vantagens"
    secondaryTarget="stats"
  />
);

export default EcommerceHero;
