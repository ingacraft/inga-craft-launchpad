import { MessageCircle } from "lucide-react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Accordion, AccordionContent, AccordionItem } from "@/components/ui/accordion";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";
import { campaignFaq, faqItems } from "@/config/home";
import { isCampaignActive } from "@/config/campaign";
import { openWhatsApp, siteConfig } from "@/config/site";

const Faq = () => {
  const items = isCampaignActive() ? [...faqItems, campaignFaq] : faqItems;

  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-[hsl(var(--surface-b))] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <FadeInUpWrapper className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <div className="flex items-center gap-4 mb-5">
                <span className="font-mono text-xs text-muted-foreground">06</span>
                <span className="eyebrow">FAQ</span>
              </div>
              <h2
                id="faq-title"
                className="font-display text-[2.25rem] leading-[0.98] sm:text-5xl font-extrabold tracking-[-0.04em]"
              >
                Perguntas <span className="text-coral">frequentes.</span>
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                O essencial para começar. Se a sua dúvida não estiver aqui, fale direto com a gente.
              </p>
              <button
                type="button"
                onClick={() => openWhatsApp(siteConfig.whatsapp.faq)}
                className="mt-8 inline-flex h-11 items-center gap-2 rounded-sm border border-foreground px-5 text-sm font-bold transition-colors hover:bg-foreground hover:text-background"
              >
                <MessageCircle aria-hidden className="h-4 w-4" />
                Tirar minha dúvida no WhatsApp
              </button>
            </div>
          </FadeInUpWrapper>

          <FadeInUpWrapper delay={0.1} className="lg:col-span-8">
            <Accordion type="single" collapsible className="border-t-2 border-foreground">
              {items.map((item, i) => (
                <AccordionItem key={item.q} value={`faq-${i}`} className="border-b border-border">
                  <AccordionPrimitive.Header asChild>
                    <h3>
                      <AccordionPrimitive.Trigger className="group flex w-full items-start justify-between gap-6 py-6 text-left font-display text-lg sm:text-xl font-extrabold tracking-tight transition-colors hover:text-primary-strong">
                        <span className="flex gap-4">
                          <span className="font-mono text-xs font-normal text-muted-foreground pt-1.5">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          {item.q}
                        </span>
                        <span
                          aria-hidden
                          className="relative mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-sm border border-foreground transition-colors group-data-[state=open]:bg-lime group-data-[state=open]:border-lime"
                        >
                          <span className="absolute h-0.5 w-3 bg-foreground group-data-[state=open]:bg-ink" />
                          <span className="absolute h-3 w-0.5 bg-foreground transition-transform duration-200 group-data-[state=open]:rotate-90 group-data-[state=open]:bg-ink" />
                        </span>
                      </AccordionPrimitive.Trigger>
                    </h3>
                  </AccordionPrimitive.Header>
                  <AccordionContent className="pb-6 pl-9 pr-12 text-base leading-relaxed text-muted-foreground">
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
};

export default Faq;
