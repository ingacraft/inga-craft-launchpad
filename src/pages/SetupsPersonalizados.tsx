import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Monitor, Settings, Award, HeadphonesIcon, CheckCircle, MessageCircle, Lightbulb, Wrench, Package, Truck } from "lucide-react";

// Import setup images
import setupGamerPro from "@/assets/setup-gamer-pro.jpg";
import workstationCreative from "@/assets/workstation-creative.jpg";
import setupStreamer from "@/assets/setup-streamer.jpg";
import officePremium from "@/assets/office-premium.jpg";
import gamingCompact from "@/assets/gaming-compact.jpg";
import devStation from "@/assets/dev-station.jpg";
import cpuGamer from "@/assets/cpu-gamer.jpg";

const SetupsPersonalizados = () => {
  const benefits = [
    {
      icon: <Monitor className="w-8 h-8 text-primary" />,
      title: "Desempenho Máximo",
      description: "Configurações otimizadas para seu uso específico, garantindo a melhor performance possível."
    },
    {
      icon: <Settings className="w-8 h-8 text-primary" />,
      title: "Design Exclusivo",
      description: "Setup personalizado que reflete seu estilo e necessidades, desde estética até funcionalidade."
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8 text-primary" />,
      title: "Suporte Especializado",
      description: "Acompanhamento completo durante todo o processo e suporte técnico pós-entrega."
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Qualidade Garantida",
      description: "Produtos selecionados e montagem profissional com garantia de qualidade e durabilidade."
    }
  ];

  const portfolioItems = [
    { id: 1, title: "Setup Gamer Pro", description: "RTX 4090 + i9-13900K + RGB", image: setupGamerPro },
    { id: 2, title: "Workstation Creative", description: "Edição de vídeo 4K + Render 3D", image: workstationCreative },
    { id: 3, title: "Setup Streamer", description: "Dual PC + Captura + Audio Pro", image: setupStreamer },
    { id: 4, title: "Office Premium", description: "Produtividade + Multi-monitor", image: officePremium },
    { id: 5, title: "Gaming Compact", description: "Mini-ITX + Performance máxima", image: gamingCompact },
    { id: 6, title: "Dev Station", description: "Múltiplos ambientes + Docker", image: devStation }
  ];

  const processSteps = [
    {
      icon: <Lightbulb className="w-12 h-12 text-primary" />,
      title: "Briefing do Cliente",
      description: "Entendemos suas necessidades, orçamento e expectativas para criar a solução perfeita."
    },
    {
      icon: <Wrench className="w-12 h-12 text-primary" />,
      title: "Planejamento",
      description: "Selecionamos componentes, definimos layout e criamos o projeto detalhado do seu setup."
    },
    {
      icon: <Package className="w-12 h-12 text-primary" />,
      title: "Montagem",
      description: "Montagem profissional com testes rigorosos para garantir estabilidade e performance."
    },
    {
      icon: <Truck className="w-12 h-12 text-primary" />,
      title: "Entrega",
      description: "Instalação no local, configuração completa e treinamento para uso do seu novo setup."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center px-6 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${cpuGamer})` }}
        />
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Badge className="mb-6" variant="secondary">
            Setups Personalizados
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in text-white">
            Monte seu{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Setup dos Sonhos
            </span>{" "}
            com a <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">IngaCraft</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto animate-fade-in">
            Oferecemos setups personalizados, criados sob medida para o seu estilo e desempenho.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button variant="hero" size="lg" className="hover-scale">
              <MessageCircle className="w-5 h-5 mr-2" />
              Peça seu Orçamento
            </Button>
            <Button variant="glass" size="lg" className="hover-scale">
              Ver Portfólio
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6" id="beneficios">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Por que escolher a{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                IngaCraft
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Mais do que montar computadores, criamos experiências únicas que elevam sua produtividade e diversão
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="glass-card hover:scale-105 transition-smooth group">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center group-hover:scale-110 transition-smooth">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-24 px-6 bg-muted/50" id="portfolio">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Galeria de{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Setups
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Confira alguns dos projetos únicos que já entregamos para nossos clientes
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <Card key={item.id} className="glass-card group cursor-pointer hover:scale-105 transition-smooth overflow-hidden relative">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-200 text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 px-6" id="processo">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nosso{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Processo
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Um processo estruturado e transparente para garantir que seu setup seja exatamente como você sonhou
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto glass-card rounded-full flex items-center justify-center group-hover:scale-110 transition-smooth">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 gradient-hero">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              elevar seu setup?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Vamos conversar sobre seu projeto ideal. Nossa equipe está pronta para transformar suas ideias em realidade.
          </p>
          <Button variant="hero" size="lg" className="hover-scale">
            <MessageCircle className="w-5 h-5 mr-2" />
            Fale com a gente no WhatsApp
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SetupsPersonalizados;