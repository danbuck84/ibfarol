import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ProximosPassosPage() {
  const steps = [
    { num: 1, title: "Visitar", desc: "Conhecer nossa comunidade em um de nossos cultos de domingo." },
    { num: 2, title: "Novos Membros", desc: "Participar da classe de integração para entender nossa visão e valores." },
    { num: 3, title: "Membresia", desc: "Se comprometer oficialmente com a igreja local e sua liderança." },
    { num: 4, title: "Pequeno Grupo", desc: "Fazer parte de uma comunidade menor para pastoreio e comunhão." },
    { num: 5, title: "Servir", desc: "Usar seus dons e talentos em um de nossos ministérios." }
  ];

  return (
    <>
      <Header />
      <main className="min-h-[70vh] bg-brand-canvas py-20 px-8">
        <div className="max-w-[800px] mx-auto text-center mb-16">
          <h1 className="text-[40px] font-bold text-brand-ink mb-4">Próximos Passos</h1>
          <p className="text-xl text-brand-body text-balance">
            Nós acreditamos que a vida cristã não é estática. Existe uma trilha de crescimento e envolvimento na igreja local. Descubra qual é o seu próximo passo.
          </p>
        </div>
        
        <div className="max-w-[600px] mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-1 bg-brand-hairline -translate-x-1/2"></div>
          
          <div className="space-y-12 relative z-10">
            {steps.map((step, idx) => (
              <div key={step.num} className={`flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 ${idx % 2 === 0 ? 'md:flex-row-reverse text-left md:text-right' : 'text-left'}`}>
                
                {/* Content */}
                <div className="flex-1 bg-white p-6 rounded-lg border border-brand-hairline shadow-sm w-full md:w-auto ml-16 md:ml-0 relative">
                  <h3 className="text-2xl font-bold text-brand-ink mb-2">
                    <span className="text-brand-primary md:hidden mr-2">#{step.num}</span>
                    {step.title}
                  </h3>
                  <p className="text-brand-body text-lg">{step.desc}</p>
                </div>
                
                {/* Circle */}
                <div className="absolute left-8 md:static md:left-auto md:w-16 h-16 w-16 bg-brand-primary text-white font-bold text-2xl rounded-full flex items-center justify-center flex-shrink-0 shadow-lg border-4 border-brand-canvas -translate-x-1/2 md:translate-x-0 mt-4 md:mt-0">
                  {step.num}
                </div>
                
                {/* Empty Space for layout */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 text-center bg-brand-canvas-soft border border-brand-hairline p-10 rounded-xl">
            <h3 className="text-2xl font-bold text-brand-ink mb-4">Pronto para dar o próximo passo?</h3>
            <p className="text-lg text-brand-body mb-8">Inscreva-se na nossa próxima Classe de Novos Membros e comece sua jornada.</p>
            <a href="/novosmembros" className="inline-block bg-brand-primary hover:bg-brand-primary-deep text-white font-bold px-8 py-4 rounded-lg transition-colors text-lg">
              Inscrever-se na Classe
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
