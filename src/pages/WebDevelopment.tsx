import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Check, Star, Code2, Database, Globe, GitBranch, Shield, Users, TrendingUp, Clock } from "lucide-react";
import websiteOnScreen from "@/assets/website-on-screen.jpg";
import { siteConfig, getWhatsAppLink } from "@/config/site";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";

const WebDevelopment = () => {
  

  const plans = [
    {
      name: "Básico",
      price: "R$ 900 - R$ 2.000",
      popular: false,
      features: [
        "Site institucional simples (até 3 páginas)",
        "Layout responsivo (desktop + mobile)",
        "Integração com redes sociais",
        "SEO básico",
        "Prazo de entrega rápido",
        "Hospedagem e domínio configurados",
        "Formulários de contato",
        "Indicado para: profissionais liberais, pequenos negócios e landing pages"
      ]
    },
    {
      name: "Intermediário",
      price: "R$ 2.000 - R$ 4.000",
      popular: true,
      features: [
        "Site institucional completo (até 8 páginas)",
        "Integrações simples (formulário, chat, newsletter)",
        "Layout moderno e otimizado para performance",
        "SEO otimizado",
        "Sistema de blog ou portfólio",
        "Área administrativa básica",
        "Hospedagem e domínio configurados",
        "Indicado para: empresas em crescimento e negócios que precisam de presença digital mais sólida"
      ]
    },
    {
      name: "Avançado",
      price: "a partir de R$ 4.000",
      popular: false,
      features: [
        "E-commerce completo ou site corporativo robusto",
        "Software personalizado (ERP, CRM, sistemas internos)",
        "Integrações avançadas (pagamentos, APIs, automações)",
        "Painel administrativo completo e personalizado",
        "Aplicativos mobile e desktop",
        "Sistemas de gestão e controle",
        "SEO avançado e performance otimizada",
        "Hospedagem dedicada e escalável",
        "Indicado para: empresas de médio e grande porte, startups e negócios digitais"
      ]
    },

     {
      name: "Manutenção + Hospedagem",
      price: "a partir de R$50 a R$150 /mês",
      popular: false,
      features: [
        "Hospedagem otimizada e segura",
        "Backups a cada manutenção e uma vez na semana",
        "Atualizações de sistema e plugins",
        "Suporte técnico e correções emergenciais",
        "Hospedagem dedicada e escaláve",
        "Indicado para: manter o site sempre online, seguro e atualizado"
      ]
    }
  ];

  

  return (
    <div className="min-h-screen bg-background pt-20">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center px-6 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-fixed opacity-70"
          style={{ backgroundImage: `url(${websiteOnScreen})` }}
        />
        <div className="absolute inset-0 gradient-hero opacity-60" />
        <FadeInUpWrapper className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text-primary">Desenvolvimento Web </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Criamos sites e aplicações web que vendem, geram autoridade e destacam sua marca no digital. Soluções modernas, rápidas e escaláveis, pensadas para atrair clientes e impulsionar os resultados do seu negócio.
          </p>
          <Button 
            size="lg" 
            className="gradient-primary text-white font-semibold px-8 py-3"
            onClick={() => window.open(getWhatsAppLink("Olá! Gostaria de solicitar um orçamento para desenvolvimento web."), "_blank")}
          >
            Solicitar Orçamento
          </Button>
          </div>
        </FadeInUpWrapper>
      </section>

      {/* Why You Need a Professional Website Section */}
      <section className="py-32 px-6 bg-background/30">
        <div className="max-w-7xl mx-auto">
          <FadeInUpWrapper className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Por que você precisa de um{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                site profissional?
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              No mundo atual, quem não está presente na internet simplesmente não existe para boa parte dos clientes.
            </p>
          </FadeInUpWrapper>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <FadeInUpWrapper delay={0.1}>
              <Card className="group glass-card hover:scale-105 transition-all duration-500 border-0 shadow-lg hover:shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardHeader className="relative z-10">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">
                    Credibilidade e Confiança
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    Um site profissional é o seu cartão de visitas digital, funcionando 24/7. 
                    Você transmite credibilidade, confiança e profissionalismo, mostrando que leva o seu trabalho a sério.
                  </p>
                </CardContent>
              </Card>
            </FadeInUpWrapper>

            <FadeInUpWrapper delay={0.2}>
            <Card className="group glass-card hover:scale-105 transition-all duration-500 border-0 shadow-lg hover:shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="relative z-10">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">
                  Autoridade no Seu Nicho
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  Você conquista autoridade, atrai novos clientes e se destaca da concorrência 
                  que ainda depende apenas das redes sociais.
                </p>
              </CardContent>
            </Card>
            </FadeInUpWrapper>

            <FadeInUpWrapper delay={0.3}>
            <Card className="group glass-card hover:scale-105 transition-all duration-500 border-0 shadow-lg hover:shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="relative z-10">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">
                  Seu Espaço 100% Seu
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  Apresente seus serviços, mostre depoimentos de clientes, publique conteúdos relevantes e 
                  facilite o contato direto por formulário, e-mail ou WhatsApp.
                </p>
              </CardContent>
            </Card>
            </FadeInUpWrapper>

            <FadeInUpWrapper delay={0.4}>
            <Card className="group glass-card hover:scale-105 transition-all duration-500 border-0 shadow-lg hover:shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="relative z-10">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">
                  Trabalhando por Você
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  Ter um site é investir na sua imagem, reputação e crescimento. Enquanto você trabalha, 
                  o seu site está trabalhando por você, gerando oportunidades e fortalecendo sua marca.
                </p>
              </CardContent>
            </Card>
            </FadeInUpWrapper>
          </div>

          <FadeInUpWrapper delay={0.5}>
          <Card className="glass-card border-primary/20 shadow-glow">
            <CardContent className="pt-8 text-center">
              <p className="text-xl md:text-2xl font-semibold mb-2">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Profissionais de sucesso têm uma coisa em comum: eles estão online e acessíveis.
                </span>
              </p>
              <p className="text-lg text-muted-foreground">
                E você, vai ficar para trás ou vai dar o próximo passo?
              </p>
            </CardContent>
          </Card>
          </FadeInUpWrapper>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Planos e Preços</h2>
            <p className="text-xl text-muted-foreground">
              Escolha o plano ideal para o seu projeto
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={plan.name} 
                className={`group relative overflow-hidden glass-card hover:scale-105 transition-all duration-500 ${
                  plan.popular 
                    ? 'ring-2 ring-primary shadow-glow border-primary/20' 
                    : 'hover:shadow-xl hover:border-primary/10'
                }`}
              >
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
               
                
                {/* Decorative corner element */}
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
                    onClick={() => window.open(getWhatsAppLink(`Olá! Gostaria de saber mais sobre o plano ${plan.name} de desenvolvimento web.`), "_blank")}
                  >
                    Solicitar Orçamento
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default WebDevelopment;