import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslations } from "next-intl";

export default function NewMembersPage() {
  const t = useTranslations('NewMembers');
  
  const rawTopics = t.raw('topics');
  const topics = Array.isArray(rawTopics) ? rawTopics : [];

  return (
    <>
      <Header />
      <main className="min-h-[70vh] bg-brand-canvas py-20 px-8">
        <div className="max-w-[800px] mx-auto space-y-16">
          
          <section className="text-center">
            <h1 className="text-[40px] leading-[48px] font-bold text-brand-ink mb-6">
              {t('title')}
            </h1>
            <p className="text-xl text-brand-body leading-[32px]">
              {t('intro')}
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-brand-ink mb-6">{t('identity_title')}</h2>
            <div className="space-y-6 text-lg text-brand-body leading-[28px]">
              <p><strong>Missão:</strong> {t('identity_mission')}</p>
              <p><strong>Visão:</strong> {t('identity_vision')}</p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-brand-ink mb-6">{t('course_title')}</h2>
            <p className="text-lg text-brand-body leading-[28px] mb-8">{t('course_desc')}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {topics.map((topic, index) => (
                <div key={index} className="flex items-center gap-4 bg-white p-4 rounded-lg border border-brand-hairline shadow-sm">
                  <div className="w-8 h-8 flex-shrink-0 bg-brand-primary text-brand-on-primary font-bold rounded-full flex items-center justify-center">
                    {index + 1}
                  </div>
                  <span className="text-brand-ink font-semibold">{topic}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-brand-ink mb-6">{t('info_title')}</h2>
            <p className="text-lg text-brand-body leading-[28px] whitespace-pre-line">
              {t('info_desc')}
            </p>
          </section>

          <section className="bg-brand-canvas-soft border border-brand-hairline p-10 rounded-xl text-center shadow-sm">
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
