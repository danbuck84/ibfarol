"use client";

import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function NotFound() {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.variable} font-sans bg-brand-canvas text-brand-ink h-screen flex flex-col items-center justify-center`}>
        <div className="text-center px-6">
          <div className="flex justify-center mb-8">
            <img src="/logo.png" alt="Igreja Batista Farol" className="h-16 w-auto" />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-brand-primary mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-brand-ink mb-6">Página não encontrada</h2>
          <p className="text-lg text-brand-body mb-10 max-w-md mx-auto">
            A página que você está procurando não existe, foi movida ou o endereço está incorreto.
          </p>
          <a href="/" className="inline-block font-semibold text-brand-on-primary bg-brand-primary px-8 py-4 rounded-md transition-colors hover:bg-brand-primary-deep shadow-md">
            Voltar para o Início
          </a>
        </div>
      </body>
    </html>
  );
}
