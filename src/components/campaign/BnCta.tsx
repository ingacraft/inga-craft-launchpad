import { ArrowUpRight } from "lucide-react";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";
import { bnCta } from "@/config/blackNovember";
import { openWhatsApp } from "@/config/site";

/** Faixa coral que fecha o bloco da Black November. */
const BnCta = () => (
  <section aria-labelledby="bn-cta-title" className="relative overflow-hidden border-b-4 border-lime bg-coral text-ink">
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
      <FadeInUpWrapper className="grid gap-8 md:grid-cols-12 md:items-center">
        <div className="relative md:col-span-8">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em]">{bnCta.eyebrow}</p>
          <h2
            id="bn-cta-title"
            className="mt-3 font-display text-[2.4rem] leading-[0.95] sm:text-5xl lg:text-6xl font-black tracking-[-0.05em]"
          >
            {bnCta.title.lead} <span className="block text-paper">{bnCta.title.highlight}</span>
          </h2>
          <p className="mt-4 text-sm font-medium">{bnCta.description}</p>
          <span aria-hidden className="absolute right-0 top-0 hidden font-display text-6xl font-black md:block">
            ✳
          </span>
        </div>
        <div className="md:col-span-4 md:flex md:justify-end">
          <button
            type="button"
            onClick={() => openWhatsApp(bnCta.whatsappMessage)}
            className="group inline-flex h-12 items-center gap-6 rounded-sm bg-ink px-6 text-[15px] font-bold text-paper shadow-[4px_4px_0_0_hsl(var(--ink)/0.35)] transition-all hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_hsl(var(--lime))]"
          >
            {bnCta.cta}
            <ArrowUpRight aria-hidden className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </button>
        </div>
      </FadeInUpWrapper>
    </div>
  </section>
);

export default BnCta;
