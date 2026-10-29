import { ArrowUpRight, CalendarClock, Check, Clock } from "lucide-react";
import SectionHeading from "@/components/brand/SectionHeading";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";
import { bnPlans, bnPlansIntro } from "@/config/blackNovember";
import { openWhatsApp } from "@/config/site";
import { cn } from "@/lib/utils";

/** Cards de preço da Black November. Cada CTA abre o WhatsApp com o plano escolhido. */
const BnPlans = () => (
  <section id="ofertas" aria-labelledby="bn-plans-title" className="bg-card py-20 md:py-28">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        id="bn-plans-title"
        eyebrow={bnPlansIntro.eyebrow}
        title={
          <>
            {bnPlansIntro.title.lead} <span className="block text-coral">{bnPlansIntro.title.highlight}</span>
          </>
        }
        description={bnPlansIntro.description}
      />

      <FadeInUpWrapper className="mb-4 flex items-start gap-3 rounded-sm bg-ink px-5 py-4 text-sm text-paper">
        <CalendarClock aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-lime" />
        <p>
          <strong>{bnPlansIntro.notice.strong}</strong> {bnPlansIntro.notice.rest}
        </p>
      </FadeInUpWrapper>

      <ul className="grid gap-4 md:grid-cols-3">
        {bnPlans.map((plan, i) => (
          <FadeInUpWrapper as="li" key={plan.id} delay={i * 0.08} className="h-full">
            <article
              className={cn(
                "flex h-full flex-col rounded-sm border p-6 lg:p-7",
                plan.featured ? "border-coral bg-coral text-ink" : "border-border bg-[hsl(var(--surface-b))]",
              )}
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-ink px-3 py-1 font-mono text-[10px] font-semibold text-lime">
                  <Clock aria-hidden className="h-3 w-3" />
                  {plan.deadline}
                </span>
                <span
                  className={cn(
                    "rounded-full px-3 py-1 font-mono text-[10px] font-semibold",
                    plan.featured ? "bg-lime text-ink" : "border border-border bg-card text-foreground",
                  )}
                >
                  {plan.tag}
                </span>
              </div>

              <h3 className="mt-8 font-display text-2xl lg:text-3xl font-black tracking-[-0.03em]">{plan.name}</h3>
              <p className={cn("mt-3 text-sm leading-relaxed", plan.featured ? "text-ink/85" : "text-muted-foreground")}>
                {plan.description}
              </p>
              <p className="mt-4 text-sm font-bold">{plan.audience}</p>

              <ul className={cn("mt-5 mb-8 space-y-2.5 border-t pt-5", plan.featured ? "border-ink/25" : "border-border")}>
                {plan.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <Check
                      aria-hidden
                      className={cn("mt-0.5 h-4 w-4 shrink-0", plan.featured ? "text-ink" : "text-coral")}
                      strokeWidth={2.5}
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <div className={cn("mt-auto border-t pt-5", plan.featured ? "border-ink/25" : "border-border")}>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em]">Valor Black November</p>
                <p className="mt-2 flex items-center gap-2 text-sm">
                  <span className="line-through opacity-70">De {plan.originalPrice}</span>
                  <span className="rounded-sm bg-ink px-1.5 py-0.5 font-mono text-[10px] font-bold text-lime">50% OFF</span>
                </p>
                <p className="mt-1 font-display text-4xl font-black tracking-[-0.04em]">por {plan.price}</p>
                <p className={cn("mt-1 text-xs font-bold", plan.featured ? "text-ink" : "text-primary-strong")}>
                  Você economiza {plan.savings}
                </p>

                <button
                  type="button"
                  onClick={() => openWhatsApp(plan.whatsappMessage)}
                  aria-label={`${plan.cta} por ${plan.price} (abre o WhatsApp)`}
                  className={cn(
                    "group mt-6 flex h-12 w-full items-center justify-between rounded-sm border-2 border-ink px-4 text-[15px] font-bold transition-all hover:-translate-y-0.5",
                    plan.featured
                      ? "bg-lime text-ink shadow-[4px_4px_0_0_hsl(var(--ink))]"
                      : "bg-ink text-paper shadow-[4px_4px_0_0_hsl(var(--coral))]",
                  )}
                >
                  {plan.cta}
                  <span
                    aria-hidden
                    className={cn(
                      "flex h-6 w-6 items-center justify-center rounded-sm",
                      plan.featured ? "bg-ink text-lime" : "bg-lime text-ink",
                    )}
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </button>
              </div>
            </article>
          </FadeInUpWrapper>
        ))}
      </ul>

      <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-muted-foreground">
        <span aria-hidden className="mr-2 text-coral">✳</span>
        {bnPlansIntro.footnote[0]}
        <br />
        {bnPlansIntro.footnote[1]}
      </p>
    </div>
  </section>
);

export default BnPlans;
