import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface FadeInUpWrapperProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  as?: "div" | "section" | "article" | "header";
}

/**
 * Calm, once-only reveal. Enterprise motion: 24px slide, 0.6s ease-out.
 * No repeat, no exit — content stays put after entering (professional feel).
 */
const FadeInUpWrapper = ({
  children,
  delay = 0,
  duration = 0.6,
  className = "",
  as = "div",
}: FadeInUpWrapperProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px", amount: 0.2 });
  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </MotionTag>
  );
};

export default FadeInUpWrapper;
