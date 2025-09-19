import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import techEducationHero from "@/assets/tech-education-hero.jpg";
import programmingCourse from "@/assets/programming-course.jpg";
import pcBuildingCourse from "@/assets/pc-building-course.jpg";

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
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center px-6 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${techEducationHero})` }}
        />
        <div className="absolute inset-0 gradient-dark opacity-60" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in text-white">
            Invista no seu<span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Futuro </span>com os Cursos da 
             <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">IngaCraft</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-purple-200 animate-fade-in">
            Aprenda de forma prática e conquiste novas oportunidades na área de tecnologia.
          </p>
          <Button variant="hero" size="lg" className="animate-fade-in">
            Começar Agora
          </Button>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 px-6">
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
                
                <div className="aspect-video overflow-hidden relative">
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

          {/* Motivational Section */}
          <div className="text-center space-y-8 mb-16">
            <div className="space-y-6">
              <blockquote className="text-2xl md:text-3xl font-semibold text-foreground italic">
                "A tecnologia não espera. Comece hoje a construir sua carreira."
              </blockquote>
              <blockquote className="text-xl md:text-2xl text-muted-foreground italic">
                "Da sala de aula para o mercado: prática, suporte e aprendizado direto ao ponto."
              </blockquote>
            </div>
            
            <Button variant="hero" size="lg" className="text-xl px-8 py-4">
              Dúvidas? Entre em contato conosco aqui!
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VendaCursos;