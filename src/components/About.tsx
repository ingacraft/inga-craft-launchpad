import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Award, ShieldCheck, Handshake, Target, Zap } from "lucide-react";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";

const About = () => {
  const values = [
    { icon: ShieldCheck, title: "Confiança", description: "Transparência em cada etapa do projeto." },
    { icon: Award, title: "Qualidade", description: "Entregas com alto padrão e atenção aos detalhes." },
    { icon: Target, title: "Foco em Resultados", description: "Soluções que geram valor real para o negócio." },
    { icon: Handshake, title: "Parceria", description: "Relação próxima e comprometida com o cliente." },
    { icon: Lightbulb, title: "Inovação", description: "Tecnologias modernas e abordagem criativa." },
    { icon: Zap, title: "Agilidade", description: "Processos enxutos e entregas dentro do prazo." },
  ];

  const technologies = [
    "React", "Next.js", "TypeScript", "Node.js", "Python",
    "Docker", "AWS", "PostgreSQL", "MongoDB", "Tailwind CSS", "WordPress", "NuvemShop",
  ];

  return (
    <section className="py-24 px-6 bg-background" id="sobre">
      <div className="max-w-7xl mx-auto">
        {/* About Text */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <FadeInUpWrapper>
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Quem somos</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Sobre a{" "}
              <span className="gradient-text-primary">IngaCraft</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Somos especialistas em soluções tecnológicas completas, focadas em transformar ideias em experiências digitais de alto impacto. Atuamos com desenvolvimento web e software de alta performance, além da montagem de PCs e setups personalizados sob medida.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Nossa equipe combina expertise técnica, criatividade e visão de mercado para entregar soluções eficientes, seguras e escaláveis — fortalecendo a presença digital de empresas e criando setups otimizados para máxima performance.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Na IngaCraft, acreditamos que a tecnologia vai além de ferramentas: ela é a base para <strong className="text-foreground">inovação, crescimento e resultados reais.</strong>
            </p>
          </FadeInUpWrapper>

          <FadeInUpWrapper delay={0.2}>
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Tecnologias que dominamos</p>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="px-3 py-1.5 text-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <Card className="glass-card border-primary/10">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Compromisso com seu projeto</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Cada projeto é tratado com seriedade e responsabilidade. Trabalhamos com contratos claros, prazos definidos e comunicação constante.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </FadeInUpWrapper>
        </div>

        {/* Values Grid */}
        <FadeInUpWrapper className="text-center mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Nossos valores</p>
          <h3 className="text-2xl md:text-3xl font-bold">
            O que nos{" "}
            <span className="gradient-text-primary">define</span>
          </h3>
        </FadeInUpWrapper>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {values.map((value, index) => {
            const Icon = value.icon;
            const borderClass = index % 2 === 0 ? "rotating-border-blue" : "rotating-border-green";
            return (
              <FadeInUpWrapper key={value.title} delay={index * 0.1}>
                <Card className={`glass-card text-center hover:scale-105 transition-all duration-300 h-full ${borderClass}`}>
                  <CardContent className="pt-6 pb-6">
                    <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-3">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <p className="font-semibold text-sm mb-1">{value.title}</p>
                    <p className="text-xs text-muted-foreground leading-snug">{value.description}</p>
                  </CardContent>
                </Card>
              </FadeInUpWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
