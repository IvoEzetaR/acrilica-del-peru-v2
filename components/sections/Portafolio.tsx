"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AnimatedH2 } from "@/components/ui/animated-h2";
import { buildWaLink } from "@/lib/wa";

type Categoria = "todos" | "acrilicos" | "totems" | "luminosos" | "impresion";

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    titulo: "Tótem MAGIA",
    cliente: "MAGIA",
    categoria: "totems" as Categoria,
    imagen: "/images/portfolio-totem.png",
    alt: "Tótem publicitario para MAGIA — fabricado por Acrílica del Perú",
    waServicio: "Tótems y Displays POP",
  },
  {
    id: 2,
    titulo: "Letrero MAGIA",
    cliente: "MAGIA",
    categoria: "luminosos" as Categoria,
    imagen: "/images/portfolio-rebranding-magia.png",
    alt: "Letrero corporativo MAGIA — fabricado por Acrílica del Perú",
    waServicio: "Letreros Luminosos LED",
  },
  {
    id: 3,
    titulo: "Counter Papa John's",
    cliente: "Papa John's",
    categoria: "totems" as Categoria,
    imagen: "/images/portfolio-counter-papajohns.png",
    alt: "Counter y exhibidor POP para Papa John's",
    waServicio: "Módulos y Estructuras",
  },
  {
    id: 4,
    titulo: "Trofeos Corporativos",
    cliente: "Corporativo",
    categoria: "acrilicos" as Categoria,
    imagen: "/images/portfolio-trofeos-corporativos.png",
    alt: "Trofeos corporativos personalizados en acrílico",
    waServicio: "Trofeos y Reconocimientos",
  },
  {
    id: 5,
    titulo: "Arco Plaza",
    cliente: "Plaza",
    categoria: "totems" as Categoria,
    imagen: "/images/portfolio-arco-plaza.png",
    alt: "Arco decorativo corporativo para centro comercial",
    waServicio: "Módulos y Estructuras",
  },
  {
    id: 6,
    titulo: "Instalación MAGIA.pe",
    cliente: "MAGIA",
    categoria: "totems" as Categoria,
    imagen: "/images/portfolio-rebranding-magia-instalacion.png",
    alt: "Instalación de señalética corporativa para MAGIA.pe",
    waServicio: "Tótems y Displays POP",
  },
  {
    id: 7,
    titulo: "Roll Screen La Patrona",
    cliente: "La Patrona",
    categoria: "impresion" as Categoria,
    imagen: "/images/portfolio-roll-patrona.png",
    alt: "Roll screen publicitario para La Patrona",
    waServicio: "Impresión en Gran Formato",
  },
  {
    id: 8,
    titulo: "Backing DSM",
    cliente: "dsm-firmenich",
    categoria: "impresion" as Categoria,
    imagen: "/images/portfolio-backing-dsm.png",
    alt: "Backing de impresión gran formato para DSM Firmenich",
    waServicio: "Impresión en Gran Formato",
  },
  {
    id: 9,
    titulo: "Trofeo MAPFRE",
    cliente: "MAPFRE",
    categoria: "acrilicos" as Categoria,
    imagen: "/images/portfolio-trofeo-mapfre.png",
    alt: "Trofeo corporativo en acrílico para MAPFRE",
    waServicio: "Trofeos y Reconocimientos",
  },
];

const CATEGORIAS: { value: Categoria; label: string }[] = [
  { value: "todos", label: "Todos" },
  { value: "acrilicos", label: "Acrílicos" },
  { value: "totems", label: "Tótems / Displays" },
  { value: "luminosos", label: "Luminosos" },
  { value: "impresion", label: "Gran Formato" },
];

const FADE_UP = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number] },
};

// WhatsApp icon — reuse SVG from rest of site
const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width={14}
    height={14}
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
  </svg>
);

