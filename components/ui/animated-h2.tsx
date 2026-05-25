"use client";

import { motion } from "framer-motion";

/**
 * Pattern: char-by-char blur-reveal for H2 headings.
 * Words fade in sequentially with a blur-to-clear effect.
 * Used in: Servicios, MisionVisionValores, Taller, FAQ, Portafolio
 */
export function AnimatedH2({
  children,
  id,
  className,
}: {
  children: string;
  id?: string;
  className?: string;
}) {
  const words = children.split(" ");
  return (
    <h2 id={id} className={className} aria-label={children}>
      {words.map((word, wi) => (
        <motion.span
          key={wi}
          className="inline-block mr-[0.25em] last:mr-0"
          initial={{ opacity: 0, y: 14, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            duration: 0.45,
            delay: wi * 0.07,
            ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number],
          }}
          aria-hidden="true"
        >
          {word}
        </motion.span>
      ))}
    </h2>
  );
}
