const fs = require('fs');
const path = require('path');

const rootDir = path.join(process.cwd());

function updateJson(filePath, updates) {
  const file = path.join(rootDir, filePath);
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  const mergeDeep = (target, source) => {
    for (const key in source) {
      if (typeof source[key] === 'object' && source[key] !== null && !Array.isArray(source[key])) {
        if (!target[key]) target[key] = {};
        mergeDeep(target[key], source[key]);
      } else {
        target[key] = source[key];
      }
    }
  };
  mergeDeep(data, updates);
  fs.writeFileSync(file, JSON.stringify(data, null, 2) + '\n');
}

const ptUpdates = {
  "Sobre": {
    "history_title": "Nossa História",
    "history_p1": "Nosso projeto começou em abril de 2022, com o objetivo de servir a região norte de São José dos Campos. Desde então, nos reunimos todos os domingos para adorar a Deus e crescer juntos.",
    "history_p2": "Acreditamos que uma vida sem Jesus é uma vida nas trevas. Todos nós estávamos perdidos em nossos pecados, sem esperança e sem Deus. Mas ele, por seu grande amor, enviou Jesus para morrer em nosso lugar na cruz e ressuscitar, nos oferecendo perdão e vida nova.",
    "history_p3": "Por isso nos chamamos FAROL! Queremos brilhar a luz de Cristo nesta região, ajudando pessoas a encontrarem perdão aos pés da cruz, relacionamento profundo com Deus por meio da Bíblia, e uma comunidade de pessoas simples, dispostas a servir e amar umas às outras.",
    "beliefs_title": "O que Cremos",
    "belief_1": "Cremos que a Bíblia (os 39 livros do Velho Testamento e os 27 livros do Novo Testamento reconhecidos pelas Igrejas Evangélicas) é divinamente inspirada, inerrante e infalível (2 Pedro 1.19–21), e que a pregação e o ensino da Palavra são a base de transformação do indivíduo e da congregação, visando glorificar a Deus (João 14.21; 15.7,8, 2 Timóteo 3.16,17, Tiago 1.23–25).",
    "belief_2": "Cremos que toda a criação, incluindo o ser humano, foi feita para o louvor da glória de Deus. O Senhor é o centro de todas as coisas, único Deus, Todo-Poderoso (Salmo 145; Isaías 6.1–8; Efésios 1.3–12; Filipenses 2.5–11).",
    "belief_3": "Cremos que a família foi criada por Deus e tem seus padrões estabelecidos nas Escrituras (Gênesis 1.26–28; 2.23–24).",
    "belief_4": "Cremos que o ser humano é pecador desde o nascimento, por natureza e escolha pessoal (Romanos 3.10–12).",
    "belief_5": "Cremos que Jesus Cristo nasceu da virgem, sem pecado, morreu na cruz por nossos pecados, ressuscitou da morte ao terceiro dia e voltará outra vez para reinar (Atos 10.36–43). Cremos que Ele é perfeitamente Deus e perfeitamente homem (Colossenses 2.8–9; 1 Timóteo 2.5).",
    "belief_6": "Cremos que a salvação do ser humano é um dom gratuito, concedido pela graça soberana de Deus e recebido pela fé (Efésios 2.4–10), sendo assegurada somente pela Pessoa e obra de Jesus Cristo (Atos 4.12). Cremos que uma vez salvos, nos tornamos filhos de Deus e temos segurança eterna (Romanos 8.28–39).",
    "belief_7": "Cremos que o batismo é a afirmação externa de uma realidade interna, simbolizando a identificação do crente com a morte, sepultamento, ressurreição de Cristo, e com a Igreja (Romanos 6.3–4), sendo ministrado àqueles que creram em Jesus (Atos 8.35–39).",
    "belief_8": "Cremos que a Ceia é um memorial da morte e ressurreição de Jesus, e um anúncio de Seu retorno (1 Coríntios 11.23–36), participando todos os crentes presentes em comunhão com suas igrejas locais (1 Coríntios 11.27–30).",
    "belief_9": "Cremos que a Igreja é a comunidade dos crentes em Jesus, a noiva de Cristo, o Seu Corpo na terra (Efésios 2.19; 5.25–27). A igreja local é a agência de Deus na terra (Atos 13.1–3), sendo governada por homens que Deus deu como pastores/presbíteros/bispos (1 Pedro 5.1–3).",
    "belief_10": "Cremos que o Espírito Santo é recebido por todo crente no momento da conversão a Cristo, ocasião quando somos batizados/selados nele (Efésios 1.13–14). Cremos que os dons espirituais são capacidades dadas soberanamente aos crentes pelo Espírito Santo para a glorificação de Deus e edificação da Igreja (1 Coríntios 12.8–11; Romanos 1.11–13; 1 Pedro 4.10–11).",
    "belief_11": "Cremos que a segunda vinda de Jesus será pessoal, física e visível (Atos 1.11), e que ao fim haverá a criação de novos céus e de nova terra, onde não haverá mais a presença ou a possibilidade de pecado (Apocalipse 19–22)."
  },
  "Ministries": {
    "min_jpeg": ".JPEG (Jovens)",
    "min_diaconia": "Diaconia",
    "min_eventos": "Eventos",
    "min_homens_list": "Homens",
    "min_infantil_list": "Infantil",
    "min_integracao": "Integração",
    "min_louvor_list": "Louvor",
    "min_manutencao_list": "Manutenção",
    "min_midia_list": "Mídia",
    "min_mulheres_list": "Mulheres",
    "min_som": "Som e Multimídia",
    "min_acao_list": "Ação Comunitária",
    "min_agape_list": "Ágape",
    "min_jiujitsu_list": "Jiu-jitsu",
    "role_leader": "Líder"
  },
  "PlanVisit": {
    "success_title": "Mensagem Enviada!",
    "success_msg": "Obrigado pelo seu contato. Em breve o Pastor Gustavo responderá sua mensagem.",
    "send_another": "Enviar outra mensagem",
    "error_msg": "Ocorreu um erro ao enviar. Tente novamente mais tarde.",
    "submitting": "Enviando..."
  },
  "ReadingPlan": {
    "archive": "Arquivo"
  },
  "Artigos": {
    "breadcrumb_recursos": "Recursos",
    "breadcrumb_artigos": "Artigos"
  },
  "Livros": {
    "breadcrumb_recursos": "Recursos",
    "breadcrumb_livros": "Indicações de Leitura"
  },
  "NewMembers": {
    "mission_label": "Missão:",
    "vision_label": "Visão:"
  },
  "Hero": {
    "hero_alt_1": "Congregação da Igreja Batista Farol",
    "hero_alt_2": "Congregação da Igreja Batista Farol culto"
  },
  "BookCategories": {
    "Comece por Aqui": "Comece por Aqui",
    "Conhecendo a Deus": "Conhecendo a Deus",
    "Como Estudar a Bíblia": "Como Estudar a Bíblia",
    "Vida Devocional e Disciplinas Espirituais": "Vida Devocional e Disciplinas Espirituais",
    "Casamento": "Casamento",
    "Filhos e Parentalidade": "Filhos e Parentalidade",
    "Sofrimento, Ansiedade e Medo": "Sofrimento, Ansiedade e Medo",
    "O Coração e a Mudança": "O Coração e a Mudança",
    "Pureza Sexual": "Pureza Sexual",
    "Dinheiro": "Dinheiro",
    "Para as Crianças": "Para as Crianças"
  }
};

