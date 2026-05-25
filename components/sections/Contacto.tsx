"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, ArrowRight } from "lucide-react";
import { buildWaLink } from "@/lib/wa";

const contactSchema = z.object({
  nombre: z.string().min(2, "Escribe tu nombre completo").max(80),
  empresa: z.string().optional(),
  servicio: z.string().min(1, "Selecciona un servicio"),
  cantidad: z.string().optional(),
  mensaje: z.string().min(10, "Describe tu proyecto (mínimo 10 caracteres)").max(500),
});

type ContactForm = z.infer<typeof contactSchema>;

const SERVICIOS_FORM = [
  "Trabajos en Acrílico",
  "Tótems y Displays POP",
  "Exhibidores POP",
  "Letreros Luminosos LED",
  "Impresión en Gran Formato",
  "Merchandising Corporativo",
  "Módulos y Estructuras",
  "Trofeos y Reconocimientos",
  "Otro / No sé exactamente",
];

const FADE_UP = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number] },
};

export function Contacto() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const watchedValues = watch();

  const onSubmit = (data: ContactForm) => {
    const waLink = buildWaLink({
      servicio: data.servicio,
      cantidad: data.cantidad,
      mensaje: `Hola, soy ${data.nombre}${data.empresa ? ` de ${data.empresa}` : ""}. ${data.mensaje}`,
    });
    window.open(waLink, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <section
      id="contacto"
      className="py-20 md:py-28 bg-[#F5F7FA] overflow-hidden"
      aria-labelledby="contacto-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.span
            {...FADE_UP}
            className="inline-block text-[#024674] font-heading font-semibold text-xs uppercase tracking-[0.15em] mb-4 border-b border-[#024674]/30 pb-1"
          >
            Hablemos de tu proyecto
          </motion.span>
          <motion.h2
            {...FADE_UP}
            transition={{ ...FADE_UP.transition, delay: 0.1 }}
            id="contacto-heading"
            className="font-heading font-extrabold text-[#024674] text-3xl md:text-4xl lg:text-5xl leading-tight mb-4"
          >
            Cotiza tu proyecto
          </motion.h2>
          <motion.p
            {...FADE_UP}
            transition={{ ...FADE_UP.transition, delay: 0.2 }}
            className="text-[#5E6B78] font-body text-lg max-w-xl mx-auto"
          >
            Completa el formulario y te contactamos por WhatsApp con la cotización
            en menos de 2 horas en horario de atención.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Info column */}
          <motion.div
            {...FADE_UP}
            transition={{ ...FADE_UP.transition, delay: 0.15 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact details card */}
            <div className="bg-white rounded-2xl p-6 border border-[#E5EAF0] shadow-sm space-y-5">
              <h3 className="font-heading font-bold text-[#024674] text-lg">
                Información de contacto
              </h3>

              <div className="space-y-4">
                <a
                  href="tel:+51996097208"
                  className="flex items-start gap-3 text-sm text-[#5E6B78] hover:text-[#024674] transition-colors group"
                  aria-label="Llamar al +51 996 097 208"
                >
                  <span className="w-9 h-9 rounded-lg bg-[#024674]/8 flex items-center justify-center shrink-0 group-hover:bg-[#024674]/15 transition-colors">
                    <Phone size={15} className="text-[#024674]" aria-hidden="true" />
                  </span>
                  <div>
                    <div className="font-medium text-[#024674] font-heading text-xs uppercase tracking-wider mb-0.5">Teléfonos</div>
                    <div>+51 996 097 208</div>
                    <div>+51 984 482 330</div>
                  </div>
                </a>

                <a
                  href="mailto:acrilineadelperu@hotmail.com"
                  className="flex items-start gap-3 text-sm text-[#5E6B78] hover:text-[#024674] transition-colors group"
                  aria-label="Enviar correo a acrilineadelperu@hotmail.com"
                >
                  <span className="w-9 h-9 rounded-lg bg-[#024674]/8 flex items-center justify-center shrink-0 group-hover:bg-[#024674]/15 transition-colors">
                    <Mail size={15} className="text-[#024674]" aria-hidden="true" />
                  </span>
                  <div>
                    <div className="font-medium text-[#024674] font-heading text-xs uppercase tracking-wider mb-0.5">Correo</div>
                    <div>acrilineadelperu@hotmail.com</div>
                  </div>
                </a>

                <div className="flex items-start gap-3 text-sm text-[#5E6B78]">
                  <span className="w-9 h-9 rounded-lg bg-[#024674]/8 flex items-center justify-center shrink-0">
                    <MapPin size={15} className="text-[#024674]" aria-hidden="true" />
                  </span>
                  <div>
                    <div className="font-medium text-[#024674] font-heading text-xs uppercase tracking-wider mb-0.5">Dirección</div>
                    <div>Jr. Pico Coan Mz. B2 Lt. 11 C</div>
                    <div>Chorrillos, Lima</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm text-[#5E6B78]">
                  <span className="w-9 h-9 rounded-lg bg-[#024674]/8 flex items-center justify-center shrink-0">
                    <Clock size={15} className="text-[#024674]" aria-hidden="true" />
                  </span>
                  <div>
                    <div className="font-medium text-[#024674] font-heading text-xs uppercase tracking-wider mb-0.5">Horario</div>
                    <div>Lun-Vie: 9:00 am - 6:00 pm</div>
                    <div>Sábado: 9:00 am - 1:00 pm</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="bg-white rounded-2xl p-6 border border-[#E5EAF0] shadow-sm">
              <h3 className="font-heading font-bold text-[#024674] text-sm mb-4 uppercase tracking-wider">
                Síguenos
              </h3>
              <div className="flex gap-3">
                <motion.a
                  href="https://www.facebook.com/acrilicadelperu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#F5F7FA] border border-[#E5EAF0] rounded-lg px-4 py-2.5 text-sm font-medium text-[#024674] hover:bg-[#024674] hover:text-white hover:border-[#024674] transition-all"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  aria-label="Seguir en Facebook"
                >
                  <Facebook size={15} aria-hidden="true" />
                  Facebook
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/acrilicadelperu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#F5F7FA] border border-[#E5EAF0] rounded-lg px-4 py-2.5 text-sm font-medium text-[#024674] hover:bg-[#024674] hover:text-white hover:border-[#024674] transition-all"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  aria-label="Seguir en Instagram"
                >
                  <Instagram size={15} aria-hidden="true" />
                  Instagram
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Form card — glass card style (modern-cards: glass variant blue) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="lg:col-span-3"
          >
            <div className="bg-[#024674] rounded-2xl p-7 md:p-10 shadow-xl shadow-[#024674]/15">
              <h3 className="font-heading font-bold text-white text-xl mb-6">
                Cuéntanos tu proyecto
              </h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-16 h-16 rounded-full bg-[#25B15F]/20 border border-[#25B15F]/30 flex items-center justify-center mx-auto mb-5">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-[#25B15F]" aria-hidden="true">
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="font-heading font-bold text-white text-lg mb-2">
                    ¡Gracias, te estamos contactando!
                  </p>
                  <p className="text-white/70 font-body text-sm">
                    Se abrió WhatsApp con tu solicitud. Nuestro equipo te responderá pronto.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-white/60 text-sm hover:text-white/90 transition-colors underline"
                  >
                    Enviar otra consulta
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  aria-label="Formulario de cotización"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    {/* Nombre */}
                    <div>
                      <label
                        htmlFor="nombre"
                        className="block text-white/80 font-body text-xs font-medium mb-1.5 uppercase tracking-wider"
                      >
                        Nombre *
                      </label>
                      <input
                        id="nombre"
                        type="text"
                        autoComplete="name"
                        {...register("nombre")}
                        placeholder="Tu nombre"
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 text-sm font-body focus:outline-none focus:border-white/60 focus:bg-white/15 transition-colors"
                        aria-describedby={errors.nombre ? "nombre-error" : undefined}
                        aria-invalid={!!errors.nombre}
                      />
                      {errors.nombre && (
                        <p id="nombre-error" className="text-red-300 text-xs mt-1 font-body" role="alert">
                          {errors.nombre.message}
                        </p>
                      )}
                    </div>

                    {/* Empresa */}
                    <div>
                      <label
                        htmlFor="empresa"
                        className="block text-white/80 font-body text-xs font-medium mb-1.5 uppercase tracking-wider"
                      >
                        Empresa (opcional)
                      </label>
                      <input
                        id="empresa"
                        type="text"
                        autoComplete="organization"
                        {...register("empresa")}
                        placeholder="Nombre de tu empresa"
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 text-sm font-body focus:outline-none focus:border-white/60 focus:bg-white/15 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    {/* Servicio */}
                    <div>
                      <label
                        htmlFor="servicio"
                        className="block text-white/80 font-body text-xs font-medium mb-1.5 uppercase tracking-wider"
                      >
                        Servicio *
                      </label>
                      <select
                        id="servicio"
                        {...register("servicio")}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm font-body focus:outline-none focus:border-white/60 focus:bg-white/15 transition-colors appearance-none"
                        aria-describedby={errors.servicio ? "servicio-error" : undefined}
                        aria-invalid={!!errors.servicio}
                      >
                        <option value="" className="text-gray-800">
                          Selecciona un servicio
                        </option>
                        {SERVICIOS_FORM.map((s) => (
                          <option key={s} value={s} className="text-gray-800">
                            {s}
                          </option>
                        ))}
                      </select>
                      {errors.servicio && (
                        <p id="servicio-error" className="text-red-300 text-xs mt-1 font-body" role="alert">
                          {errors.servicio.message}
                        </p>
                      )}
                    </div>

                    {/* Cantidad */}
                    <div>
                      <label
                        htmlFor="cantidad"
                        className="block text-white/80 font-body text-xs font-medium mb-1.5 uppercase tracking-wider"
                      >
                        Cantidad aproximada
                      </label>
                      <input
                        id="cantidad"
                        type="text"
                        {...register("cantidad")}
                        placeholder="Ej: 50 unidades"
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 text-sm font-body focus:outline-none focus:border-white/60 focus:bg-white/15 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Mensaje */}
                  <div className="mb-6">
                    <label
                      htmlFor="mensaje"
                      className="block text-white/80 font-body text-xs font-medium mb-1.5 uppercase tracking-wider"
                    >
                      Descripción del proyecto *
                    </label>
                    <textarea
                      id="mensaje"
                      {...register("mensaje")}
                      rows={4}
                      placeholder="Cuéntanos qué necesitas: medidas, materiales, colores, fecha de entrega..."
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 text-sm font-body focus:outline-none focus:border-white/60 focus:bg-white/15 transition-colors resize-none"
                      aria-describedby={errors.mensaje ? "mensaje-error" : undefined}
                      aria-invalid={!!errors.mensaje}
                    />
                    {errors.mensaje && (
                      <p id="mensaje-error" className="text-red-300 text-xs mt-1 font-body" role="alert">
                        {errors.mensaje.message}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-[#25B15F] text-white py-4 rounded-xl text-base font-bold font-heading disabled:opacity-60 hover:bg-[#1d8f4c] transition-colors shadow-lg shadow-[#25B15F]/20"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    aria-label="Enviar solicitud de cotización por WhatsApp"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                    Cotizar por WhatsApp
                    <ArrowRight size={16} aria-hidden="true" />
                  </motion.button>

                  <p className="text-white/40 font-body text-xs text-center mt-3">
                    Al hacer clic se abrirá WhatsApp con tu solicitud lista para enviar.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
