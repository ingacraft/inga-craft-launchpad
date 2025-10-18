import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import techEducationHero from "@/assets/tech-education-hero.jpg";
import programmingCourse from "@/assets/programming-course.jpg";
import pcBuildingCourse from "@/assets/pc-building-course.jpg";
import { siteConfig, getWhatsAppLink } from "@/config/site";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";

const VendaCursos = () => {
  const courses = [
    {
      title: "Desenvolvimento Front-End",
      image: programmingCourse,
      description: "Domine as principais ferramentas da web: Git e GitHub para controlar versões e trabalhar em equipe, HTML, CSS e JavaScript para desenvolver sites dinâmicos e responsivos, além de Deploy e boas práticas para publicar projetos completos na internet. Com esse aprendizado, você será capaz de criar sites modernos, funcionais e prontos para o mundo real.",
      price: "R$ 497,00"
    },
    {
      title: "Montagem e Manutenção de Computadores",
      image: pcBuildingCourse,
      description: "Transforme seu conhecimento em prática: domine a montagem, otimização e manutenção de computadores e seja capaz de construir PCs gamers poderosos e profissionais de alto desempenho, sempre com confiança e precisão.",
      price: "R$ 397,00"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center px-6 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{ backgroundImage: `url(${techEducationHero})` }}
        />
        <div className="absolute inset-0 gradient-hero opacity-50" />
        
        <FadeInUpWrapper className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Invista no seu<span className="gradient-text-primary"> Futuro </span>com os Cursos da 
             <span className="gradient-text-primary">IngaCraft</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-purple-200">
            Aprenda de forma prática e conquiste novas oportunidades na área de tecnologia.
          </p>
          <Button variant="hero" size="lg">
            Começar Agora
          </Button>
        </FadeInUpWrapper>
      </section>

      {/* Courses Section */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-primary">
              Nossos Cursos
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cursos práticos e focados no mercado de trabalho, com conteúdo atualizado e suporte completo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {courses.map((course, index) => (
              <Card key={index} className="group glass-card hover-scale transition-all duration-500 overflow-hidden relative border-0 shadow-xl hover:shadow-2xl">
                {/* Animated border gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary p-[2px] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-full h-full bg-background rounded-lg" />
                </div>
                
                {/* Price badge floating */}
                <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-primary to-accent text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg transform -translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  {course.price}
                </div>
                
                <div className="aspect-video overflow-hidden relative h-72">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Dark overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Floating play button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1" />
                    </div>
                  </div>
                </div>
                
                <CardHeader className="relative z-10">
                  <CardTitle className="text-2xl gradient-text-secondary group-hover:scale-105 transition-transform duration-300">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-lg group-hover:text-foreground transition-colors duration-300">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6 relative z-10">
                  {/* Features highlight */}
                  <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-accent" />
                      <span>Certificado</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-accent" />
                      <span>Suporte</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-accent" />
                      <span>Prático</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-accent" />
                      <span>Atualizado</span>
                    </div>
                  </div>
                  
                  <Button variant="tech" size="lg" className="w-full relative overflow-hidden group/btn">
                    <span className="relative z-10 group-hover/btn:text-white transition-colors duration-300">
                      Comprar agora
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          
        </div>
      </section>

      {/* Why Take These Courses Section */}
      <section className="py-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Por que fazer{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                esses cursos?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Invista em conhecimento que vai transformar sua carreira e abrir novas oportunidades
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Front-End Column */}
            <Card className="glass-card p-8 hover:scale-105 transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-3xl mb-4">
                  <span className="gradient-text-primary">
                    Curso Front-End
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  O mundo digital cresce todos os dias — e quem domina Front-End tem nas mãos uma das profissões 
                  mais promissoras da atualidade. Aprender a construir sites e interfaces modernas não é só adquirir 
                  um conhecimento técnico: é abrir portas para oportunidades de trabalho, liberdade financeira e 
                  crescimento pessoal.
                </p>
                
                <p>
                  Com nosso curso de Front-End, você vai aprender do zero ao avançado a criar páginas profissionais, 
                  responsivas e bonitas, utilizando as principais tecnologias do mercado: HTML, CSS e JavaScript. 
                  Além disso, vai entender boas práticas, ferramentas modernas e como se destacar no mercado de 
                  desenvolvimento web.
                </p>
                
                <div className="bg-background/50 p-6 rounded-lg space-y-3">
                  <h4 className="text-xl font-semibold text-foreground mb-4">📌 Por que fazer esse curso?</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Alta demanda:</strong> empresas buscam constantemente desenvolvedores Front-End.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Flexibilidade:</strong> trabalhe de casa, como freelancer ou em grandes companhias.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Criatividade:</strong> dê vida a suas ideias criando interfaces únicas.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Futuro garantido:</strong> o digital só cresce, e você pode crescer junto com ele.</span>
                    </li>
                  </ul>
                </div>
                
                <p className="text-lg font-semibold text-foreground">
                  👉 Se você quer entrar no universo da programação, começar uma carreira sólida e transformar sua 
                  paixão por tecnologia em profissão, este é o primeiro passo.
                </p>
                
                <p className="text-base italic text-foreground">
                  💡 Não fique só navegando na internet — aprenda a construí-la.
                </p>
              </CardContent>
            </Card>

            {/* Montagem e Manutenção Column */}
            <Card className="glass-card p-8 hover:scale-105 transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-3xl mb-4">
                  <span className="gradient-text-primary">
                    Curso de Montagem e Manutenção
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hoje em dia, quase tudo depende de computadores. E quem sabe montar, otimizar e consertar máquinas 
                  tem sempre trabalho garantido.
                </p>
                
                <p>
                  Nosso curso de Montagem e Manutenção de Computadores ensina você, passo a passo, a dominar desde 
                  os conceitos básicos até técnicas avançadas para montar, configurar e reparar PCs de alto desempenho.
                </p>
                
                <div className="bg-background/50 p-6 rounded-lg space-y-3">
                  <h4 className="text-xl font-semibold text-foreground mb-4">📌 O que você vai conquistar:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span>Entender cada componente e como escolher as melhores peças.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span>Montar computadores do zero, para trabalho, jogos ou uso profissional.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span>Diagnosticar e resolver problemas de forma prática e rápida.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span>Aprender upgrades e otimizações que aumentam a performance.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span>Possibilidade de atuar no mercado ou até abrir seu próprio negócio.</span>
                    </li>
                  </ul>
                </div>
                
                <p className="text-base italic text-foreground">
                  💡 Esse curso é perfeito para quem busca independência, economia e uma nova fonte de renda. 
                  Afinal, um computador bem montado e mantido dura mais, rende mais e dá menos dor de cabeça.
                </p>
                
                <p className="text-lg font-semibold text-foreground">
                  👉 Invista em conhecimento que se paga sozinho: monte, mantenha e lucre com computadores.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
       

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default VendaCursos;