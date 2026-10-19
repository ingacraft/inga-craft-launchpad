import { Check } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";
import SectionHeading from "@/components/brand/SectionHeading";
import ServiceHero from "@/components/service/ServiceHero";
import ServiceCTA from "@/components/service/ServiceCTA";
import { processSteps } from "@/config/home";
import type { ServiceDetailContent } from "@/config/servicePages";
import { usePageMeta } from "@/hooks/usePageMeta";

interface ServiceDetailProps {
  content: ServiceDetailContent;
}

/** Página de serviço gerada a partir de `src/config/servicePages.ts`. */
const ServiceDetail = ({ content }: ServiceDetailProps) => {
  const { seo, hero, benefits, build, features, cta } = content;
  usePageMeta(seo.title, seo.description);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <ServiceHero
          eyebrow={hero.eyebrow}
          title={
            <>
              {hero.titleLead} <span className="text-coral">{hero.titleHighlight}</span>
            </>
          }
          description={hero.description}
          image={hero.image}
          imageAlt={hero.imageAlt}
          primaryLabel={hero.primaryLabel}
          whatsappMessage={hero.whatsappMessage}
          secondaryLabel="Ver o que está incluído"
          secondaryTarget="beneficios"
        />

        {/* Benefícios */}
        <section id="beneficios" aria-labelledby="beneficios-title" className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              id="beneficios-title"
              index="01"
              eyebrow="Benefícios"
              title={
                <>
                  O que muda na sua <span className="mark-lime">operação.</span>
                </>
              }
            />
            <div className="grid gap-4 md:grid-cols-3 md:gap-5">
              {benefits.map(({ icon: Icon, title, items }, i) => (
                <FadeInUpWrapper key={title} delay={i * 0.08} className="h-full">
                  <article className="group flex h-full flex-col rounded-sm border border-border bg-card p-6 lg:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-foreground hover:shadow-[6px_6px_0_0_hsl(var(--ink))]">
                    <div className="flex items-start justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-sm border border-foreground transition-colors duration-300 group-hover:border-lime group-hover:bg-lime">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                    </div>
                    <h3 className="mt-10 font-display text-2xl font-extrabold leading-[1.05] tracking-tight">{title}</h3>
                    <ul className="mt-5 space-y-2.5">
                      {items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-muted-foreground">
                          <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 bg-coral" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                </FadeInUpWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* O que podemos construir / conectar */}
        <section aria-labelledby="construir-title" className="theme-ink py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              id="construir-title"
              index="02"
              eyebrow={build.eyebrow}
              title={build.title}
              description={build.description}
            />
            <ul className="grid border-t border-l border-border sm:grid-cols-2 lg:grid-cols-3">
              {build.items.map(({ icon: Icon, title, description }, i) => (
                <FadeInUpWrapper
                  as="li"
                  key={title}
                  delay={(i % 3) * 0.06}
                  className="group border-b border-r border-border p-6 lg:p-8 transition-colors hover:bg-white/[0.03]"
                >
                  <div className="flex items-center justify-between">
                    <Icon aria-hidden className="h-6 w-6 text-lime transition-colors group-hover:text-coral" />
                    <span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="mt-8 font-display text-xl font-extrabold tracking-tight">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
                </FadeInUpWrapper>
              ))}
            </ul>
          </div>
        </section>

        {/* Recursos */}
        <section aria-labelledby="recursos-title" className="bg-[hsl(var(--surface-b))] py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-12 lg:gap-16">
            <FadeInUpWrapper className="lg:col-span-5">
              <div className="flex items-center gap-4 mb-5">
                <span className="font-mono text-xs text-muted-foreground">03</span>
                <span className="eyebrow">Recursos</span>
              </div>
              <h2
                id="recursos-title"
                className="font-display text-[2.25rem] leading-[0.98] sm:text-5xl font-extrabold tracking-[-0.04em] text-balance"
              >
                {features.title}
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Cada projeto tem o escopo definido com você. Estes são recursos que costumam fazer parte da solução.
              </p>
            </FadeInUpWrapper>
            <FadeInUpWrapper delay={0.1} className="lg:col-span-7">
              <ul className="grid gap-3 sm:grid-cols-2">
                {features.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-sm border border-border bg-card px-4 py-4 font-semibold transition-colors hover:border-foreground"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center bg-lime">
                      <Check aria-hidden className="h-3.5 w-3.5 text-ink" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </FadeInUpWrapper>
          </div>
        </section>

        {/* Processo */}
        <section aria-labelledby="processo-servico-title" className="py-20 md:py-28 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              id="processo-servico-title"
              index="04"
              eyebrow="Como trabalhamos"
              title="Do entendimento à evolução."
              description="O mesmo processo claro que aplicamos em todos os projetos da IngaCraft."
            />
            <ol className="grid border-t border-border lg:grid-cols-4">
              {processSteps.map((step, i) => (
                <FadeInUpWrapper
                  as="li"
                  key={step.n}
                  delay={i * 0.08}
                  className="border-b border-border py-8 lg:border-b-0 lg:border-l lg:first:border-l-0 lg:px-6 lg:first:pl-0"
                >
                  <span className="font-mono text-xs text-primary-strong">{step.n}</span>
                  <h3 className="mt-4 font-display text-2xl font-extrabold tracking-tight">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                </FadeInUpWrapper>
              ))}
            </ol>
          </div>
        </section>

        <ServiceCTA
          title={cta.title}
          description={cta.description}
          label={cta.label}
          whatsappMessage={cta.whatsappMessage}
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServiceDetail;