const enUpdates = {
  "Sobre": {
    "history_title": "Our Story",
    "history_p1": "Our project began in April 2022, with the goal of serving the northern region of São José dos Campos. Since then, we have gathered every Sunday to worship God and grow together.",
    "history_p2": "We believe that a life without Jesus is a life in darkness. We were all lost in our sins, without hope and without God. But because of His great love, He sent Jesus to die in our place on the cross and rise again, offering us forgiveness and new life.",
    "history_p3": "That is why we are called FAROL (Lighthouse)! We want to shine the light of Christ in this region, helping people find forgiveness at the foot of the cross, a deep relationship with God through the Bible, and a community of simple people, willing to serve and love one another.",
    "beliefs_title": "What We Believe",
    "belief_1": "We believe that the Bible (the 39 books of the Old Testament and the 27 books of the New Testament recognized by Evangelical churches) is divinely inspired, inerrant, and infallible (2 Peter 1:19–21), and that the preaching and teaching of the Word are the foundation for the transformation of individuals and the congregation, aimed at glorifying God (John 14:21; 15:7-8, 2 Timothy 3:16-17, James 1:23–25).",
    "belief_2": "We believe that all creation, including human beings, was made for the praise of the glory of God. The Lord is the center of all things, the only God, Almighty (Psalm 145; Isaiah 6:1–8; Ephesians 1:3–12; Philippians 2:5–11).",
    "belief_3": "We believe that the family was created by God and has its standards established in Scripture (Genesis 1:26–28; 2:23–24).",
    "belief_4": "We believe that human beings are sinners from birth, by nature and personal choice (Romans 3:10–12).",
    "belief_5": "We believe that Jesus Christ was born of a virgin, without sin, died on the cross for our sins, rose from the dead on the third day, and will return again to reign (Acts 10:36–43). We believe He is perfectly God and perfectly man (Colossians 2:8–9; 1 Timothy 2:5).",
    "belief_6": "We believe that the salvation of human beings is a free gift, granted by the sovereign grace of God and received by faith (Ephesians 2:4–10), secured only by the Person and work of Jesus Christ (Acts 4:12). We believe that once saved, we become children of God and have eternal security (Romans 8:28–39).",
    "belief_7": "We believe that baptism is the outward affirmation of an inward reality, symbolizing the believer's identification with the death, burial, and resurrection of Christ, and with the Church (Romans 6:3–4), administered to those who have believed in Jesus (Acts 8:35–39).",
    "belief_8": "We believe that the Lord's Supper is a memorial of the death and resurrection of Jesus, and an announcement of His return (1 Corinthians 11:23–36), participated in by all believers present in communion with their local churches (1 Corinthians 11:27–30).",
    "belief_9": "We believe that the Church is the community of believers in Jesus, the bride of Christ, His Body on earth (Ephesians 2:19; 5:25–27). The local church is God's agency on earth (Acts 13:1–3), governed by men whom God gave as pastors/elders/bishops (1 Peter 5:1–3).",
    "belief_10": "We believe that the Holy Spirit is received by every believer at the moment of conversion to Christ, at which time we are baptized/sealed in Him (Ephesians 1:13–14). We believe that spiritual gifts are abilities sovereignly given to believers by the Holy Spirit for the glorification of God and the edification of the Church (1 Corinthians 12:8–11; Romans 1:11–13; 1 Peter 4:10–11).",
    "belief_11": "We believe that the second coming of Jesus will be personal, physical, and visible (Acts 1:11), and that in the end there will be the creation of new heavens and a new earth, where there will no longer be the presence or possibility of sin (Revelation 19–22)."
  },
  "Ministries": {
    "min_jpeg": ".JPEG (Youth)",
    "min_diaconia": "Deacons",
    "min_eventos": "Events",
    "min_homens_list": "Men",
    "min_infantil_list": "Children",
    "min_integracao": "Integration",
    "min_louvor_list": "Worship",
    "min_manutencao_list": "Maintenance",
    "min_midia_list": "Media",
    "min_mulheres_list": "Women",
    "min_som": "Sound & Multimedia",
    "min_acao_list": "Community Outreach",
    "min_agape_list": "Agape",
    "min_jiujitsu_list": "Jiu-jitsu",
    "role_leader": "Leader"
  },
  "PlanVisit": {
    "success_title": "Message Sent!",
    "success_msg": "Thank you for reaching out. Pastor Gustavo will respond to your message soon.",
    "send_another": "Send another message",
    "error_msg": "An error occurred while sending. Please try again later.",
    "submitting": "Sending..."
  },
  "ReadingPlan": {
    "archive": "Archive"
  },
  "Artigos": {
    "breadcrumb_recursos": "Resources",
    "breadcrumb_artigos": "Articles"
  },
  "Livros": {
    "breadcrumb_recursos": "Resources",
    "breadcrumb_livros": "Book Recommendations"
  },
  "NewMembers": {
    "mission_label": "Mission:",
    "vision_label": "Vision:"
  },
  "Hero": {
    "hero_alt_1": "Farol Baptist Church Congregation",
    "hero_alt_2": "Farol Baptist Church Sunday Service"
  },
  "BookCategories": {
    "Comece por Aqui": "Start Here",
    "Conhecendo a Deus": "Knowing God",
    "Como Estudar a Bíblia": "How to Study the Bible",
    "Vida Devocional e Disciplinas Espirituais": "Devotional Life & Spiritual Disciplines",
    "Casamento": "Marriage",
    "Filhos e Parentalidade": "Children & Parenting",
    "Sofrimento, Ansiedade e Medo": "Suffering, Anxiety & Fear",
    "O Coração e a Mudança": "The Heart & Change",
    "Pureza Sexual": "Sexual Purity",
    "Dinheiro": "Money",
    "Para as Crianças": "For the Kids"
  }
};

