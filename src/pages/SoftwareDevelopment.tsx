import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Check, Star, Code2, Database, Cog, Shield, TrendingUp, Users, Workflow, ServerCog } from "lucide-react";
import devStation from "@/assets/dev-station.jpg";
import { siteConfig, getWhatsAppLink } from "@/config/site";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";

const SoftwareDevelopment = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Sistemas Personalizados",
      description: "Construídos do zero, adaptados à sua necessidade e foco em performance máxima."
    },
    {
      icon: Workflow,
      title: "Automação de Processos",
      description: "Redução de tempo manual, eficiência operacional e relatórios automatizados."
    },
    {
      icon: ServerCog,
      title: "Integrações e APIs",
      description: "Conexão com ferramentas externas, ERP, CRM, gateways e estrutura escalável."
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Segurança Avançada",
      description: "Proteção de dados com criptografia e autenticação robusta"
    },
    {
      icon: Code2,
      title: "Arquitetura Moderna",
      description: "Código limpo, escalável e fácil de manter"
    },
    {
      icon: Database,
      title: "Banco de Dados Otimizado",
      description: "Performance e integridade garantidas"
    },
    {
      icon: Cog,
      title: "Manutenibilidade",
      description: "Fácil atualização e evolução do sistema"
    },
    {
      icon: Users,
      title: "Suporte Contínuo",
      description: "Assistência técnica e atualizações regulares"
    },
    {
      icon: TrendingUp,
      title: "Escalabilidade",
      description: "Cresce junto com o seu negócio"
    }
  ];

  const technologies = [
    "Node.js",
    "Python",
    "Java",
    "C#",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Electron",
    ".NET",
    "FastAPI",
    "REST APIs",
    "GraphQL"
  ];

  const plans = [
    {
      name: "Sistema Básico",
      price: "R$ 3.000 - R$ 8.000",
      popular: false,
      features: [
        "Sistema personalizado simples",
        "Interface de usuário intuitiva",
        "Banco de dados estruturado",
        "Autenticação de usuários",
        "Relatórios básicos",
        "Suporte inicial de 30 dias",
        "Deploy e configuração inclusos",
        "Indicado para: pequenas empresas e automações simples"
      ]
    },
    {
      name: "Sistema Intermediário",
      price: "R$ 8.000 - R$ 20.000",
      popular: true,
      features: [
        "Sistema robusto e escalável",
        "Múltiplos módulos integrados",
        "Dashboard administrativo completo",
        "Relatórios avançados e exportação",
        "Integrações com APIs externas",
        "Sistema de permissões e roles",
        "Suporte de 90 dias",
        "Indicado para: empresas em crescimento e processos complexos"
      ]
    },
    {
      name: "Sistema Empresarial",
      price: "a partir de R$ 20.000",
      popular: false,
      features: [
        "ERP ou CRM completo",
        "Automação total de processos",
        "Integrações complexas (pagamentos, ERPs externos)",
        "Business Intelligence e Analytics",
        "Aplicações desktop e mobile",
        "API própria para integrações",
        "Infraestrutura dedicada e escalável",
        "Suporte prioritário e contínuo",
        "Indicado para: médias e grandes empresas"
      ]
    },
    {
      name: "Manutenção + Hospedagem",
      price: "a partir de R$ 150 /mês",
      popular: false,
      features: [
        "Hospedagem segura e otimizada",
        "Backups automáticos diários",
        "Atualizações de sistema",
        "Monitoramento 24/7",
        "Suporte técnico prioritário",
        "Correções emergenciais",
        "Indicado para: manter o sistema sempre operacional e atualizado"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center px-6 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-70"
          style={{ backgroundImage: `url(${devStation})` }}
        />
        <div className="absolute inset-0 gradient-hero opacity-60" />
        <FadeInUpWrapper className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text-primary">Desenvolvimento de Software Sob Medida</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Sistemas personalizados, escaláveis e seguros para empresas e projetos que precisam de tecnologia real.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="gradient-primary text-white font-semibold px-8 py-3"
                onClick={() => window.open(getWhatsAppLink("Olá! Gostaria de solicitar um orçamento para desenvolvimento de software."), "_blank")}
              >
                Solicitar Orçamento
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="font-semibold px-8 py-3"
                onClick={() => document.getElementById('beneficios')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Funcionalidades
              </Button>
            </div>
          </div>
        </FadeInUpWrapper>
      </section>

      {/* O que desenvolvemos */}
      <section id="beneficios" className="py-32 px-6 bg-background/30">
        <div className="max-w-7xl mx-auto">
          <FadeInUpWrapper className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              O que{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                desenvolvemos
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Soluções completas e personalizadas para transformar seus processos
            </p>
          </FadeInUpWrapper>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <FadeInUpWrapper key={benefit.title} delay={index * 0.1}>
                  <Card className="group glass-card hover:scale-105 transition-all duration-500 border-0 shadow-lg hover:shadow-2xl overflow-hidden h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <CardHeader className="relative z-10 text-center">
                      <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">
                        {benefit.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10 text-center">
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                </FadeInUpWrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* Principais Benefícios */}
      <section className="py-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <FadeInUpWrapper className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Principais{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Benefícios
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tecnologia de ponta para impulsionar seu negócio
            </p>
          </FadeInUpWrapper>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <FadeInUpWrapper key={feature.title} delay={index * 0.1}>
                  <Card className="group glass-card hover:scale-105 transition-all duration-500 border-0 shadow-lg hover:shadow-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <CardHeader className="relative z-10">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </FadeInUpWrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tecnologias */}
      <section className="py-32 px-6 bg-background/30">
        <div className="max-w-7xl mx-auto">
          <FadeInUpWrapper className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Tecnologias{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Utilizadas
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Trabalhamos com as melhores e mais modernas tecnologias do mercado
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <FadeInUpWrapper key={tech} delay={index * 0.05}>
                  <Badge 
                    variant="secondary" 
                    className="px-4 py-2 text-sm hover:scale-110 transition-transform duration-300 cursor-default"
                  >
                    {tech}
                  </Badge>
                </FadeInUpWrapper>
              ))}
            </div>
          </FadeInUpWrapper>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <FadeInUpWrapper className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Planos e Preços</h2>
            <p className="text-xl text-muted-foreground">
              Escolha o plano ideal para o seu projeto
            </p>
          </FadeInUpWrapper>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <FadeInUpWrapper key={plan.name} delay={index * 0.1}>
                <Card 
                  className={`group relative overflow-hidden glass-card hover:scale-105 transition-all duration-500 ${
                    plan.popular 
                      ? 'ring-2 ring-primary shadow-glow border-primary/20' 
                      : 'hover:shadow-xl hover:border-primary/10'
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <Badge className="gradient-primary text-white px-4 py-2 shadow-lg animate-pulse">
                        <Star className="w-4 h-4 mr-1 fill-current" />
                        Mais Popular
                      </Badge>
                    </div>
                  )}
                  
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <CardHeader className="text-center pb-4 relative z-10">
                    <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                      {plan.name}
                    </CardTitle>
                    <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mt-2 group-hover:scale-110 transition-transform duration-300">
                      {plan.price}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="relative z-10">
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start group/item">
                          <Check className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                          <span className="text-sm group-hover/item:text-foreground transition-colors duration-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className={`w-full transition-all duration-300 ${
                        plan.popular 
                          ? 'gradient-primary text-white shadow-lg hover:shadow-xl hover:scale-105' 
                          : 'border-2 hover:bg-primary hover:text-white hover:border-primary hover:shadow-lg'
                      }`}
                      onClick={() => window.open(getWhatsAppLink(`Olá! Gostaria de saber mais sobre o plano ${plan.name} de desenvolvimento de software.`), "_blank")}
                    >
                      Solicitar Orçamento
                    </Button>
                  </CardContent>
                </Card>
              </FadeInUpWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 px-6 bg-background/30">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInUpWrapper>
            <Card className="glass-card border-primary/20 shadow-glow overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
              <CardContent className="pt-12 pb-12 relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Pronto para desenvolver seu software personalizado?
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Entre em contato e vamos transformar sua ideia em realidade
                </p>
                <Button 
                  size="lg" 
                  className="gradient-primary text-white font-semibold px-12 py-6 text-lg hover:scale-105 transition-transform"
                  onClick={() => window.open(getWhatsAppLink("Olá! Gostaria de solicitar um orçamento para desenvolvimento de software personalizado."), "_blank")}
                >
                  Solicitar Orçamento Agora
                </Button>
              </CardContent>
            </Card>
          </FadeInUpWrapper>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default SoftwareDevelopment;
