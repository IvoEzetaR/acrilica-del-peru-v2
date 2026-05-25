import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Servicios } from "@/components/sections/Servicios";
import { Portafolio } from "@/components/sections/Portafolio";
import { MisionVisionValores } from "@/components/sections/MisionVisionValores";
import { Taller } from "@/components/sections/Taller";
import { Clientes } from "@/components/sections/Clientes";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";
import { NosotrosClient, ContactoClient } from "@/components/ClientOnlySections";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <NosotrosClient />
      <Servicios />
      <Portafolio />
      <MisionVisionValores />
      <Taller />
      <Clientes />
      <FAQ />
      <ContactoClient />
      <Footer />
    </main>
  );
}
