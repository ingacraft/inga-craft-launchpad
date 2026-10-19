import { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { openWhatsApp } from "@/config/site";

interface ServiceHeroProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
  image: string;
  imageAlt: string;
  primaryLabel: string;
  whatsappMessage: string;
  secondaryLabel: string;
  /** id da seção para onde o botão secundário rola */
  secondaryTarget: string;
}

const ease = [0.22, 1, 0.36, 1] as const;

/** Hero editorial escuro compartilhado pelas páginas de serviço. */
const ServiceHero = ({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  primaryLabel,
  whatsappMessage,
  secondaryLabel,
  secondaryTarget,
}: ServiceHeroProps) => (
  <section className="theme-ink relative overflow-hidden border-b border-border">
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <nav aria-label="Trilha de navegação" className="mb-10 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        <Link to="/" className="hover:text-foreground">Início</Link>
        <span aria-hidden className="mx-2">/</span>
        <span className="text-lime">{eyebrow}</span>
      </nav>

      <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="lg:col-span-7"
        >
          <p className="eyebrow mb-6">{eyebrow}</p>
          <h1 className="font-display text-[2.6rem] leading-[0.94] sm:text-6xl xl:text-7xl font-black tracking-[-0.05em] text-balance">
            {title}
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">{description}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button variant="hero" size="lg" className="group" onClick={() => openWhatsApp(whatsappMessage)}>
              {primaryLabel}
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group"
              onClick={() => document.getElementById(secondaryTarget)?.scrollIntoView()}
            >
              {secondaryLabel}
              <ArrowDown className="group-hover:translate-y-0.5 transition-transform" />
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease }}
          className="relative lg:col-span-5"
        >
          <div aria-hidden className="absolute inset-0 translate-x-3 translate-y-3 rounded-sm bg-coral" />
          <figure className="relative overflow-hidden rounded-sm border border-white/15 bg-ink-soft">
            <img src={image} alt={imageAlt} className="aspect-[4/3] w-full object-cover" />
            <span className="absolute left-3 top-3 rounded-sm bg-lime px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-ink">
              {eyebrow}
            </span>
          </figure>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ServiceHero;
