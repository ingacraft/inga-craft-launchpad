import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";

const faqs = [
  { q: "Preciso ter estoque para começar?", a: "Não, você pode começar com dropshipping ou produtos digitais." },
  { q: "Quanto tempo leva para ficar pronto?", a: "Entre 15 a 30 dias, dependendo da complexidade." },
  { q: "Preciso de CNPJ?", a: "Recomendamos, mas é possível começar como MEI." },
  { q: "Vou conseguir gerenciar sozinho?", a: "Sim, o painel é intuitivo e damos treinamento completo." },
  { q: "Aceita Pix e cartão?", a: "Sim, todas as principais formas de pagamento." },
];

const EcommerceFAQ = () => {
  return (
    <section className="py-24 px-6 bg-background/30">
      <div className="max-w-3xl mx-auto">
        <FadeInUpWrapper className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Perguntas <span className="gradient-text-primary">Frequentes</span>
          </h2>
        </FadeInUpWrapper>

        <FadeInUpWrapper>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="glass-card rounded-lg border-primary/20 px-6"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeInUpWrapper>
      </div>
    </section>
  );
};

export default EcommerceFAQ;
