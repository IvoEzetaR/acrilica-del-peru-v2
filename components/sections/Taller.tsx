"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Cog, Users } from "lucide-react";
import { MAQUINARIA } from "@/lib/data/servicios";
import { AnimatedH2 } from "@/components/ui/animated-h2";

const FADE_UP = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number] },
};

// Elevated card style (modern-cards: elevated) — fondo blanco, sombra suave
function TallerCard({
  icon: Icon,
  titulo,
  children,
  delay = 0,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  titulo: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number] }}
      className="bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(2,70,116,0.08)] border border-[#E5EAF0] hover:shadow-[0_8px_40px_rgba(2,70,116,0.13)] transition-shadow duration-300"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-xl bg-[#024674]/10 flex items-center justify-center">
          <span aria-hidden="true"><Icon size={22} className="text-[#024674]" /></span>
        </div>
        <h3 className="font-heading font-bold text-[#024674] text-xl">{titulo}</h3>
      </div>
      {children}
    </motion.div>
  );
}

export function Taller() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="taller"
      ref={ref}
      className="py-20 md:py-28 bg-[#F5F7FA] overflow-hidden"
      aria-labelledby="taller-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.span
            {...FADE_UP}
            className="inline-block text-[#024674] font-heading font-semibold text-xs uppercase tracking-[0.15em] mb-4 border-b border-[#024674]/30 pb-1"
          >
            Capacidad de producción
          </motion.span>
          <AnimatedH2
            id="taller-heading"
            className="font-heading font-extrabold text-[#024674] text-3xl md:text-4xl lg:text-5xl leading-tight mb-4"
          >
            Taller propio en Chorrillos
          </AnimatedH2>
          <motion.p
            {...FADE_UP}
            transition={{ ...FADE_UP.transition, delay: 0.2 }}
            className="text-[#5E6B78] font-body text-lg max-w-2xl mx-auto"
          >
            Todo lo que fabricamos sale de nuestro propio taller. Sin terceros, sin
            intermediarios. Control total de la calidad en cada etapa del proceso.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Maquinaria */}
          <TallerCard icon={Cog} titulo="Maquinaria Especializada" delay={0.1}>
            <ul
              className="grid grid-cols-1 gap-2.5"
              role="list"
              aria-label="Lista de maquinaria especializada"
            >
              {MAQUINARIA.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
                  transition={{ duration: 0.35, delay: 0.2 + i * 0.06 }}
                  className="flex items-center gap-3 text-sm text-[#5E6B78] font-body"
                >
                  <span
                    className="w-5 h-5 rounded-full bg-[#024674]/10 flex items-center justify-center shrink-0"
                    aria-hidden="true"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#024674]/60" />
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </TallerCard>

          {/* Equipo */}
          <TallerCard icon={Users} titulo="Equipo Calificado" delay={0.2}>
            <div className="space-y-5">
              <p className="text-[#5E6B78] font-body text-sm leading-relaxed">
                Nuestro equipo lleva años trabajando juntos y conoce los materiales y
                procesos de memoria. No improvisamos — cada proyecto pasa por el mismo
                control de calidad antes de salir del taller.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "+20", label: "Años de experiencia" },
                  { num: "+1000", label: "Proyectos entregados" },
                  { num: "100%", label: "Fabricación propia" },
                  { num: "Lima", label: "y todo el Perú" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-[#F5F7FA] rounded-xl p-4 text-center border border-[#E5EAF0]"
                  >
                    <div className="font-heading font-extrabold text-[#024674] text-2xl mb-1">
                      {item.num}
                    </div>
                    <div className="text-[#5E6B78] font-body text-xs">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-[#5E6B78] font-body text-sm leading-relaxed">
                Fabricamos en Lima y coordinamos envíos a todo el Perú. Para proyectos
                grandes, también hacemos instalación in situ en todo Lima Metropolitana.
              </p>
            </div>
          </TallerCard>
        </div>
      </div>
    </section>
  );
}
