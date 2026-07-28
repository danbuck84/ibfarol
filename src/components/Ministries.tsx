export default function Ministries() {
  return (
    <section className="py-16 px-8" id="ministerios">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <div className="max-w-[56ch]">
            <p className="text-sm font-semibold tracking-[2.52px] uppercase text-brand-primary-ink mb-4">
              Nossos ministérios
            </p>
            <h2 className="text-[28px] md:text-[36px] font-normal leading-[34px] md:leading-[40px] tracking-[-0.9px] m-0 text-balance">
              Um lugar para cada pessoa da família.
            </h2>
          </div>
          <button className="font-semibold text-brand-ink bg-brand-canvas border border-brand-hairline px-4 py-3 rounded-md transition-colors hover:bg-gray-50 cursor-pointer">
            Ver todos
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article>
            <div className="h-[220px] rounded-lg overflow-hidden border border-brand-hairline">
              <div className="ph">
                <span>Crianças na sala infantil</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold leading-[28px] mt-4">Crianças</h3>
            <p className="mt-0.5 text-xs leading-[16px] text-brand-mute">
              Domingos, durante o culto
            </p>
          </article>
          
          <article>
            <div className="h-[220px] rounded-lg overflow-hidden border border-brand-hairline">
              <div className="ph">
                <span>Encontro de jovens no sábado</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold leading-[28px] mt-4">Jovens</h3>
            <p className="mt-0.5 text-xs leading-[16px] text-brand-mute">
              Sábados, 16h
            </p>
          </article>
          
          <article>
            <div className="h-[220px] rounded-lg overflow-hidden border border-brand-hairline">
              <div className="ph">
                <span>Pequeno grupo reunido numa casa</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold leading-[28px] mt-4">Pequenos grupos</h3>
            <p className="mt-0.5 text-xs leading-[16px] text-brand-mute">
              Terças e quintas, 20h
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