export function Portafolio() {
  const [activeCategory, setActiveCategory] = useState<Categoria>("todos");

  const filtered =
    activeCategory === "todos"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.categoria === activeCategory);

  return (
    <section
      id="portafolio"
      className="py-20 md:py-28 bg-white overflow-hidden"
      aria-labelledby="portafolio-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            {...FADE_UP}
            className="inline-block text-[#024674] font-heading font-semibold text-xs uppercase tracking-[0.15em] mb-4 border-b border-[#024674]/30 pb-1"
          >
            Proyectos realizados
          </motion.span>
          <AnimatedH2
            id="portafolio-heading"
            className="font-heading font-extrabold text-[#024674] text-3xl md:text-4xl lg:text-5xl leading-tight mb-4"
          >
            Nuestros trabajos
          </AnimatedH2>
          <motion.p
            {...FADE_UP}
            transition={{ ...FADE_UP.transition, delay: 0.2 }}
            className="text-[#5E6B78] font-body text-lg max-w-xl mx-auto"
          >
            Proyectos para marcas que confían en la calidad de nuestra fabricación.
          </motion.p>

          {/* Filter chips */}
          <motion.div
            {...FADE_UP}
            transition={{ ...FADE_UP.transition, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2 mt-8"
            role="tablist"
            aria-label="Filtrar portafolio por categoría"
          >
            {CATEGORIAS.map((cat) => (
              <motion.button
                key={cat.value}
                role="tab"
                aria-selected={activeCategory === cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium font-heading transition-all duration-200 ${
                  activeCategory === cat.value
                    ? "bg-[#024674] text-white shadow-md"
                    : "bg-[#F5F7FA] text-[#5E6B78] hover:bg-[#E5EAF0] border border-[#E5EAF0]"
                }`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                {cat.label}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Gallery grid — spotlight card style (modern-cards: spotlight) */}
        <AnimatePresence mode="popLayout">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
            layout
            role="list"
            aria-label="Galería de proyectos"
          >
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="group relative aspect-square rounded-2xl overflow-hidden bg-[#F5F7FA] shadow-sm hover:shadow-xl transition-shadow duration-300"
                role="listitem"
                aria-label={`${item.titulo} — cliente: ${item.cliente}`}
              >
                {/* Real image — subtle zoom on hover */}
                <Image
                  src={item.imagen}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Always-visible bottom label — title + client over dark gradient.
                    Fades out on hover to reveal the spotlight CTA overlay. */}
                <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/75 via-black/30 to-transparent p-4 pt-10 opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
                  <div className="font-heading font-semibold text-white text-sm leading-tight">
                    {item.titulo}
                  </div>
                  <div className="text-white/80 text-xs font-body mt-0.5">
                    {item.cliente}
                  </div>
                </div>

                {/* Hover overlay — spotlight + CTA verde "Quiero algo así" */}
                <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#024674]/95 via-[#024674]/70 to-[#024674]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 p-5 text-center">
                  <div className="text-[10px] font-heading font-semibold text-white/70 uppercase tracking-wider transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {item.cliente}
                  </div>
                  <div className="font-heading font-bold text-white text-lg leading-tight transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                    {item.titulo}
                  </div>
                  <a
                    href={buildWaLink({
                      servicio: item.waServicio,
                      mensaje: `Hola, vi el proyecto "${item.titulo}" en su portafolio y me interesa algo similar.`,
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-[#25B15F] hover:bg-[#1d8f4c] text-white text-xs font-semibold font-heading px-4 py-2 rounded-lg transition-colors shadow-md transform translate-y-2 group-hover:translate-y-0 duration-300 delay-150"
                    aria-label={`Cotizar proyecto similar a ${item.titulo} por WhatsApp`}
                  >
                    <WhatsAppIcon />
                    Quiero algo así
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          {...FADE_UP}
          transition={{ ...FADE_UP.transition, delay: 0.2 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://wa.me/51996097208?text=Hola%2C%20vi%20sus%20trabajos%20y%20me%20gustar%C3%ADa%20cotizar%20un%20proyecto%20similar."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#024674] font-heading font-semibold text-sm border border-[#024674]/30 rounded-xl px-6 py-3 hover:bg-[#024674] hover:text-white transition-all duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Cotizar proyecto similar por WhatsApp"
          >
            ¿Te interesa algo así para tu marca?
            <ArrowRight size={14} aria-hidden="true" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