updateJson('messages/pt-BR.json', ptUpdates);
updateJson('messages/en.json', enUpdates);

// 2. Rewrite src/app/[locale]/sobre/page.tsx
const sobrePageCode = `import Header from "@/components/Header";
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
`;
fs.writeFileSync(path.join(rootDir, 'src/app/[locale]/sobre/page.tsx'), sobrePageCode);

// 3. Fix src/components/Ministries.tsx
let ministries = fs.readFileSync(path.join(rootDir, 'src/components/Ministries.tsx'), 'utf8');
const minMap = {
  ".JPEG (Jovens)": "min_jpeg",
  "Diaconia": "min_diaconia",
  "Eventos": "min_eventos",
  "Homens": "min_homens_list",
  "Infantil": "min_infantil_list",
  "Integração": "min_integracao",
  "Louvor": "min_louvor_list",
  "Manutenção": "min_manutencao_list",
  "Mídia": "min_midia_list",
  "Mulheres": "min_mulheres_list",
  "Som e Multimídia": "min_som",
  "Ação Comunitária": "min_acao_list",
  "Ágape": "min_agape_list",
  "Jiu-jitsu": "min_jiujitsu_list"
};
for (const [pt, key] of Object.entries(minMap)) {
  const replacement = "title={t('" + key + "')}";
  ministries = ministries.split('title="' + pt + '"').join(replacement);
}
ministries = ministries.replace(/role="Líder"/g, "role={t('role_leader')}");
fs.writeFileSync(path.join(rootDir, 'src/components/Ministries.tsx'), ministries);

