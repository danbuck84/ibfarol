import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SobrePage() {
  return (
    <>
      <Header />
      <main className="min-h-[70vh] py-20 px-8">
        <div className="max-w-[1280px] mx-auto space-y-24">
          <section>
            <h1 className="text-[36px] font-bold text-brand-ink mb-6">Nossa História</h1>
            <p className="text-lg text-brand-body leading-[28px] max-w-[80ch]">
              Nosso projeto começou em abril de 2022, com o objetivo de servir a região norte de São José dos Campos. Desde então, nos reunimos todos os domingos para adorar a Deus e crescer juntos.
              <br/><br/>
              Acreditamos que uma vida sem Jesus é uma vida nas trevas. Todos nós estávamos perdidos em nossos pecados, sem esperança e sem Deus. Mas ele, por seu grande amor, enviou Jesus para morrer em nosso lugar na cruz e ressuscitar, nos oferecendo perdão e vida nova.
              <br/><br/>
              Por isso nos chamamos FAROL! Queremos brilhar a luz de Cristo nesta região, ajudando pessoas a encontrarem perdão aos pés da cruz, relacionamento profundo com Deus por meio da Bíblia, e uma comunidade de pessoas simples, dispostas a servir e amar umas às outras.
            </p>
          </section>

          <section>
            <h1 className="text-[36px] font-bold text-brand-ink mb-6">O que Cremos</h1>
            <p className="text-lg text-brand-body leading-[28px] max-w-[80ch]">
              (Conteúdo sobre as crenças fundamentais da igreja será inserido aqui)
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
