"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { WA_GENERIC } from "@/lib/wa";

const FADE_UP = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number] },
};

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Taller", href: "#taller" },
  { label: "Clientes", href: "#clientes" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

const SERVICIOS_LINKS = [
  "Trabajos en Acrílico",
  "Tótems y Displays POP",
  "Exhibidores POP",
  "Letreros Luminosos LED",
  "Impresión en Gran Formato",
  "Merchandising Corporativo",
  "Módulos y Estructuras",
  "Trofeos y Reconocimientos",
];

export function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <footer
      className="bg-[#011f36] text-white overflow-hidden"
      role="contentinfo"
      aria-label="Pie de página Acrílica del Perú"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <motion.div {...FADE_UP} className="lg:col-span-1">
            <a
              href="#inicio"
              onClick={(e) => { e.preventDefault(); handleNavClick("#inicio"); }}
              className="flex items-center gap-2 mb-4"
              aria-label="Acrílica del Perú — volver al inicio"
            >
              <div className="relative w-7 h-7">
                <Image
                  src="/images/acrilica-logo.svg"
                  alt="Logo Acrílica del Perú"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <span className="font-heading font-bold text-white text-sm">
                Acrílica del Perú
              </span>
            </a>
            <p className="text-white/60 font-body text-sm leading-relaxed mb-5">
              Fabricamos publicidad visual de calidad desde Chorrillos, Lima.
              Más de 20 años siendo el socio de fabricación de las marcas más
              exigentes del Perú.
            </p>
            <div className="flex gap-3">
              <motion.a
                href="https://www.facebook.com/acrilicadelperu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Facebook de Acrílica del Perú"
              >
                <Facebook size={15} aria-hidden="true" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/acrilicadelperu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Instagram de Acrílica del Perú"
              >
                <Instagram size={15} aria-hidden="true" />
              </motion.a>
              <motion.a
                href={WA_GENERIC}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#25B15F]/20 flex items-center justify-center hover:bg-[#25B15F]/40 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="WhatsApp de Acrílica del Perú"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Nav links */}
          <motion.div {...FADE_UP} transition={{ ...FADE_UP.transition, delay: 0.1 }}>
            <h3 className="font-heading font-semibold text-white/90 text-xs uppercase tracking-[0.12em] mb-5">
              Navegación
            </h3>
            <nav aria-label="Navegación del pie de página">
              <ul className="space-y-2.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                      className="text-white/55 hover:text-white font-body text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>

          {/* Services */}
          <motion.div {...FADE_UP} transition={{ ...FADE_UP.transition, delay: 0.15 }}>
            <h3 className="font-heading font-semibold text-white/90 text-xs uppercase tracking-[0.12em] mb-5">
              Servicios
            </h3>
            <ul className="space-y-2.5" aria-label="Lista de servicios">
              {SERVICIOS_LINKS.map((s) => (
                <li key={s}>
                  <a
                    href="#servicios"
                    onClick={(e) => { e.preventDefault(); handleNavClick("#servicios"); }}
                    className="text-white/55 hover:text-white font-body text-sm transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div {...FADE_UP} transition={{ ...FADE_UP.transition, delay: 0.2 }}>
            <h3 className="font-heading font-semibold text-white/90 text-xs uppercase tracking-[0.12em] mb-5">
              Contacto
            </h3>
            <div className="space-y-3">
              <a
                href="tel:+51996097208"
                className="flex items-center gap-2.5 text-white/55 hover:text-white font-body text-sm transition-colors"
                aria-label="Llamar al +51 996 097 208"
              >
                <Phone size={13} aria-hidden="true" />
                +51 996 097 208
              </a>
              <a
                href="tel:+51984482330"
                className="flex items-center gap-2.5 text-white/55 hover:text-white font-body text-sm transition-colors"
                aria-label="Llamar al +51 984 482 330"
              >
                <Phone size={13} aria-hidden="true" />
                +51 984 482 330
              </a>
              <a
                href="mailto:acrilineadelperu@hotmail.com"
                className="flex items-center gap-2.5 text-white/55 hover:text-white font-body text-sm transition-colors"
                aria-label="Enviar correo a acrilineadelperu@hotmail.com"
              >
                <Mail size={13} aria-hidden="true" />
                acrilineadelperu@hotmail.com
              </a>
              <div className="flex items-start gap-2.5 text-white/55 font-body text-sm">
                <MapPin size={13} className="mt-0.5 shrink-0" aria-hidden="true" />
                <span>Jr. Pico Coan Mz. B2 Lt. 11 C, Chorrillos, Lima</span>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={WA_GENERIC}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 bg-[#25B15F]/15 border border-[#25B15F]/30 text-[#25B15F] rounded-lg px-4 py-2 text-sm font-semibold font-heading hover:bg-[#25B15F]/25 transition-colors"
              aria-label="Escribir por WhatsApp"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
              Escribir por WhatsApp
            </a>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/35 font-body text-xs">
            © 2026 Acrílica del Perú E.I.R.L. Todos los derechos reservados.
          </p>
          <p className="text-white/25 font-body text-xs">
            Chorrillos, Lima, Perú
          </p>
        </div>
      </div>
    </footer>
  );
}