// 4. Fix src/components/PlanVisit.tsx
let planVisit = fs.readFileSync(path.join(rootDir, 'src/components/PlanVisit.tsx'), 'utf8');
planVisit = planVisit.replace(/>Mensagem Enviada!</g, ">{t('success_title')}<");
planVisit = planVisit.replace(/>Obrigado pelo seu contato\. Em breve o Pastor Gustavo responderá sua mensagem\.</g, ">{t('success_msg')}<");
planVisit = planVisit.replace(/>Enviar outra mensagem</g, ">{t('send_another')}<");
planVisit = planVisit.replace(/>Ocorreu um erro ao enviar\. Tente novamente mais tarde\.</g, ">{t('error_msg')}<");
planVisit = planVisit.replace(/"Enviando\.\.\."/g, "t('submitting')");
fs.writeFileSync(path.join(rootDir, 'src/components/PlanVisit.tsx'), planVisit);

// 5. Fix src/components/ReadingPlan.tsx
let readingPlan = fs.readFileSync(path.join(rootDir, 'src/components/ReadingPlan.tsx'), 'utf8');
readingPlan = readingPlan.replace(/>Arquivo</g, ">{t('archive')}<");

if (!readingPlan.includes("useLocale")) {
  readingPlan = readingPlan.replace(/import { useTranslations } from "next-intl";/, 'import { useTranslations, useLocale } from "next-intl";\\nimport { translateReadingPlan } from "@/lib/readingPlanI18n";');
}
if (!readingPlan.includes("const localizedPlans")) {
  readingPlan = readingPlan.replace(
    /const sortedPlans = \\[\.\.\.readingPlans\\]\.sort\\(\\(a, b\\) => b\.id\.localeCompare\\(a\.id\\)\\);/,
    "const locale = useLocale();\\n" +
    "  const localizedPlans = locale === 'en' ? readingPlans.map(p => translateReadingPlan(p, locale)) : readingPlans;\\n" +
    "  const sortedPlans = [...localizedPlans].sort((a, b) => b.id.localeCompare(a.id));"
  );
}
fs.writeFileSync(path.join(rootDir, 'src/components/ReadingPlan.tsx'), readingPlan);

