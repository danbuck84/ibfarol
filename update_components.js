const fs = require('fs');

// 1. Contribua Page
let contribuaPage = fs.readFileSync('src/app/[locale]/contribua/page.tsx', 'utf8');
contribuaPage = contribuaPage.replace(
  'export default function ContribuaPage() {',
  `import { getTranslations } from "next-intl/server";\n\nexport default async function ContribuaPage() {\n  const t = await getTranslations('Contribua');`
);
// Replace hardcoded text with translation keys
contribuaPage = contribuaPage.replace('Contribua</h1>', `{t('title')}</h1>`);
contribuaPage = contribuaPage.replace('A Igreja Batista Farol se sustenta pelas ofertas dos seus membros. É assim que a gente paga as contas, mantém o trabalho de ensino, cuida das pessoas e sustenta os ministérios da igreja.', `{t('desc1')}`);
contribuaPage = contribuaPage.replace('Mas se você não é membro daqui e quer contribuir, sua oferta é muito bem-vinda. Talvez você tenha sido abençoado por uma pregação, esteja acompanhando a igreja de longe ou simplesmente queira somar com o que Deus está fazendo por aqui. Toda oferta ajuda a igreja a seguir anunciando o evangelho e alcançando mais pessoas com ele.', `{t('desc2')}`);
contribuaPage = contribuaPage.replace('Contribuir não é pagar por um serviço religioso. É participar de uma obra que é de Deus, com aquilo que ele mesmo colocou nas nossas mãos.', `{t('desc3')}`);
contribuaPage = contribuaPage.replace('O que a Bíblia ensina sobre contribuição</h2>', `{t('biblical_title')}</h2>`);

// List items
contribuaPage = contribuaPage.replace('>Regular</span>', `>{t('regular')}</span>`);
contribuaPage = contribuaPage.replace(/>"No primeiro dia da semana, cada um de vocês separe uma quantia…" <span className="not-italic font-semibold opacity-70">\(1 Coríntios 16.2\)<\/span><\/span>/, `>{t('regular_verse')}</span>`);

contribuaPage = contribuaPage.replace('>Proporcional</span>', `>{t('proportional')}</span>`);
contribuaPage = contribuaPage.replace(/>"…conforme a sua prosperidade…" <span className="not-italic font-semibold opacity-70">\(1 Coríntios 16.2\)<\/span><\/span>/, `>{t('proportional_verse')}</span>`);

contribuaPage = contribuaPage.replace('>Sacrificial</span>', `>{t('sacrificial')}</span>`);
contribuaPage = contribuaPage.replace(/>"…mesmo em meio à extrema pobreza transbordaram em rica generosidade." <span className="not-italic font-semibold opacity-70">\(2 Coríntios 8.2\)<\/span><\/span>/, `>{t('sacrificial_verse')}</span>`);

contribuaPage = contribuaPage.replace('>Voluntária</span>', `>{t('voluntary')}</span>`);
contribuaPage = contribuaPage.replace(/>"Cada um contribua segundo tiver proposto no coração…" <span className="not-italic font-semibold opacity-70">\(2 Coríntios 9.7a\)<\/span><\/span>/, `>{t('voluntary_verse')}</span>`);

contribuaPage = contribuaPage.replace('>Alegre</span>', `>{t('joyful')}</span>`);
contribuaPage = contribuaPage.replace(/>"…não com tristeza ou por necessidade; porque Deus ama quem dá com alegria." <span className="not-italic font-semibold opacity-70">\(2 Coríntios 9.7b\)<\/span><\/span>/, `>{t('joyful_verse')}</span>`);

contribuaPage = contribuaPage.replace('>Motivada pelo evangelho</span>', `>{t('motivated')}</span>`);
contribuaPage = contribuaPage.replace(/>"Pois vocês conhecem a graça de nosso Senhor Jesus Cristo…" <span className="not-italic font-semibold opacity-70">\(2 Coríntios 8.9\)<\/span><\/span>/, `>{t('motivated_verse')}</span>`);

fs.writeFileSync('src/app/[locale]/contribua/page.tsx', contribuaPage);

