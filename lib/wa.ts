const WA_NUMBER = "51996097208";

export function buildWaLink(params?: {
  servicio?: string;
  cantidad?: string;
  mensaje?: string;
}) {
  const base = `https://wa.me/${WA_NUMBER}`;

  if (!params) return base;

  const parts: string[] = [];
  if (params.servicio) parts.push(`Servicio: ${params.servicio}`);
  if (params.cantidad) parts.push(`Cantidad: ${params.cantidad}`);
  if (params.mensaje) parts.push(params.mensaje);

  if (parts.length === 0) return base;

  const text = encodeURIComponent(parts.join("\n"));
  return `${base}?text=${text}`;
}

export const WA_HERO = buildWaLink({
  mensaje: "Hola, me gustaría cotizar un proyecto con Acrílica del Perú.",
});

export const WA_GENERIC = buildWaLink();
