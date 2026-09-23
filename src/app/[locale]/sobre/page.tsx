import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getTranslations } from "next-intl/server";

export default async function SobrePage() {
  const t = await getTranslations('Sobre');

  return (
    <>
      <Header />
      <main className="min-h-[70vh] py-20 px-8 bg-brand-canvas">
        <div className="max-w-[1280px] mx-auto space-y-24">
          <section>
            <h1 className="text-[36px] font-bold text-brand-ink mb-6">{t('history_title')}</h1>
            <p className="text-lg text-brand-body leading-[28px] max-w-[80ch]">
              {t('history_p1')}
              <br/><br/>
              {t('history_p2')}
              <br/><br/>
              {t('history_p3')}
            </p>
          </section>

          <section>
            <h1 className="text-[36px] font-bold text-brand-ink mb-6">{t('beliefs_title')}</h1>
            <div className="space-y-6 text-lg text-brand-body leading-[28px] max-w-[80ch]">
              <p>{t('belief_1')}</p>
              <p>{t('belief_2')}</p>
              <p>{t('belief_3')}</p>
              <p>{t('belief_4')}</p>
              <p>{t('belief_5')}</p>
              <p>{t('belief_6')}</p>
              <p>{t('belief_7')}</p>
              <p>{t('belief_8')}</p>
              <p>{t('belief_9')}</p>
              <p>{t('belief_10')}</p>
              <p>{t('belief_11')}</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
