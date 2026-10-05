const fs = require('fs');

const newPlan = {
  "id": "2026-39",
  "year": 2026,
  "weekNumber": 39,
  "subtitle": "Semana 39",
  "dateRange": "(05/10 a 11/10)",
  "days": [
    {
      "key": "mon",
      "name": "Segunda-feira (05/10)",
      "readings": [
        "João 6–7",
        "Salmo 126"
      ]
    },
    {
      "key": "tue",
      "name": "Terça-feira (06/10)",
      "readings": [
        "1 Pedro 5; 2 Pedro 1",
        "Salmo 127"
      ]
    },
    {
      "key": "wed",
      "name": "Quarta-feira (07/10)",
      "readings": [
        "2 Pedro 2–3",
        "Salmo 128"
      ]
    },
    {
      "key": "thu",
      "name": "Quinta-feira (08/10)",
      "readings": [
        "Gênesis 41",
        "Salmo 129–130"
      ]
    },
    {
      "key": "fri",
      "name": "Sexta-feira (09/10)",
      "readings": [
        "Eclesiastes 5",
        "Salmo 131–132.1–9"
      ]
    },
    {
      "key": "sat",
      "name": "Sábado (10/10)",
      "readings": [
        "Efésios 5.21–33"
      ]
    }
  ],
  "sunday": {
    "name": "Domingo (11/10) — Oração",
    "prayer": "Pai amado, muito obrigado porque, em Cristo, o Senhor nos ensina que honra e amor caminham juntos. Obrigado porque a igreja encontra segurança debaixo do cuidado de Jesus, e não debaixo de opressão. Pai, oramos hoje especialmente pelas mulheres da nossa igreja. Obrigado pela fé, pela coragem e pelo serviço de tantas que sustentam lares e ministérios com fidelidade silenciosa. Confessamos que a nossa cultura ensina desconfiança onde o Senhor ensina aliança. Perdoa-nos pelas vezes em que a tua Palavra foi distorcida para ferir em vez de proteger. Dá às esposas graça para respeitar e apoiar com alegria, e a todas as mulheres da nossa igreja um coração firme na tua verdade. Que os lares da nossa comunidade sejam lugares de honra mútua, e que esse mistério grande aponte, diante de todos, para Cristo e a sua igreja. Em nome de Jesus, amém."
  }
};

let content = fs.readFileSync('src/data/readingPlans.ts', 'utf8');

const insertPoint = 'export const readingPlans: ReadingPlan[] = [';
const newPlanStr = '\n  ' + JSON.stringify(newPlan, null, 2).split('\n').join('\n  ') + ',';

content = content.replace(insertPoint, insertPoint + newPlanStr);

fs.writeFileSync('src/data/readingPlans.ts', content);
console.log('✅ Week 39 added to readingPlans.ts');
