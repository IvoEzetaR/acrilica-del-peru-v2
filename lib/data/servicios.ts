export interface Servicio {
  id: string;
  nombre: string;
  descripcion: string;
  bullets: string[];
  imagen: string;
  imagenAlt: string;
  waMessage: string;
  categoria: "materiales" | "luminosos" | "impresion" | "especiales";
}

export const SERVICIOS: Servicio[] = [
  {
    id: "acrilicos",
    nombre: "Trabajos en Acrílico",
    descripcion:
      "Fabricamos piezas, displays y estructuras en acrílico de alta claridad. Corte láser de precisión, termoformado y uniones perfectas para cada proyecto.",
    bullets: [
      "Portarretratos y marcos personalizados",
      "Displays y porta-folletos",
      "Letras y logos recortados en acrílico",
      "Cajas y exhibidores con tapa",
      "Divisores y paneles decorativos",
      "Acrílico de colores, transparente y espejado",
    ],
    imagen: "/images/servicio-acrilicos.jpg",
    imagenAlt: "Trabajos en acrílico — letras y displays fabricados por Acrílica del Perú",
    waMessage:
      "Hola, me interesa cotizar trabajos en acrílico. ¿Podrían darme más información?",
    categoria: "materiales",
  },
  {
    id: "totems",
    nombre: "Tótems y Displays POP",
    descripcion:
      "Tótems de pie y displays punto de venta que convierten transeúntes en compradores. Los fabricamos desde el diseño hasta la instalación.",
    bullets: [
      "Tótems publicitarios de piso",
      "Displays POP para retail",
      "Islas y exhibidores de producto",
      "Stands para eventos y ferias",
      "Porta-precios y señalética interna",
      "Materiales: acrílico, MDF, PVC, metal",
    ],
    imagen: "/images/servicio-totems.jpg",
    imagenAlt: "Tótems y displays POP — fabricación a medida para marcas corporativas",
    waMessage:
      "Hola, necesito cotizar tótems publicitarios o displays POP. ¿Me pueden ayudar?",
    categoria: "materiales",
  },
  {
    id: "exhibidores",
    nombre: "Exhibidores POP",
    descripcion:
      "Soluciones de exhibición que destacan tu producto en el punto de venta. Diseño personalizado para cada SKU y formato de retail.",
    bullets: [
      "Exhibidores de piso y mostrador",
      "Dispensadores y porta-productos",
      "Módulos de checkout y caja",
      "Exhibidores giratorios",
      "Cenefas y colgadores de producto",
      "Kits de merchandising completos",
    ],
    imagen: "/images/servicio-exhibidores.jpg",
    imagenAlt: "Exhibidores POP personalizados para retail y puntos de venta",
    waMessage:
      "Hola, me interesa cotizar exhibidores POP para mis productos. ¿Tienen disponibilidad?",
    categoria: "materiales",
  },
  {
    id: "letreros-luminosos",
    nombre: "Letreros Luminosos LED",
    descripcion:
      "Fachadas y señalética que brillan de noche y de día. Fabricamos con sistemas LED de alta eficiencia y larga vida útil para el máximo impacto visual.",
    bullets: [
      "Letras corpóreas iluminadas",
      "Cajas de luz y luminosos",
      "Letreros de fachada con LED",
      "Paneles y totems LED",
      "Rótulos retroiluminados",
      "Instalación y mantenimiento incluido",
    ],
    imagen: "/images/servicio-luminosos.jpg",
    imagenAlt: "Letreros luminosos LED — fachadas y señalética corporativa brillante",
    waMessage:
      "Hola, necesito cotizar letreros luminosos LED para nuestra fachada. ¿Me pueden asesorar?",
    categoria: "luminosos",
  },
  {
    id: "impresion-gran-formato",
    nombre: "Impresión en Gran Formato",
    descripcion:
      "Banners, vallas y gigantografías con colores vibrantes que no se desvancen. Impresión de alta resolución en todos los formatos y materiales.",
    bullets: [
      "Banners y gigantografías",
      "Vinilos adhesivos para vidrios y paredes",
      "Lonas publicitarias y backing",
      "Backdrops para eventos y fotos",
      "Floor graphics y señalética de piso",
      "Impresión en tela y mesh",
    ],
    imagen: "/images/servicio-gran-formato.jpg",
    imagenAlt: "Impresión en gran formato — banners, vallas y gigantografías de alta resolución",
    waMessage:
      "Hola, necesito cotizar impresión en gran formato. ¿Qué materiales y tamaños manejan?",
    categoria: "impresion",
  },
  {
    id: "merchandising",
    nombre: "Merchandising Corporativo",
    descripcion:
      "Artículos promocionales y de marca que refuerzan el posicionamiento de tu empresa. Desde cientos hasta miles de unidades con entrega puntual.",
    bullets: [
      "Lapiceros, libretas y agendas",
      "Tazas, botellas y termos",
      "Bolsas y mochilas con sublimación",
      "Llaveros y pins corporativos",
      "Kits de bienvenida para colaboradores",
      "Artículos para eventos y lanzamientos",
    ],
    imagen: "/images/servicio-merchandising.jpg",
    imagenAlt: "Merchandising corporativo personalizado — artículos de marca en cantidad",
    waMessage:
      "Hola, me interesa cotizar merchandising corporativo. ¿Cuáles son sus cantidades mínimas?",
    categoria: "especiales",
  },
  {
    id: "modulos-estructuras",
    nombre: "Módulos y Estructuras",
    descripcion:
      "Módulos de venta, islas de retail y estructuras metálicas para tiendas, ferias y eventos. Diseño y fabricación completa con armado en sitio.",
    bullets: [
      "Islas y stands para centros comerciales",
      "Módulos de venta tipo kiosco",
      "Estructuras metálicas con acabados",
      "Muebles de tienda personalizados",
      "Cabinas fotográficas y selfie-spots",
      "Instalación y desmontaje incluido",
    ],
    imagen: "/images/servicio-modulos.jpg",
    imagenAlt: "Módulos y estructuras para retail, ferias y eventos corporativos",
    waMessage:
      "Hola, necesito cotizar módulos o estructuras para nuestro punto de venta. ¿Podrían asesorarme?",
    categoria: "especiales",
  },
  {
    id: "trofeos",
    nombre: "Trofeos y Reconocimientos",
    descripcion:
      "Trofeos, placas y reconocimientos corporativos que duran décadas. Fabricados en acrílico, MDF y metales con grabado láser de alta precisión.",
    bullets: [
      "Trofeos corporativos personalizados",
      "Placas de reconocimiento y premiación",
      "Medallas para eventos y torneos",
      "Diplomas enmarcados con grabado",
      "Esculturas de marca en resina o acrílico",
      "Recordatorios y souvenirs de empresa",
    ],
    imagen: "/images/servicio-trofeos.jpg",
    imagenAlt: "Trofeos y reconocimientos corporativos — grabado láser de precisión",
    waMessage:
      "Hola, me interesa cotizar trofeos o placas de reconocimiento corporativo. ¿Qué opciones tienen?",
    categoria: "especiales",
  },
];

