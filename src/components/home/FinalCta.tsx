import { ArrowRight, Mail, Phone } from "lucide-react";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";
import { finalCta } from "@/config/home";
import { openWhatsApp, siteConfig } from "@/config/site";

/** CTA final em coral. Mantém a âncora #contato usada por links antigos. */
const FinalCta = () => (
  <section id="contato" aria-labelledby="cta-final-title" className="relative overflow-hidden bg-coral text-ink">
    <div aria-hidden className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rotate-45 border-[28px] border-ink/10" />
    <div aria-hidden className="pointer-events-none absolute right-24 top-16 hidden h-6 w-6 rotate-45 bg-lime md:block" />

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <FadeInUpWrapper>
        <p className="inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.2em]">
          <span aria-hidden className="inline-block h-2 w-2 bg-ink" />
          {finalCta.eyebrow}
        </p>
        <h2
          id="cta-final-title"
          className="mt-6 max-w-5xl font-display text-[2.6rem] leading-[0.92] sm:text-6xl lg:text-7xl xl:text-[5.75rem] font-black tracking-[-0.05em] text-balance"
        >
          {finalCta.title}
        </h2>
      </FadeInUpWrapper>

      <FadeInUpWrapper delay={0.1} className="mt-12 grid gap-10 border-t-2 border-ink pt-10 md:grid-cols-12 md:items-end">
        <div className="md:col-span-7">
          <p className="max-w-lg text-lg font-medium leading-relaxed">{finalCta.description}</p>
          <ul className="mt-6 flex flex-col gap-3 text-sm font-semibold sm:flex-row sm:gap-8">
            <li>
              <a href={`mailto:${siteConfig.contact.email}`} className="inline-flex items-center gap-2 underline-offset-4 hover:underline">
                <Mail aria-hidden className="h-4 w-4" />
                {siteConfig.contact.email}
              </a>
            </li>
            <li>
              <a href={`tel:${siteConfig.contact.phone}`} className="inline-flex items-center gap-2 font-mono underline-offset-4 hover:underline">
                <Phone aria-hidden className="h-4 w-4" />
                {siteConfig.contact.phoneFormatted}
              </a>
            </li>
          </ul>
        </div>
        <div className="md:col-span-5 md:flex md:justify-end">
          <button
            type="button"
            onClick={() => openWhatsApp(siteConfig.whatsapp.finalCta)}
            className="group inline-flex w-full items-center justify-center gap-3 rounded-sm bg-ink px-8 py-5 text-base font-bold text-paper transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0_0_hsl(var(--lime))] focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-coral sm:w-auto"
          >
            {finalCta.cta}
            <ArrowRight aria-hidden className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </FadeInUpWrapper>
    </div>
  </section>
);

export default FinalCta;
