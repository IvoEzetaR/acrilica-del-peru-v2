import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F5F7FA] px-4">
      <div className="text-center max-w-md">
        <h1 className="font-heading font-extrabold text-[#024674] text-6xl mb-4">404</h1>
        <p className="text-[#5E6B78] font-body text-lg mb-8">
          Esta página no existe. Vuelve al inicio para ver nuestros servicios.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#024674] text-white px-7 py-3.5 rounded-xl text-sm font-bold font-heading hover:bg-[#035a93] transition-colors"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
