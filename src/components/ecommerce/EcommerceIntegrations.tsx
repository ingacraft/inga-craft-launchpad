import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Facebook, BarChart3, Mail, MessageCircle, Settings } from "lucide-react";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";

const integrations = [
  { icon: Instagram, title: "Redes Sociais", desc: "Instagram, Facebook, TikTok", borderClass: "rotating-border-blue" },
  { icon: BarChart3, title: "Analytics", desc: "Google Analytics e Tag Manager", borderClass: "rotating-border-green" },
  { icon: Mail, title: "E-mail Marketing", desc: "Campanhas automatizadas", borderClass: "rotating-border-blue" },
  { icon: MessageCircle, title: "WhatsApp", desc: "Atendimento direto", borderClass: "rotating-border-green" },
  { icon: Settings, title: "ERP e Gestão", desc: "Sistemas de gestão integrados", borderClass: "rotating-border-blue" },
];

const EcommerceIntegrations = () => {
  return (
    <section className="py-24 px-6 bg-background/30">
      <div className="max-w-7xl mx-auto">
        <FadeInUpWrapper className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text-primary">Integrações</span>
          </h2>
          <p className="text-lg text-muted-foreground">Conecte sua loja com as principais ferramentas</p>
        </FadeInUpWrapper>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {integrations.map((item, i) => {
            const Icon = item.icon;
            return (
              <FadeInUpWrapper key={item.title} delay={i * 0.1}>
                <Card className={`glass-card text-center hover:scale-105 transition-all duration-300 ${item.borderClass}`}>
                  <CardContent className="pt-6 pb-6">
                    <Icon className="w-8 h-8 mx-auto mb-3 text-secondary" />
                    <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
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

export default EcommerceIntegrations;
