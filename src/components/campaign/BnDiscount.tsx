import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";
import { bnDiscount } from "@/config/blackNovember";
import storeDesktop from "@/assets/ecommerce-hero.jpg";
import storeMobile from "@/assets/ecommerce-moda.jpg";

/** Destaque do desconto de 50% com mockup de projeto (notebook + celular). */
const BnDiscount = () => (
  <section aria-labelledby="bn-discount-title" className="theme-ink relative overflow-hidden py-20 md:py-28">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
        <FadeInUpWrapper className="lg:col-span-5">
          <p className="eyebrow before:!bg-lime">{bnDiscount.eyebrow}</p>

          <div className="mt-6 flex items-center gap-4">
            <span className="rounded-sm bg-coral px-3 py-1 font-display text-5xl sm:text-6xl font-black tracking-[-0.05em] text-ink shadow-[5px_5px_0_0_hsl(var(--lime))]">
              {bnDiscount.badge}
            </span>
            <span className="max-w-[9rem] font-mono text-[10px] font-semibold uppercase leading-snug tracking-[0.16em] text-lime">
              {bnDiscount.badgeNote}
            </span>
          </div>

          <h2
            id="bn-discount-title"
            className="mt-8 font-display text-4xl sm:text-5xl font-black leading-[0.98] tracking-[-0.04em]"
          >
            {bnDiscount.title.lead} <span className="block text-lime">{bnDiscount.title.highlight}</span>
          </h2>

          <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">{bnDiscount.description}</p>

          <ul className="mt-6 space-y-2.5 text-sm font-semibold">
            {bnDiscount.checks.map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <CheckCircle2 aria-hidden className="h-4 w-4 text-lime" />
                {item}
              </li>
            ))}
          </ul>

          <a
            href="#ofertas"
            className="group mt-10 inline-flex h-12 items-center gap-3 rounded-sm bg-lime px-6 text-[15px] font-bold text-ink shadow-[4px_4px_0_0_hsl(var(--coral))] transition-all hover:-translate-y-0.5 hover:bg-paper"
          >
            {bnDiscount.cta}
            <ArrowUpRight aria-hidden className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </FadeInUpWrapper>

        <FadeInUpWrapper delay={0.12} className="relative lg:col-span-7">
          <figure className="relative pb-10 sm:pl-16">
            <div aria-hidden className="absolute left-1/2 top-1/2 h-[120%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />

            {/* Notebook */}
            <div className="relative rounded-md border border-white/15 bg-paper p-1.5 shadow-2xl">
              <div className="flex items-center gap-1.5 px-2 pb-1.5 pt-0.5">
                <span className="h-1.5 w-1.5 rounded-full bg-coral" />
                <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                <span className="h-1.5 w-1.5 rounded-full bg-ink/30" />
                <span className="mx-auto rounded-sm bg-ink/5 px-6 py-0.5 font-mono text-[9px] text-ink/60">sualoja.com.br</span>
              </div>
              <img
                src={storeDesktop}
                alt="Exemplo de loja virtual exibida em um notebook"
                loading="lazy"
                className="aspect-[16/10] w-full rounded-sm object-cover"
              />
            </div>

            {/* Celular */}
            <div className="absolute -bottom-2 left-0 w-28 sm:w-36 rounded-[1.4rem] border-4 border-ink-soft bg-ink p-1 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.6)] ring-1 ring-white/20">
              <img
                src={storeMobile}
                alt="A mesma loja exibida no celular"
                loading="lazy"
                className="aspect-[9/18] w-full rounded-[1rem] object-cover"
              />
            </div>

            {/* Selo 50% OFF */}
            <div
              aria-hidden
              className="absolute -right-2 -top-8 flex h-24 w-24 sm:h-28 sm:w-28 rotate-6 flex-col items-center justify-center rounded-full bg-lime text-ink shadow-[4px_4px_0_0_hsl(var(--coral))]"
            >
              <span className="font-display text-3xl sm:text-4xl font-black leading-none tracking-[-0.05em]">50%</span>
              <span className="font-display text-sm font-black">OFF</span>
            </div>

            <figcaption className="absolute bottom-0 right-0 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Exemplo de projeto
            </figcaption>
          </figure>
        </FadeInUpWrapper>
      </div>
    </div>
  </section>
);

export default BnDiscount;
