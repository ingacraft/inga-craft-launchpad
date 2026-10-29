import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { heroContent } from "@/config/home";
import { siteConfig, openWhatsApp } from "@/config/site";
import BriefingForm from "@/components/home/BriefingForm";
import { isCampaignActive } from "@/config/campaign";

const ease = [0.22, 1, 0.36, 1] as const;

// Revela ao entrar na tela: com a campanha ativa, este hero fica abaixo da dobra
const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, delay, ease },
});

const HomeHero = () => {
  // O h1 da página passa a ser o da campanha enquanto ela estiver ativa
  const Title = isCampaignActive() ? motion.h2 : motion.h1;

  return (
  <section aria-labelledby="hero-title" className="relative overflow-hidden border-b border-border">
    <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 md:pt-20 md:pb-24">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-10 items-center">
        {/* Mensagem */}
        <div className="lg:col-span-6 xl:col-span-7">
          <motion.p {...fadeUp(0)} className="eyebrow mb-6">
            {heroContent.eyebrow}
          </motion.p>

          <Title
            id="hero-title"
            {...fadeUp(0.08)}
            className="font-display font-black text-[2.9rem] leading-[0.92] sm:text-7xl xl:text-[6.25rem] tracking-[-0.05em] text-balance"
          >
            {heroContent.title.lead}{" "}
            <span className="relative isolate inline-block text-coral">
              {heroContent.title.highlight}
              <span aria-hidden className="absolute left-0 right-[0.3em] -bottom-1 h-2 sm:h-3 bg-lime -z-10" />
            </span>
          </Title>

          <motion.p {...fadeUp(0.16)} className="mt-8 max-w-xl text-lg sm:text-xl leading-relaxed text-muted-foreground">
            {heroContent.description}
          </motion.p>

          <motion.div {...fadeUp(0.24)} className="mt-10 flex flex-col sm:flex-row gap-3">
            <Button
              variant="hero"
              size="lg"
              className="group h-auto min-h-12 whitespace-normal py-3"
              onClick={() => openWhatsApp(siteConfig.whatsapp.hero)}
            >
              {heroContent.primaryCta}
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button asChild variant="outline" size="lg" className="group">
              <Link
                to={{ hash: "#solucoes" }}
                onClick={() => document.getElementById("solucoes")?.scrollIntoView()}
              >
                {heroContent.secondaryCta}
                <ArrowDown className="group-hover:translate-y-0.5 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          <motion.ul
            {...fadeUp(0.32)}
            aria-label="Nossa abordagem"
            className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border pt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground"
          >
            {heroContent.tags.map((tag, i) => (
              <li key={tag} className="flex items-center gap-2">
                <span className="text-foreground">0{i + 1}</span> {tag}
              </li>
            ))}
            <li className="ml-auto hidden sm:block">{siteConfig.contact.location}</li>
          </motion.ul>
        </div>

        {/* Composição visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
          className="relative lg:col-span-6 xl:col-span-5"
        >
          {/* Card de interface decorativo + tag: em fluxo, sobrepondo apenas o padding do formulário */}
          <div aria-hidden className="relative z-10 hidden sm:flex items-end justify-between -mb-5 pr-4">
            <div className="-ml-4 w-52 rounded-sm border border-border bg-card p-4 shadow-[4px_4px_0_0_hsl(var(--ink))] -rotate-2">
              <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                <span>Projeto</span>
                <span className="text-primary-strong">Em construção</span>
              </div>
              <div className="mt-3 space-y-2">
                {[
                  ["Estratégia", "w-full"],
                  ["Design", "w-4/5"],
                  ["Tecnologia", "w-1/2"],
                ].map(([label, width]) => (
                  <div key={label}>
                    <div className="text-[11px] font-bold">{label}</div>
                    <div className="mt-1 h-1.5 w-full bg-secondary">
                      <div className={`h-full bg-ink ${width}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <span className="mb-10 rounded-sm bg-lime px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-ink rotate-2">
              Estratégia
            </span>
          </div>

          {/* Tags flutuantes */}
          <div aria-hidden className="hidden sm:flex absolute -bottom-7 left-6 z-10 gap-2">
            <span className="rounded-sm border border-ink bg-paper px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-ink">
              Design
            </span>
            <span className="rounded-sm bg-ink px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-lime">
              Tecnologia
            </span>
          </div>

          <div className="relative">
            {/* Bloco coral deslocado */}
            <div aria-hidden className="absolute inset-0 translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3 rounded-sm bg-coral" />
            <div className="relative">
              <BriefingForm />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default HomeHero;
