import { MapPin, ArrowUpRight } from "lucide-react";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";
import { aboutContent } from "@/config/home";
import { openWhatsApp, siteConfig } from "@/config/site";
import devStation from "@/assets/dev-station.jpg";

const AboutSection = () => (
  <section id="sobre" aria-labelledby="sobre-title" className="py-20 md:py-28 border-b border-border">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <FadeInUpWrapper className="lg:col-span-6">
          <div className="flex items-center gap-4 mb-5">
            <span className="font-mono text-xs text-muted-foreground">05</span>
            <span className="eyebrow">{aboutContent.eyebrow}</span>
          </div>
          <h2
            id="sobre-title"
            className="font-display text-[2.25rem] leading-[0.98] sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.04em] text-balance"
          >
            {aboutContent.title.lead} <span className="mark-lime">{aboutContent.title.highlight}</span>
          </h2>

          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
            {aboutContent.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="mt-10 relative">
            <div aria-hidden className="absolute inset-0 -translate-x-2 translate-y-2 sm:-translate-x-3 sm:translate-y-3 rounded-sm bg-lime" />
            <figure className="relative overflow-hidden rounded-sm border border-ink bg-ink">
              <img
                src={devStation}
                alt="Estação de trabalho de desenvolvimento de software"
                loading="lazy"
                decoding="async"
                className="h-60 w-full object-cover sm:h-72 opacity-90"
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 bg-ink px-4 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-paper">
                <span className="flex items-center gap-2">
                  <MapPin aria-hidden className="h-3.5 w-3.5 text-lime" />
                  {siteConfig.contact.location}
                </span>
                <span className="text-lime">{siteConfig.name}</span>
              </figcaption>
            </figure>
          </div>
        </FadeInUpWrapper>

        <div className="lg:col-span-6 lg:border-l lg:border-border lg:pl-12">
          <FadeInUpWrapper>
            <p className="eyebrow mb-6">O que nos define</p>
          </FadeInUpWrapper>
          <ul className="grid sm:grid-cols-2 border-t border-l border-border">
            {aboutContent.pillars.map((pillar, i) => (
              <FadeInUpWrapper
                as="li"
                key={pillar.title}
                delay={i * 0.06}
                className="group border-b border-r border-border p-6 transition-colors hover:bg-ink hover:text-paper"
              >
                <span className="font-mono text-xs text-primary-strong group-hover:text-lime">0{i + 1}</span>
                <h3 className="mt-6 font-display text-xl font-extrabold tracking-tight">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground group-hover:text-paper/75">
                  {pillar.body}
                </p>
              </FadeInUpWrapper>
            ))}
          </ul>

          <FadeInUpWrapper delay={0.1} className="mt-10">
            <p className="eyebrow mb-4">Tecnologias com que trabalhamos</p>
            <ul className="flex flex-wrap gap-2">
              {aboutContent.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-sm border border-border px-2.5 py-1 font-mono text-xs text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </FadeInUpWrapper>

          <FadeInUpWrapper delay={0.15} className="mt-10">
            <button
              type="button"
              onClick={() => openWhatsApp(siteConfig.whatsapp.about)}
              className="group inline-flex items-center gap-2 font-display text-lg font-extrabold underline decoration-coral decoration-2 underline-offset-8 hover:decoration-4"
            >
              Conhecer a IngaCraft de perto
              <ArrowUpRight aria-hidden className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </FadeInUpWrapper>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
