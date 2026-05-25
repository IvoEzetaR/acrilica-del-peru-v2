import type { Variants, Transition } from "framer-motion";

// Framer Motion v12 requires Easing type for 'ease' — this helper avoids TS errors
// across all components using the same fadeUp pattern.

export const transition = (overrides?: Partial<Transition>): Transition => ({
  duration: 0.55,
  ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number], // cubic-bezier equivalent of "easeOut"
  ...overrides,
});

export const FADE_UP_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export const FADE_UP_PROPS = (delay = 0) => ({
  initial: "hidden" as const,
  whileInView: "visible" as const,
  viewport: { once: true, margin: "-60px" } as const,
  variants: FADE_UP_VARIANTS,
  transition: transition({ delay }),
});

// Card stagger
export const CARD_STAGGER_PROPS = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" } as const,
  transition: transition({ delay }),
});
