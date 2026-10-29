import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import BnLeadForm from "@/components/campaign/BnLeadForm";
import { bnHero } from "@/config/blackNovember";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease },
});

/** Hero da Black November com o formulário que abre o WhatsApp. */
const BnHero = () => (
  <section aria-labelledby="bn-hero-title" className="relative overflow-hidden bg-card">
    <div aria-hidden className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full border border-border" />

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12 md:pt-20">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-12 items-center">
        <div className="lg:col-span-6 xl:col-span-7">
          <motion.p
            {...fadeUp(0)}
            className="flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-primary-strong"
          >
            <span aria-hidden className="h-px w-8 bg-coral" />
            {bnHero.eyebrow}
          </motion.p>

          <motion.h1
            id="bn-hero-title"
            {...fadeUp(0.08)}
            className="mt-6 font-display font-black text-[2.9rem] leading-[0.95] sm:text-6xl xl:text-7xl tracking-[-0.05em] text-balance"
          >
            {bnHero.title.lead} <span className="text-coral">{bnHero.title.highlight}</span>
            {bnHero.title.tail}
          </motion.h1>

          <motion.p {...fadeUp(0.16)} className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
            {bnHero.description}
          </motion.p>

          <motion.div {...fadeUp(0.24)} className="mt-10 flex flex-wrap items-center gap-6">
            <Button asChild variant="hero" size="lg" className="group shadow-[4px_4px_0_0_hsl(var(--ink))]">
              <a href="#ofertas">
                {bnHero.primaryCta}
                <ArrowUpRight className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </Button>
            <a
              href="#por-que-ter-um-site"
              className="group inline-flex items-center gap-2 border-b-2 border-coral pb-1 text-[15px] font-bold transition-colors hover:text-primary-strong"
            >
              {bnHero.secondaryCta}
              <ArrowDownRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </motion.div>

          <motion.ul {...fadeUp(0.32)} className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
            {bnHero.checks.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <Check aria-hidden className="h-4 w-4 text-coral" strokeWidth={3} />
                {item}
              </li>
            ))}
          </motion.ul>

          <motion.p
            {...fadeUp(0.4)}
            aria-hidden
            className="mt-12 flex items-end gap-3 font-display text-4xl sm:text-5xl font-black tracking-[-0.05em]"
          >
            <span className="text-foreground/15">BLACK</span>
            <span className="text-coral">NOVEMBER</span>
            <span className="mb-1.5 font-mono text-xs font-medium tracking-[0.2em] text-muted-foreground">2026 ↗</span>
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
          className="relative lg:col-span-6 xl:col-span-5"
        >
          <span
            aria-hidden
            className="absolute -top-4 right-4 z-10 rotate-6 rounded-sm border border-ink bg-lime px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-ink"
          >
            Vamos conversar? ↘
          </span>
          <div aria-hidden className="absolute inset-0 translate-x-3 translate-y-3 rounded-sm bg-lime" />
          <div className="relative">
            <BnLeadForm />
          </div>
        </motion.div>
      </div>

      <div className="mt-16 flex items-center justify-between border-t border-border pt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        <span>IngaCraft · Black November</span>
        <a href="#por-que-ter-um-site" className="inline-flex items-center gap-2 hover:text-foreground">
          Role para descobrir <ArrowDownRight aria-hidden className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  </section>
);

export default BnHero;
