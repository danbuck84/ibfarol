const fs = require('fs');

const file = 'src/data/readingPlans.ts';
let content = fs.readFileSync(file, 'utf8');

const newPlans = [
  {
    id: "2026-25",
    year: 2026,
    weekNumber: 25,
    subtitle: "Semana 25 (29 de junho a 5 de julho)",
    days: [
      { key: "mon", name: "Segunda (29/06)", readings: ["Lucas 2–3", "Salmo 88.7–18"] },
      { key: "tue", name: "Terça (30/06)", readings: ["Filipenses 1–2", "Salmo 89.1–8"] },
      { key: "wed", name: "Quarta (01/07)", readings: ["Filipenses 3–4", "Salmo 89.9–18"] },
      { key: "thu", name: "Quinta (02/07)", readings: ["Gênesis 26", "Salmo 89.19–29"] },
      { key: "fri", name: "Sexta (03/07)", readings: ["Provérbios 23", "Salmo 89.30–44"] },
      { key: "sat", name: "Sábado (04/07)", readings: ["Neemias 1"] },
    ],
    sunday: {
      name: "Domingo (05/07) – Oração",
      prayer: "Pai amado, muito obrigado porque o Senhor ouve a oração dos teus servos e é fiel à tua aliança. Obrigado pelo exemplo de Neemias, que diante da ruína do teu povo buscou a ti em jejum, confissão e súplica, confiando na tua misericórdia. Pai, confessamos, como ele, os nossos pecados e os pecados do teu povo; muitas vezes agimos com infidelidade diante de ti. Perdoa-nos e restaura-nos. Neste dia, enquanto nos achegamos à mesa do Senhor, lembra-nos do corpo e do sangue de Jesus, entregues por nós. Que o pão e o cálice proclamem a obra perfeita de Cristo, que selou a nova aliança e nos reconciliou contigo. Nesta semana, levanta em nós corações quebrantados e cheios de esperança, prontos a buscar a tua face e a servir o teu povo. Em nome de Jesus, amém."
    }
  },
  {
    id: "2026-24",
    year: 2026,
    weekNumber: 24,
    subtitle: "Semana 24 (22 a 28 de junho)",
    days: [
      { key: "mon", name: "Segunda-feira (22/06)", readings: ["Mateus 28; Lucas 1", "Salmo 84"] },
      { key: "tue", name: "Terça-feira (23/06)", readings: ["Efésios 3–4", "Salmo 85"] },
      { key: "wed", name: "Quarta-feira (24/06)", readings: ["Efésios 5–6", "Salmo 86.1–8"] },
      { key: "thu", name: "Quinta-feira (25/06)", readings: ["Gênesis 25", "Salmo 86.9–17"] },
      { key: "fri", name: "Sexta-feira (26/06)", readings: ["Provérbios 22", "Salmo 87–88.1–6"] },
      { key: "sat", name: "Sábado (27/06)", readings: ["Mateus 6.11–13"] },
    ],
    sunday: {
      name: "Domingo (28/06) – Oração",
      prayer: "Pai amado, muito obrigado porque podemos confiar a ti cada necessidade da nossa vida. Obrigado porque o Senhor nos ensina a depender de ti para o pão de cada dia, a buscar e oferecer perdão, e a clamar por livramento da tentação e do mal. Pai, confessamos que muitas vezes confiamos nas nossas próprias forças, guardamos mágoas e nos entregamos à tentação. Perdoa as nossas dívidas, assim como também perdoamos aos nossos devedores. Nesta semana, dá-nos um coração dependente, perdoador e vigilante. Sustenta-nos com o que é necessário, guarda-nos do maligno e ensina-nos a viver um dia de cada vez, confiando no teu cuidado. Em nome de Jesus, amém."
    }
  }
];

const stringifiedNewPlans = JSON.stringify(newPlans, null, 2);
const newPlansCode = stringifiedNewPlans.substring(1, stringifiedNewPlans.length - 1) + ",";
content = content.replace('export const readingPlans: ReadingPlan[] = [', 'export const readingPlans: ReadingPlan[] = [' + newPlansCode);

fs.writeFileSync(file, content);
