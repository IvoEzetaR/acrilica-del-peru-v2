"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { AnimatedH2 } from "@/components/ui/animated-h2";

const CAROUSEL_IMAGES = [
  {
    src: "/images/nosotros-taller.png",
    alt: "Taller Acrílica del Perú — equipo y área de fabricación en Chorrillos",
  },
  {
    src: "/images/portfolio-totem.png",
    alt: "Tótem publicitario fabricado en el taller de Acrílica del Perú",
  },
  {
    src: "/images/portfolio-arco-plaza.png",
    alt: "Estructura corporativa fabricada por Acrílica del Perú",
  },
];

const FADE_UP = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number] },
};

export function Nosotros() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <section
      id="nosotros"
      ref={sectionRef}
      className="py-20 md:py-28 bg-white overflow-hidden"
      aria-labelledby="nosotros-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text column */}
          <div>
            <motion.span
              {...FADE_UP}
              transition={{ ...FADE_UP.transition, delay: 0 }}
              className="inline-block text-[#024674] font-heading font-semibold text-xs uppercase tracking-[0.15em] mb-4 border-l-2 border-[#024674] pl-3"
            >
              Quiénes somos
            </motion.span>

            <AnimatedH2
              id="nosotros-heading"
              className="font-heading font-extrabold text-[#024674] text-3xl md:text-4xl lg:text-5xl leading-tight mb-6"
            >
              Más de 20 años transformando ideas en realidad visual.
            </AnimatedH2>

            <motion.div
              {...FADE_UP}
              transition={{ ...FADE_UP.transition, delay: 0.2 }}
              className="space-y-4 text-[#5E6B78] font-body text-base leading-relaxed"
            >
              <p>
                Acrílica del Perú es una empresa de fabricación de publicidad visual con más de
                20 años de experiencia. Nos especializamos en transformar ideas en soluciones
                visuales funcionales, atractivas y personalizadas para cada cliente.
              </p>
              <p>
                Trabajamos con una amplia variedad de materiales: acrílico, MDF, Celtex, vinil,
                PET, PVC, madera, estructuras metálicas, sistemas LED e impresión en gran
                formato. Todo en un mismo taller, con control total del proceso.
              </p>
              <p>
                Nuestros clientes van desde pymes que necesitan su primer exhibidor hasta marcas
                nacionales como Toyota, MAPFRE y Papa John&apos;s que confían en nosotros para
                sus campañas a nivel nacional.
              </p>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              {...FADE_UP}
              transition={{ ...FADE_UP.transition, delay: 0.35 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {[
                "Taller propio en Chorrillos",
                "Fabricación a medida",
                "Desde 1 hasta 1000+ piezas",
                "Envíos a todo el Perú",
              ].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 bg-[#F5F7FA] border border-[#E5EAF0] rounded-full px-4 py-1.5 text-xs font-medium text-[#024674] font-heading"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25B15F]" aria-hidden="true" />
                  {badge}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Carousel column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number] }}
            className="relative"
          >
            <div className="overflow-hidden rounded-2xl shadow-xl" ref={emblaRef}>
              <div className="flex">
                {CAROUSEL_IMAGES.map((img, i) => (
                  <div
                    key={i}
                    className="relative flex-none w-full aspect-[4/3]"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority={i === 0}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Dots */}
            <div
              className="flex justify-center gap-2 mt-4"
              role="tablist"
              aria-label="Imágenes del taller"
            >
              {CAROUSEL_IMAGES.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === selectedIndex}
                  aria-label={`Imagen ${i + 1}`}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === selectedIndex
                      ? "bg-[#024674] w-6"
                      : "bg-[#E5EAF0] w-2 hover:bg-[#024674]/40"
                  }`}
                />
              ))}
            </div>

            {/* Decorative accent */}
            <div
              className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#025694]/10 rounded-2xl -z-10"
              aria-hidden="true"
            />
            <div
              className="absolute -top-4 -left-4 w-16 h-16 border-2 border-[#024674]/20 rounded-xl -z-10"
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
