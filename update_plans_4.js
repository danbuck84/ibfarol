const fs = require('fs');

const file = 'src/data/readingPlans.ts';
let content = fs.readFileSync(file, 'utf8');

const newPlans = [
  {
    id: "2026-36",
    year: 2026,
    weekNumber: 36,
    subtitle: "Semana 36 — 14 a 20 de setembro",
    days: [
      { key: "mon", name: "Segunda-feira (14/09)", readings: ["Lucas 24", "João 1", "Salmo 119.57–64"] },
      { key: "tue", name: "Terça-feira (15/09)", readings: ["Hebreus 12", "Salmo 119.65–72"] },
      { key: "wed", name: "Quarta-feira (16/09)", readings: ["Hebreus 13", "Tiago 1", "Salmo 119.73–80"] },
      { key: "thu", name: "Quinta-feira (17/09)", readings: ["Gênesis 38", "Salmo 119.81–96"] },
      { key: "fri", name: "Sexta-feira (18/09)", readings: ["Eclesiastes 2", "Salmo 119.97–112"] },
      { key: "sat", name: "Sábado (19/09)", readings: ["Efésios 4.25–5.5"] },
    ],
    sunday: {
      name: "Domingo (20/09) — Oração",
      prayer: "Pai amado, muito obrigado porque a tua Palavra desce ao concreto da nossa vida: ao que falamos, ao que sentimos, ao que fazemos com as mãos. Obrigado porque o Senhor se importa com os detalhes do nosso dia. Confessamos que mentimos por conveniência, guardamos ira até ela virar amargura, e usamos palavras que ferem em vez de edificar. Perdoa-nos. Não queremos entristecer o teu Espírito Santo, com o qual fomos selados. Pai, nesta semana, tira de nós toda amargura, gritaria e malícia. Dá-nos corações benignos e compassivos, prontos a perdoar como em Cristo o Senhor nos perdoou. Ensina-nos a falar o que é bom para a edificação, de modo que as nossas palavras transmitam graça a quem ouve. E que, como filhos amados, sejamos imitadores teus, andando em amor, assim como Cristo nos amou e se entregou por nós. Em nome de Jesus, amém."
    }
  }
];

const stringifiedNewPlans = JSON.stringify(newPlans, null, 2);
const newPlansCode = stringifiedNewPlans.substring(1, stringifiedNewPlans.length - 1) + ",";
content = content.replace('export const readingPlans: ReadingPlan[] = [', 'export const readingPlans: ReadingPlan[] = [\n' + newPlansCode);

fs.writeFileSync(file, content);
