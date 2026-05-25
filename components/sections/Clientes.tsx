"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CLIENTES_MARQUEE, STATS } from "@/lib/data/servicios";
import { AnimatedH2 } from "@/components/ui/animated-h2";

const FADE_UP = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number] },
};

// Real SVG logos available for these clients
const LOGO_FILES: Record<string, string> = {
  "Toyota": "/images/toyota-logo.svg",
  "Tambo+": "/images/tambo-logo.svg",
  "Grupo Centenario": "/images/grupo-centenario-logo.svg",
  "Akipa": "/images/akipa-logo.svg",
  "Faber-Castell": "/images/faber-castell-logo.svg",
};

function LogoPlaceholder({ nombre, logo }: { nombre: string; logo: string }) {
  const realLogo = LOGO_FILES[nombre];
  return (
    <motion.div
      className="flex items-center justify-center h-12 px-8 mx-4 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default shrink-0"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      role="img"
      aria-label={`Logo cliente: ${nombre}`}
    >
      {realLogo ? (
        <Image
          src={realLogo}
          alt={`${nombre} logo`}
          width={120}
          height={40}
          className="object-contain max-h-10 w-auto"
        />
      ) : (
        <span className="font-heading font-bold text-[#024674] text-sm whitespace-nowrap">
          {nombre}
        </span>
      )}
    </motion.div>
  );
}

export function Clientes() {
  // Duplicate array for seamless loop
  const doubled = [...CLIENTES_MARQUEE, ...CLIENTES_MARQUEE];

  return (
    <section
      id="clientes"
      className="py-20 md:py-28 bg-white overflow-hidden"
      aria-labelledby="clientes-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <motion.span
            {...FADE_UP}
            className="inline-block text-[#024674] font-heading font-semibold text-xs uppercase tracking-[0.15em] mb-4 border-b border-[#024674]/30 pb-1"
          >
            Marcas que confían en nosotros
          </motion.span>
          <AnimatedH2
            id="clientes-heading"
            className="font-heading font-extrabold text-[#024674] text-3xl md:text-4xl lg:text-5xl leading-tight mb-4"
          >
            Nuestros clientes
          </AnimatedH2>
          <motion.p
            {...FADE_UP}
            transition={{ ...FADE_UP.transition, delay: 0.2 }}
            className="text-[#5E6B78] font-body text-lg max-w-2xl mx-auto"
          >
            Desde pymes en Lima hasta campañas nacionales. Estas son algunas de las
            marcas que ya confían en la calidad de nuestra fabricación.
          </motion.p>
        </div>
      </div>

      {/* Marquee infinito — patrón 3 Framer Motion */}
      <div
        className="relative w-full overflow-hidden py-4"
        aria-label="Desfile de logos de clientes"
        aria-live="off"
      >
        {/* Fade masks */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, white 0%, transparent 100%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, white 0%, transparent 100%)",
          }}
          aria-hidden="true"
        />

        <motion.div
          className="flex items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
          whileHover={{ animationPlayState: "paused" }}
          style={{ width: "max-content" }}
        >
          {doubled.map((cliente, i) => (
            <LogoPlaceholder key={`${cliente.nombre}-${i}`} nombre={cliente.nombre} logo={cliente.logo} />
          ))}
        </motion.div>
      </div>

      {/* Stats row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-8 rounded-2xl bg-[#F5F7FA] border border-[#E5EAF0] hover:border-[#024674]/20 hover:shadow-sm transition-all duration-200"
            >
              <div className="font-heading font-black text-[#024674] text-4xl md:text-5xl mb-2">
                {stat.valor}
                {stat.sufijo}
              </div>
              <div className="font-heading font-bold text-[#024674] text-sm uppercase tracking-wider mb-2">
                {stat.label}
              </div>
              <div className="text-[#5E6B78] font-body text-sm leading-snug">
                {stat.descripcion}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
