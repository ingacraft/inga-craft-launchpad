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
 * Stacks page sections with alternating white surfaces and a 40px
 * curved bottom, creating an immersive layered scroll experience.
 */
const SectionShell = ({ children, surface = "a", flat = false, className, id }: SectionShellProps) => (
  <div
    id={id}
    data-surface={surface}
    data-flat={flat ? "true" : undefined}
    className={cn("rhythm-section", className)}
  >
    {children}
  </div>
);

export default SectionShell;
