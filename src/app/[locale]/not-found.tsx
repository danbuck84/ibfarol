import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LocaleNotFound() {
  return (
    <>
      <Header />
      <main className="bg-brand-canvas text-brand-ink font-sans min-h-[60vh] flex flex-col items-center justify-center py-20">
        <div className="text-center px-6">
          <h1 className="text-6xl md:text-8xl font-bold text-brand-primary mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-brand-ink mb-6">Página não encontrada</h2>
          <p className="text-lg text-brand-body mb-10 max-w-md mx-auto">
            A página que você está procurando não existe, foi movida ou o endereço está incorreto.
          </p>
          <a href="/" className="inline-block font-semibold text-brand-on-primary bg-brand-primary px-8 py-4 rounded-md transition-colors hover:bg-brand-primary-deep shadow-md">
            Voltar para o Início
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
