"use client";

export default function Give() {

  return (
    <section className="min-h-[85vh] flex items-center justify-center py-20 px-6 md:px-8 bg-black">
      <div className="max-w-[800px] w-full mx-auto bg-[#0a0a0a] rounded-xl overflow-hidden shadow-2xl border border-white/5">
        <div className="flex flex-col md:flex-row">
          {/* Left: QR Code */}
          <div className="p-8 md:p-12 flex items-center justify-center bg-black/50 border-b md:border-b-0 md:border-r border-white/5">
            <img src="/pix-qr.png" alt="QR Code PIX" className="w-[200px] md:w-[280px] h-auto rounded-lg bg-white p-2" />
          </div>

          {/* Right: Info */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <h1 className="text-3xl font-bold tracking-[4px] text-[#CED8D7] mb-10 uppercase">
              Contribua
            </h1>

            <div className="space-y-6">
              {/* CNPJ */}
              <div>
                <p className="text-[10px] md:text-xs font-bold tracking-[2px] uppercase text-[#66716F] mb-1">Chave PIX — CNPJ</p>
                <p className="text-2xl md:text-[28px] font-bold text-brand-primary">61.652.008/0001-27</p>
              </div>

              <div className="w-full h-px bg-white/5"></div>

              {/* Email */}
              <div>
                <p className="text-[10px] md:text-xs font-bold tracking-[2px] uppercase text-[#66716F] mb-1">Chave PIX — E-mail</p>
                <p className="text-lg md:text-xl font-semibold text-white">ofertas@batistafarol.org</p>
              </div>

              <div className="w-full h-px bg-white/5"></div>

              {/* Banco */}
              <div>
                <p className="text-[10px] md:text-xs font-bold tracking-[2px] uppercase text-[#66716F] mb-1">Banco</p>
                <p className="text-lg md:text-xl font-semibold text-white">Cora</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Botões de atalho para cópia */}
        <div className="bg-[#0f0f0f] border-t border-white/5 p-5 md:p-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={() => navigator.clipboard.writeText("61.652.008/0001-27")} className="bg-white/10 text-white px-6 py-3 rounded hover:bg-white/20 transition-colors w-full sm:w-auto text-xs md:text-sm uppercase tracking-wider font-semibold border border-white/10 hover:border-white/30">
                Copiar CNPJ
            </button>
            <button onClick={() => navigator.clipboard.writeText("ofertas@batistafarol.org")} className="bg-brand-primary text-brand-on-primary px-6 py-3 rounded hover:bg-brand-primary-deep transition-colors w-full sm:w-auto text-xs md:text-sm uppercase tracking-wider font-bold">
                Copiar E-mail
            </button>
        </div>
      </div>
    </section>
  );
}
