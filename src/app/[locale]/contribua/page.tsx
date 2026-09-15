import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Give from "@/components/Give";

export default function ContribuaPage() {
  return (
    <>
      <Header />
      <main className="bg-brand-canvas min-h-[calc(100vh-66px)] flex flex-col pt-12 pb-24 px-6 md:px-8">
        <div className="max-w-[1280px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Text content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-ink mb-8">Contribua</h1>
            
            <div className="text-brand-body text-lg leading-relaxed space-y-6">
              <p>
                A Igreja Batista Farol se sustenta pelas ofertas dos seus membros. É assim que a gente paga as contas, mantém o trabalho de ensino, cuida das pessoas e sustenta os ministérios da igreja.
              </p>
              <p>
                Mas se você não é membro daqui e quer contribuir, sua oferta é muito bem-vinda. Talvez você tenha sido abençoado por uma pregação, esteja acompanhando a igreja de longe ou simplesmente queira somar com o que Deus está fazendo por aqui. Toda oferta ajuda a igreja a seguir anunciando o evangelho e alcançando mais pessoas com ele.
              </p>
              <p>
                Contribuir não é pagar por um serviço religioso. É participar de uma obra que é de Deus, com aquilo que ele mesmo colocou nas nossas mãos.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-brand-ink mt-12 mb-6">O que a Bíblia ensina sobre contribuição</h2>
            
            <ul className="space-y-5 text-brand-body">
              <li className="flex flex-col">
                <span className="font-bold text-brand-primary-ink mb-1">Regular</span>
                <span className="italic leading-relaxed">"No primeiro dia da semana, cada um de vocês separe uma quantia…" <span className="not-italic font-semibold opacity-70">(1 Coríntios 16.2)</span></span>
              </li>
              <li className="flex flex-col">
                <span className="font-bold text-brand-primary-ink mb-1">Proporcional</span>
                <span className="italic leading-relaxed">"…conforme a sua prosperidade…" <span className="not-italic font-semibold opacity-70">(1 Coríntios 16.2)</span></span>
              </li>
              <li className="flex flex-col">
                <span className="font-bold text-brand-primary-ink mb-1">Sacrificial</span>
                <span className="italic leading-relaxed">"…mesmo em meio à extrema pobreza transbordaram em rica generosidade." <span className="not-italic font-semibold opacity-70">(2 Coríntios 8.2)</span></span>
              </li>
              <li className="flex flex-col">
                <span className="font-bold text-brand-primary-ink mb-1">Voluntária</span>
                <span className="italic leading-relaxed">"Cada um contribua segundo tiver proposto no coração…" <span className="not-italic font-semibold opacity-70">(2 Coríntios 9.7a)</span></span>
              </li>
              <li className="flex flex-col">
                <span className="font-bold text-brand-primary-ink mb-1">Alegre</span>
                <span className="italic leading-relaxed">"…não com tristeza ou por necessidade; porque Deus ama quem dá com alegria." <span className="not-italic font-semibold opacity-70">(2 Coríntios 9.7b)</span></span>
              </li>
              <li className="flex flex-col">
                <span className="font-bold text-brand-primary-ink mb-1">Motivada pelo evangelho</span>
                <span className="italic leading-relaxed">"Pois vocês conhecem a graça de nosso Senhor Jesus Cristo…" <span className="not-italic font-semibold opacity-70">(2 Coríntios 8.9)</span></span>
              </li>
            </ul>
          </div>

          {/* Right Column: Give Card */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <Give />
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
