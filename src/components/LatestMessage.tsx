export default function LatestMessage() {
  return (
    <section className="bg-brand-canvas-soft py-16 px-8" id="recursos">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div className="relative rounded-lg overflow-hidden border border-brand-hairline aspect-video">
          <div className="ph">
            <span>Frame da pregação de domingo — o pregador no púlpito</span>
          </div>
        </div>
        
        <div>
          <p className="text-sm font-semibold tracking-[2.52px] uppercase text-brand-primary-ink mb-4">
            Última mensagem
          </p>
          <h2 className="text-[28px] md:text-[36px] font-normal leading-[34px] md:leading-[40px] tracking-[-0.9px] m-0 text-balance">
            A cidade sobre o monte
          </h2>
          
          <div className="mt-3 flex flex-wrap items-center gap-3 text-xs leading-[16px] text-brand-mute font-variant-numeric tabular-nums">
            <span>Pr. Gustavo</span>
            <span>20 jul 2026</span>
            <span>38 min</span>
            <span className="inline-block bg-white text-brand-canvas-text-soft border border-brand-hairline rounded-md px-2 py-0.5 text-[13px] leading-[18px] italic">
              Mateus 5.13-16
            </span>
          </div>
          
          <p className="mt-5 text-lg leading-[28px] text-brand-body max-w-[46ch] text-pretty">
            Terceira parte da série no Sermão do Monte. O áudio de cada domingo fica disponível aqui na segunda-feira.
          </p>
          
          <div className="flex flex-wrap gap-3 mt-7">
            <button className="font-semibold text-brand-on-primary bg-brand-primary border border-brand-primary px-4 py-3 rounded-md transition-colors hover:bg-brand-primary-deep cursor-pointer">
              Assistir agora
            </button>
            <button className="font-semibold text-brand-ink bg-brand-canvas border border-brand-hairline px-4 py-3 rounded-md transition-colors hover:bg-gray-50 cursor-pointer">
              Ver todas as mensagens
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
