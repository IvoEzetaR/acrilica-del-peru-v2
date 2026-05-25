"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { WA_HERO } from "@/lib/wa";
import { STATS } from "@/lib/data/servicios";

// Hero slideshow images — real Lovable portfolio photos
const HERO_SLIDES = [
  { src: "/images/portfolio-arco-plaza.png", alt: "Arco corporativo fabricado por Acrílica del Perú" },
  { src: "/images/portfolio-totem.png", alt: "Tótem publicitario MAGIA — Acrílica del Perú" },
  { src: "/images/portfolio-rebranding-magia.png", alt: "Letrero corporativo de alta calidad" },
  { src: "/images/portfolio-backing-dsm.png", alt: "Impresión gran formato — backing DSM Firmenich" },
  { src: "/images/portfolio-rebranding-magia-instalacion.png", alt: "Instalación de señalética corporativa" },
];

const HEADLINE_WORDS = ["Fabricamos", "lo que tu", "marca necesita", "para brillar."];

// Pattern: char-by-char reveal for the stat labels
function CharReveal({ text, delay = 0 }: { text: string; delay?: number }) {
  const chars = text.split("");
  return (
    <span aria-label={text}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: delay + i * 0.03, ease: "easeOut" }}
          aria-hidden="true"
        >
          {char === " " ? " " : char}
        </motion.span>
      ))}
    </span>
  );
}

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

