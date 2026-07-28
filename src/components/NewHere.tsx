export default function NewHere() {
  return (
    <section className="py-16 px-8" id="novo">
      <div className="max-w-7xl mx-auto max-w-[1280px]">
        <div className="mb-10 max-w-[60ch]">
          <p className="text-sm font-semibold tracking-[2.52px] uppercase text-brand-primary-ink mb-4">
            Sou novo aqui
          </p>
          <h2 className="text-[28px] md:text-[36px] font-normal leading-[34px] md:leading-[40px] tracking-[-0.9px] m-0 text-balance">
            Três coisas que resolvem a sua primeira visita.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="bg-white border border-brand-hairline rounded-lg overflow-hidden flex flex-col">
            <div className="h-[180px]">
              <div className="ph">
                <span>Entrada da igreja no domingo de manhã</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold leading-[28px] m-0">O que esperar</h3>
              <p className="mt-2 text-base leading-[26px] text-brand-body">
                Cerca de 80 minutos: cânticos, leitura da Bíblia e pregação. Venha com a roupa que você usaria num sábado.
              </p>
            </div>
          </article>
          
          <article className="bg-white border border-brand-hairline rounded-lg overflow-hidden flex flex-col">
            <div className="h-[180px]">
              <div className="ph">
                <span>Sala do ministério infantil, crianças e voluntários</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold leading-[28px] m-0">Para as crianças</h3>
              <p className="mt-2 text-base leading-[26px] text-brand-body">
                Elas ficam com você ou na sala infantil — você escolhe. A equipe é treinada e há cadastro na entrada.
              </p>
            </div>
          </article>
          
          <article className="bg-white border border-brand-hairline rounded-lg overflow-hidden flex flex-col">
            <div className="h-[180px]">
              <div className="ph">
                <span>Fachada do prédio vista da rua</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold leading-[28px] m-0">Como chegar</h3>
              <p className="mt-2 text-base leading-[26px] text-brand-body">
                Rua Othon dos Santos Mercadante, 43 - Vila Sinha, São José dos Campos - SP.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
