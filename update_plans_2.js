const fs = require('fs');

const file = 'src/data/readingPlans.ts';
let content = fs.readFileSync(file, 'utf8');

const newPlans = [
  {
    id: "2026-30",
    year: 2026,
    weekNumber: 30,
    subtitle: "Semana 30 (3 a 9 de agosto)",
    days: [
      { key: "mon", name: "Segunda-feira (03/08)", readings: ["Lucas 12–13", "Salmo 105.23–36"] },
      { key: "tue", name: "Terça-feira (04/08)", readings: ["1 Timóteo 5–6", "Salmo 105.37–45"] },
      { key: "wed", name: "Quarta-feira (05/08)", readings: ["2 Timóteo 1–2", "Salmo 106.1–8"] },
      { key: "thu", name: "Quinta-feira (06/08)", readings: ["Gênesis 31", "Salmo 106.9–23"] },
      { key: "fri", name: "Sexta-feira (07/08)", readings: ["Provérbios 28", "Salmo 106.24–38"] },
      { key: "sat", name: "Sábado (08/08)", readings: ["Efésios 2.11–22"] },
    ],
    sunday: {
      name: "Domingo (09/08) – Oração",
      prayer: "Pai amado, muito obrigado porque nós, que um dia estávamos longe, sem esperança e sem Deus no mundo, fomos trazidos para perto pelo sangue de Cristo. Obrigado porque ele mesmo é a nossa paz, e derrubou o muro que nos separava. Confessamos que insistimos em levantar de novo as paredes que Jesus derrubou: as distâncias que criamos, os julgamentos que alimentamos, as pessoas que evitamos dentro da tua própria casa. Perdoa-nos. Pai, nesta semana, ajuda-nos a viver como um só corpo. Dá-nos coragem para procurar quem está afastado, humildade para pedir perdão e paciência para suportar as diferenças que existem entre nós. Obrigado porque já não somos estrangeiros, mas concidadãos dos santos e membros da tua família, edificados sobre o fundamento dos apóstolos e profetas, sendo Cristo Jesus a pedra angular. Que a nossa igreja seja, de verdade, habitação tua no Espírito. Em nome de Jesus, amém."
    }
  },
  {
    id: "2026-29",
    year: 2026,
    weekNumber: 29,
    subtitle: "Semana 29 (27 de julho a 2 de agosto)",
    days: [
      { key: "mon", name: "Segunda-feira (27/07)", readings: ["Lucas 10–11", "Salmo 104.1–9"] },
      { key: "tue", name: "Terça-feira (28/07)", readings: ["1 Timóteo 1–2", "Salmo 104.10–18"] },
      { key: "wed", name: "Quarta-feira (29/07)", readings: ["1 Timóteo 3–4", "Salmo 104.19–30"] },
      { key: "thu", name: "Quinta-feira (30/07)", readings: ["Gênesis 30", "Salmo 104.31–35; 105.1–6"] },
      { key: "fri", name: "Sexta-feira (31/07)", readings: ["Provérbios 27", "Salmo 105.7–22"] },
      { key: "sat", name: "Sábado (01/08)", readings: ["Efésios 2.1–10"] },
    ],
    sunday: {
      name: "Domingo (02/08)",
      prayer: "Pai amado, muito obrigado porque, quando nós estávamos mortos em nossos delitos e pecados, o Senhor nos deu vida junto com Cristo. Obrigado porque a nossa salvação não começou em nós, mas na tua misericórdia, no teu grande amor e na riqueza da tua graça. Confessamos que muitas vezes vivemos como se a tua aceitação fosse um salário a ser conquistado, e não um dom recebido. Perdoa-nos. Pela graça somos salvos, mediante a fé, e isso não vem de nós; é presente teu, para que ninguém se glorie. Pai, nesta semana, livra-nos do orgulho de quem pensa que se salvou sozinho e do desânimo de quem pensa que ainda precisa se provar diante de ti. Somos feitura tua, criados em Cristo Jesus para boas obras que o Senhor de antemão preparou. Que a nossa obediência não seja tentativa de pagar a graça, mas gratidão em movimento. Em nome de Jesus, amém."
    }
  },
  {
    id: "2026-28",
    year: 2026,
    weekNumber: 28,
    subtitle: "Semana 28 (20 a 26 de julho)",
    days: [
      { key: "mon", name: "Segunda-feira (20/07)", readings: ["Lucas 8–9", "Salmo 101"] },
      { key: "tue", name: "Terça-feira (21/07)", readings: ["1 Tessalonicenses 5; 2 Tessalonicenses 1", "Salmo 102.1–11"] },
      { key: "wed", name: "Quarta-feira (22/07)", readings: ["2 Tessalonicenses 2–3", "Salmo 102.12–22"] },
      { key: "thu", name: "Quinta-feira (23/07)", readings: ["Gênesis 29", "Salmo 102.23–28; 103.1–5"] },
      { key: "fri", name: "Sexta-feira (24/07)", readings: ["Provérbios 26", "Salmo 103.6–22"] },
      { key: "sat", name: "Sábado (25/07)", readings: ["Salmo 1"] },
    ],
    sunday: {
      name: "Domingo (26/07) – Oração",
      prayer: "Pai amado, muito obrigado porque a tua Palavra não nos deixa no escuro sobre onde a vida realmente se sustenta. Obrigado porque o Senhor chama de bem-aventurado aquele que tem prazer na tua lei e nela medita de dia e de noite. Confessamos que muitas vezes buscamos conselho em qualquer lugar antes de te buscar, e que a nossa raiz fica rasa porque não bebemos da fonte certa. Perdoa-nos. Pai, planta-nos junto à corrente das tuas águas. Dá-nos, nesta semana, prazer de verdade na tua Palavra, e não apenas disciplina obrigada. Que a nossa vida dê fruto no tempo certo e que a nossa folha não murche, mesmo quando os dias forem secos. Guarda-nos do caminho que parece atraente mas termina em nada. Obrigado porque o Senhor conhece o caminho dos justos, e porque em Cristo esse caminho foi aberto para nós. Em nome de Jesus, amém."
    }
  },
  {
    id: "2026-27",
    year: 2026,
    weekNumber: 27,
    subtitle: "Semana 27 (13 a 19 de julho)",
    days: [
      { key: "mon", name: "Segunda-feira (13/07)", readings: ["Lucas 6–7", "Salmo 94.12–23"] },
      { key: "tue", name: "Terça-feira (14/07)", readings: ["1 Tessalonicenses 1–2", "Salmo 95"] },
      { key: "wed", name: "Quarta-feira (15/07)", readings: ["1 Tessalonicenses 3–4", "Salmo 96"] },
      { key: "thu", name: "Quinta-feira (16/07)", readings: ["Gênesis 28", "Salmo 97–98"] },
      { key: "fri", name: "Sexta-feira (17/07)", readings: ["Provérbios 25", "Salmo 99–100"] },
      { key: "sat", name: "Sábado (18/07)", readings: ["Efésios 1.15–23"] },
    ],
    sunday: {
      name: "Domingo (19/07) – Oração",
      prayer: "Pai amado, muito obrigado porque, em Cristo, o Senhor nos deu uma esperança viva e uma herança gloriosa. Assim como Paulo orou pelos efésios, nós também pedimos: dá-nos o Espírito de sabedoria e de revelação no pleno conhecimento de ti. Ilumina os olhos do nosso coração, para que conheçamos qual é a esperança do teu chamado, a riqueza da tua herança nos santos e a imensurável grandeza do teu poder para conosco, os que cremos. Pai, confessamos que muitas vezes vivemos com os olhos fechados para essas verdades, dominados pelo medo e pela falta de fé. Perdoa-nos. Nesta semana, lembra-nos de que o mesmo poder que ressuscitou Jesus dentre os mortos e o exaltou acima de todo nome opera em nós. Que vivamos debaixo do senhorio de Cristo, cabeça da igreja, que enche tudo em todos. Em nome de Jesus, amém."
    }
  },
  {
    id: "2026-26",
    year: 2026,
    weekNumber: 26,
    subtitle: "Semana 26 (6 a 12 de julho)",
    days: [
      { key: "mon", name: "Segunda (06/07)", readings: ["Lucas 4–5", "Salmo 89.45–52"] },
      { key: "tue", name: "Terça (07/07)", readings: ["Colossenses 1–2", "Salmo 90"] },
      { key: "wed", name: "Quarta (08/07)", readings: ["Colossenses 3–4", "Salmo 91"] },
      { key: "thu", name: "Quinta (09/07)", readings: ["Gênesis 27", "Salmo 92–93"] },
      { key: "fri", name: "Sexta (10/07)", readings: ["Provérbios 24", "Salmo 94.1–11"] },
      { key: "sat", name: "Sábado (11/07)", readings: ["Efésios 1.1–14"] },
    ],
    sunday: {
      name: "Domingo (12/07) – Oração",
      prayer: "Pai, obrigado porque em Cristo habita toda a plenitude e nele estamos completos. Ensina-nos, como pede o Salmo 90, a contar os nossos dias, para que alcancemos coração sábio. Firma a nossa igreja na supremacia e suficiência de Jesus e, ao iniciarmos a série em Efésios, ajuda-nos a viver a identidade que temos nele. Em nome de Jesus, amém."
    }
  }
];

const stringifiedNewPlans = JSON.stringify(newPlans, null, 2);
const newPlansCode = stringifiedNewPlans.substring(1, stringifiedNewPlans.length - 1) + ",";
content = content.replace('export const readingPlans: ReadingPlan[] = [', 'export const readingPlans: ReadingPlan[] = [\n' + newPlansCode);

fs.writeFileSync(file, content);
