import FadeInUpWrapper from "@/components/FadeInUpWrapper";
import SectionHeading from "@/components/brand/SectionHeading";
import { positioning } from "@/config/home";

const Positioning = () => (
  <section aria-labelledby="posicionamento-title" className="py-20 md:py-28">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        id="posicionamento-title"
        index="01"
        eyebrow={positioning.eyebrow}
        title={
          <>
            Tecnologia só faz sentido quando resolve um{" "}
            <span className="mark-lime">problema real.</span>
          </>
        }
        description={positioning.description}
      />

      <div className="grid gap-4 md:grid-cols-3 md:gap-5">
        {positioning.principles.map(({ icon: Icon, title, body }, i) => (
          <FadeInUpWrapper key={title} delay={i * 0.08} className="h-full">
            <article className="group flex h-full flex-col rounded-sm border border-border bg-card p-6 lg:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-foreground hover:shadow-[6px_6px_0_0_hsl(var(--ink))]">
              <div className="flex items-start justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-sm border border-foreground transition-colors duration-300 group-hover:border-lime group-hover:bg-lime">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
              </div>
              <h3 className="mt-10 font-display text-2xl lg:text-[1.75rem] font-extrabold leading-[1.05] tracking-tight">
                {title}
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">{body}</p>
              <div aria-hidden className="mt-auto pt-8">
                <div className="h-0.5 w-full origin-left scale-x-0 bg-coral transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            </article>
          </FadeInUpWrapper>
        ))}
      </div>
    </div>
  </section>
);

export default Positioning;
