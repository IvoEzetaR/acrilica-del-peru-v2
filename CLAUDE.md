# Acrílica del Perú V2

## Stack
- Next.js 16.2.6 App Router + TypeScript
- Tailwind v4 + @tailwindcss/postcss
- Framer Motion 12.x (page load stagger, scroll reveal, marquee, hover micro)
- embla-carousel-react 8.x + embla-carousel-autoplay
- react-hook-form 7.x + zod 3.x + @hookform/resolvers
- lucide-react 0.513
- Montserrat + Poppins via next/font/google

## Scripts
```
pnpm dev       # dev server localhost:3000
pnpm build     # production build
pnpm start     # production server
pnpm typecheck # tsc --noEmit
```

## Deploy
- Repo: IvoEzetaR/acrilica-del-peru-v2 (GitHub, public)
- Deploy: Vercel (push main = auto-deploy)
- URL live: https://acrilicadelperu.com (pendiente DNS cliente)
- URL preview: acrilica-del-peru-v2.vercel.app (post-deploy)

## Cliente
- Nombre: Acrílica del Perú E.I.R.L.
- Vertical: Fabricación publicidad visual B2B
- Mercado: Lima, Perú (envíos a todo Perú)
- Tel: +51 996 097 208 / +51 984 482 330
- Email: acrilineadelperu@hotmail.com
- Dirección: Jr. Pico Coan Mz. B2 Lt. 11 C, Chorrillos, Lima
- Horario: L-V 9-18 / Sáb 9-13
- Social: facebook.com/acrilicadelperu / instagram.com/acrilicadelperu

## Design tokens
- Primary: #024674 (azul corporativo)
- Green CTA: #25B15F (WhatsApp)
- Surface: #F5F7FA
- Text muted: #5E6B78
- Border: #E5EAF0
- Dark footer: #011f36

## Framer Motion patterns aplicados
1. Page load stagger: Hero headline (HEADLINE_WORDS, delay 0.2+0.1*i)
2. Scroll reveal: todas las secciones con whileInView fadeInUp
3. Marquee infinito: Clientes.tsx animate x -50%
4. Hover micro: cards servicios (scale image 1.05 + overlay fade)
5. Hover underline nav: scaleX 0→1 (Header.tsx)
6. Hover CTA spring: scale+shadow
7. Counter animation: CountUp en Hero stats bar
8. AnimatePresence: FAQ accordion + filtros portafolio

## modern-cards estilos usados
1. Elevated — Taller.tsx (shadow-[0_4px_24px_rgba(2,70,116,0.08)])
2. Glass — MisionVisionValores.tsx (bg-white/10 backdrop-blur + border white/20)
3. Spotlight — Portafolio.tsx (overlay gradient from-bottom hover)
4. Outline minimal — FAQ.tsx (border animate hover)

## Secciones y anclas
- #inicio (Hero)
- #nosotros (Nosotros)
- #servicios (Servicios)
- #portafolio (Portafolio — no en nav, accessible via botón hero)
- #mision (MisionVisionValores)
- #taller (Taller)
- #clientes (Clientes)
- #faq (FAQ)
- #contacto (Contacto)

## Assets pendientes del cliente
Los siguientes assets son placeholders y deben ser reemplazados cuando el cliente entregue material:
- /public/images/acrilica-logo.svg — DISPONIBLE (del V1)
- /public/images/nosotros-taller-1.jpg → cliente debe entregar foto del taller
- /public/images/nosotros-taller-2.jpg → ídem
- /public/images/nosotros-taller-3.jpg → ídem
- /public/images/servicio-*.jpg → fotos de cada servicio (8 fotos)
- /public/images/og-image.jpg → diseño OG para redes (1200x630)
- Logos clientes: Toyota, Grupo EFE, MAGIA, Fundación Peruana de Cáncer, San Fernando, Papa John's, MAPFRE, dsm-firmenich, New Balance, Financiera Efectiva, La Patrona, Fondo Mivivienda
  - Disponibles en V1: toyota-logo.svg, tambo-logo.svg, grupo-centenario-logo.svg, akipa-logo.svg, faber-castell-logo.svg

## Gotchas (anti-patterns a evitar)
- NO usar npm install — SIEMPRE pnpm
- NO cambiar overlay hero a >40% — cliente pidió explícitamente menos saturación azul
- NO agregar "Preguntas frecuentes" ni "Portafolio" al nav — solo 5 items
- NO agregar precios ni marcas de equipos/software del taller
- Tailwind v4 usa @import "tailwindcss" y @theme{} — NO tailwind.config.ts con theme.extend
- Font variables CSS: --font-montserrat y --font-poppins (definidas en layout.tsx via next/font)
- overflow-x: clip en html y body (globals.css) para prevenir scroll horizontal mobile
- Framer Motion v12: importar de "motion/react" o "framer-motion" (ambos funcionan en v12)

## NO hacer
- Agregar dashboard/admin/auth — este es un sitio de marketing estático
- Cambiar el número de WhatsApp sin confirmar con Ivo
- Subir fotos de Google/stock sin permiso del cliente
- Modificar el JSON-LD LocalBusiness sin verificar los datos reales
- Usar `npm run dev` en lugar de `pnpm dev`
- Agregar integración con CRM/backend — todo es WA links estáticos
