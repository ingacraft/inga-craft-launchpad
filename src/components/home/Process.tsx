import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";
import SectionHeading from "@/components/brand/SectionHeading";
import { processSteps } from "@/config/home";
import { openWhatsApp, siteConfig } from "@/config/site";

gsap.registerPlugin(ScrollTrigger);

const Process = () => {
  const lineRef = useRef<HTMLDivElement>(null);

  // Linha de progresso acompanha o scroll (desligada com prefers-reduced-motion)
  useEffect(() => {
    const line = lineRef.current;
    if (!line || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        line,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: { trigger: line, start: "top 85%", end: "top 35%", scrub: true },
        },
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="como-trabalhamos" aria-labelledby="processo-title" className="py-20 md:py-28 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="processo-title"
          index="03"
          eyebrow="Como trabalhamos"
          title={
            <>
              Um processo claro, do primeiro café ao <span className="mark-lime">próximo ciclo.</span>
            </>
          }
          description="Quatro etapas para você saber o que está acontecendo no seu projeto, por que está acontecendo e o que vem depois."
        />

        <div className="relative">
          <div aria-hidden className="hidden lg:block absolute left-0 right-0 top-0 h-px bg-border" />
          <div aria-hidden ref={lineRef} className="hidden lg:block absolute left-0 right-0 top-0 h-[3px] -translate-y-px origin-left bg-coral" />

          <ol className="grid gap-0 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <FadeInUpWrapper
                as="li"
                key={step.n}
                delay={i * 0.1}
                className="group relative border-t border-border py-8 lg:border-t-0 lg:border-l lg:first:border-l-0 lg:px-6 lg:first:pl-0 lg:pt-10 lg:pb-0"
              >
                <span aria-hidden className="hidden lg:block absolute -top-[5px] lg:left-6 lg:group-first:left-0 h-2.5 w-2.5 bg-ink" />
                <div className="flex items-baseline gap-4 lg:block">
                  <span className="font-display text-6xl lg:text-8xl font-black leading-none tracking-[-0.06em] text-transparent [-webkit-text-stroke:1.5px_hsl(var(--ink))] transition-colors duration-300 group-hover:text-coral group-hover:[-webkit-text-stroke:1.5px_hsl(var(--coral))]">
                    {step.n}
                  </span>
                  <h3 className="font-display text-2xl lg:mt-8 lg:text-3xl font-extrabold tracking-tight">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-4 text-muted-foreground leading-relaxed lg:max-w-[16rem]">{step.body}</p>
              </FadeInUpWrapper>
            ))}
          </ol>
        </div>

        <FadeInUpWrapper className="mt-14">
          <button
            type="button"
            onClick={() => openWhatsApp(siteConfig.whatsapp.process)}
            className="group inline-flex items-center gap-3 font-display text-lg font-extrabold underline decoration-coral decoration-2 underline-offset-8 hover:decoration-4"
          >
            Começar pela etapa de entendimento
            <ArrowRight aria-hidden className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </FadeInUpWrapper>
      </div>
    </section>
  );
};

export default Process;