// 6. Fix src/app/[locale]/artigos/page.tsx
let artigos = fs.readFileSync(path.join(rootDir, 'src/app/[locale]/artigos/page.tsx'), 'utf8');
artigos = artigos.replace(/{ label: 'Recursos', href: '\/recursos' }/, "{ label: t('breadcrumb_recursos'), href: '/recursos' }");
artigos = artigos.replace(/{ label: 'Artigos' }/, "{ label: t('breadcrumb_artigos') }");
fs.writeFileSync(path.join(rootDir, 'src/app/[locale]/artigos/page.tsx'), artigos);

// 7. Fix src/app/[locale]/livros/page.tsx
let livros = fs.readFileSync(path.join(rootDir, 'src/app/[locale]/livros/page.tsx'), 'utf8');
livros = livros.replace(/{ label: 'Recursos', href: '\/recursos' }/, "{ label: t('breadcrumb_recursos'), href: '/recursos' }");
livros = livros.replace(/{ label: 'Indicações de Leitura' }/, "{ label: t('breadcrumb_livros') }");
fs.writeFileSync(path.join(rootDir, 'src/app/[locale]/livros/page.tsx'), livros);

// 8. Fix src/app/[locale]/novosmembros/page.tsx
let novosmembros = fs.readFileSync(path.join(rootDir, 'src/app/[locale]/novosmembros/page.tsx'), 'utf8');
novosmembros = novosmembros.replace(/<strong>Missão:<\/strong>/, "<strong>{t('mission_label')}</strong>");
novosmembros = novosmembros.replace(/<strong>Visão:<\/strong>/, "<strong>{t('vision_label')}</strong>");
fs.writeFileSync(path.join(rootDir, 'src/app/[locale]/novosmembros/page.tsx'), novosmembros);

// 9. Fix src/components/Hero.tsx
let hero = fs.readFileSync(path.join(rootDir, 'src/components/Hero.tsx'), 'utf8');
hero = hero.replace(/alt="Congregação da Igreja Batista Farol"/, "alt={t('hero_alt_1')}");
hero = hero.replace(/alt="Congregação da Igreja Batista Farol culto"/, "alt={t('hero_alt_2')}");
fs.writeFileSync(path.join(rootDir, 'src/components/Hero.tsx'), hero);