export const FAQ_ITEMS = [
  {
    id: "personalizados",
    pregunta: "¿Fabrican productos 100% personalizados?",
    respuesta:
      "Sí. Todos nuestros productos se fabrican a medida según el diseño del cliente. Trabajamos con el arte final que nos proveen o lo desarrollamos desde cero si lo necesitan. No manejamos catálogos fijos — cada proyecto es único.",
  },
  {
    id: "cantidades",
    pregunta: "¿Cuánto es la cantidad mínima y máxima de pedido?",
    respuesta:
      "Trabajamos desde 1 pieza (pedidos unitarios para proyectos especiales) hasta producciones de miles de unidades para campañas nacionales. No hay mínimo en la mayoría de nuestros servicios. Para merchandising, la cantidad mínima varía según el artículo (generalmente desde 50 unidades).",
  },
  {
    id: "provincia",
    pregunta: "¿Hacen envíos a provincias?",
    respuesta:
      "Sí, coordinamos envíos a todo el Perú vía courier o encomienda. Para proyectos grandes (módulos, estructuras), coordinamos el transporte y la instalación in situ. Contáctenos para una cotización con flete incluido.",
  },
  {
    id: "instalacion",
    pregunta: "¿Incluyen el servicio de instalación?",
    respuesta:
      "Depende del producto. Para letreros luminosos, módulos, estructuras y tótems grandes, sí incluimos instalación en Lima Metropolitana. Para otros productos, coordinamos según la necesidad. En la cotización siempre aclaramos qué incluye el servicio.",
  },
  {
    id: "materiales",
    pregunta: "¿Con qué materiales trabajan?",
    respuesta:
      "Trabajamos con acrílico, MDF, Celtex, vinil, PET, PVC, madera natural, estructuras metálicas, sistemas LED y materiales de impresión en gran formato. La elección del material depende del uso final, el presupuesto y los requisitos de durabilidad del proyecto.",
  },
  {
    id: "tiempos",
    pregunta: "¿Cuáles son los tiempos de entrega?",
    respuesta:
      "Los tiempos varían según el tipo y volumen del proyecto. Piezas simples en acrílico o impresión: 3-5 días hábiles. Proyectos medianos (exhibidores, tótems): 7-15 días. Proyectos grandes (módulos, estructuras, campañas nacionales): desde 20 días. Siempre confirmamos el plazo exacto al momento de la cotización.",
  },
];

