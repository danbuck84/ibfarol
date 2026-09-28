const fs = require('fs');

const newPlan = {
  "id": "2026-38",
  "year": 2026,
  "weekNumber": 38,
  "subtitle": "Semana 38",
  "dateRange": "(28/09 a 04/10)",
  "days": [
    {
      "key": "mon",
      "name": "Segunda-feira (28/09)",
      "readings": [
        "João 4–5",
        "Salmo 119.169–176"
      ]
    },
    {
      "key": "tue",
      "name": "Terça-feira (29/09)",
      "readings": [
        "1 Pedro 1–2",
        "Salmo 120"
      ]
    },
    {
      "key": "wed",
      "name": "Quarta-feira (30/09)",
      "readings": [
        "1 Pedro 3–4",
        "Salmo 121"
      ]
    },
    {
      "key": "thu",
      "name": "Quinta-feira (01/10)",
      "readings": [
        "Gênesis 40",
        "Salmo 122–123"
      ]
    },
    {
      "key": "fri",
      "name": "Sexta-feira (02/10)",
      "readings": [
        "Eclesiastes 4",
        "Salmo 124–125"
      ]
    },
    {
      "key": "sat",
      "name": "Sábado (03/10)",
      "readings": [
        "Efésios 5.21–33"
      ]
    }
  ],
  "sunday": {
    "name": "Domingo (04/10) — Oração",
    "prayer": "Pai amado, muito obrigado porque o casamento não é invenção nossa, mas figura da relação entre Cristo e a igreja. Obrigado porque, antes de nos pedir qualquer coisa, o Senhor nos mostrou o amor de Jesus, que se entregou por nós. Pai, oramos hoje especialmente pelos homens da nossa igreja. Confessamos que é mais fácil exigir do que servir, mais fácil cobrar respeito do que amar com sacrifício. Perdoa-nos pelas vezes em que usamos a tua Palavra para nos proteger em vez de nos entregar. Dá aos maridos um amor que se parece com o de Cristo: que cuida, que se sacrifica, que nutre e que protege. E aos que ainda não são casados, dá a mesma disposição de servir dentro de casa e na igreja. Que a nossa sujeição mútua, no temor de Cristo, mostre ao mundo como é o teu amor. Em nome de Jesus, amém."
  }
};

let content = fs.readFileSync('src/data/readingPlans.ts', 'utf8');

// Insert the new plan at the beginning of the array (after "export const readingPlans: ReadingPlan[] = [")
const insertPoint = 'export const readingPlans: ReadingPlan[] = [';
const newPlanStr = '\n  ' + JSON.stringify(newPlan, null, 2).split('\n').join('\n  ') + ',';

content = content.replace(insertPoint, insertPoint + newPlanStr);

fs.writeFileSync('src/data/readingPlans.ts', content);
console.log('✅ Week 38 added to readingPlans.ts');
