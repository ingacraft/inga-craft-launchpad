import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Smartphone, Monitor, Workflow } from "lucide-react";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";
import systemDashboard from "@/assets/system-dashboard.jpg";
import systemMobile from "@/assets/system-mobile.jpg";
import systemDesktop from "@/assets/system-desktop.jpg";
import systemApi from "@/assets/system-api.jpg";

const systemTypes = [
  {
    icon: Globe,
    title: "Sistemas Web",
    description: "Acessíveis de qualquer navegador, com interface moderna e responsiva.",
    image: systemDashboard,
    borderClass: "rotating-border-blue",
  },
  {
    icon: Smartphone,
    title: "Aplicativos Mobile",
    description: "Apps nativos ou híbridos para Android e iOS com experiência fluida.",
    image: systemMobile,
    borderClass: "rotating-border-green",
  },
  {
    icon: Monitor,
    title: "Sistemas Desktop",
    description: "Softwares robustos para Windows, com performance e integração local.",
    image: systemDesktop,
    borderClass: "rotating-border-blue",
  },
  {
    icon: Workflow,
    title: "APIs e Integrações",
    description: "Conexão entre sistemas, ERPs, gateways de pagamento e serviços externos.",
    image: systemApi,
    borderClass: "rotating-border-green",
  },
];

const SoftDevSystemTypes = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <FadeInUpWrapper className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Tipos de{" "}
            <span className="gradient-text-primary">Sistemas que Desenvolvemos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Soluções completas para cada necessidade do seu negócio
          </p>
        </FadeInUpWrapper>

        <div className="grid md:grid-cols-2 gap-8">
          {systemTypes.map((system, index) => {
            const Icon = system.icon;
            return (
              <FadeInUpWrapper key={system.title} delay={index * 0.1}>
                <Card className={`glass-card hover:scale-[1.03] transition-all duration-500 overflow-hidden h-full ${system.borderClass}`}>
                  <div className="h-52 overflow-hidden">
                    <img
                      src={system.image}
                      alt={system.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-xl">{system.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{system.description}</p>
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

export default SoftDevSystemTypes;
