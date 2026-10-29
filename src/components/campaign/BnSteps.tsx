import { ClipboardCheck, MessageCircle, MousePointerClick } from "lucide-react";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";
import { bnSteps } from "@/config/blackNovember";

const icons = [MousePointerClick, MessageCircle, ClipboardCheck];

/** Como funciona: três passos sobre fundo lima. */
const BnSteps = () => (
  <section id="como-funciona" aria-labelledby="bn-steps-title" className="bg-lime py-20 md:py-28 text-ink">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <FadeInUpWrapper className="text-center">
        <p className="inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.2em]">
          <span aria-hidden className="inline-block h-2 w-2 rotate-45 bg-ink" />
          {bnSteps.eyebrow}
        </p>
        <h2
          id="bn-steps-title"
          className="mx-auto mt-5 max-w-3xl font-display text-[2.25rem] leading-[1.05] sm:text-5xl lg:text-6xl font-black tracking-[-0.04em]"
        >
          {bnSteps.title.lead}{" "}
          <span className="bg-ink px-2 text-lime [-webkit-box-decoration-break:clone] [box-decoration-break:clone]">
            {bnSteps.title.highlight}
          </span>
        </h2>
      </FadeInUpWrapper>

      <ol className="mt-14 grid border border-ink/20 md:grid-cols-3">
        {bnSteps.items.map((step, i) => {
          const Icon = icons[i];
          return (
            <FadeInUpWrapper
              as="li"
              key={step.title}
              delay={i * 0.08}
              className="border-ink/20 p-7 [&:not(:first-child)]:border-t md:[&:not(:first-child)]:border-l md:[&:not(:first-child)]:border-t-0"
            >
              <div className="flex items-center justify-between">
                <Icon aria-hidden className="h-5 w-5" />
                <span className="font-mono text-xs">0{i + 1}</span>
              </div>
              <h3 className="mt-10 font-display text-xl font-extrabold tracking-tight">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">{step.text}</p>
            </FadeInUpWrapper>
          );
        })}
      </ol>
    </div>
  </section>
);

export default BnSteps;
