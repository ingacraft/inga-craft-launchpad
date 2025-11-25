import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Monitor, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Desenvolvimento Web e Software",
      description: "Criamos sites, aplicações web e software sob medida para seu negócio. Do frontend ao backend, desenvolvemos soluções completas, modernas e escaláveis.",
      features: [" React & Next.js", " Design Responsivo", " SEO Otimizado", " Performance Máxima", " Integração com APIs", " Manutenção e Suporte", " UI/UX Design", "Segurança Avançada", " Painéis Administrativos", " Hospedagem e Deploy Automatizado", " Sistemas Desktop e Mobile", " Automação de Processos", " Integração de Sistemas", " APIs RESTful e GraphQL"],
      gradient: "gradient-primary"
    },
    {
      icon: Monitor,
      title: "Setups Personalizados",
      description: "Montamos workstations completas para desenvolvimento, gaming e criação de conteúdo. Cada setup é personalizado para suas necessidades específicas.",
      features: [" Hardware Selecionado", " Configuração Completa", " Suporte Técnico Dedicado", " Garantia Estendida", " Setups para Gamers", " Estação de Criação", " Workstations para Devs", " Periféricos Premium", " Design Personalizado", " Upgrade Futuro Facilitado"],
      gradient: "gradient-secondary"
    }
  ];

  return (
    <section className="py-32 px-6 bg-background" id="servicos">
      <div className="max-w-7xl mx-auto">
        <FadeInUpWrapper className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções completas para levar sua presença digital, setup tecnológico e conhecimento ao próximo nível!!!
          </p>
        </FadeInUpWrapper>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            const borderClasses = [
              'rotating-border-blue',
              'rotating-border-green'
            ];
            return (
              <FadeInUpWrapper key={service.title} delay={index * 0.2}>
                <Card 
                  className={`glass-card hover:scale-105 transition-all duration-300 group cursor-pointer ${borderClasses[index]}`}
                >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto rounded-full ${service.gradient} flex items-center justify-center mb-4 shadow-glow`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="text-center">
                  <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-foreground flex items-center justify-center">
                        <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant="outline" className="group w-full" asChild>
                    <Link to={service.title === "Desenvolvimento Web e Software" ? "/desenvolvimento-web" : "/setups-personalizados"}>
                      Saiba Mais
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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