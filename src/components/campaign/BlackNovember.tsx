import { ArrowRight, ArrowUpRight, Check, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";
import CampaignSeal from "@/components/campaign/CampaignSeal";
import { Button } from "@/components/ui/button";
import { campaignConfig, isCampaignActive } from "@/config/campaign";
import { openWhatsApp } from "@/config/site";
import { cn } from "@/lib/utils";

const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString("pt-BR", { day: "2-digit", month: "long" });

/**
 * Seção especial e temporária da campanha Black November.
 * Todo o conteúdo vem de `src/config/campaign.ts`; desative por lá.
 */
const BlackNovember = () => {
  if (!isCampaignActive()) return null;

  const { badge, discount, validUntil, title, description, offers, whatsappMessage } = campaignConfig;

  return (
    <section
      id="black-november"
      aria-labelledby="black-november-title"
      className="theme-ink relative overflow-hidden py-20 md:py-28"
    >
      {/* Palavra gigante vazada ao fundo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-4 top-6 select-none font-display text-[22vw] font-black leading-none tracking-[-0.06em] text-transparent [-webkit-text-stroke:1px_hsl(var(--paper)/0.08)]"
      >
        BLACK
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <FadeInUpWrapper className="lg:col-span-8">
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className="rounded-sm bg-coral px-3 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-ink">
                {badge}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Campanha por tempo limitado
              </span>
            </div>

            <h2
              id="black-november-title"
              className="font-display text-[2.6rem] leading-[0.92] sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-black tracking-[-0.05em] text-balance"
            >
              {title.lead} <span className="text-coral">{title.highlight}</span>
              {title.tail}
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">{description}</p>
          </FadeInUpWrapper>

          <FadeInUpWrapper delay={0.1} className="lg:col-span-4 flex flex-col items-start gap-6 lg:items-end">
            <CampaignSeal text={badge} className="w-36 sm:w-44" />
            {discount && (
              <p className="font-display text-5xl font-black tracking-[-0.04em] text-lime">{discount}</p>
            )}
            {validUntil && (
              <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                <Clock aria-hidden className="h-4 w-4" />
                Válido até {formatDate(validUntil)}
              </p>
            )}
          </FadeInUpWrapper>
        </div>

        {/* Grade assimétrica: 3 cards na primeira linha e 2 mais largos na segunda (desktop) */}
        <ul className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {offers.map((offer, i) => (
            <FadeInUpWrapper
              as="li"
              key={offer.id}
              delay={(i % 3) * 0.08}
              className={cn(
                "h-full",
                i < 3 ? "lg:col-span-2" : "lg:col-span-3",
                i === offers.length - 1 && offers.length % 2 === 1 && "md:col-span-2",
              )}
            >
              <article className="group flex h-full flex-col rounded-sm border border-white/15 bg-ink-soft p-6 lg:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-lime hover:shadow-[6px_6px_0_0_hsl(var(--coral))]">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <span className="font-mono text-xs text-lime">Oferta 0{i + 1}</span>
                  <span aria-hidden className="h-2.5 w-2.5 bg-coral transition-transform duration-300 group-hover:rotate-45" />
                </div>

                <h3 className="mt-6 font-display text-2xl lg:text-3xl font-extrabold leading-[1.05] tracking-tight">
                  {offer.name}
                </h3>

                <p className="mt-4 text-sm leading-relaxed">
                  <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-1">
                    Para quem é
                  </span>
                  {offer.audience}
                </p>

                <div className="mt-6">
                  <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-3">
                    O que inclui
                  </span>
                  <ul className="space-y-2.5">
                    {offer.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm">
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center bg-lime">
                          <Check aria-hidden className="h-3 w-3 text-ink" strokeWidth={3} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {offer.deadline && (
                  <p className="mt-6 flex items-start gap-2 text-xs text-muted-foreground">
                    <Clock aria-hidden className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                    Prazo estimado — {offer.deadline}
                  </p>
                )}

                <div className="mt-auto pt-8">
                  <Button
                    variant="lime"
                    size="lg"
                    className="group/btn w-full"
                    onClick={() => openWhatsApp(offer.whatsappMessage)}
                    aria-label={`Quero esta condição: ${offer.name} (abre o WhatsApp)`}
                  >
                    Quero esta condição
                    <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                  <Link
                    to={offer.route}
                    className="mt-3 flex items-center justify-center gap-1.5 py-1 text-sm font-semibold text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                  >
                    Ver detalhes da solução
                    <ArrowUpRight aria-hidden className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </FadeInUpWrapper>
          ))}
        </ul>

        <FadeInUpWrapper className="mt-12 flex flex-col gap-5 border-t border-border pt-8 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl text-sm text-muted-foreground">
            As condições especiais são apresentadas na conversa, de acordo com o escopo de cada projeto.
          </p>
          <Button variant="hero" size="lg" className="group" onClick={() => openWhatsApp(whatsappMessage)}>
            Ver condições da Black November
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </FadeInUpWrapper>
      </div>
    </section>
  );
};

export default BlackNovember;
