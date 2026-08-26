import { useTranslations } from "next-intl";

export default function PlanVisit() {
  const t = useTranslations('PlanVisit');
  return (
    <section className="py-16 px-8 bg-white border-t border-brand-hairline" id="visita">
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-12 text-center md:text-left">
          <p className="text-sm font-semibold tracking-[2.52px] uppercase text-brand-primary-ink mb-4">
            {t('eyebrow')}
          </p>
          <h2 className="text-[28px] md:text-[36px] font-normal leading-[34px] md:leading-[40px] tracking-[-0.9px] m-0 text-brand-ink mb-6">
            {t('headline')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Map and Address */}
          <div>
            <h3 className="text-xl font-bold tracking-wider text-brand-ink mb-4">{t('address_title')}</h3>
            <p className="text-base text-brand-body leading-[26px] whitespace-pre-line mb-6">
              {t('address_text')}
            </p>
            <div className="w-full h-[300px] bg-slate-100 rounded-md overflow-hidden relative border border-brand-hairline">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.652174317926!2d-45.89433192389146!3d-23.182885979062327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc4ba49ec6e8c7%3A0xc3b8332152843bb3!2sR.%20Othon%20dos%20Santos%20Mercadante%2C%2043%20-%20Vila%20Sinha%2C%20S%C3%A3o%20Jos%C3%A9%20dos%20Campos%20-%20SP%2C%2012212-650!5e0!3m2!1sen!2sbr!4v1716922340510!5m2!1sen!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-xl font-bold tracking-wider text-brand-ink mb-4">{t('contact_title')}</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-body mb-1">{t('form_name')}</label>
                <input type="text" id="name" className="w-full border border-brand-hairline rounded-md px-4 py-2 text-brand-ink focus:outline-none focus:border-brand-primary" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-body mb-1">{t('form_email')}</label>
                <input type="email" id="email" className="w-full border border-brand-hairline rounded-md px-4 py-2 text-brand-ink focus:outline-none focus:border-brand-primary" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-body mb-1">{t('form_message')}</label>
                <textarea id="message" rows={5} className="w-full border border-brand-hairline rounded-md px-4 py-2 text-brand-ink focus:outline-none focus:border-brand-primary resize-none"></textarea>
              </div>
              <button type="submit" className="w-full font-semibold text-brand-on-primary bg-brand-primary border border-brand-primary px-4 py-3 rounded-md transition-colors hover:bg-brand-primary-deep cursor-pointer">
                {t('btn_submit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
