import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Check, Star, Code2, Database, Globe, GitBranch } from "lucide-react";

const WebDevelopment = () => {
  const technologies = [
    { name: "HTML5", icon: "🌐", category: "Frontend" },
    { name: "CSS3", icon: "🎨", category: "Frontend" },
    { name: "JavaScript", icon: "⚡", category: "Frontend" },
    { name: "React", icon: "⚛️", category: "Frontend" },
    { name: "Next.js", icon: "▲", category: "Frontend" },
    { name: "TailwindCSS", icon: "🎯", category: "Frontend" },
    { name: "Bootstrap", icon: "📱", category: "Frontend" },
    { name: "Node.js", icon: "💚", category: "Backend" },
    { name: "Express", icon: "🚀", category: "Backend" },
    { name: "MySQL", icon: "🐬", category: "Database" },
    { name: "MongoDB", icon: "🍃", category: "Database" },
    { name: "Git/GitHub", icon: "🔗", category: "Version Control" }
  ];

  const plans = [
    {
      name: "Básico",
      price: "R$ 1.500 - R$ 2.500",
      popular: false,
      features: [
        "Site institucional simples (até 3 páginas)",
        "Design responsivo",
        "Integração com redes sociais",
        "SEO básico",
        "Suporte por 30 dias"
      ]
    },
    {
      name: "Intermediário",
      price: "R$ 3.000 - R$ 5.000",
      popular: true,
      features: [
        "Site institucional completo (até 8 páginas)",
        "Integrações simples (formulário, chat, newsletter)",
        "Design responsivo e otimizado",
        "SEO otimizado",
        "Suporte por 60 dias"
      ]
    },
    {
      name: "Avançado",
      price: "a partir de R$ 6.000",
      popular: false,
      features: [
        "E-commerce completo ou site corporativo robusto",
        "Integrações avançadas (pagamentos, APIs, automações)",
        "Painel administrativo personalizado",
        "SEO avançado e performance otimizada",
        "Suporte por 90 dias"
      ]
    }
  ];

  const projects = [
    {
      name: "Site Empresa Tech Solutions",
      description: "Site institucional moderno e responsivo",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
    },
    {
      name: "E-commerce Fashion Store",
      description: "Loja online completa com pagamentos integrados",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop"
    },
    {
      name: "Portal Educacional",
      description: "Plataforma de cursos online interativa",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop"
    },
    {
      name: "App Corporativo Dashboard",
      description: "Sistema de gestão personalizado",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
    },
    {
      name: "Site Restaurante Gourmet",
      description: "Website com sistema de reservas integrado",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop"
    },
    {
      name: "Portfolio Criativo",
      description: "Site portfolio com animações personalizadas",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="gradient-hero py-20 px-6 mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Desenvolvimento Web
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Construímos sites modernos, rápidos, responsivos e pensados para gerar resultados.
          </p>
          <Button size="lg" className="gradient-primary text-white font-semibold px-8 py-3 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Solicitar Orçamento
          </Button>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Tecnologias Utilizadas</h2>
            <p className="text-xl text-muted-foreground">
              Trabalhamos com as mais modernas tecnologias do mercado
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <Card key={tech.name} className="glass-card hover:scale-105 transition-all duration-300 text-center group">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-3">{tech.icon}</div>
                  <h3 className="font-semibold text-lg mb-2">{tech.name}</h3>
                  <Badge variant="outline" className="text-xs">
                    {tech.category}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-20 px-6 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Planos e Preços</h2>
            <p className="text-xl text-muted-foreground">
              Escolha o plano ideal para o seu projeto
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={plan.name} 
                className={`relative glass-card hover:scale-105 transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-primary shadow-glow' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="gradient-primary text-white px-4 py-1">
                      <Star className="w-4 h-4 mr-1" />
                      Mais Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary mt-2">
                    {plan.price}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${plan.popular ? 'gradient-primary text-white' : 'variant-outline'}`}
                  >
                    Solicitar Orçamento
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Projetos</h2>
            <p className="text-xl text-muted-foreground">
              Conheça alguns dos projetos que desenvolvemos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={project.name} className="glass-card hover:scale-105 transition-all duration-300 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2">{project.name}</h3>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebDevelopment;