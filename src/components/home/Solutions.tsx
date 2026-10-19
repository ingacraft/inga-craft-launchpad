import { Link } from "react-router-dom";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";
import SectionHeading from "@/components/brand/SectionHeading";
import { solutions } from "@/config/home";
import { openWhatsApp, siteConfig } from "@/config/site";

const Solutions = () => (
  <section id="solucoes" aria-labelledby="solucoes-title" className="theme-ink py-20 md:py-28">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        id="solucoes-title"
        index="02"
        eyebrow="Soluções"
        title={
          <>
            O que a IngaCraft <span className="text-coral">constrói</span> para sua empresa.
          </>
        }
        description="Cada solução é planejada a partir do seu negócio. Escolha um ponto de partida ou conte o desafio e a gente indica o melhor caminho."
      />

      <ul className="border-t border-border">
        {solutions.map(({ code, icon: Icon, name, description, benefit, route, routeLabel, whatsappMessage }, i) => (
          <FadeInUpWrapper
            as="li"
            key={code}
            delay={i * 0.05}
            className="group relative grid gap-5 border-b border-border py-8 md:grid-cols-12 md:gap-8 md:py-10 transition-colors hover:bg-white/[0.03]"
          >
            <span aria-hidden className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 bg-lime transition-transform duration-300 group-hover:scale-y-100" />

            <div className="flex items-center gap-4 md:col-span-1 md:block md:pl-4">
              <span className="font-mono text-xs text-lime">{code}</span>
              <Icon aria-hidden className="h-5 w-5 text-muted-foreground md:mt-4 group-hover:text-coral transition-colors" />
            </div>

            <h3 className="md:col-span-4 font-display text-2xl sm:text-3xl font-extrabold leading-[1.05] tracking-tight">
              {name}
            </h3>

            <div className="md:col-span-4">
              <p className="text-muted-foreground leading-relaxed">{description}</p>
              <p className="mt-4 flex gap-2 text-sm font-semibold">
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-lime pt-0.5 shrink-0">Benefício</span>
                <span>{benefit}</span>
              </p>
            </div>

            <div className="flex flex-col gap-3 md:col-span-3 md:items-end">
              <Link
                to={route}
                className="inline-flex items-center gap-2 font-semibold underline-offset-4 hover:text-coral hover:underline"
              >
                {routeLabel}
                <ArrowUpRight aria-hidden className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <button
                type="button"
                onClick={() => openWhatsApp(whatsappMessage)}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
              >
                <MessageCircle aria-hidden className="h-4 w-4" />
                Conversar sobre isso
              </button>
            </div>
          </FadeInUpWrapper>
        ))}
      </ul>

      <FadeInUpWrapper className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-lg text-muted-foreground">
          Não encontrou exatamente o que precisa? Projetos sob medida começam por uma boa conversa.
        </p>
        <button
          type="button"
          onClick={() => openWhatsApp(siteConfig.whatsapp.solutions)}
          className="inline-flex h-12 items-center gap-2 rounded-sm bg-lime px-6 text-[15px] font-bold text-ink transition-transform hover:-translate-y-0.5"
        >
          Me ajude a escolher uma solução
          <ArrowUpRight aria-hidden className="h-4 w-4" />
        </button>
      </FadeInUpWrapper>
    </div>
  </section>
);

export default Solutions;
