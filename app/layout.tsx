import type { Metadata } from "next";
import "./styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer"


export const metadata: Metadata = {
  title: "E F A Viagens",
  description: "Seu portal de viagens para encontrar os melhores destinos da sua proxima Trip!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-Br"
    >
      <body className="min-h-screen flex flex-col bg-cyan-50">
         <Header/>
        <main className="flex-1">
          {children}
        </main>
        <Footer/>
        </body>
    </html>
  );
}