// 2. Give component
let giveComp = fs.readFileSync('src/components/Give.tsx', 'utf8');
giveComp = giveComp.replace(
  'export default function Give() {',
  `import { useTranslations } from "next-intl";\n\nexport default function Give() {\n  const t = useTranslations('Contribua');`
);
giveComp = giveComp.replace('Dados para Contribuição', `{t('card_title')}`);
giveComp = giveComp.replace('Chave PIX — CNPJ', `{t('cnpj_label')}`);
giveComp = giveComp.replace('Chave PIX — E-mail', `{t('email_label')}`);
giveComp = giveComp.replace('Conta Bancária', `{t('bank_label')}`);
giveComp = giveComp.replace('>Igreja Batista Farol</p>', `>{t('bank_name')}</p>`);
giveComp = giveComp.replace('>Banco Cora</p>', `>{t('bank_cora')}</p>`);
giveComp = giveComp.replace('>Agência: 0001</p>', `>{t('bank_agency')}</p>`);
giveComp = giveComp.replace('>Conta: 6096127-6</p>', `>{t('bank_account')}</p>`);
giveComp = giveComp.replace('Copiar CNPJ', `{t('copy_cnpj')}`);
giveComp = giveComp.replace('Copiar E-mail', `{t('copy_email')}`);

fs.writeFileSync('src/components/Give.tsx', giveComp);

// 3. CookieBanner component
let cookieComp = fs.readFileSync('src/components/CookieBanner.tsx', 'utf8');
cookieComp = cookieComp.replace(
  'export default function CookieBanner() {',
  `import { useTranslations } from "next-intl";\n\nexport default function CookieBanner() {\n  const t = useTranslations('CookieBanner');`
);
cookieComp = cookieComp.replace('Nós valorizamos sua privacidade', `{t('title')}`);
cookieComp = cookieComp.replace('Utilizamos cookies essenciais para o funcionamento do site e cookies analíticos para entender como você interage com nosso conteúdo. Você pode aceitar todos os cookies ou configurar suas preferências.', `{t('desc')}`);
cookieComp = cookieComp.replace('>\\n              Configurar\\n            </button>', `>\\n              {t('btn_config')}\\n            </button>`);
cookieComp = cookieComp.replace('>\\n              Apenas Essenciais\\n            </button>', `>\\n              {t('btn_essential')}\\n            </button>`);
cookieComp = cookieComp.replace('>\\n              Aceitar Todos\\n            </button>', `>\\n              {t('btn_all')}\\n            </button>`);

cookieComp = cookieComp.replace('Preferências de Privacidade', `{t('pref_title')}`);
cookieComp = cookieComp.replace('Escolha quais cookies você permite que sejam armazenados.', `{t('pref_desc')}`);
cookieComp = cookieComp.replace('Cookies Estritamente Necessários (Essenciais)', `{t('ess_title')}`);
cookieComp = cookieComp.replace('Sempre ativos. São necessários para o site funcionar e não podem ser desligados.', `{t('ess_desc')}`);
cookieComp = cookieComp.replace('Cookies de Desempenho e Analytics', `{t('analyt_title')}`);
cookieComp = cookieComp.replace('Ajudam-nos a entender como os visitantes interagem com o site, coletando informações anonimamente.', `{t('analyt_desc')}`);
cookieComp = cookieComp.replace('>\\n              Voltar\\n            </button>', `>\\n              {t('btn_back')}\\n            </button>`);
cookieComp = cookieComp.replace('>\\n              Salvar Minhas Escolhas\\n            </button>', `>\\n              {t('btn_save')}\\n            </button>`);

// manual replace for the buttons since the regex with newlines is finicky
cookieComp = cookieComp.replace(/>\s*Configurar\s*<\/button>/g, `>{t('btn_config')}</button>`);
cookieComp = cookieComp.replace(/>\s*Apenas Essenciais\s*<\/button>/g, `>{t('btn_essential')}</button>`);
cookieComp = cookieComp.replace(/>\s*Aceitar Todos\s*<\/button>/g, `>{t('btn_all')}</button>`);
cookieComp = cookieComp.replace(/>\s*Voltar\s*<\/button>/g, `>{t('btn_back')}</button>`);
cookieComp = cookieComp.replace(/>\s*Salvar Minhas Escolhas\s*<\/button>/g, `>{t('btn_save')}</button>`);

fs.writeFileSync('src/components/CookieBanner.tsx', cookieComp);

