import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

export default async function CounselingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = useTranslations('Counseling');

  return (
    <>
      <Header />
      <main className="min-h-[70vh] py-20 px-8">
        <div className="max-w-[800px] mx-auto space-y-16">
          
          <section>
            <h1 className="text-[40px] leading-[48px] font-bold text-brand-ink mb-6 text-balance">
              {t('title')}
            </h1>
            <p className="text-xl text-brand-body leading-[32px] text-balance">
              {t('intro')}
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-brand-ink mb-6">{t('what_is_title')}</h2>
            <div className="space-y-6 text-lg text-brand-body leading-[28px]">
              <p>{t('what_is_p1')}</p>
              <p>{t('what_is_p2')}</p>
              <p>{t('what_is_p3')}</p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-brand-ink mb-8">{t('how_it_works_title')}</h2>
            <ul className="space-y-8">
              <li className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-primary text-brand-on-primary flex items-center justify-center font-bold text-lg">1</div>
                <p className="text-lg text-brand-body leading-[28px] pt-1">{t('how_step1')}</p>
              </li>
              <li className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-primary text-brand-on-primary flex items-center justify-center font-bold text-lg">2</div>
                <p className="text-lg text-brand-body leading-[28px] pt-1">{t('how_step2')}</p>
              </li>
              <li className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-primary text-brand-on-primary flex items-center justify-center font-bold text-lg">3</div>
                <p className="text-lg text-brand-body leading-[28px] pt-1">{t('how_step3')}</p>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-brand-ink mb-6">{t('important_title')}</h2>
            <div className="space-y-6 text-lg text-brand-body leading-[28px]">
              <p>{t('important_p1')}</p>
              <p>{t('important_p2')}</p>
            </div>
          </section>

          <section className="bg-brand-canvas-soft border border-brand-hairline p-10 rounded-xl text-center shadow-sm">
            <p className="text-xl text-brand-ink font-semibold mb-8">{t('cta')}</p>
            <a 
              href={t('cta_link')} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-brand-primary text-brand-on-primary font-bold px-10 py-5 rounded-lg transition-colors hover:bg-brand-primary-deep text-lg shadow-sm"
            >
              {t('cta_button')}
            </a>
          </section>
          
        </div>
      </main>
      <Footer />
    </>
  );
}