// Pattern: Ken Burns — each slide gets a slow zoom+pan
const KEN_BURNS_VARIANTS = [
  { initial: { scale: 1, x: 0, y: 0 }, animate: { scale: 1.08, x: "-2%", y: "-1%" } },
  { initial: { scale: 1, x: 0, y: 0 }, animate: { scale: 1.07, x: "2%", y: "1%" } },
  { initial: { scale: 1.05, x: "1%", y: 0 }, animate: { scale: 1, x: "-1%", y: "-1%" } },
  { initial: { scale: 1, x: "-2%", y: "1%" }, animate: { scale: 1.08, x: "1%", y: "-1%" } },
  { initial: { scale: 1.06, x: 0, y: "-1%" }, animate: { scale: 1, x: "2%", y: "1%" } },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState<number | null>(null);
  const heroRef = useRef<HTMLElement>(null);

  // Pattern: parallax scroll — hero content moves slower than scroll
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // Auto-advance slideshow every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => {
        setPrevSlide(prev);
        return (prev + 1) % HERO_SLIDES.length;
      });
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleScrollToWorks = () => {
    const el = document.querySelector("#portafolio");
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
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Hero — Acrílica del Perú"
    >
      {/* ── Ken Burns slideshow background ── */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY }}
      >
        {/* Previous slide — fades out */}
        <AnimatePresence initial={false}>
          {prevSlide !== null && (
            <motion.div
              key={`prev-${prevSlide}`}
              className="absolute inset-0"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <motion.div
                className="absolute inset-[-5%] w-[110%] h-[110%]"
                initial={KEN_BURNS_VARIANTS[prevSlide % KEN_BURNS_VARIANTS.length].initial}
                animate={KEN_BURNS_VARIANTS[prevSlide % KEN_BURNS_VARIANTS.length].animate}
                transition={{ duration: 5, ease: "linear" }}
              >
                <Image
                  src={HERO_SLIDES[prevSlide].src}
                  alt={HERO_SLIDES[prevSlide].alt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority={prevSlide === 0}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Current slide — fades in with Ken Burns zoom */}
        <AnimatePresence initial={false}>
          <motion.div
            key={`slide-${currentSlide}`}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <motion.div
              className="absolute inset-[-5%] w-[110%] h-[110%]"
              initial={KEN_BURNS_VARIANTS[currentSlide % KEN_BURNS_VARIANTS.length].initial}
              animate={KEN_BURNS_VARIANTS[currentSlide % KEN_BURNS_VARIANTS.length].animate}
              transition={{ duration: 5500 / 1000, ease: "linear" }}
            >
              <Image
                src={HERO_SLIDES[currentSlide].src}
                alt={HERO_SLIDES[currentSlide].alt}
                fill
                className="object-cover"
                sizes="100vw"
                priority={currentSlide === 0}
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Overlay — #024674 at 37% — client spec */}
        <motion.div
          className="absolute inset-0 z-10"
          style={{ opacity: overlayOpacity }}
          aria-hidden="true"
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(160deg, rgba(2,70,116,0.92) 0%, rgba(2,70,116,0.62) 45%, rgba(2,70,116,0.37) 100%)",
            }}
          />
        </motion.div>

        {/* Fixed-opacity overlay so content stays readable as scroll fades */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(160deg, rgba(2,70,116,0.92) 0%, rgba(2,70,116,0.62) 45%, rgba(2,70,116,0.37) 100%)",
          }}
          aria-hidden="true"
        />
      </motion.div>

      {/* Slide indicators */}
      <div
        className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2"
        role="tablist"
        aria-label="Imágenes del slideshow"
      >
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === currentSlide}
            aria-label={`Imagen ${i + 1}`}
            onClick={() => {
              setPrevSlide(currentSlide);
              setCurrentSlide(i);
            }}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === currentSlide ? "bg-white w-8" : "bg-white/40 w-3 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* ── Content — parallax moves up on scroll ── */}
      <motion.div
        className="relative z-20"
        style={{ y: contentY }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
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
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + i * 0.1,
                    ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number],
                  }}
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

            {/* CTAs — Pattern: magnetic hover on both */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.85 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              {/* Primary CTA — magnetic spring */}
              <MagneticCTA href={WA_HERO} primary>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                Cotizar por WhatsApp
              </MagneticCTA>

              {/* Ghost CTA — magnetic spring */}
              <MagneticCTA onClick={handleScrollToWorks} ghost>
                Ver nuestros trabajos
              </MagneticCTA>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="relative z-20 w-full border-t border-white/15"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 divide-x divide-white/15">
            {STATS.map((stat, i) => (
              <div key={stat.label} className="py-6 px-4 md:px-8 text-center">
                <div className="font-heading font-black text-white text-3xl md:text-4xl lg:text-5xl mb-1">
                  <CountUp target={stat.valor} suffix={stat.sufijo} />
                </div>
                <div className="font-heading font-semibold text-white/90 text-xs md:text-sm uppercase tracking-wider mb-1">
                  <CharReveal text={stat.label} delay={1.3 + i * 0.15} />
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
        className="absolute bottom-4 right-8 z-20 flex flex-col items-center gap-1 text-white/50 hover:text-white/80 transition-colors"
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

// Pattern: Magnetic CTA — tracks cursor and pulls toward it with spring
function MagneticCTA({
  href,
  onClick,
  children,
  primary,
  ghost,
}: {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  primary?: boolean;
  ghost?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    setPosition({ x: dx * 0.3, y: dy * 0.3 });
  };

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 });

  const baseClass = primary
    ? "inline-flex items-center justify-center gap-2 bg-[#25B15F] text-white px-7 py-4 rounded-xl text-base font-bold font-heading shadow-lg shadow-[#25B15F]/25 hover:bg-[#1d8f4c] transition-colors"
    : "inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/60 text-white px-7 py-4 rounded-xl text-base font-semibold font-heading hover:border-white hover:bg-white/10 transition-all";

  const motionProps = {
    animate: { x: position.x, y: position.y },
    transition: { type: "spring" as const, stiffness: 350, damping: 20 },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    whileTap: { scale: 0.97 },
  };

  if (href) {
    return (
      <motion.a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClass}
        aria-label={primary ? "Cotizar por WhatsApp" : "Ver nuestros trabajos"}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.Ref<HTMLButtonElement>}
      onClick={onClick}
      className={baseClass}
      aria-label="Ver nuestros trabajos — ir a portafolio"
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
