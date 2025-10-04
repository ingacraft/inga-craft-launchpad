import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Monitor, GraduationCap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Desenvolvimento Web",
      description: "Criamos sites e aplicações web modernas, responsivas e otimizadas para performance. Utilizamos as mais recentes tecnologias para garantir experiências excepcionais.",
      features: ["⚛️ React & Next.js", "📱 Design Responsivo", "🔍 SEO Otimizado", "⚡ Performance Máxima", "☁️ Integração com APIs", "🛠️ Manutenção e Suporte", "🖥️ UI/UX Design", "🔒 Segurança Avançada", "📊 Painéis Administrativos", "🚀 Hospedagem e Deploy Automatizado"],
      gradient: "gradient-primary"
    },
    {
      icon: Monitor,
      title: "Setups Personalizados",
      description: "Montamos workstations completas para desenvolvimento, gaming e criação de conteúdo. Cada setup é personalizado para suas necessidades específicas.",
      features: ["💻 Hardware Selecionado", "⚙️ Configuração Completa", "🛠️ Suporte Técnico Dedicado", "🛡️ Garantia Estendida", "🎮 Setups para Gamers", "🎨 Estação de Criação", "👨‍💻 Workstations para Devs", "🖱️ Periféricos Premium", "🌈 Design Personalizado", "🚀 Upgrade Futuro Facilitado"],
      gradient: "gradient-secondary"
    },
    {
      icon: GraduationCap,
      title: "Cursos de Tecnologia",
      description: "Capacitamos profissionais com cursos práticos e atualizados. Do básico ao avançado, aprenda as tecnologias mais demandadas pelo mercado.",
      features: ["👨‍🏫 Instrutores Especializados", "💻 Projetos Reais", "📜 Certificação" , "🌐 Comunidade Ativa", "📈 Trilhas de Aprendizado", "🔄 Conteúdo Atualizado", "🤝 Mentorias e Suporte Individual", "🧑‍💻 Laboratórios Virtuais", "🚀 Preparação para o Mercado"],
      gradient: "gradient-primary"
    }
  ];

  return (
    <section className="py-20 px-6 bg-background" id="servicos">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Soluções completas para levar sua presença digital, setup tecnológico e conhecimento ao próximo nível!!!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const borderClasses = [
              'rotating-border-blue',
              'rotating-border-green', 
              'rotating-border-purple'
            ];
            return (
              <Card 
                key={service.title} 
                className={`glass-card hover:scale-105 transition-all duration-300 animate-fade-in group cursor-pointer ${borderClasses[index]}`}
                style={{ animationDelay: `${(index + 1) * 0.2}s` }}
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
                  
                  {service.title === "Desenvolvimento Web" ? (
                    <Button variant="outline" className="group w-full" asChild>
                      <Link to="/desenvolvimento-web">
                        Saiba Mais
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  ) : service.title === "Setups Personalizados" ? (
                    <Button variant="outline" className="group w-full" asChild>
                      <Link to="/setups-personalizados">
                        Saiba Mais
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  ) : (
                    <Button variant="outline" className="group w-full" asChild>
                      <Link to="/cursos/venda">
                        Saiba Mais
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;