export const VALORES = [
  {
    id: "calidad",
    titulo: "Calidad",
    descripcion: "Materiales premium y control de calidad en cada etapa del proceso.",
    icono: "shield-check",
  },
  {
    id: "responsabilidad",
    titulo: "Responsabilidad",
    descripcion: "Cumplimos plazos y entregamos lo que prometemos, sin excusas.",
    icono: "clock",
  },
  {
    id: "innovacion",
    titulo: "Innovación",
    descripcion: "Incorporamos nuevas técnicas y materiales para soluciones más efectivas.",
    icono: "lightbulb",
  },
  {
    id: "transparencia",
    titulo: "Transparencia",
    descripcion: "Comunicación clara en precios, plazos y alcance de cada proyecto.",
    icono: "eye",
  },
  {
    id: "confianza",
    titulo: "Confianza",
    descripcion: "+20 años siendo el socio de fabricación de las marcas más exigentes del Perú.",
    icono: "handshake",
  },
];

export const CLIENTES_MARQUEE = [
  { nombre: "Toyota", logo: "/images/toyota-logo.svg" },
  { nombre: "Grupo EFE", logo: "/images/grupo-efe-logo.svg" },
  { nombre: "Grupo Centenario", logo: "/images/grupo-centenario-logo.svg" },
  { nombre: "MAGIA", logo: "/images/magia-logo.svg" },
  { nombre: "Fundación Peruana de Cáncer", logo: "/images/fundacion-cancer-logo.svg" },
  { nombre: "Tambo+", logo: "/images/tambo-logo.svg" },
  { nombre: "San Fernando", logo: "/images/san-fernando-logo.svg" },
  { nombre: "Papa John's", logo: "/images/papajohns-logo.svg" },
  { nombre: "MAPFRE", logo: "/images/mapfre-logo.svg" },
  { nombre: "dsm-firmenich", logo: "/images/dsm-firmenich-logo.svg" },
  { nombre: "New Balance", logo: "/images/new-balance-logo.svg" },
  { nombre: "Financiera Efectiva", logo: "/images/financiera-efectiva-logo.svg" },
  { nombre: "La Patrona", logo: "/images/la-patrona-logo.svg" },
  { nombre: "Fondo Mivivienda", logo: "/images/mivivienda-logo.svg" },
];

export const MAQUINARIA = [
  "2 Láseres CO₂ de alta potencia",
  "Router CNC de precisión",
  "Plotter de corte y grabado",
  "Dobladoras de acrílico y PVC",
  "Prensas hidráulicas",
  "Planchas de sublimación",
  "Compresora industrial",
  "Equipos de pintura y acabado",
];

export const STATS = [
  { valor: 20, sufijo: "+", label: "Años de experiencia", descripcion: "Desde 2004 fabricando para las marcas más importantes del Perú" },
  { valor: 1000, sufijo: "+", label: "Proyectos entregados", descripcion: "Desde piezas únicas hasta campañas nacionales de cientos de unidades" },
  { valor: 100, sufijo: "%", label: "Taller propio", descripcion: "Todo se fabrica en nuestro taller en Chorrillos — sin terceros" },
];
