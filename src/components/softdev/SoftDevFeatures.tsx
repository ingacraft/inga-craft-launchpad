import { Card, CardContent } from "@/components/ui/card";
import { KeyRound, FileBarChart, LayoutDashboard, Bell, DatabaseBackup, Users, MessageCircle, Smartphone } from "lucide-react";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";

const features = [
  { icon: KeyRound, title: "Login e controle de acesso" },
  { icon: FileBarChart, title: "Relatórios personalizáveis" },
  { icon: LayoutDashboard, title: "Dashboard interativo" },
  { icon: Bell, title: "Notificações e alertas" },
  { icon: DatabaseBackup, title: "Backup automático" },
  { icon: Users, title: "Suporte a múltiplos usuários" },
  { icon: MessageCircle, title: "Integração com WhatsApp/Email" },
  { icon: Smartphone, title: "App mobile incluso (opcional)" },
];

const SoftDevFeatures = () => {
  return (
    <section className="py-24 px-6 bg-background/30">
      <div className="max-w-7xl mx-auto">
        <FadeInUpWrapper className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Funcionalidades{" "}
            <span className="gradient-text-primary">Comuns</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Recursos que acompanham todos os nossos sistemas
          </p>
        </FadeInUpWrapper>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const borderClass = index % 2 === 0 ? "rotating-border-blue" : "rotating-border-green";
            return (
              <FadeInUpWrapper key={feature.title} delay={index * 0.05}>
                <Card className={`glass-card hover:scale-105 transition-all duration-300 ${borderClass}`}>
                  <CardContent className="pt-6 pb-6 flex flex-col items-center text-center gap-3">
                    <Icon className="w-8 h-8 text-primary" />
                    <p className="text-sm font-medium">{feature.title}</p>
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

export default SoftDevFeatures;
