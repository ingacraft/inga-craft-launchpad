import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  id?: string;
  className?: string;
  /** Número editorial exibido acima do eyebrow, ex.: "02" */
  index?: string;
}

/** Cabeçalho editorial assimétrico: título à esquerda, apoio à direita. */
const SectionHeading = ({ eyebrow, title, description, id, className, index }: SectionHeadingProps) => (
  <FadeInUpWrapper className={cn("grid gap-6 md:grid-cols-12 md:gap-10 mb-12 md:mb-16", className)}>
    <div className="md:col-span-8">
      <div className="flex items-center gap-4 mb-5">
        {index && <span className="font-mono text-xs text-muted-foreground">{index}</span>}
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2
        id={id}
        className="font-display text-[2.25rem] leading-[0.98] sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.04em] text-balance"
      >
        {title}
      </h2>
    </div>
    {description && (
      <div className="md:col-span-4 md:self-end">
        <p className="text-muted-foreground leading-relaxed md:border-l md:border-border md:pl-6">
          {description}
        </p>
      </div>
    )}
  </FadeInUpWrapper>
);

export default SectionHeading;
