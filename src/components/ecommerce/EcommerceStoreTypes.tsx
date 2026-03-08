import { Card, CardContent } from "@/components/ui/card";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";
import modaImg from "@/assets/ecommerce-moda.jpg";
import digitalImg from "@/assets/ecommerce-digital.jpg";
import mercadoImg from "@/assets/ecommerce-mercado.jpg";
import servicosImg from "@/assets/ecommerce-servicos.jpg";

const storeTypes = [
  {
    title: "Loja de Moda e Vestuário 👕",
    items: ["Vitrine de produtos", "Filtros por tamanho/cor", "Avaliações de clientes"],
    image: modaImg,
    borderClass: "rotating-border-blue",
  },
  {
    title: "Loja de Produtos Digitais 📱",
    items: ["Entrega automática", "Downloads seguros", "Acesso vitalício"],
    image: digitalImg,
    borderClass: "rotating-border-green",
  },
  {
    title: "Mercado e Supermercado 🛒",
    items: ["Categorias complexas", "Carrinho inteligente", "Retirada/entrega"],
    image: mercadoImg,
    borderClass: "rotating-border-blue",
  },
  {
    title: "Loja de Serviços 📅",
    items: ["Agendamento online", "Pagamento recorrente", "Área do cliente"],
    image: servicosImg,
    borderClass: "rotating-border-green",
  },
];

const EcommerceStoreTypes = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <FadeInUpWrapper className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Tipos de <span className="gradient-text-primary">Loja Virtual</span>
          </h2>
          <p className="text-lg text-muted-foreground">Criamos lojas para qualquer segmento</p>
        </FadeInUpWrapper>

        <div className="grid md:grid-cols-2 gap-8">
          {storeTypes.map((store, i) => (
            <FadeInUpWrapper key={store.title} delay={i * 0.1}>
              <Card className={`glass-card overflow-hidden hover:scale-[1.02] transition-all duration-300 ${store.borderClass}`}>
                <div className="h-48 overflow-hidden">
                  <img src={store.image} alt={store.title} className="w-full h-full object-cover" />
                </div>
                <CardContent className="pt-6 pb-6">
                  <h3 className="text-xl font-bold mb-3">{store.title}</h3>
                  <ul className="space-y-2">
                    {store.items.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="text-secondary">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </FadeInUpWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcommerceStoreTypes;
