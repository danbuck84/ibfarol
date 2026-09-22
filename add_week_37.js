const fs = require('fs');

const file = 'src/data/readingPlans.ts';
let code = fs.readFileSync(file, 'utf8');

const newPlan = `
  {
    "id": "2026-37",
    "year": 2026,
    "weekNumber": 37,
    "subtitle": "Semana 37",
    "dateRange": "(21/09 a 27/09)",
    "days": [
      {
        "key": "mon",
        "name": "Segunda-feira (21/09)",
        "readings": [
          "João 2–3",
          "Salmo 119.113–120"
        ]
      },
      {
        "key": "tue",
        "name": "Terça-feira (22/09)",
        "readings": [
          "Tiago 2–3",
          "Salmo 119.121–128"
        ]
      },
      {
        "key": "wed",
        "name": "Quarta-feira (23/09)",
        "readings": [
          "Tiago 4–5",
          "Salmo 119.129–136"
        ]
      },
      {
        "key": "thu",
        "name": "Quinta-feira (24/09)",
        "readings": [
          "Gênesis 39",
          "Salmo 119.137–152"
        ]
      },
      {
        "key": "fri",
        "name": "Sexta-feira (25/09)",
        "readings": [
          "Eclesiastes 3",
          "Salmo 119.153–168"
        ]
      },
      {
        "key": "sat",
        "name": "Sábado (26/09)",
        "readings": [
          "Efésios 5.6–20"
        ]
      }
    ],
    "sunday": {
      "name": "Domingo (27/09)",
      "prayer": "Pai amado, muito obrigado porque outrora éramos trevas, mas agora somos luz no Senhor. Ajuda-nos a andar como filhos da luz, em toda bondade, justiça e verdade. Confessamos que muitas vezes nos deixamos enganar por palavras vãs e nos acomodamos com o que o Senhor chama de trevas, desde que ninguém veja. Perdoa-nos. Expõe o que precisa ser exposto em nós, com misericórdia, para que sejamos curados. Pai, ensina-nos a examinar o que te agrada e a viver com cuidado, aproveitando bem o tempo que o Senhor nos dá, porque os dias são maus e a vida é curta. Guarda-nos das fugas que prometem alívio e só aprofundam o vazio. Enche-nos do teu Espírito, para que a nossa alegria tenha fonte certa. Que nesta semana o nosso coração esteja cantando a ti, e que a gratidão seja a nossa resposta constante, em todas as coisas. Em nome de Jesus, amém."
    }
  },`;

// Inject right after export const readingPlans: ReadingPlan[] = [
code = code.replace(
  /export const readingPlans: ReadingPlan\[\] = \[/, 
  'export const readingPlans: ReadingPlan[] = [' + newPlan
);

fs.writeFileSync(file, code);
