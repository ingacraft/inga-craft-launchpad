import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem } from "@/components/ui/accordion";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";
import { bnFaq } from "@/config/blackNovember";

/** Dúvidas da campanha Black November. */
const BnFaq = () => (
  <section id="duvidas" aria-labelledby="bn-faq-title" className="bg-card py-20 md:py-28">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <FadeInUpWrapper className="lg:col-span-5">
          <p className="eyebrow">{bnFaq.eyebrow}</p>
          <h2
            id="bn-faq-title"
            className="mt-5 font-display text-[2.5rem] leading-[0.95] sm:text-6xl font-black tracking-[-0.05em]"
          >
            {bnFaq.title.lead} <span className="block text-coral">{bnFaq.title.highlight}</span>
          </h2>
          <p className="mt-6 max-w-sm text-muted-foreground leading-relaxed">{bnFaq.description}</p>
        </FadeInUpWrapper>

        <FadeInUpWrapper delay={0.1} className="lg:col-span-7">
          <Accordion type="single" collapsible className="border-t border-border">
            {bnFaq.items.map((item, i) => (
              <AccordionItem key={item.q} value={`bn-faq-${i}`} className="border-b border-border">
                <AccordionPrimitive.Header asChild>
                  <h3>
                    <AccordionPrimitive.Trigger className="group flex w-full items-center justify-between gap-6 py-5 text-left font-display text-base sm:text-lg font-extrabold tracking-tight transition-colors hover:text-primary-strong">
                      {item.q}
                      <Plus
                        aria-hidden
                        className="h-5 w-5 shrink-0 text-coral transition-transform duration-200 group-data-[state=open]:rotate-45"
                      />
                    </AccordionPrimitive.Trigger>
                  </h3>
                </AccordionPrimitive.Header>
                <AccordionContent className="pb-5 pr-10 text-base leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeInUpWrapper>
      </div>
    </div>
  </section>
);

export default BnFaq;
