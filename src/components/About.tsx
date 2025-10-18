
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Award, GraduationCap, Handshake } from "lucide-react";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";

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
    "Docker", "AWS", "PostgreSQL", "MongoDB", "Tailwind CSS", "WordPress", "NuvemShop"
  ];

  return (
    <section className="py-32 px-6 bg-background" id="sobre">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <FadeInUpWrapper>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre a <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">IngaCraft</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Na IngaCraft, somos especialistas em soluções tecnológicas completas. 
              Nossa missão é transformar ideias em realidade digital, oferecendo desenvolvimento web de alta performance, 
              setups personalizados sob medida e educação tecnológica de excelência.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Iniciamos nossos trabalhos em janeiro de 2026, mas nossa equipe já tem anos de experiência no mercado, 
              combinando expertise técnica com criatividade para entregar soluções que realmente fazem a diferença no seu negócio ou carreira.
            </p>

             <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Na IngaCraft, acreditamos que a tecnologia é mais do que uma ferramenta — é um caminho para construir o futuro. 🌐✨
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

          </FadeInUpWrapper>

          {/* Values */}
          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <FadeInUpWrapper key={value.title} delay={index * 0.15}>
                  <div className="glass-card p-6 text-center hover:scale-105 transition-smooth">
                  <div className="gradient-secondary w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-xl font-bold text-primary mb-2">{value.title}</div>
                  <div className="text-sm text-muted-foreground">{value.description}</div>
                  </div>
                </FadeInUpWrapper>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;