import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, ClipboardList, Box, Receipt, Wrench, HeadsetIcon } from "lucide-react";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";

const steps = [
  { icon: MessageCircle, title: "Consulta Inicial", desc: "Entendemos suas necessidades", step: "01" },
  { icon: ClipboardList, title: "Briefing", desc: "O que você faz? Quanto tempo passa?", step: "02" },
  { icon: Box, title: "Projeto 3D", desc: "Visualize antes de montar", step: "03" },
  { icon: Receipt, title: "Orçamento", desc: "Opções para todos os bolsos", step: "04" },
  { icon: Wrench, title: "Montagem", desc: "Tudo instalado e organizado", step: "05" },
  { icon: HeadsetIcon, title: "Acompanhamento", desc: "Suporte pós-montagem", step: "06" },
];

const SetupProcess = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <FadeInUpWrapper className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Nosso{" "}
            <span className="gradient-text-primary">Processo</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Do primeiro contato ao setup pronto — transparência em cada etapa
          </p>
        </FadeInUpWrapper>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const borderClass = index % 2 === 0 ? "rotating-border-blue" : "rotating-border-green";
            return (
              <FadeInUpWrapper key={step.title} delay={index * 0.1}>
                <Card className={`glass-card hover:scale-105 transition-all duration-300 ${borderClass}`}>
                  <CardContent className="pt-6 pb-6 flex flex-col items-center text-center gap-3">
                    <span className="text-2xl font-bold text-primary">{step.step}</span>
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <p className="text-sm font-medium leading-tight">{step.title}</p>
                    <p className="text-xs text-muted-foreground leading-tight">{step.desc}</p>
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

export default SetupProcess;
