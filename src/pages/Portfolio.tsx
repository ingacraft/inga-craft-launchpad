import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Cpu, GraduationCap, Zap, Shield, Wrench, Target } from "lucide-react";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";
import heroTechSetup from "@/assets/hero-tech-setup.jpg";
import modernWebsite1 from "@/assets/modern-website-1.jpg";
import modernWebsite2 from "@/assets/modern-website-2.jpg";
import modernWebsite3 from "@/assets/modern-website-3.jpg";
import modernWebsite4 from "@/assets/modern-website-4.jpg";
import gamingSetup1 from "@/assets/gaming-setup-1.jpg";
import gamingSetup2 from "@/assets/gaming-setup-2.jpg";
import gamingSetup3 from "@/assets/gaming-setup-3.jpg";
import gamingSetup4 from "@/assets/gaming-setup-4.jpg";
import codingCourse1 from "@/assets/coding-course-1.jpg";
import codingCourse2 from "@/assets/coding-course-2.jpg";
import codingCourse3 from "@/assets/coding-course-3.jpg";
import codingCourse4 from "@/assets/coding-course-4.jpg";

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


  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5551999999999", "_blank");
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-background via-purple-950/20 to-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center px-6 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-60"
          style={{ backgroundImage: `url(${heroTechSetup})` }}
        />
        <div className="absolute inset-0 gradient-hero opacity-50" />
        
        <FadeInUpWrapper className="relative z-10 text-center max-w-5xl mx-auto">
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
        </FadeInUpWrapper>
      </section>

      {/* Services Section - Desenvolvimento Web */}
      <section className="py-32 px-6 bg-gradient-to-b from-background to-background/50">
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
                <img src={modernWebsite1} alt="Website moderno e responsivo" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img src={modernWebsite2} alt="Desenvolvimento web profissional" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img src={modernWebsite3} alt="Landing page moderna" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img src={modernWebsite4} alt="Interface web elegante" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
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
                <img src={gamingSetup1} alt="Setup Gamer RGB completo" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img src={gamingSetup2} alt="PC Gaming de alto desempenho" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img src={gamingSetup3} alt="Setup profissional com periféricos" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img src={gamingSetup4} alt="Workstation gamer premium" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
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
                <img src={codingCourse1} alt="Programação e código" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img src={codingCourse2} alt="Aula online de tecnologia" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img src={codingCourse3} alt="Aprendizado prático de programação" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img src={codingCourse4} alt="Curso hands-on de código" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
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
      <WhatsAppButton />
    </div>
  );
};

export default Portfolio;