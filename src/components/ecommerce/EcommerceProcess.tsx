import { Card, CardContent } from "@/components/ui/card";
import { ClipboardList, Palette, Code2, TestTube, GraduationCap, Rocket, HeadsetIcon } from "lucide-react";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";

const steps = [
  { icon: ClipboardList, title: "Planejamento", desc: "Definição de categorias e produtos", step: "01" },
  { icon: Palette, title: "Design", desc: "Layout personalizado para sua marca", step: "02" },
  { icon: Code2, title: "Desenvolvimento", desc: "Configuração de todas as funcionalidades", step: "03" },
  { icon: TestTube, title: "Testes", desc: "Compra teste, checkout, pagamentos", step: "04" },
  { icon: GraduationCap, title: "Treinamento", desc: "Você aprende a gerenciar sua loja", step: "05" },
  { icon: Rocket, title: "Lançamento", desc: "Sua loja no ar", step: "06" },
  { icon: HeadsetIcon, title: "Suporte", desc: "Acompanhamento contínuo", step: "07" },
];

const EcommerceProcess = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <FadeInUpWrapper className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Nosso <span className="gradient-text-primary">Processo</span>
          </h2>
        </FadeInUpWrapper>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const borderClass = index % 2 === 0 ? "rotating-border-blue" : "rotating-border-green";
            return (
              <FadeInUpWrapper key={step.title} delay={index * 0.1}>
                <Card className={`glass-card hover:scale-105 transition-all duration-300 ${borderClass}`}>
                  <CardContent className="pt-6 pb-6 flex flex-col items-center text-center gap-2">
                    <span className="text-2xl font-bold text-primary">{step.step}</span>
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <p className="text-sm font-bold leading-tight">{step.title}</p>
                    <p className="text-xs text-muted-foreground">{step.desc}</p>
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

export default EcommerceProcess;
