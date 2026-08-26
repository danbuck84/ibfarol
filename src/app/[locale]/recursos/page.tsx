import Header from "@/components/Header";
import ReadingPlan from "@/components/ReadingPlan";
import Footer from "@/components/Footer";

export default function RecursosPage() {
  return (
    <>
      <Header />
      <main className="min-h-[70vh]">
        <section className="py-20 px-8 max-w-[1280px] mx-auto">
          <h1 className="text-[40px] font-bold text-brand-ink mb-12">Recursos</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-brand-canvas-soft p-8 rounded-lg border border-brand-hairline">
              <h2 className="text-2xl font-bold text-brand-ink mb-4">Sermões</h2>
              <p className="text-brand-body">Acesse nossas mensagens em áudio e vídeo.</p>
            </div>
            
            <div className="bg-brand-canvas-soft p-8 rounded-lg border border-brand-hairline">
              <h2 className="text-2xl font-bold text-brand-ink mb-4">Materiais de Apoio</h2>
              <p className="text-brand-body">Arquivos, apostilas e guias para estudos.</p>
            </div>
            
            <div className="bg-brand-canvas-soft p-8 rounded-lg border border-brand-hairline">
              <h2 className="text-2xl font-bold text-brand-ink mb-4">Artigos / Blog</h2>
              <p className="text-brand-body">Textos pastorais e reflexões semanais.</p>
            </div>

            <div className="bg-brand-canvas-soft p-8 rounded-lg border border-brand-hairline">
              <h2 className="text-2xl font-bold text-brand-ink mb-4">Indicações</h2>
              <p className="text-brand-body">Livros e materiais recomendados pela nossa comunidade.</p>
            </div>
          </div>
        </section>

        <ReadingPlan />
      </main>
      <Footer />
    </>
  );
}
