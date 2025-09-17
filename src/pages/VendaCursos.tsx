import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import techEducationHero from "@/assets/tech-education-hero.jpg";
import programmingCourse from "@/assets/programming-course.jpg";
import pcBuildingCourse from "@/assets/pc-building-course.jpg";

const VendaCursos = () => {
  const courses = [
    {
      title: "Desenvolvimento Front-End",
      image: programmingCourse,
      description: "Aprenda HTML, CSS, JavaScript e boas práticas para criar sites modernos e responsivos.",
      price: "R$ 497,00"
    },
    {
      title: "Montagem e Manutenção de Computadores",
      image: pcBuildingCourse,
      description: "Do zero à prática: monte, otimize e faça manutenção em computadores com confiança.",
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
            Invista no seu Futuro com os Cursos da 
            <span className="gradient-text-primary"> IngaCraft</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in">
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
              <Card key={index} className="glass-card hover-scale transition-smooth overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text-secondary">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-lg">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-3xl font-bold gradient-text-primary">
                    {course.price}
                  </div>
                  <Button variant="tech" size="lg" className="w-full">
                    Comprar agora
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
              Quero garantir minha vaga!
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VendaCursos;