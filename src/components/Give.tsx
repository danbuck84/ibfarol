"use client";
import { useTranslations } from "next-intl";

export default function Give() {
  const t = useTranslations('Give');

  return (
    <section className="py-20 px-8 bg-brand-canvas" id="contribua">
      <div className="max-w-[800px] mx-auto bg-black rounded-xl overflow-hidden shadow-xl border border-white/10">
        {/* Imagem com o QR Code e chaves */}
        <img src="/contribua-pix.jpg" alt="Contribua via PIX" className="w-full h-auto object-cover" />
        
        {/* Botões de atalho para cópia */}
        <div className="bg-[#0a0a0a] border-t border-white/5 p-5 md:p-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={() => navigator.clipboard.writeText("61.652.008/0001-27")} className="bg-white/10 text-white px-6 py-3 rounded hover:bg-white/20 transition-colors w-full sm:w-auto text-sm uppercase tracking-wider font-semibold border border-white/10 hover:border-white/30">
                Copiar CNPJ
            </button>
            <button onClick={() => navigator.clipboard.writeText("ofertas@batistafarol.org")} className="bg-brand-primary text-white px-6 py-3 rounded hover:bg-brand-primary-deep transition-colors w-full sm:w-auto text-sm uppercase tracking-wider font-bold">
                Copiar E-mail
            </button>
        </div>
      </div>
    </section>
  );
}
