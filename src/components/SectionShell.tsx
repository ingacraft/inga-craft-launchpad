import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Surface = "a" | "b" | "c" | "d";

interface SectionShellProps {
  children: ReactNode;
  surface?: Surface;
  flat?: boolean;
  className?: string;
  id?: string;
}

/**
 * Alterna superfícies claras (a, b, c) e a superfície escura em tinta (d),
 * criando o ritmo editorial entre seções.
 */
const SectionShell = ({ children, surface = "a", flat = false, className, id }: SectionShellProps) => (
  <div
    id={id}
    data-surface={surface}
    data-flat={flat ? "true" : undefined}
    className={cn("rhythm-section", surface === "d" && "theme-ink", className)}
  >
    {children}
  </div>
);

export default SectionShell;
