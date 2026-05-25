"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { SERVICIOS } from "@/lib/data/servicios";
import { buildWaLink } from "@/lib/wa";

const FADE_UP = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number] },
};

const CARD_STAGGER = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

function ServicioCard({ servicio, index }: { servicio: typeof SERVICIOS[0]; index: number }) {
  return (
    <motion.article
      {...CARD_STAGGER}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number] }}
      className="group relative bg-white border border-[#E5EAF0] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
      role="article"
      aria-label={`Servicio: ${servicio.nombre}`}
    >
      {/* Image area — elevated card style (modern-cards: elevated) */}
      <div className="relative h-48 sm:h-56 overflow-hidden bg-[#F5F7FA] placeholder-img">
        {/* Placeholder pattern — real photos replace this */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[#024674]/20 font-heading font-semibold text-sm text-center px-4">
            {servicio.imagenAlt}
          </span>
        </div>

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 bg-[#024674]/60 flex items-end p-4"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
        >
          <span className="text-white font-heading font-semibold text-sm">
            Ver detalles del servicio
          </span>
        </motion.div>

        {/* Category badge */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
          <span className="text-[10px] font-heading font-semibold text-[#024674] uppercase tracking-wide">
            {servicio.categoria === "materiales" ? "Materiales" :
             servicio.categoria === "luminosos" ? "Luminosos" :
             servicio.categoria === "impresion" ? "Impresión" : "Especiales"}
          </span>
        </div>

        {/* Placeholder background — scales on hover too */}
        <motion.div
          className="absolute inset-0 placeholder-img bg-[#F5F7FA]"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4 }}
          aria-hidden="true"
          style={{ zIndex: -1 }}
        />
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-heading font-bold text-[#024674] text-xl mb-2 group-hover:text-[#035a93] transition-colors">
          {servicio.nombre}
        </h3>
        <p className="text-[#5E6B78] font-body text-sm leading-relaxed mb-4 flex-1">
          {servicio.descripcion}
        </p>

        {/* Bullets */}
        <ul className="space-y-1.5 mb-5" aria-label={`Detalles de ${servicio.nombre}`}>
          {servicio.bullets.slice(0, 4).map((bullet) => (
            <li key={bullet} className="flex items-start gap-2 text-xs text-[#5E6B78] font-body">
              <Check size={13} className="text-[#25B15F] mt-0.5 shrink-0" aria-hidden="true" />
              <span>{bullet}</span>
            </li>
          ))}
          {servicio.bullets.length > 4 && (
            <li className="text-[10px] text-[#024674]/50 font-body pl-5">
              +{servicio.bullets.length - 4} más...
            </li>
          )}
        </ul>

        {/* CTA */}
        <motion.a
          href={buildWaLink({
            servicio: servicio.nombre,
            mensaje: servicio.waMessage,
          })}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#024674] font-heading font-semibold text-sm border-b border-[#024674]/30 pb-0.5 hover:border-[#024674] transition-colors w-fit"
          whileHover={{ gap: "10px" }}
          transition={{ duration: 0.15 }}
          aria-label={`Cotizar ${servicio.nombre} por WhatsApp`}
        >
          Cotizar este servicio
          <ArrowRight size={14} aria-hidden="true" />
        </motion.a>
      </div>

      {/* Bottom accent bar on hover */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#024674] origin-left"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number] }}
        aria-hidden="true"
      />
    </motion.article>
  );
}

export function Servicios() {
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
          <motion.h2
            {...FADE_UP}
            transition={{ ...FADE_UP.transition, delay: 0.1 }}
            id="servicios-heading"
            className="font-heading font-extrabold text-[#024674] text-3xl md:text-4xl lg:text-5xl leading-tight mb-4"
          >
            Nuestros servicios
          </motion.h2>
          <motion.p
            {...FADE_UP}
            transition={{ ...FADE_UP.transition, delay: 0.2 }}
            className="text-[#5E6B78] font-body text-lg max-w-2xl mx-auto"
          >
            Fabricamos todo tipo de publicidad visual y material POP, desde piezas únicas
            hasta producciones de cientos de unidades para campañas nacionales.
          </motion.p>
        </div>

        {/* Grid 2 columns */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 md:gap-8"
          role="list"
          aria-label="Lista de servicios"
        >
          {SERVICIOS.map((servicio, i) => (
            <ServicioCard key={servicio.id} servicio={servicio} index={i} />
          ))}
        </div>

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
