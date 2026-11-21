import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "@/i18n/routing";
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
      <main className="min-h-[70vh] bg-brand-canvas py-20 px-6 md:px-8">
        <div className="max-w-[800px] mx-auto text-center mb-16">
          <h1 className="text-[40px] font-bold text-brand-ink mb-4">{t('title')}</h1>
          <p className="text-xl text-brand-body text-balance">
            {t('desc')}
          </p>
        </div>
        
        <div className="max-w-[760px] mx-auto">
          {/* Timeline Wrapper (line stops strictly at step 5) */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-7 md:left-1/2 top-8 bottom-8 w-0.5 bg-brand-hairline -translate-x-1/2"></div>
            
            <div className="space-y-10 md:space-y-12 relative z-10">
              {steps.map((step, idx) => {
                const isLeftOnDesktop = idx % 2 === 0;
                return (
                  <div
                    key={step.num}
                    className="relative flex items-center md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8"
                  >
                    {/* Desktop Left Slot */}
                    <div className={`hidden md:block ${isLeftOnDesktop ? '' : 'invisible'}`}>
                      {isLeftOnDesktop && (
                        <div className="bg-white p-6 rounded-xl border border-brand-hairline shadow-sm text-right">
                          <h3 className="text-2xl font-bold text-brand-ink mb-2">{step.title}</h3>
                          <p className="text-brand-body text-base leading-relaxed">{step.desc}</p>
                        </div>
                      )}
                    </div>

                    {/* Center Circle (strictly aligned with the vertical line) */}
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-brand-primary text-white font-bold text-xl md:text-2xl rounded-full flex items-center justify-center flex-shrink-0 shadow-md border-4 border-brand-canvas z-10">
                      {step.num}
                    </div>

                    {/* Desktop Right Slot */}
                    <div className={`hidden md:block ${!isLeftOnDesktop ? '' : 'invisible'}`}>
                      {!isLeftOnDesktop && (
                        <div className="bg-white p-6 rounded-xl border border-brand-hairline shadow-sm text-left">
                          <h3 className="text-2xl font-bold text-brand-ink mb-2">{step.title}</h3>
                          <p className="text-brand-body text-base leading-relaxed">{step.desc}</p>
                        </div>
                      )}
                    </div>

                    {/* Mobile Card (always to the right of the circle) */}
                    <div className="md:hidden flex-1 ml-5 bg-white p-5 rounded-xl border border-brand-hairline shadow-sm text-left">
                      <h3 className="text-xl font-bold text-brand-ink mb-1.5">{step.title}</h3>
                      <p className="text-brand-body text-base leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Bottom CTA Box (outside the timeline container so the vertical line never crosses it) */}
          <div className="mt-20 text-center bg-brand-canvas-soft border border-brand-hairline p-10 rounded-xl relative z-10">
            <h3 className="text-2xl font-bold text-brand-ink mb-4">{t('ready')}</h3>
            <p className="text-lg text-brand-body mb-8">{t('ready_desc')}</p>
            <Link href="/novosmembros" className="inline-block bg-brand-primary hover:bg-brand-primary-deep text-white font-bold px-8 py-4 rounded-lg transition-colors text-lg">
              {t('btn')}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
