import { Link } from "@/i18n/routing";

export default function AboutUs() {
  return (
    <section id="sobre" className="w-full bg-[#E2D769] py-20 px-6 md:px-8">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Big Title */}
        <div>
          <h2 className="text-4xl md:text-5xl lg:text-[60px] font-bold text-brand-ink leading-[1.1] uppercase tracking-tight">
            SEJA BEM-VINDO!
          </h2>
        </div>
        
        {/* Right: Text */}
        <div className="text-lg md:text-xl text-brand-ink/90 leading-relaxed font-medium space-y-6 md:pl-8 lg:pl-12">
          <p>
            É um prazer para nós receber você! Esperamos que se sinta acolhido, amado, e à vontade entre nós. Desejamos que aqui você conheça mais de Jesus.
          </p>
          <p>
            Se precisar de qualquer coisa, <Link href="/ministerios" className="text-brand-ink font-bold hover:underline decoration-brand-ink underline-offset-4">entre em contato conosco</Link>!
          </p>
        </div>
      </div>
    </section>
  );
}
