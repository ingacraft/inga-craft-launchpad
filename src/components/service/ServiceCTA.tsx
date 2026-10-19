import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";
import { openWhatsApp } from "@/config/site";

interface ServiceCTAProps {
  title: ReactNode;
  description: string;
  label: string;
  whatsappMessage: string;
}

/** CTA final em coral compartilhado pelas páginas de serviço. */
const ServiceCTA = ({ title, description, label, whatsappMessage }: ServiceCTAProps) => (
  <section className="bg-coral text-ink">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
      <FadeInUpWrapper className="grid gap-10 md:grid-cols-12 md:items-end">
        <div className="md:col-span-8">
          <p className="inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.2em]">
            <span aria-hidden className="inline-block h-2 w-2 bg-ink" />
            Próximo passo
          </p>
          <h2 className="mt-6 font-display text-4xl leading-[0.95] sm:text-5xl lg:text-6xl font-black tracking-[-0.045em] text-balance">
            {title}
          </h2>
          <p className="mt-6 max-w-xl text-lg font-medium leading-relaxed">{description}</p>
        </div>
        <div className="md:col-span-4 md:flex md:justify-end">
          <button
            type="button"
            onClick={() => openWhatsApp(whatsappMessage)}
            className="group inline-flex w-full items-center justify-center gap-3 rounded-sm bg-ink px-7 py-4 text-base font-bold text-paper transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0_0_hsl(var(--lime))] focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-coral sm:w-auto"
          >
            {label}
            <ArrowRight aria-hidden className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </FadeInUpWrapper>
    </div>
  </section>
);

export default ServiceCTA;
