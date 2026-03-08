import { Card, CardContent } from "@/components/ui/card";
import { CreditCard, QrCode, FileText, Wallet, Landmark, Smartphone } from "lucide-react";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";

const payments = [
  { icon: CreditCard, title: "Cartões de Crédito", desc: "Visa, Master, Amex, Elo", borderClass: "rotating-border-blue" },
  { icon: CreditCard, title: "Cartões de Débito", desc: "Todas as bandeiras", borderClass: "rotating-border-green" },
  { icon: QrCode, title: "Pix", desc: "Pagamento instantâneo", borderClass: "rotating-border-blue" },
  { icon: FileText, title: "Boleto Bancário", desc: "Compensação em até 3 dias", borderClass: "rotating-border-green" },
  { icon: Landmark, title: "Transferência Bancária", desc: "TED e DOC", borderClass: "rotating-border-blue" },
  { icon: Smartphone, title: "Carteiras Digitais", desc: "Google Pay, Apple Pay", borderClass: "rotating-border-green" },
];

const deliveries = [
  "Integração com Correios",
  "Frete fixo por região",
  "Retirada no local",
  "Entregadores parceiros",
  "Cálculo automático",
];

const EcommercePayments = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <FadeInUpWrapper className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text-primary">Pagamentos</span> e Entregas
          </h2>
        </FadeInUpWrapper>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {payments.map((p, i) => {
            const Icon = p.icon;
            return (
              <FadeInUpWrapper key={p.title} delay={i * 0.1}>
                <Card className={`glass-card text-center hover:scale-105 transition-all duration-300 ${p.borderClass}`}>
                  <CardContent className="pt-6 pb-6">
                    <Icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                    <h3 className="font-bold mb-1">{p.title}</h3>
                    <p className="text-sm text-muted-foreground">{p.desc}</p>
                  </CardContent>
                </Card>
              </FadeInUpWrapper>
            );
          })}
        </div>

        <FadeInUpWrapper>
          <Card className="glass-card rotating-border-blue">
            <CardContent className="pt-8 pb-8">
              <h3 className="text-2xl font-bold text-center mb-6">
                <span className="gradient-text-primary">Entregas e Frete</span>
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {deliveries.map((d) => (
                  <span key={d} className="px-4 py-2 rounded-full bg-muted text-sm font-medium">
                    🚚 {d}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </FadeInUpWrapper>
      </div>
    </section>
  );
};

export default EcommercePayments;
