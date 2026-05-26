"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, ChevronRight } from "lucide-react";
import { SERVICIOS } from "@/lib/data/servicios";
import { buildWaLink } from "@/lib/wa";

type Servicio = (typeof SERVICIOS)[number];

const FADE_UP = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number] },
};

// Pattern: char-by-char text reveal for section headings (H2)
function AnimatedH2({ children, id, className }: { children: string; id?: string; className?: string }) {
  const words = children.split(" ");
  return (
    <h2 id={id} className={className} aria-label={children}>
      {words.map((word, wi) => (
        <motion.span
          key={wi}
          className="inline-block mr-[0.25em] last:mr-0"
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            duration: 0.5,
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

// Preview panel — reused inline in mobile (under active button) + sticky right column on desktop
function ServicePreview({ active, variant }: { active: Servicio; variant: "mobile" | "desktop" }) {
  // Slide direction: mobile drops down (y); desktop slides in from the right (x)
  const initial = variant === "mobile" ? { opacity: 0, y: 12 } : { opacity: 0, x: 24 };
  const animate = variant === "mobile" ? { opacity: 1, y: 0 } : { opacity: 1, x: 0 };
  const exit = variant === "mobile" ? { opacity: 0, y: -8 } : { opacity: 0, x: -16 };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={active.id}
        initial={initial}
        animate={animate}
        exit={exit}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number] }}
        className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#E5EAF0]"
      >
        {/* Image — gradient-border card style */}
        <div className="relative h-56 sm:h-80 overflow-hidden bg-[#F5F7FA] group">
          <Image
            src={active.imagen}
            alt={active.imagenAlt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
          {/* Category badge */}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-sm">
            <span className="text-[10px] font-heading font-semibold text-[#024674] uppercase tracking-wide">
              {active.categoria === "materiales"
                ? "Materiales"
                : active.categoria === "luminosos"
                ? "Luminosos"
                : active.categoria === "impresion"
                ? "Impresión"
                : "Especiales"}
            </span>
          </div>
          {/* Subtle gradient bottom overlay */}
          <div
            className="absolute inset-x-0 bottom-0 h-20 pointer-events-none"
            style={{ background: "linear-gradient(to top, rgba(255,255,255,0.9) 0%, transparent 100%)" }}
            aria-hidden="true"
          />
        </div>

        {/* Content */}
        <div className="p-5 md:p-8">
          <h3 className="font-heading font-bold text-[#024674] text-xl md:text-2xl mb-3">
            {active.nombre}
          </h3>
          <p className="text-[#5E6B78] font-body text-base leading-relaxed mb-6">
            {active.descripcion}
          </p>

          {/* Bullets — two columns */}
          <ul
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-7"
            aria-label={`Detalles de ${active.nombre}`}
          >
            {active.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2 text-sm text-[#5E6B78] font-body">
                <Check size={14} className="text-[#25B15F] mt-0.5 shrink-0" aria-hidden="true" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          {/* CTA — magnetic spring hover */}
          <motion.a
            href={buildWaLink({ servicio: active.nombre, mensaje: active.waMessage })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#024674] text-white px-6 py-3.5 rounded-xl text-sm font-bold font-heading hover:bg-[#035a93] transition-colors shadow-md shadow-[#024674]/15"
            whileHover={{ scale: 1.02, boxShadow: "0 8px 24px rgba(2,70,116,0.25)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            aria-label={`Cotizar ${active.nombre} por WhatsApp`}
          >
            Cotizar este servicio
            <ArrowRight size={15} aria-hidden="true" />
          </motion.a>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export function Servicios() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = SERVICIOS[activeIndex];

  return (
    <section
      id="servicios"
      className="py-20 md:py-28 bg-[#F5F7FA] overflow-hidden"
      aria-labelledby="servicios-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14 md:mb-16">
          <motion.span
            {...FADE_UP}
            className="inline-block text-[#024674] font-heading font-semibold text-xs uppercase tracking-[0.15em] mb-4 border-b border-[#024674]/30 pb-1"
          >
            Lo que fabricamos
          </motion.span>
          <AnimatedH2
            id="servicios-heading"
            className="font-heading font-extrabold text-[#024674] text-3xl md:text-4xl lg:text-5xl leading-tight mb-4"
          >
            Nuestros servicios
          </AnimatedH2>
          <motion.p
            {...FADE_UP}
            transition={{ ...FADE_UP.transition, delay: 0.2 }}
            className="text-[#5E6B78] font-body text-lg max-w-2xl mx-auto"
          >
            Fabricamos todo tipo de publicidad visual y material POP, desde piezas únicas
            hasta producciones de cientos de unidades para campañas nacionales.
          </motion.p>
        </div>

        {/* Vertical tabs layout — list left + preview right (desktop) | accordion-style (mobile) */}
        <motion.div
          {...FADE_UP}
          transition={{ ...FADE_UP.transition, delay: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-6 lg:gap-8 items-start"
        >
          {/* Left — service list (and inline mobile preview between buttons) */}
          <nav aria-label="Servicios disponibles" className="flex flex-col gap-1.5">
            {SERVICIOS.map((servicio, i) => (
              <Fragment key={servicio.id}>
                <motion.button
                  onClick={() => setActiveIndex(i)}
                  className={`group relative w-full text-left px-5 py-4 rounded-xl transition-all duration-200 flex items-center justify-between gap-3 ${
                    i === activeIndex
                      ? "bg-[#024674] text-white shadow-lg shadow-[#024674]/20"
                      : "bg-white border border-[#E5EAF0] text-[#5E6B78] hover:border-[#024674]/30 hover:text-[#024674]"
                  }`}
                  whileHover={i !== activeIndex ? { x: 4 } : {}}
                  whileTap={{ scale: 0.99 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  aria-pressed={i === activeIndex}
                  aria-expanded={i === activeIndex}
                  aria-controls={`servicio-panel-${servicio.id}`}
                  aria-label={`Ver servicio: ${servicio.nombre}`}
                >
                  <div className="flex-1 min-w-0">
                    <div
                      className={`font-heading font-semibold text-sm leading-snug mb-0.5 ${
                        i === activeIndex ? "text-white" : "text-[#024674]"
                      }`}
                    >
                      {servicio.nombre}
                    </div>
                    <div
                      className={`font-body text-xs truncate ${
                        i === activeIndex ? "text-white/70" : "text-[#5E6B78]"
                      }`}
                    >
                      {servicio.bullets[0]}
                    </div>
                  </div>
                  <ChevronRight
                    size={16}
                    className={`shrink-0 transition-transform duration-200 ${
                      i === activeIndex ? "text-white rotate-90" : "text-[#024674]/40 group-hover:translate-x-0.5"
                    }`}
                    aria-hidden="true"
                  />

                  {/* Active left bar */}
                  {i === activeIndex && (
                    <motion.div
                      layoutId="activeBar"
                      className="absolute left-0 top-3 bottom-3 w-1 bg-white/50 rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      aria-hidden="true"
                    />
                  )}
                </motion.button>

                {/* Mobile-only inline preview — drops down under the active button */}
                {i === activeIndex && (
                  <div
                    id={`servicio-panel-${servicio.id}`}
                    role="region"
                    aria-label={`Detalle de ${servicio.nombre}`}
                    className="lg:hidden mt-2 mb-3"
                  >
                    <ServicePreview active={active} variant="mobile" />
                  </div>
                )}
              </Fragment>
            ))}
          </nav>

          {/* Right — desktop-only sticky preview panel */}
          <div className="hidden lg:block sticky top-24" aria-live="polite" aria-atomic="true">
            <ServicePreview active={active} variant="desktop" />
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          {...FADE_UP}
          transition={{ ...FADE_UP.transition, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-[#5E6B78] font-body mb-4">
            ¿Tienes un proyecto que no ves aquí? Fabricamos a medida.
          </p>
          <motion.a
            href="https://wa.me/51996097208?text=Hola%2C%20tengo%20un%20proyecto%20especial%20que%20me%20gustar%C3%ADa%20cotizar%20con%20ustedes."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#024674] text-white px-7 py-3.5 rounded-xl text-sm font-bold font-heading hover:bg-[#035a93] transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            aria-label="Consultar proyecto especial por WhatsApp"
          >
            Consultar proyecto especial
            <ArrowRight size={16} aria-hidden="true" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
