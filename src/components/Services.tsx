import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Monitor, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Desenvolvimento Web",
      description: "Criação de sites modernos, rápidos e totalmente responsivos.",
      features: [
        " Sites profissionais e responsivos",
        " Otimização para SEO",
        " Performance elevada e carregamento rápido",
        " Design moderno e minimalista",
        " Integração com APIs e sistemas externos",
        " Painéis administrativos",
        " Hospedagem e deploy otimizado",
        " Suporte e manutenção"
      ],
      gradient: "gradient-primary",
      route: "/desenvolvimento-web"
    },
    {
      icon: Monitor,
      title: "Desenvolvimento de Software",
      description: "Sistemas personalizados para empresas, automação e soluções corporativas.",
      features: [
        " Sistemas sob medida",
        " Integração com bancos de dados",
        " Automação de processos internos",
        " Painéis administrativos avançados",
        " Dashboards e relatórios",
        " Aplicações desktop, web ou híbridas",
        " Segurança e escalabilidade",
        " Suporte contínuo"
      ],
      gradient: "gradient-secondary",
      route: "/desenvolvimento-software"
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
                    <Link to={service.route}>
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