import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Monitor, ArrowRight, Cpu, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Desenvolvimento Web",
      description: "Sites profissionais, rápidos e otimizados para converter visitantes em clientes.",
      features: [
        "Sites responsivos e modernos",
        "Otimização para SEO e performance",
        "Integração com APIs e sistemas",
        "Painéis administrativos",
        "Hospedagem e deploy",
        "Suporte e manutenção",
      ],
      gradient: "gradient-primary",
      route: "/desenvolvimento-web",
      borderClass: "rotating-border-blue",
    },
    {
      icon: Monitor,
      title: "Desenvolvimento de Software",
      description: "Sistemas sob medida que automatizam processos e impulsionam resultados.",
      features: [
        "Sistemas personalizados",
        "Automação de processos",
        "Dashboards e relatórios",
        "Integrações com APIs externas",
        "Segurança e escalabilidade",
        "Suporte contínuo",
      ],
      gradient: "gradient-secondary",
      route: "/desenvolvimento-software",
      borderClass: "rotating-border-green",
    },
    {
      icon: Cpu,
      title: "Setups Personalizados",
      description: "Montagem profissional de PCs e estações de trabalho sob medida.",
      features: [
        "PCs personalizados sob demanda",
        "Setups gamer, trabalho e criação",
        "Consultoria técnica especializada",
        "Organização e estética",
        "Testes de estabilidade",
        "Suporte pós-montagem",
      ],
      gradient: "gradient-primary",
      route: "/setups-personalizados",
      borderClass: "rotating-border-blue",
    },
  ];

  return (
    <section className="py-24 px-6 bg-background/30" id="servicos">
      <div className="max-w-7xl mx-auto">
        <FadeInUpWrapper className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">O que fazemos</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Nossos{" "}
            <span className="gradient-text-primary">Serviços</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções completas em tecnologia para empresas que buscam crescimento, eficiência e presença digital de alto nível.
          </p>
        </FadeInUpWrapper>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeInUpWrapper key={service.title} delay={index * 0.15}>
                <Card className={`glass-card hover:scale-[1.03] transition-all duration-500 group h-full ${service.borderClass}`}>
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 mx-auto rounded-full ${service.gradient} flex items-center justify-center mb-4 shadow-glow group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </CardDescription>
                    <ul className="space-y-2.5 mb-8 text-left">
                      {service.features.map((feature) => (
                        <li key={feature} className="text-sm text-foreground/80 flex items-start gap-2.5">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full group/btn border-primary/30 hover:bg-primary hover:text-primary-foreground hover:border-primary" asChild>
                      <Link to={service.route}>
                        Saiba Mais
                        <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
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

export default Services;
