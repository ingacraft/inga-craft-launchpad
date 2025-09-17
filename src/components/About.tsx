import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Award, GraduationCap, Handshake } from "lucide-react";

const About = () => {
  const values = [
    { 
      icon: Lightbulb, 
      title: "Inovação", 
      description: "Soluções criativas e atuais para cada desafio." 
    },
    { 
      icon: Award, 
      title: "Qualidade", 
      description: "Projetos desenvolvidos com foco em performance e experiência." 
    },
    { 
      icon: GraduationCap, 
      title: "Educação", 
      description: "Compartilhamos conhecimento e capacitamos pessoas através da tecnologia." 
    },
    { 
      icon: Handshake, 
      title: "Parceria", 
      description: "Construímos relações duradouras com clientes e parceiros." 
    }
  ];

  const technologies = [
    "React", "Next.js", "TypeScript", "Node.js", "Python", 
    "Docker", "AWS", "PostgreSQL", "MongoDB", "Tailwind CSS"
  ];

  return (
    <section className="py-20 px-6 gradient-card" id="sobre">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre a <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">IngaCraft</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Somos uma empresa especializada em soluções tecnológicas completas. Nossa missão é 
              transformar ideias em realidade digital, oferecendo desenvolvimento web de alta qualidade, 
              setups personalizados para máxima performance e educação tecnológica de excelência.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Iniciamos nossos trabalhos em janeiro de 2026, mas nossa equipe já tem anos de 
              experiência no mercado, combinando expertise técnica com criatividade para entregar 
              soluções que realmente fazem a diferença no seu negócio ou carreira.
            </p>

            {/* Technologies */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Tecnologias que Dominamos</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="px-3 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <Button variant="hero" size="lg">
              Conhecer Nossa Equipe
            </Button>
          </div>

          {/* Values */}
          <div className="grid grid-cols-2 gap-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={value.title} 
                  className="glass-card p-6 text-center hover:scale-105 transition-smooth"
                  style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                >
                  <div className="gradient-secondary w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-xl font-bold text-primary mb-2">{value.title}</div>
                  <div className="text-sm text-muted-foreground">{value.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;