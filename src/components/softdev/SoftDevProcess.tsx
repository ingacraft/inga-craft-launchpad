import { Card, CardContent } from "@/components/ui/card";
import { FileSearch, PenTool, Code2, TestTube, Rocket, HeadsetIcon } from "lucide-react";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";

const steps = [
  { icon: FileSearch, title: "Levantamento de Requisitos", step: "01" },
  { icon: PenTool, title: "Prototipagem", step: "02" },
  { icon: Code2, title: "Desenvolvimento Ágil", step: "03" },
  { icon: TestTube, title: "Testes", step: "04" },
  { icon: Rocket, title: "Implantação", step: "05" },
  { icon: HeadsetIcon, title: "Suporte e Evolução", step: "06" },
];

const SoftDevProcess = () => {
  return (
    <section className="py-24 px-6 bg-background/30">
      <div className="max-w-7xl mx-auto">
        <FadeInUpWrapper className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Nosso{" "}
            <span className="gradient-text-primary">Processo</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Metodologia ágil e transparente do início ao fim
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

export default SoftDevProcess;
