import { Link } from "react-router-dom";
import { ArrowUpRight, Info } from "lucide-react";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";
import SectionHeading from "@/components/brand/SectionHeading";
import { buildableSolutions } from "@/config/home";
import { openWhatsApp, siteConfig } from "@/config/site";

/**
 * Ainda não há cases publicados: a seção mostra tipos de solução
 * que a IngaCraft constrói, deixando claro que as imagens são ilustrativas.
 */
const Projects = () => (
  <section id="projetos" aria-labelledby="projetos-title" className="bg-[hsl(var(--surface-b))] py-20 md:py-28">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        id="projetos-title"
        index="04"
        eyebrow="Projetos"
        title={
          <>
            Soluções que <span className="text-coral">podemos construir.</span>
          </>
        }
        description="Alguns formatos de projeto que desenvolvemos. As imagens são ilustrativas e servem como referência do tipo de entrega."
      />

      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {buildableSolutions.map((item, i) => (
          <FadeInUpWrapper
            as="li"
            key={item.type}
            delay={(i % 3) * 0.08}
            className="lg:[&:nth-child(3n+2)]:mt-12"
          >
            <article className="group flex h-full flex-col rounded-sm border border-border bg-card transition-colors hover:border-foreground">
              <div className="relative aspect-[4/3] overflow-hidden border-b border-border bg-ink">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover grayscale-[35%] transition-all duration-700 group-hover:scale-[1.04] group-hover:grayscale-0"
                />
                <span className="absolute left-3 top-3 rounded-sm bg-lime px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-ink">
                  {item.type}
                </span>
                <span className="absolute right-3 top-3 rounded-sm bg-ink/80 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-paper">
                  Ilustrativo
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5 lg:p-6">
                <h3 className="font-display text-xl font-extrabold tracking-tight">{item.type}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                <Link
                  to={item.route}
                  className="mt-6 inline-flex items-center gap-2 self-start text-sm font-bold underline decoration-coral decoration-2 underline-offset-4 hover:text-primary-strong"
                >
                  Conhecer a solução
                  <ArrowUpRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </article>
          </FadeInUpWrapper>
        ))}
      </ul>

      <FadeInUpWrapper className="mt-14 lg:mt-20 flex flex-col gap-5 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-start gap-3 max-w-xl text-sm text-muted-foreground">
          <Info aria-hidden className="mt-0.5 h-4 w-4 shrink-0" />
          Tem uma ideia que não está aqui? Projetos sob medida são o centro do nosso trabalho.
        </p>
        <button
          type="button"
          onClick={() => openWhatsApp(siteConfig.whatsapp.projects)}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-ink px-6 text-[15px] font-bold text-paper transition-colors hover:bg-coral hover:text-ink"
        >
          Quero construir minha solução
          <ArrowUpRight aria-hidden className="h-4 w-4" />
        </button>
      </FadeInUpWrapper>
    </div>
  </section>
);

export default Projects;
