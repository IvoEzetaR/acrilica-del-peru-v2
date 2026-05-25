"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { WA_HERO } from "@/lib/wa";
import { STATS } from "@/lib/data/servicios";

const HEADLINE_WORDS = ["Fabricamos", "lo que tu", "marca necesita", "para brillar."];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasRun.current) {
          hasRun.current = true;
          const duration = 1200;
          const steps = 40;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current = Math.min(current + increment, target);
            setCount(Math.floor(current));
            if (current >= target) clearInterval(timer);
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function Hero() {
  const handleScrollToWorks = () => {
    const el = document.querySelector("#servicios");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const handleScrollDown = () => {
    const el = document.querySelector("#nosotros");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Hero — Acrílica del Perú"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full bg-[#024674] placeholder-img">
          {/* Real image goes here when client provides it */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(2,70,116,0.92) 0%, rgba(2,70,116,0.65) 50%, rgba(2,70,116,0.40) 100%)",
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-1.5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#25B15F] animate-pulse" aria-hidden="true" />
            <span className="text-white/90 text-xs font-medium font-body tracking-wide">
              Más de 20 años fabricando en Lima, Perú
            </span>
          </motion.div>

          {/* Headline — stagger word by word */}
          <h1 className="font-heading font-extrabold text-white mb-6 leading-tight">
            {HEADLINE_WORDS.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number] }}
                className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-white/80 text-lg sm:text-xl font-body font-light mb-10 max-w-xl leading-relaxed"
          >
            Acrílicos, tótems, exhibidores POP, letreros luminosos e impresión en gran formato.
            Taller propio en Chorrillos. Clientes Toyota, MAPFRE, Papa John&apos;s y más.
          </motion.p>

          {/* CTAs — 2 only */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.85 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            {/* Primary CTA */}
            <motion.a
              href={WA_HERO}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25B15F] text-white px-7 py-4 rounded-xl text-base font-bold font-heading shadow-lg shadow-[#25B15F]/25 hover:bg-[#1d8f4c] transition-colors"
              whileHover={{ scale: 1.02, boxShadow: "0 12px 32px rgba(37,177,95,0.35)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              aria-label="Cotizar por WhatsApp"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
              Cotizar por WhatsApp
            </motion.a>

            {/* Ghost CTA */}
            <motion.button
              onClick={handleScrollToWorks}
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/60 text-white px-7 py-4 rounded-xl text-base font-semibold font-heading hover:border-white hover:bg-white/10 transition-all"
              whileHover={{ scale: 1.02, borderColor: "rgba(255,255,255,1)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              aria-label="Ver nuestros trabajos — ir a sección de servicios"
            >
              Ver nuestros trabajos
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Stats bar — diferenciador memorable */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="relative z-10 w-full border-t border-white/15"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 divide-x divide-white/15">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="py-6 px-4 md:px-8 text-center"
              >
                <div className="font-heading font-black text-white text-3xl md:text-4xl lg:text-5xl mb-1">
                  <CountUp target={stat.valor} suffix={stat.sufijo} />
                </div>
                <div className="font-heading font-semibold text-white/90 text-xs md:text-sm uppercase tracking-wider mb-1">
                  {stat.label}
                </div>
                <div className="text-white/60 text-xs font-body hidden md:block leading-snug">
                  {stat.descripcion}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={handleScrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 right-8 z-10 flex flex-col items-center gap-1 text-white/50 hover:text-white/80 transition-colors"
        aria-label="Bajar a siguiente sección"
      >
        <span className="text-[10px] font-body tracking-widest uppercase">Bajar</span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  );
}
