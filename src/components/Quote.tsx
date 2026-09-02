import { useTranslations } from "next-intl";

export default function Quote() {
  const t = useTranslations('Quote');
  return (
    <section className="px-8 pb-16 min-h-[calc(100vh-66px)] flex flex-col justify-center bg-brand-canvas-soft">
      <div className="max-w-[1280px] w-full mx-auto border-t-2 border-b-2 border-brand-primary-ink py-10 text-center">
        <blockquote className="text-xl md:text-2xl leading-[32px] md:leading-[36px] italic text-brand-ink mx-auto max-w-[46ch] text-pretty m-0">
          {t('text')}
        </blockquote>
        <p className="mt-4 text-[13px] leading-[18px] italic font-medium text-brand-primary-ink">
          {t('reference')}
        </p>
      </div>
    </section>
  );
}
