"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

type Categoria = "todos" | "acrilicos" | "totems" | "luminosos" | "impresion";

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    titulo: "Tótem MAGIA",
    cliente: "MAGIA",
    categoria: "totems" as Categoria,
    imagen: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/magia-totem.jpg",
    alt: "Tótem publicitario para MAGIA — fabricado por Acrílica del Perú",
  },
  {
    id: 2,
    titulo: "Exhibidor Papa John's",
    cliente: "Papa John's",
    categoria: "totems" as Categoria,
    imagen: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/papajohns-exhibidor.jpg",
    alt: "Exhibidor POP para Papa John's — diseño y fabricación Acrílica del Perú",
  },
  {
    id: 3,
    titulo: "Señalética MAPFRE",
    cliente: "MAPFRE",
    categoria: "acrilicos" as Categoria,
    imagen: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/mapfre-señaletica.jpg",
    alt: "Señalética corporativa en acrílico para MAPFRE",
  },
  {
    id: 4,
    titulo: "Display Toyota",
    cliente: "Toyota",
    categoria: "totems" as Categoria,
    imagen: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/toyota-display.jpg",
    alt: "Display publicitario para Toyota concesionaria",
  },
  {
    id: 5,
    titulo: "Letrero LED Tambo+",
    cliente: "Tambo+",
    categoria: "luminosos" as Categoria,
    imagen: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/tambo-led.jpg",
    alt: "Letrero luminoso LED para tienda Tambo+",
  },
  {
    id: 6,
    titulo: "Gigantografía San Fernando",
    cliente: "San Fernando",
    categoria: "impresion" as Categoria,
    imagen: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/sanfernando-banner.jpg",
    alt: "Impresión en gran formato para campaña San Fernando",
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
          <motion.h2
            {...FADE_UP}
            transition={{ ...FADE_UP.transition, delay: 0.1 }}
            id="portafolio-heading"
            className="font-heading font-extrabold text-[#024674] text-3xl md:text-4xl lg:text-5xl leading-tight mb-4"
          >
            Nuestros trabajos
          </motion.h2>
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
                className="group relative aspect-square rounded-2xl overflow-hidden bg-[#F5F7FA] cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300"
                role="listitem"
                tabIndex={0}
                aria-label={`${item.titulo} — cliente: ${item.cliente}`}
              >
                {/* Placeholder */}
                <div className="absolute inset-0 placeholder-img flex items-center justify-center">
                  <div className="text-center px-4">
                    <div className="text-[#024674]/20 font-heading font-bold text-sm mb-1">
                      {item.titulo}
                    </div>
                    <div className="text-[#024674]/15 font-body text-xs">{item.cliente}</div>
                  </div>
                </div>

                {/* Hover overlay — spotlight style */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-[#024674]/90 via-[#024674]/40 to-transparent flex flex-col justify-end p-5"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.25 }}
                >
                  <motion.div
                    initial={{ y: 12, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.25, delay: 0.05 }}
                  >
                    <div className="text-[10px] font-heading font-semibold text-white/60 uppercase tracking-wider mb-1">
                      {item.cliente}
                    </div>
                    <div className="font-heading font-bold text-white text-base">
                      {item.titulo}
                    </div>
                  </motion.div>
                </motion.div>

                {/* Scale image on hover */}
                <motion.div
                  className="absolute inset-0 -z-10"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number] }}
                  aria-hidden="true"
                />
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
