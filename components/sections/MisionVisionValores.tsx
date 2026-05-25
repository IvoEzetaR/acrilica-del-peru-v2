"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock,
  Lightbulb,
  Eye,
  Handshake,
  Rocket,
  Target,
} from "lucide-react";
import { VALORES } from "@/lib/data/servicios";

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  "shield-check": ShieldCheck,
  clock: Clock,
  lightbulb: Lightbulb,
  eye: Eye,
  handshake: Handshake,
};

const FADE_UP = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number] },
};

export function MisionVisionValores() {
  return (
    <section
      id="mision"
      className="py-20 md:py-28 bg-[#024674] overflow-hidden"
      aria-labelledby="mision-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.span
            {...FADE_UP}
            className="inline-block text-white/60 font-heading font-semibold text-xs uppercase tracking-[0.15em] mb-4 border-b border-white/20 pb-1"
          >
            Quiénes somos
          </motion.span>
          <motion.h2
            {...FADE_UP}
            transition={{ ...FADE_UP.transition, delay: 0.1 }}
            id="mision-heading"
            className="font-heading font-extrabold text-white text-3xl md:text-4xl lg:text-5xl leading-tight"
          >
            Nuestra misión, visión
            <br />
            <span className="text-white/70">y valores</span>
          </motion.h2>
        </div>

        {/* Misión + Visión — glass card style (modern-cards: glass) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {/* Misión */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-colors duration-300"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-[#25B15F]/20 border border-[#25B15F]/30 flex items-center justify-center">
                <Rocket size={22} className="text-[#25B15F]" aria-hidden="true" />
              </div>
              <h3 className="font-heading font-bold text-white text-xl">Misión</h3>
            </div>
            <p className="text-white/75 font-body leading-relaxed">
              Transformar las ideas de nuestros clientes en soluciones visuales funcionales,
              atractivas y personalizadas que impulsen su marca y generen resultados de
              negocio medibles. Fabricamos con los mejores materiales, con los plazos
              acordados y con la calidad que nuestros clientes esperan.
            </p>
          </motion.div>

          {/* Visión */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-colors duration-300"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center">
                <Target size={22} className="text-white" aria-hidden="true" />
              </div>
              <h3 className="font-heading font-bold text-white text-xl">Visión</h3>
            </div>
            <p className="text-white/75 font-body leading-relaxed">
              Ser reconocidos como el fabricante de publicidad visual más confiable del
              Perú: el socio al que las marcas más exigentes del país le confían sus
              proyectos porque saben que entregamos calidad, cumplimos tiempos y
              resolvemos problemas con creatividad e ingenio.
            </p>
          </motion.div>
        </div>

        {/* Valores — gradient border card style (modern-cards: gradient-border) */}
        <div>
          <motion.h3
            {...FADE_UP}
            transition={{ ...FADE_UP.transition, delay: 0 }}
            className="text-center font-heading font-bold text-white/90 text-sm uppercase tracking-[0.12em] mb-8"
          >
            Nuestros valores
          </motion.h3>

          <div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
            role="list"
            aria-label="Valores corporativos"
          >
            {VALORES.map((valor, i) => {
              const Icon = ICON_MAP[valor.icono] || ShieldCheck;
              return (
                <motion.div
                  key={valor.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="group relative p-5 rounded-2xl text-center"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 100%)",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                  whileHover={{
                    backgroundColor: "rgba(255,255,255,0.15)",
                    borderColor: "rgba(255,255,255,0.3)",
                  }}
                  role="listitem"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-[#25B15F]/20 group-hover:border-[#25B15F]/30 transition-colors duration-300">
                    <span aria-hidden="true"><Icon size={18} className="text-white group-hover:text-[#25B15F] transition-colors duration-300" /></span>
                  </div>
                  <div className="font-heading font-bold text-white text-sm mb-1.5">
                    {valor.titulo}
                  </div>
                  <div className="text-white/55 font-body text-xs leading-snug">
                    {valor.descripcion}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
