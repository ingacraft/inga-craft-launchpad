import { Fragment } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: string[];
  className?: string;
  itemClassName?: string;
  separator?: string;
  /** Duração de uma volta completa, em segundos */
  duration?: number;
  /** Rótulo acessível; o conteúdo animado repetido fica oculto para leitores de tela */
  label?: string;
}

/**
 * Faixa horizontal com texto em loop contínuo.
 * Duplica o conteúdo para o loop ser contínuo e pausa no hover.
 * Com prefers-reduced-motion, fica estática (ver index.css).
 */
const Marquee = ({
  items,
  className,
  itemClassName,
  separator = "•",
  duration = 40,
  label,
}: MarqueeProps) => {
  // Repete os itens para preencher telas largas antes da duplicação do loop
  const sequence = Array.from({ length: 4 }, () => items).flat();

  const renderGroup = (hidden: boolean) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {sequence.map((item, i) => (
        <Fragment key={`${item}-${i}`}>
          <span className={cn("whitespace-nowrap px-4", itemClassName)}>{item}</span>
          <span aria-hidden className="opacity-70">{separator}</span>
        </Fragment>
      ))}
    </div>
  );

  return (
    <div
      className={cn("marquee relative flex overflow-hidden select-none", className)}
      role={label ? "marquee" : undefined}
      aria-label={label}
    >
      <div
        className="marquee-track"
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
        aria-hidden={label ? true : undefined}
      >
        {renderGroup(false)}
        {renderGroup(true)}
      </div>
    </div>
  );
};

export default Marquee;
