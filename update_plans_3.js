const fs = require('fs');

const file = 'src/data/readingPlans.ts';
let content = fs.readFileSync(file, 'utf8');

const newPlans = [
  {
    id: "2026-35",
    year: 2026,
    weekNumber: 35,
    subtitle: "Semana 35 — 7 a 13 de setembro",
    days: [
      { key: "mon", name: "Segunda-feira (07/09)", readings: ["Lucas 22–23", "Salmo 119.1–8"] },
      { key: "tue", name: "Terça-feira (08/09)", readings: ["Hebreus 10", "Salmo 119.9–16"] },
      { key: "wed", name: "Quarta-feira (09/09)", readings: ["Hebreus 11", "Salmo 119.17–24"] },
      { key: "thu", name: "Quinta-feira (10/09)", readings: ["Gênesis 37", "Salmo 119.25–40"] },
      { key: "fri", name: "Sexta-feira (11/09)", readings: ["Eclesiastes 1", "Salmo 119.41–56"] },
      { key: "sat", name: "Sábado (12/09)", readings: ["Efésios 4.17–24"] },
    ],
    sunday: {
      name: "Domingo (13/09) — Oração",
      prayer: "Pai amado, muito obrigado porque em Cristo nós aprendemos um jeito novo de viver. Obrigado porque o Senhor não nos deixou presos ao que éramos. Confessamos que muitas vezes voltamos ao velho homem como quem veste uma roupa conhecida: a dureza de coração, os desejos enganosos, a vida vivida no piloto automático. Perdoa-nos. Pai, renova o espírito da nossa mente. Não queremos apenas mudar comportamentos por fora enquanto o coração continua o mesmo. Faz a tua verdade descer fundo, até onde ninguém vê. Ajuda-nos, nesta semana, a despir de fato o que pertence à vida antiga e a nos revestir do novo homem, criado segundo a tua semelhança, em justiça e retidão procedentes da verdade. E quando cairmos, que a queda nos leve de volta a Cristo, e não para longe dele. Em nome de Jesus, amém."
    }
  },
  {
    id: "2026-34",
    year: 2026,
    weekNumber: 34,
    subtitle: "Semana 34 — 31 de agosto a 6 de setembro",
    days: [
      { key: "mon", name: "Segunda-feira (31/08)", readings: ["Lucas 20–21", "Salmo 116.7–19"] },
      { key: "tue", name: "Terça-feira (01/09)", readings: ["Hebreus 7–8", "Salmo 117"] },
      { key: "wed", name: "Quarta-feira (02/09)", readings: ["Hebreus 9", "Salmo 118.1–9"] },
      { key: "thu", name: "Quinta-feira (03/09)", readings: ["Gênesis 35–36", "Salmo 118.10–18"] },
      { key: "fri", name: "Sexta-feira (04/09)", readings: ["Provérbios 31.16–31", "Salmo 118.19–29"] },
      { key: "sat", name: "Sábado (05/09)", readings: ["Efésios 4.1–16"] },
    ],
    sunday: {
      name: "Domingo (06/09) — Oração",
      prayer: "Pai amado, muito obrigado porque o Senhor nos chamou, e esse chamado tem peso: há um só corpo, um só Espírito, um só Senhor, uma só fé, um só batismo. Ajuda-nos a andar de modo digno da vocação que recebemos. Confessamos que somos impacientes uns com os outros, rápidos para reclamar e lentos para suportar. Perdoa-nos e produz em nós humildade, mansidão, longanimidade e amor que aguenta. Pai, obrigado porque Cristo deu dons à sua igreja, e nenhum membro é dispensável. Mostra-nos onde servir e dá-nos disposição para servir de verdade, e não só de intenção. Guarda-nos de sermos levados de um lado para outro por qualquer vento de doutrina. Que, seguindo a verdade em amor, cresçamos em tudo naquele que é a cabeça, Cristo, e que cada parte do corpo faça a sua parte para a edificação de todos. Em nome de Jesus, amém."
    }
  },
  {
    id: "2026-33",
    year: 2026,
    weekNumber: 33,
    subtitle: "Semana 33 (24 a 30 de agosto)",
    days: [
      { key: "mon", name: "Segunda-feira (24/08)", readings: ["Lucas 18–19", "Salmo 112"] },
      { key: "tue", name: "Terça-feira (25/08)", readings: ["Hebreus 3–4", "Salmo 113"] },
      { key: "wed", name: "Quarta-feira (26/08)", readings: ["Hebreus 5–6", "Salmo 114"] },
      { key: "thu", name: "Quinta-feira (27/08)", readings: ["Gênesis 34", "Salmo 115.1–10"] },
      { key: "fri", name: "Sexta-feira (28/08)", readings: ["Provérbios 31.1–15", "Salmo 115.11–18; 116.1–6"] },
      { key: "sat", name: "Sábado (29/08)", readings: ["Salmo 100"] },
    ],
    sunday: {
      name: "Domingo (30/08) — Oração",
      prayer: "Pai amado, muito obrigado porque o Senhor é Deus, e não nós. Foi o Senhor quem nos fez, e não nós a nós mesmos. Somos o teu povo e ovelhas do teu pasto. Obrigado porque, ao olharmos para trás, vemos a tua fidelidade em cada ano, em cada dificuldade e em cada alegria que o Senhor nos deu. Confessamos que às vezes celebramos o que fizemos e esquecemos de quem sustentou tudo. Perdoa-nos. Que a nossa gratidão hoje não seja apenas emoção passageira, mas reconhecimento de que a tua bondade dura para sempre e a tua fidelidade alcança todas as gerações. Pai, nesta semana, ajuda-nos a entrar pelas tuas portas com ação de graças e a servir-te com alegria, dentro de casa, no trabalho e na igreja. E que a nossa vida em conjunto seja um louvor visível ao teu nome. Em nome de Jesus, amém."
    }
  },
  {
    id: "2026-32",
    year: 2026,
    weekNumber: 32,
    subtitle: "Semana 32 (17 a 23 de agosto)",
    days: [
      { key: "mon", name: "Segunda-feira (17/08)", readings: ["Lucas 16–17", "Salmo 108"] },
      { key: "tue", name: "Terça-feira (18/08)", readings: ["Tito 3; Filemom", "Salmo 109.1–8"] },
      { key: "wed", name: "Quarta-feira (19/08)", readings: ["Hebreus 1–2", "Salmo 109.9–20"] },
      { key: "thu", name: "Quinta-feira (20/08)", readings: ["Gênesis 33", "Salmo 109.21–31"] },
      { key: "fri", name: "Sexta-feira (21/08)", readings: ["Provérbios 30", "Salmo 110–111"] },
      { key: "sat", name: "Sábado (22/08)", readings: ["Efésios 3.14–21"] },
    ],
    sunday: {
      name: "Domingo (23/08) – Oração",
      prayer: "Pai amado, dobramos os nossos joelhos diante de ti, de quem toma o nome toda família nos céus e na terra. Fortalece-nos com poder, pelo teu Espírito, no homem interior. Que Cristo habite nos nossos corações pela fé, e que estejamos arraigados e alicerçados em amor. Pai, confessamos que muitas vezes conhecemos o teu amor apenas de ouvido, como informação que não desce ao coração. Perdoa-nos pela frieza. Dá-nos força para compreender, junto com todos os santos, qual é a largura, a extensão, a altura e a profundidade do amor de Cristo, que excede todo entendimento. Enche-nos de toda a tua plenitude. E que nesta semana a nossa esperança não seja medida pelo que conseguimos imaginar, porque o Senhor é poderoso para fazer infinitamente mais do que tudo quanto pedimos ou pensamos. A ti seja a glória, na igreja e em Cristo Jesus, por todas as gerações. Em nome de Jesus, amém."
    }
  },
  {
    id: "2026-31",
    year: 2026,
    weekNumber: 31,
    subtitle: "Semana 31 (10 a 16 de agosto)",
    days: [
      { key: "mon", name: "Segunda-feira (10/08)", readings: ["Lucas 14–15", "Salmo 106.39–48"] },
      { key: "tue", name: "Terça-feira (11/08)", readings: ["2 Timóteo 3–4", "Salmo 107.1–9"] },
      { key: "wed", name: "Quarta-feira (12/08)", readings: ["Tito 1–2", "Salmo 107.10–16"] },
      { key: "thu", name: "Quinta-feira (13/08)", readings: ["Gênesis 32", "Salmo 107.17–32"] },
      { key: "fri", name: "Sexta-feira (14/08)", readings: ["Provérbios 29", "Salmo 107.33–43"] },
      { key: "sat", name: "Sábado (15/08)", readings: ["Efésios 3.1–13"] },
    ],
    sunday: {
      name: "Domingo (16/08) – Oração",
      prayer: "Pai amado, muito obrigado porque o mistério que esteve oculto por gerações foi revelado em Cristo: em Jesus, os que estavam de fora se tornaram coerdeiros, membros do mesmo corpo e coparticipantes da promessa. Obrigado porque isso não foi conquista de ninguém, mas dom da tua graça. Pai, obrigado porque o Senhor usa pessoas comuns para anunciar as riquezas insondáveis de Cristo. Confessamos que muitas vezes calamos por medo do que vão pensar, ou por acharmos que não temos preparo suficiente. Perdoa-nos e ajuda-nos a lembrar que a força nunca esteve em nós. Nesta semana, dá-nos ousadia e acesso confiante a ti pela fé em Cristo. Que as dificuldades não nos desanimem, mas nos lembrem de que o teu propósito eterno segue firme, e que a tua sabedoria está sendo manifestada por meio da igreja. Em nome de Jesus, amém."
    }
  }
];

const stringifiedNewPlans = JSON.stringify(newPlans, null, 2);
const newPlansCode = stringifiedNewPlans.substring(1, stringifiedNewPlans.length - 1) + ",";
content = content.replace('export const readingPlans: ReadingPlan[] = [', 'export const readingPlans: ReadingPlan[] = [\n' + newPlansCode);

fs.writeFileSync(file, content);
