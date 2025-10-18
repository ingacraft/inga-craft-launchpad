import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface FadeInUpWrapperProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

const FadeInUpWrapper = ({ 
  children, 
  delay = 0, 
  duration = 0.8,
  className = "" 
}: FadeInUpWrapperProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false,
    margin: "-100px",
    amount: 0.3
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{
        duration,
        delay,
        ease: "easeOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInUpWrapper;
