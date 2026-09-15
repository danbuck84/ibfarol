"use client";

export default function Give() {
  return (
    <div className="w-full bg-[#0a0a0a] rounded-xl overflow-hidden shadow-2xl border border-white/5">
      <div className="flex flex-col">
        {/* Top: QR Code */}
        <div className="p-8 md:p-12 flex items-center justify-center bg-black/50 border-b border-white/5">
          <img src="/pix-qr.png" alt="QR Code PIX" className="w-[180px] h-auto rounded-lg bg-white p-2" />
        </div>

        {/* Bottom: Info */}
        <div className="p-8 md:p-10 flex flex-col justify-center">
          <h2 className="text-xl md:text-2xl font-bold tracking-[2px] text-[#CED8D7] mb-8 uppercase text-center">
            Dados para Contribuição
          </h2>

          <div className="space-y-6">
            {/* CNPJ */}
            <div>
              <p className="text-[10px] font-bold tracking-[2px] uppercase text-[#66716F] mb-1">Chave PIX — CNPJ</p>
              <p className="text-xl md:text-2xl font-bold text-brand-primary">61.652.008/0001-27</p>
            </div>

            <div className="w-full h-px bg-white/5"></div>

            {/* Email */}
            <div>
              <p className="text-[10px] font-bold tracking-[2px] uppercase text-[#66716F] mb-1">Chave PIX — E-mail</p>
              <p className="text-lg font-semibold text-white">ofertas@batistafarol.org</p>
            </div>

            <div className="w-full h-px bg-white/5"></div>

            {/* Banco */}
            <div>
              <p className="text-[10px] font-bold tracking-[2px] uppercase text-[#66716F] mb-1">Conta Bancária</p>
              <p className="text-base text-white/90">Igreja Batista Farol</p>
              <p className="text-base text-white/90">Banco Cora</p>
              <p className="text-base text-white/90">Agência: 0001</p>
              <p className="text-base text-white/90">Conta: 6096127-6</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Botões de atalho para cópia */}
      <div className="bg-[#0f0f0f] border-t border-white/5 p-5 flex flex-col sm:flex-row gap-3 justify-center items-center">
          <button onClick={() => navigator.clipboard.writeText("61.652.008/0001-27")} className="bg-white/10 text-white px-5 py-3 rounded hover:bg-white/20 transition-colors w-full sm:w-auto text-xs uppercase tracking-wider font-semibold border border-white/10 hover:border-white/30">
              Copiar CNPJ
          </button>
          <button onClick={() => navigator.clipboard.writeText("ofertas@batistafarol.org")} className="bg-brand-primary text-brand-on-primary px-5 py-3 rounded hover:bg-brand-primary-deep transition-colors w-full sm:w-auto text-xs uppercase tracking-wider font-bold">
              Copiar E-mail
          </button>
      </div>
    </div>
  );
}
