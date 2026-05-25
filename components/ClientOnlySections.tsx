"use client";

import dynamic from "next/dynamic";

// These sections use client-only APIs (embla, react-hook-form)
// Dynamic with ssr:false must live in a client component

export const NosotrosClient = dynamic(
  () => import("@/components/sections/Nosotros").then((m) => ({ default: m.Nosotros })),
  { ssr: false, loading: () => <div className="py-20 bg-white" aria-hidden="true" /> }
);

export const ContactoClient = dynamic(
  () => import("@/components/sections/Contacto").then((m) => ({ default: m.Contacto })),
  { ssr: false, loading: () => <div className="py-20 bg-[#F5F7FA]" aria-hidden="true" /> }
);