// 10. Fix src/components/BookCategory.tsx
let bookCat = fs.readFileSync(path.join(rootDir, 'src/components/BookCategory.tsx'), 'utf8');
if (!bookCat.includes("useTranslations")) {
  bookCat = bookCat.replace(/'react';/, "'react';\\nimport { useTranslations } from 'next-intl';");
  bookCat = bookCat.replace(/export default function BookCategory\\(\\{ category, books \\}: BookCategoryProps\\) \\{/, "export default function BookCategory({ category, books }: BookCategoryProps) {\\n  const t = useTranslations('BookCategories');");
  bookCat = bookCat.replace(/\\{category\\}/, "{t(category)}");
}
fs.writeFileSync(path.join(rootDir, 'src/components/BookCategory.tsx'), bookCat);

// 11. Create src/lib/readingPlanI18n.ts
const i18nContent = `import { ReadingPlan } from "@/data/readingPlans";

const DAY_MAP: Record<string, string> = {
  "Segunda-feira": "Monday",
  "Terça-feira": "Tuesday",
  "Quarta-feira": "Wednesday",
  "Quinta-feira": "Thursday",
  "Sexta-feira": "Friday",
  "Sábado": "Saturday",
  "Domingo": "Sunday",
  "Segunda": "Monday",
  "Terça": "Tuesday",
  "Quarta": "Wednesday",
  "Quinta": "Thursday",
  "Sexta": "Friday"
};

const BIBLE_BOOKS: Record<string, string> = {
  "Gênesis": "Genesis", "Êxodo": "Exodus", "Levítico": "Leviticus", "Números": "Numbers", "Deuteronômio": "Deuteronomy",
  "Josué": "Joshua", "Juízes": "Judges", "Rute": "Ruth", "Samuel": "Samuel", "Reis": "Kings", "Crônicas": "Chronicles",
  "Esdras": "Ezra", "Neemias": "Nehemiah", "Ester": "Esther", "Jó": "Job", "Salmo": "Psalm", "Salmos": "Psalms", 
  "Provérbios": "Proverbs", "Eclesiastes": "Ecclesiastes", "Cantares": "Song of Solomon",
  "Isaías": "Isaiah", "Jeremias": "Jeremiah", "Lamentações": "Lamentations", "Ezequiel": "Ezekiel", "Daniel": "Daniel",
  "Oseias": "Hosea", "Joel": "Joel", "Amós": "Amos", "Obadias": "Obadiah", "Jonas": "Jonah", "Miqueias": "Micah",
  "Naum": "Nahum", "Habacuque": "Habakkuk", "Sofonias": "Zephaniah", "Ageu": "Haggai", "Zacarias": "Zechariah", "Malaquias": "Malachi",
  "Mateus": "Matthew", "Marcos": "Mark", "Lucas": "Luke", "João": "John", "Atos": "Acts",
  "Romanos": "Romans", "Coríntios": "Corinthians", "Gálatas": "Galatians", "Filipenses": "Philippians",
  "Colossenses": "Colossians", "Tessalonicenses": "Thessalonians", "Timóteo": "Timothy", "Tito": "Titus",
  "Filemom": "Philemon", "Hebreus": "Hebrews", "Tiago": "James", "Pedro": "Peter", "Judas": "Jude", "Apocalipse": "Revelation"
};

export function translateReadingPlan(plan: ReadingPlan, locale: string): ReadingPlan {
  if (locale !== 'en') return plan;

  const translateReading = (text: string) => {
    let newText = text;
    for (const [pt, en] of Object.entries(BIBLE_BOOKS)) {
      const regex = new RegExp('\\\\b' + pt + '\\\\b', 'g');
      newText = newText.replace(regex, en);
    }
    return newText;
  };

  const translateDayName = (name: string) => {
    let newName = name;
    for (const [pt, en] of Object.entries(DAY_MAP)) {
      if (newName.includes(pt)) {
        newName = newName.replace(pt, en);
      }
    }
    newName = newName.replace("Oração", "Prayer");
    return newName;
  };

  const subtitle = plan.subtitle.replace("Semana", "Week");
  
  let dateRange = plan.dateRange;
  if (dateRange) {
    dateRange = dateRange.replace(/\\ba\\b/g, "to");
  }

  return {
    ...plan,
    subtitle,
    dateRange,
    days: plan.days.map(day => ({
      ...day,
      name: translateDayName(day.name),
      readings: day.readings.map(translateReading)
    })),
    sunday: {
      ...plan.sunday,
      name: translateDayName(plan.sunday.name),
    }
  };
}
`;

fs.writeFileSync(path.join(rootDir, 'src/lib/readingPlanI18n.ts'), i18nContent);
console.log("All i18n fixes applied successfully!");
