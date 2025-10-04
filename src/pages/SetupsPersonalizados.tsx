import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Monitor, Settings, Award, HeadphonesIcon, CheckCircle, MessageCircle, Lightbulb, Wrench, Package, Truck, Briefcase, Gamepad2, Palette } from "lucide-react";
import { siteConfig, getWhatsAppLink } from "@/config/site";

// Import setup images
import setupGamerPro from "@/assets/IMG-20251004-WA0097.jpg";
import workstationCreative from "@/assets/cpujapa.jpg";
import setupStreamer from "@/assets/IMG-20251004-WA0099.jpg";
import officePremium from "@/assets/IMG-20251004-WA0098.jpg";
import gamingCompact from "@/assets/cpujapaa.jpg";
import devStation from "@/assets/IMG-20251004-WA0096.jpg";
import cpuGamer from "@/assets/setup16.jpg";

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
    { id: 1, title: "", description: "", image: setupGamerPro },
    { id: 2, title: "", description: "", image: workstationCreative },
    { id: 3, title: "", description: "", image: setupStreamer },
    { id: 4, title: "", description: "", image: officePremium },
    { id: 5, title: "", description: "", image: gamingCompact },
    { id: 6, title: "", description: "", image: devStation }
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
    <div className="min-h-screen pt-20">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center px-6 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${cpuGamer})` }}
        />
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          
          
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
            <Button variant="glass" size="lg" className="hover-scale" onClick={() => window.location.href = '/portfolio'}>
              Ver Portfólio
            </Button>
          </div>
        </div>
      </section>

      {/* Why Upgrade Section */}
      <section className="py-24 px-6 gradient-card">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Seu computador deve ser seu{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                maior aliado
              </span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Quando você melhora seu PC ou investe em um setup de alto desempenho, você ganha muito mais do que velocidade: 
              você conquista <strong className="text-foreground">produtividade, qualidade de vida e resultados melhores</strong>.
            </p>
          </div>

          {/* Benefits Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Para quem trabalha */}
            <Card className="group glass-card hover:scale-105 transition-all duration-500 relative overflow-hidden border-0 shadow-lg hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <CardContent className="p-8 relative z-10">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 mb-4">
                    <Briefcase className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    Para quem trabalha
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  Um computador lento custa <strong>tempo e dinheiro</strong>. Cada travada, cada espera, é produtividade perdida. 
                  Com um setup otimizado, você executa tarefas mais rápido, edita vídeos com fluidez, roda softwares pesados sem dor 
                  de cabeça e aumenta a eficiência no seu dia a dia.
                </p>
              </CardContent>
            </Card>

            {/* Para quem joga */}
            <Card className="group glass-card hover:scale-105 transition-all duration-500 relative overflow-hidden border-0 shadow-lg hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <CardContent className="p-8 relative z-10">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 mb-4">
                    <Gamepad2 className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    Para quem joga
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  Um bom setup é a diferença entre jogar no <strong>"modo sobrevivência"</strong> ou ter uma experiência imersiva 
                  e competitiva. Mais FPS, gráficos no máximo, resposta instantânea e aquela vantagem extra nas partidas.
                </p>
              </CardContent>
            </Card>

            {/* Para quem cria */}
            <Card className="group glass-card hover:scale-105 transition-all duration-500 relative overflow-hidden border-0 shadow-lg hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <CardContent className="p-8 relative z-10">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 mb-4">
                    <Palette className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    Para quem cria
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  Designers, programadores, arquitetos e criadores de conteúdo sabem: <strong>potência é liberdade criativa</strong>. 
                  Um computador forte abre portas para projetos maiores, softwares avançados e entregas profissionais sem limitações.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Bottom CTA Section */}
          <div className="glass-card p-8 md:p-12 text-center max-w-4xl mx-auto">
            <div className="space-y-6">
              <p className="text-xl md:text-2xl font-bold text-foreground">
                💡 Melhorar seu PC não é gasto, é <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">investimento</span> em performance, 
                produtividade e diversão.
              </p>
              
              <p className="text-lg text-muted-foreground">
                Enquanto um computador comum te limita, um setup de alto desempenho <strong className="text-foreground">expande suas possibilidades</strong>.
              </p>
              
              <div className="pt-4">
                <p className="text-xl font-semibold text-foreground mb-6">
                  A pergunta não é se você deve melhorar, mas <span className="text-primary">quando</span>. 
                  E quanto antes, mais rápido você vai sentir a diferença.
                </p>
                
                <Button 
                  variant="hero" 
                  size="lg" 
                  onClick={() => window.open('https://wa.me/5544999999999', '_blank')}
                  className="hover-scale"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Entre em Contato
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Portfolio Gallery */}
      <section className="py-24 px-6 gradient-card" id="portfolio">
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
          
          <div className="grid md:grid-cols-3 lg:grid-cols-2 gap-8">
            {portfolioItems.map((item) => (
              <Card key={item.id} className="group glass-card cursor-pointer hover:scale-101 transition-all duration-500 relative border-0 shadow-lg hover:shadow-2xl">
                {/* Animated border */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary p-[1px] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-full h-full bg-background rounded-lg" />
                </div>
                
                <div className="aspect-video relative overflow-hidden h-96">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Enhanced overlay with better positioning */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="text-gray-200 text-sm">{item.description}</p>
                      
                      {/* View button */}
                      <div className="flex items-center gap-2 text-accent mt-3 group-hover:text-white transition-colors duration-300">
                        <Monitor className="w-4 h-4" />
                        <span className="text-sm font-medium">Ver Detalhes</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Corner accent */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                </div>
              </Card>
            ))}
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
              <Card key={index} className="group glass-card hover:scale-105 transition-all duration-500 relative overflow-hidden border-0 shadow-lg hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardContent className="p-8 text-center relative z-10">
                  <div className="mb-6 flex justify-center">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 group-hover:shadow-lg">
                        {benefit.icon}
                      </div>
                      <div className="absolute inset-0 rounded-full border-2 border-primary/30 scale-0 group-hover:scale-150 opacity-100 group-hover:opacity-0 transition-all duration-700" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {benefit.description}
                  </p>
                </CardContent>
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
      <WhatsAppButton />
    </div>
  );
};

export default SetupsPersonalizados;