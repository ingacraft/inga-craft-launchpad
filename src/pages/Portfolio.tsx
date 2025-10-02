import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Cpu, GraduationCap, Zap, Shield, Wrench, Target } from "lucide-react";
import heroTechSetup from "@/assets/hero-tech-setup.jpg";
import devStation from "@/assets/dev-station.jpg";
import setupGamerPro from "@/assets/setup-gamer-pro.jpg";
import programmingCourse from "@/assets/programming-course.jpg";
import codeBackground from "@/assets/code-background.jpg";
import gamingCompact from "@/assets/cpujapa.jpg";
import workstationCreative from "@/assets/cpujapa.jpg";

const Portfolio = () => {
  const services = [
    {
      icon: Code,
      title: "Desenvolvimento Web",
      description: "Criamos sites modernos, rápidos e responsivos, aplicando boas práticas e otimizações que garantem a melhor experiência para seus usuários. Do design ao deploy, cuidamos de cada detalhe.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Cpu,
      title: "Setups Personalizados",
      description: "Montamos, otimizamos e fazemos manutenção em computadores para todas as necessidades. Desde máquinas de uso diário até PCs gamers potentes e de alto desempenho, você terá um setup confiável e sob medida.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: GraduationCap,
      title: "Cursos",
      description: "Aprenda tecnologia de forma prática! Do básico ao avançado, oferecemos cursos de Git, GitHub, HTML, CSS, JavaScript, Deploy e manutenção de PCs. Ganhe confiança e habilidades para o mercado.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Rapidez",
      description: "Entrega ágil sem perder qualidade.",
      color: "text-yellow-500"
    },
    {
      icon: Shield,
      title: "Segurança",
      description: "Processos confiáveis e soluções seguras.",
      color: "text-green-500"
    },
    {
      icon: GraduationCap,
      title: "Aprendizado prático",
      description: "Cursos feitos para colocar a mão na massa.",
      color: "text-blue-500"
    },
    {
      icon: Target,
      title: "Personalização",
      description: "Serviços ajustados às suas necessidades.",
      color: "text-purple-500"
    }
  ];

  const gallery = [
    { image: codeBackground, title: "Desenvolvimento Web", category: "Web" },
    { image: setupGamerPro, title: "Setup Gamer Pro", category: "Hardware" },
    { image: programmingCourse, title: "Curso de Programação", category: "Educação" },
    { image: devStation, title: "Workstation Dev", category: "Hardware" },
    { image: gamingCompact, title: "PC Gaming", category: "Hardware" },
    { image: workstationCreative, title: "Setup Criativo", category: "Hardware" }
  ];

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5551999999999", "_blank");
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center px-6 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroTechSetup})` }}
        />
        <div className="absolute inset-0 gradient-dark opacity-70" />
        
        <div className="relative z-10 text-center max-w-5xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Transformamos Ideias em <span className="gradient-text-primary">Resultados</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-200 max-w-3xl mx-auto">
            Do desenvolvimento de sites modernos à criação de setups personalizados e cursos práticos de tecnologia — tudo em um só lugar.
          </p>
          <Button 
            variant="hero" 
            size="lg" 
            className="text-lg px-10 py-6 h-auto"
            onClick={handleWhatsAppClick}
          >
            Fale Conosco no WhatsApp
          </Button>
        </div>
      </section>

      {/* Services Section - Desenvolvimento Web */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-background/50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 p-4 shadow-lg">
                  <Code className="w-full h-full text-white" />
                </div>
                <h2 className="text-4xl font-bold gradient-text-primary">Desenvolvimento Web</h2>
              </div>
              <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                <p>
                  Transformamos suas ideias em experiências digitais memoráveis. Nossa equipe especializada cria sites modernos, rápidos e totalmente responsivos, garantindo que seu projeto se destaque no ambiente digital.
                </p>
                <p>
                  Utilizamos as tecnologias mais atuais do mercado, incluindo React, TypeScript e Tailwind CSS, para desenvolver interfaces elegantes e funcionais. Cada linha de código é escrita seguindo as melhores práticas da indústria.
                </p>
                <p>
                  Do conceito inicial ao deploy final, cuidamos de cada etapa do processo: design responsivo, otimização de performance, SEO, segurança e integração com APIs. Seu site estará pronto para escalar e crescer junto com seu negócio.
                </p>
                <p>
                  Oferecemos suporte contínuo, manutenção e atualizações, garantindo que sua presença online esteja sempre alinhada com as últimas tendências e necessidades do mercado.
                </p>
              </div>
            </div>

            {/* Gallery 2x2 */}
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img src={codeBackground} alt="Código de programação" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img src={devStation} alt="Estação de desenvolvimento" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img src={programmingCourse} alt="Desenvolvimento web" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img src={workstationCreative} alt="Workspace criativo" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Setups Personalizados */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Gallery 2x2 - Left side */}
            <div className="grid grid-cols-2 gap-4 order-2 lg:order-1">
              <div className="aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img src={setupGamerPro} alt="Setup Gamer Profissional" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img src={gamingCompact} alt="PC Gaming Compacto" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img src={heroTechSetup} alt="Setup tecnológico" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img src={devStation} alt="Workstation premium" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
            </div>

            {/* Content - Right side */}
            <div className="space-y-6 order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-4 shadow-lg">
                  <Cpu className="w-full h-full text-white" />
                </div>
                <h2 className="text-4xl font-bold gradient-text-secondary">Setups Personalizados</h2>
              </div>
              <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                <p>
                  Montamos computadores sob medida para atender todas as suas necessidades, desde uso básico até estações de trabalho de alto desempenho e PCs gamers potentes. Cada componente é cuidadosamente selecionado para garantir máxima eficiência.
                </p>
                <p>
                  Nossa expertise abrange desde a escolha dos processadores mais adequados, placas de vídeo de última geração, sistemas de refrigeração eficientes, até configurações RGB personalizadas que dão vida ao seu setup dos sonhos.
                </p>
                <p>
                  Oferecemos consultoria completa para otimização de hardware existente, upgrades estratégicos e manutenção preventiva. Avaliamos seu uso e orçamento para recomendar as melhores soluções custo-benefício do mercado.
                </p>
                <p>
                  Realizamos testes rigorosos de estabilidade, ajustes finos de BIOS, instalação de sistema operacional otimizado e garantimos que seu equipamento esteja entregando o máximo de performance. Suporte técnico completo incluído.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Cursos */}
      <section className="py-24 px-6 bg-gradient-to-b from-background/50 to-background">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-red-500 p-4 shadow-lg">
                  <GraduationCap className="w-full h-full text-white" />
                </div>
                <h2 className="text-4xl font-bold gradient-text-primary">Cursos de Tecnologia</h2>
              </div>
              <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                <p>
                  Aprenda tecnologia de forma prática e objetiva! Nossos cursos são desenvolvidos para quem quer realmente dominar as ferramentas e linguagens mais demandadas pelo mercado de trabalho atual.
                </p>
                <p>
                  Do básico ao avançado, cobrimos tudo que você precisa: versionamento de código com Git e GitHub, desenvolvimento web com HTML5, CSS3 e JavaScript moderno, frameworks populares, técnicas de deploy profissional e muito mais.
                </p>
                <p>
                  Além da programação, oferecemos cursos especializados em montagem e manutenção de computadores, diagnóstico de problemas, instalação de componentes e otimização de sistemas. Aprenda com quem trabalha diariamente com hardware.
                </p>
                <p>
                  Metodologia hands-on com projetos reais, exercícios práticos e acompanhamento personalizado. Ganhe confiança para entrar no mercado de tecnologia ou aprimorar suas habilidades profissionais com certificação ao final do curso.
                </p>
              </div>
            </div>

            {/* Gallery 2x2 */}
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img src={programmingCourse} alt="Curso de programação" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img src={codeBackground} alt="Aprendizado de código" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img src={devStation} alt="Ambiente de aprendizado" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img src={workstationCreative} alt="Curso hands-on" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text-primary">
              Por que escolher a IngaCraft?
            </h2>
            <p className="text-xl text-muted-foreground">
              Qualidade, confiança e resultados que fazem a diferença.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="glass-card p-8 rounded-xl text-center hover-scale transition-all duration-300 group border border-white/10"
              >
                <benefit.icon className={`w-16 h-16 mx-auto mb-4 ${benefit.color} group-hover:scale-110 transition-transform duration-300`} />
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-background/50 to-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text-secondary">
              Nossos Projetos
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Confira alguns exemplos de projetos e soluções que já realizamos em desenvolvimento, setups e treinamentos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((item, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 aspect-video"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 bg-primary/90 text-white text-xs rounded-full mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="glass-card p-12 rounded-2xl border-2 border-primary/20 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-primary">
              Pronto para dar o próximo passo?
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-muted-foreground">
              Fale agora conosco e vamos transformar sua ideia em realidade.
            </p>
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-12 py-6 h-auto"
              onClick={handleWhatsAppClick}
            >
              Iniciar conversa no WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;