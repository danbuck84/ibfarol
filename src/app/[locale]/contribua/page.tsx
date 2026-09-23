import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Give from "@/components/Give";

import { getTranslations } from "next-intl/server";

export default async function ContribuaPage() {
  const t = await getTranslations('Contribua');
  return (
    <>
      <Header />
      <main className="bg-brand-canvas min-h-[calc(100vh-66px)] flex flex-col pt-12 pb-24 px-6 md:px-8">
        <div className="max-w-[1280px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Text content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-ink mb-8">{t('title')}</h1>
            
            <div className="text-brand-body text-lg leading-relaxed space-y-6">
              <p>
                {t('desc1')}
              </p>
              <p>
                {t('desc2')}
              </p>
              <p>
                {t('desc3')}
              </p>
            </div>

            <h2 className="text-2xl font-bold text-brand-ink mt-12 mb-6">{t('biblical_title')}</h2>
            
            <ul className="space-y-5 text-brand-body">
              <li className="flex flex-col">
                <span className="font-bold text-brand-primary-ink mb-1">{t('regular')}</span>
                <span className="italic leading-relaxed">{t('regular_verse')}</span>
              </li>
              <li className="flex flex-col">
                <span className="font-bold text-brand-primary-ink mb-1">{t('proportional')}</span>
                <span className="italic leading-relaxed">{t('proportional_verse')}</span>
              </li>
              <li className="flex flex-col">
                <span className="font-bold text-brand-primary-ink mb-1">{t('sacrificial')}</span>
                <span className="italic leading-relaxed">{t('sacrificial_verse')}</span>
              </li>
              <li className="flex flex-col">
                <span className="font-bold text-brand-primary-ink mb-1">{t('voluntary')}</span>
                <span className="italic leading-relaxed">{t('voluntary_verse')}</span>
              </li>
              <li className="flex flex-col">
                <span className="font-bold text-brand-primary-ink mb-1">{t('joyful')}</span>
                <span className="italic leading-relaxed">{t('joyful_verse')}</span>
              </li>
              <li className="flex flex-col">
                <span className="font-bold text-brand-primary-ink mb-1">{t('motivated')}</span>
                <span className="italic leading-relaxed">{t('motivated_verse')}</span>
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
