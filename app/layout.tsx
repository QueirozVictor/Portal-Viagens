import type { Metadata } from "next";
import "./styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer"

export const metadata: Metadata = {
  title: "SkyTrip Viagens | Descubra seu próximo destino",
  description: "Inspire-se e conheça destinos incríveis ao redor do mundo com a SkyTrip Viagens.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className="flex min-h-screen flex-col bg-slate-50 text-slate-800 antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
