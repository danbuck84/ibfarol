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
      <body className={`${poppins.variable} font-sans bg-brand-ink text-white h-screen flex flex-col items-center justify-center relative overflow-hidden`}>
        {/* Um leve brilho no fundo simulando um farol */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="text-center px-6 relative z-10">
          <div className="flex justify-center mb-8">
            <img src="/logo.png" alt="Igreja Batista Farol" className="h-20 w-auto drop-shadow-2xl" />
          </div>
          
          <h1 className="text-8xl md:text-[120px] font-bold text-brand-primary mb-2 opacity-90 tracking-tighter">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-brand-canvas-soft mb-8">Página não encontrada</h2>
          
          <div className="max-w-lg mx-auto bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl mb-10 backdrop-blur-sm">
            <p className="text-lg md:text-xl text-brand-primary italic mb-4 font-medium">
              "Aquele que anda nas trevas não sabe para onde vai."
            </p>
            <p className="text-sm md:text-base text-gray-400 font-semibold tracking-widest uppercase">
              João 12:35
            </p>
            <div className="w-12 h-[1px] bg-white/20 mx-auto my-6"></div>
            <p className="text-base md:text-lg text-gray-300">
              Não fique no escuro. Vamos te levar de volta para a luz da página inicial.
            </p>
          </div>

          <a href="/" className="inline-flex items-center gap-3 font-bold text-brand-ink bg-brand-primary px-8 py-4 rounded-full transition-all hover:bg-brand-primary-deep hover:scale-105 shadow-[0_0_20px_rgba(255,182,61,0.4)]">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Voltar para a Luz
          </a>
        </div>
      </body>
    </html>
  );
}
