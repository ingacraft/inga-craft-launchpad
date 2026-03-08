import { Card, CardContent } from "@/components/ui/card";
import { Package, Users, ClipboardList, DollarSign, CalendarDays, UserCog } from "lucide-react";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";

const useCases = [
  { icon: Package, title: "Controle de Estoque", color: "text-primary" },
  { icon: Users, title: "Gestão de Clientes (CRM)", color: "text-secondary" },
  { icon: ClipboardList, title: "Ordens de Serviço", color: "text-primary" },
  { icon: DollarSign, title: "Financeiro", color: "text-secondary" },
  { icon: CalendarDays, title: "Agendamentos", color: "text-primary" },
  { icon: UserCog, title: "RH e Ponto Eletrônico", color: "text-secondary" },
];

const SoftDevUseCases = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <FadeInUpWrapper className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Para que{" "}
            <span className="gradient-text-primary">serve?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Casos de uso mais comuns dos nossos sistemas
          </p>
        </FadeInUpWrapper>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            const borderClass = index % 2 === 0 ? "rotating-border-blue" : "rotating-border-green";
            return (
              <FadeInUpWrapper key={useCase.title} delay={index * 0.1}>
                <Card className={`glass-card hover:scale-105 transition-all duration-300 ${borderClass}`}>
                  <CardContent className="pt-8 pb-8 flex flex-col items-center text-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <p className="text-lg font-semibold">{useCase.title}</p>
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

export default SoftDevUseCases;
