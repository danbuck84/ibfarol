import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getTranslations } from "next-intl/server";

export default async function ProximosPassosPage() {
  const t = await getTranslations('ProximosPassos');
  
  const steps = [
    { num: 1, title: t('step1_title'), desc: t('step1_desc') },
    { num: 2, title: t('step2_title'), desc: t('step2_desc') },
    { num: 3, title: t('step3_title'), desc: t('step3_desc') },
    { num: 4, title: t('step4_title'), desc: t('step4_desc') },
    { num: 5, title: t('step5_title'), desc: t('step5_desc') }
  ];

  return (
    <>
      <Header />
      <main className="min-h-[70vh] bg-brand-canvas py-20 px-8">
        <div className="max-w-[800px] mx-auto text-center mb-16">
          <h1 className="text-[40px] font-bold text-brand-ink mb-4">{t('title')}</h1>
          <p className="text-xl text-brand-body text-balance">
            {t('desc')}
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
            <h3 className="text-2xl font-bold text-brand-ink mb-4">{t('ready')}</h3>
            <p className="text-lg text-brand-body mb-8">{t('ready_desc')}</p>
            <a href="/novosmembros" className="inline-block bg-brand-primary hover:bg-brand-primary-deep text-white font-bold px-8 py-4 rounded-lg transition-colors text-lg">
              {t('btn')}
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
