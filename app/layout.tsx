import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const BASE_URL = "https://acrilicadelperu.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Acrílica del Perú | Fabricación de Publicidad Visual y Exhibidores POP",
  description:
    "Más de 20 años fabricando acrílicos, tótems, exhibidores POP, letreros luminosos e impresión en gran formato en Lima, Perú. Clientes: Toyota, MAPFRE, Papa John's y más.",
  keywords: [
    "acrílicos Lima",
    "fabricación publicidad visual Perú",
    "exhibidores POP Lima",
    "tótems publicitarios",
    "letreros luminosos LED",
    "impresión gran formato Lima",
    "merchandising corporativo",
    "displays punto de venta",
    "fabricación acrílico Chorrillos",
  ],
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: BASE_URL,
    siteName: "Acrílica del Perú",
    title: "Acrílica del Perú | Fabricación de Publicidad Visual",
    description:
      "Más de 20 años fabricando acrílicos, tótems, exhibidores POP y letreros luminosos en Lima. Taller propio. Clientes Toyota, MAPFRE, Papa John's.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Acrílica del Perú — Fabricación de publicidad visual premium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Acrílica del Perú | Fabricación de Publicidad Visual",
    description:
      "Más de 20 años fabricando acrílicos, tótems, exhibidores POP y letreros luminosos en Lima.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": BASE_URL,
  name: "Acrílica del Perú E.I.R.L.",
  description:
    "Empresa peruana especializada en fabricación de publicidad visual: acrílicos, tótems, exhibidores POP, letreros luminosos LED e impresión en gran formato.",
  url: BASE_URL,
  telephone: ["+51996097208", "+51984482330"],
  email: "acrilineadelperu@hotmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jr. Pico Coan Mz. B2 Lt. 11 C",
    addressLocality: "Chorrillos",
    addressRegion: "Lima",
    addressCountry: "PE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -12.1817,
    longitude: -77.0163,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "13:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/acrilicadelperu",
    "https://www.instagram.com/acrilicadelperu",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de Publicidad Visual",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Trabajos en Acrílico" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tótems y Displays POP" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Letreros Luminosos LED" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Impresión en Gran Formato" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Merchandising Corporativo" } },
    ],
  },
  foundingDate: "2004",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 10,
    maxValue: 50,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
