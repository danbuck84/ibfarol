import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getTranslations } from "next-intl/server";

const AFFIRM_LINKS = [
  { key: "a29", href: "https://a29br.com/distintivos" },
  { key: "tgc", href: "https://coalizaopeloevangelho.org/sobre/documentos-fundacionais/" },
] as const;

const CHURCH_DOCS = [
  { key: "declaration", href: "https://drive.google.com/file/d/1NPumKcb42GRoHaHc9kLDVRxsyXMYK4jQ/view?usp=drivesdk" },
  { key: "bylaws", href: "https://drive.google.com/file/d/1KRQpk3hOMo3vKoB7xQ-HlR86TJjTWV7P/view?usp=drivesdk" },
  { key: "covenant", href: "https://drive.google.com/file/d/15gitFvqPzrCZw-oGa9BRlk1U9jn_fzrQ/view?usp=drivesdk" },
  { key: "commitment", href: "https://drive.google.com/file/d/1kUuAQiTF6dEWTGEIn7-MhYyeDZKWIoZs/view?usp=drivesdk" },
] as const;

const linkClass =
  "text-brand-ink font-bold underline decoration-brand-hairline underline-offset-4 hover:decoration-brand-ink transition-colors";

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

          <section>
            <h2 className="text-[36px] font-bold text-brand-ink mb-6">{t('affirm_title')}</h2>
            <div className="space-y-6 text-lg text-brand-body leading-[28px] max-w-[80ch]">
              <p>{t('affirm_intro')}</p>
              <ul className="list-disc pl-6 space-y-3">
                {AFFIRM_LINKS.map(({ key, href }) => (
                  <li key={key}>
                    <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                      {t(`affirm_${key}_label`)}
                    </a>
                    {t('lang_note') && <span className="text-brand-mute"> {t('lang_note')}</span>}
                    : {t(`affirm_${key}_desc`)}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-[36px] font-bold text-brand-ink mb-6">{t('docs_title')}</h2>
            <div className="space-y-6 text-lg text-brand-body leading-[28px] max-w-[80ch]">
              <p>{t('docs_intro')}</p>
              <ul className="list-disc pl-6 space-y-3">
                {CHURCH_DOCS.map(({ key, href }) => (
                  <li key={key}>
                    <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                      {t(`docs_${key}`)}
                    </a>
                    {t('lang_note') && <span className="text-brand-mute"> {t('lang_note')}</span>}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
