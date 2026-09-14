export type ReadingPlan = {
  id: string; // e.g. "2026-23"
  year: number;
  weekNumber: number;
  subtitle: string; // e.g. "Semana 23 (15/06 a 21/06)"
  days: {
    key: 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat';
    name: string;
    readings: string[];
  }[];
  sunday: {
    name: string;
    prayer: string;
  };
};

export const readingPlans: ReadingPlan[] = [

  {
    "id": "2026-36",
    "year": 2026,
    "weekNumber": 36,
    "subtitle": "Semana 36",
    "days": [
      {
        "key": "mon",
        "name": "Segunda-feira (14/09)",
        "readings": [
          "Lucas 24",
          "João 1",
          "Salmo 119.57–64"
        ]
      },
      {
        "key": "tue",
        "name": "Terça-feira (15/09)",
        "readings": [
          "Hebreus 12",
          "Salmo 119.65–72"
        ]
      },
      {
        "key": "wed",
        "name": "Quarta-feira (16/09)",
        "readings": [
          "Hebreus 13",
          "Tiago 1",
          "Salmo 119.73–80"
        ]
      },
      {
        "key": "thu",
        "name": "Quinta-feira (17/09)",
        "readings": [
          "Gênesis 38",
          "Salmo 119.81–96"
        ]
      },
      {
        "key": "fri",
        "name": "Sexta-feira (18/09)",
        "readings": [
          "Eclesiastes 2",
          "Salmo 119.97–112"
        ]
      },
      {
        "key": "sat",
        "name": "Sábado (19/09)",
        "readings": [
          "Efésios 4.25–5.5"
        ]
      }
    ],
    "sunday": {
      "name": "Domingo (20/09) — Oração",
      "prayer": "Pai amado, muito obrigado porque a tua Palavra desce ao concreto da nossa vida: ao que falamos, ao que sentimos, ao que fazemos com as mãos. Obrigado porque o Senhor se importa com os detalhes do nosso dia. Confessamos que mentimos por conveniência, guardamos ira até ela virar amargura, e usamos palavras que ferem em vez de edificar. Perdoa-nos. Não queremos entristecer o teu Espírito Santo, com o qual fomos selados. Pai, nesta semana, tira de nós toda amargura, gritaria e malícia. Dá-nos corações benignos e compassivos, prontos a perdoar como em Cristo o Senhor nos perdoou. Ensina-nos a falar o que é bom para a edificação, de modo que as nossas palavras transmitam graça a quem ouve. E que, como filhos amados, sejamos imitadores teus, andando em amor, assim como Cristo nos amou e se entregou por nós. Em nome de Jesus, amém."
    }
  }
,

  {
    "id": "2026-35",
    "year": 2026,
    "weekNumber": 35,
    "subtitle": "Semana 35",
    "days": [
      {
        "key": "mon",
        "name": "Segunda-feira (07/09)",
        "readings": [
          "Lucas 22–23",
          "Salmo 119.1–8"
        ]
      },
      {
        "key": "tue",
        "name": "Terça-feira (08/09)",
        "readings": [
          "Hebreus 10",
          "Salmo 119.9–16"
        ]
      },
      {
        "key": "wed",
        "name": "Quarta-feira (09/09)",
        "readings": [
          "Hebreus 11",
          "Salmo 119.17–24"
        ]
      },
      {
        "key": "thu",
        "name": "Quinta-feira (10/09)",
        "readings": [
          "Gênesis 37",
          "Salmo 119.25–40"
        ]
      },
      {
        "key": "fri",
        "name": "Sexta-feira (11/09)",
        "readings": [
          "Eclesiastes 1",
          "Salmo 119.41–56"
        ]
      },
      {
        "key": "sat",
        "name": "Sábado (12/09)",
        "readings": [
          "Efésios 4.17–24"
        ]
      }
    ],
    "sunday": {
      "name": "Domingo (13/09) — Oração",
      "prayer": "Pai amado, muito obrigado porque em Cristo nós aprendemos um jeito novo de viver. Obrigado porque o Senhor não nos deixou presos ao que éramos. Confessamos que muitas vezes voltamos ao velho homem como quem veste uma roupa conhecida: a dureza de coração, os desejos enganosos, a vida vivida no piloto automático. Perdoa-nos. Pai, renova o espírito da nossa mente. Não queremos apenas mudar comportamentos por fora enquanto o coração continua o mesmo. Faz a tua verdade descer fundo, até onde ninguém vê. Ajuda-nos, nesta semana, a despir de fato o que pertence à vida antiga e a nos revestir do novo homem, criado segundo a tua semelhança, em justiça e retidão procedentes da verdade. E quando cairmos, que a queda nos leve de volta a Cristo, e não para longe dele. Em nome de Jesus, amém."
    }
  },
  {
    "id": "2026-34",
    "year": 2026,
    "weekNumber": 34,
    "subtitle": "Semana 34",
    "days": [
      {
        "key": "mon",
        "name": "Segunda-feira (31/08)",
        "readings": [
          "Lucas 20–21",
          "Salmo 116.7–19"
        ]
      },
      {
        "key": "tue",
        "name": "Terça-feira (01/09)",
        "readings": [
          "Hebreus 7–8",
          "Salmo 117"
        ]
      },
      {
        "key": "wed",
        "name": "Quarta-feira (02/09)",
        "readings": [
          "Hebreus 9",
          "Salmo 118.1–9"
        ]
      },
      {
        "key": "thu",
        "name": "Quinta-feira (03/09)",
        "readings": [
          "Gênesis 35–36",
          "Salmo 118.10–18"
        ]
      },
      {
        "key": "fri",
        "name": "Sexta-feira (04/09)",
        "readings": [
          "Provérbios 31.16–31",
          "Salmo 118.19–29"
        ]
      },
      {
        "key": "sat",
        "name": "Sábado (05/09)",
        "readings": [
          "Efésios 4.1–16"
        ]
      }
    ],
    "sunday": {
      "name": "Domingo (06/09) — Oração",
      "prayer": "Pai amado, muito obrigado porque o Senhor nos chamou, e esse chamado tem peso: há um só corpo, um só Espírito, um só Senhor, uma só fé, um só batismo. Ajuda-nos a andar de modo digno da vocação que recebemos. Confessamos que somos impacientes uns com os outros, rápidos para reclamar e lentos para suportar. Perdoa-nos e produz em nós humildade, mansidão, longanimidade e amor que aguenta. Pai, obrigado porque Cristo deu dons à sua igreja, e nenhum membro é dispensável. Mostra-nos onde servir e dá-nos disposição para servir de verdade, e não só de intenção. Guarda-nos de sermos levados de um lado para outro por qualquer vento de doutrina. Que, seguindo a verdade em amor, cresçamos em tudo naquele que é a cabeça, Cristo, e que cada parte do corpo faça a sua parte para a edificação de todos. Em nome de Jesus, amém."
    }
  },
  {
    "id": "2026-33",
    "year": 2026,
    "weekNumber": 33,
    "subtitle": "Semana 33",
    "days": [
      {
        "key": "mon",
        "name": "Segunda-feira (24/08)",
        "readings": [
          "Lucas 18–19",
          "Salmo 112"
        ]
      },
      {
        "key": "tue",
        "name": "Terça-feira (25/08)",
        "readings": [
          "Hebreus 3–4",
          "Salmo 113"
        ]
      },
      {
        "key": "wed",
        "name": "Quarta-feira (26/08)",
        "readings": [
          "Hebreus 5–6",
          "Salmo 114"
        ]
      },
      {
        "key": "thu",
        "name": "Quinta-feira (27/08)",
        "readings": [
          "Gênesis 34",
          "Salmo 115.1–10"
        ]
      },
      {
        "key": "fri",
        "name": "Sexta-feira (28/08)",
        "readings": [
          "Provérbios 31.1–15",
          "Salmo 115.11–18; 116.1–6"
        ]
      },
      {
        "key": "sat",
        "name": "Sábado (29/08)",
        "readings": [
          "Salmo 100"
        ]
      }
    ],
    "sunday": {
      "name": "Domingo (30/08) — Oração",
      "prayer": "Pai amado, muito obrigado porque o Senhor é Deus, e não nós. Foi o Senhor quem nos fez, e não nós a nós mesmos. Somos o teu povo e ovelhas do teu pasto. Obrigado porque, ao olharmos para trás, vemos a tua fidelidade em cada ano, em cada dificuldade e em cada alegria que o Senhor nos deu. Confessamos que às vezes celebramos o que fizemos e esquecemos de quem sustentou tudo. Perdoa-nos. Que a nossa gratidão hoje não seja apenas emoção passageira, mas reconhecimento de que a tua bondade dura para sempre e a tua fidelidade alcança todas as gerações. Pai, nesta semana, ajuda-nos a entrar pelas tuas portas com ação de graças e a servir-te com alegria, dentro de casa, no trabalho e na igreja. E que a nossa vida em conjunto seja um louvor visível ao teu nome. Em nome de Jesus, amém."
    }
  },
  {
    "id": "2026-32",
    "year": 2026,
    "weekNumber": 32,
    "subtitle": "Semana 32",
    "days": [
      {
        "key": "mon",
        "name": "Segunda-feira (17/08)",
        "readings": [
          "Lucas 16–17",
          "Salmo 108"
        ]
      },
      {
        "key": "tue",
        "name": "Terça-feira (18/08)",
        "readings": [
          "Tito 3; Filemom",
          "Salmo 109.1–8"
        ]
      },
      {
        "key": "wed",
        "name": "Quarta-feira (19/08)",
        "readings": [
          "Hebreus 1–2",
          "Salmo 109.9–20"
        ]
      },
      {
        "key": "thu",
        "name": "Quinta-feira (20/08)",
        "readings": [
          "Gênesis 33",
          "Salmo 109.21–31"
        ]
      },
      {
        "key": "fri",
        "name": "Sexta-feira (21/08)",
        "readings": [
          "Provérbios 30",
          "Salmo 110–111"
        ]
      },
      {
        "key": "sat",
        "name": "Sábado (22/08)",
        "readings": [
          "Efésios 3.14–21"
        ]
      }
    ],
    "sunday": {
      "name": "Domingo (23/08) – Oração",
      "prayer": "Pai amado, dobramos os nossos joelhos diante de ti, de quem toma o nome toda família nos céus e na terra. Fortalece-nos com poder, pelo teu Espírito, no homem interior. Que Cristo habite nos nossos corações pela fé, e que estejamos arraigados e alicerçados em amor. Pai, confessamos que muitas vezes conhecemos o teu amor apenas de ouvido, como informação que não desce ao coração. Perdoa-nos pela frieza. Dá-nos força para compreender, junto com todos os santos, qual é a largura, a extensão, a altura e a profundidade do amor de Cristo, que excede todo entendimento. Enche-nos de toda a tua plenitude. E que nesta semana a nossa esperança não seja medida pelo que conseguimos imaginar, porque o Senhor é poderoso para fazer infinitamente mais do que tudo quanto pedimos ou pensamos. A ti seja a glória, na igreja e em Cristo Jesus, por todas as gerações. Em nome de Jesus, amém."
    }
  },
  {
    "id": "2026-31",
    "year": 2026,
    "weekNumber": 31,
    "subtitle": "Semana 31",
    "days": [
      {
        "key": "mon",
        "name": "Segunda-feira (10/08)",
        "readings": [
          "Lucas 14–15",
          "Salmo 106.39–48"
        ]
      },
      {
        "key": "tue",
        "name": "Terça-feira (11/08)",
        "readings": [
          "2 Timóteo 3–4",
          "Salmo 107.1–9"
        ]
      },
      {
        "key": "wed",
        "name": "Quarta-feira (12/08)",
        "readings": [
          "Tito 1–2",
          "Salmo 107.10–16"
        ]
      },
      {
        "key": "thu",
        "name": "Quinta-feira (13/08)",
        "readings": [
          "Gênesis 32",
          "Salmo 107.17–32"
        ]
      },
      {
        "key": "fri",
        "name": "Sexta-feira (14/08)",
        "readings": [
          "Provérbios 29",
          "Salmo 107.33–43"
        ]
      },
      {
        "key": "sat",
        "name": "Sábado (15/08)",
        "readings": [
          "Efésios 3.1–13"
        ]
      }
    ],
    "sunday": {
      "name": "Domingo (16/08) – Oração",
      "prayer": "Pai amado, muito obrigado porque o mistério que esteve oculto por gerações foi revelado em Cristo: em Jesus, os que estavam de fora se tornaram coerdeiros, membros do mesmo corpo e coparticipantes da promessa. Obrigado porque isso não foi conquista de ninguém, mas dom da tua graça. Pai, obrigado porque o Senhor usa pessoas comuns para anunciar as riquezas insondáveis de Cristo. Confessamos que muitas vezes calamos por medo do que vão pensar, ou por acharmos que não temos preparo suficiente. Perdoa-nos e ajuda-nos a lembrar que a força nunca esteve em nós. Nesta semana, dá-nos ousadia e acesso confiante a ti pela fé em Cristo. Que as dificuldades não nos desanimem, mas nos lembrem de que o teu propósito eterno segue firme, e que a tua sabedoria está sendo manifestada por meio da igreja. Em nome de Jesus, amém."
    }
  }
,

  {
    "id": "2026-30",
    "year": 2026,
    "weekNumber": 30,
    "subtitle": "Semana 30",
    "days": [
      {
        "key": "mon",
        "name": "Segunda-feira (03/08)",
        "readings": [
          "Lucas 12–13",
          "Salmo 105.23–36"
        ]
      },
      {
        "key": "tue",
        "name": "Terça-feira (04/08)",
        "readings": [
          "1 Timóteo 5–6",
          "Salmo 105.37–45"
        ]
      },
      {
        "key": "wed",
        "name": "Quarta-feira (05/08)",
        "readings": [
          "2 Timóteo 1–2",
          "Salmo 106.1–8"
        ]
      },
      {
        "key": "thu",
        "name": "Quinta-feira (06/08)",
        "readings": [
          "Gênesis 31",
          "Salmo 106.9–23"
        ]
      },
      {
        "key": "fri",
        "name": "Sexta-feira (07/08)",
        "readings": [
          "Provérbios 28",
          "Salmo 106.24–38"
        ]
      },
      {
        "key": "sat",
        "name": "Sábado (08/08)",
        "readings": [
          "Efésios 2.11–22"
        ]
      }
    ],
    "sunday": {
      "name": "Domingo (09/08) – Oração",
      "prayer": "Pai amado, muito obrigado porque nós, que um dia estávamos longe, sem esperança e sem Deus no mundo, fomos trazidos para perto pelo sangue de Cristo. Obrigado porque ele mesmo é a nossa paz, e derrubou o muro que nos separava. Confessamos que insistimos em levantar de novo as paredes que Jesus derrubou: as distâncias que criamos, os julgamentos que alimentamos, as pessoas que evitamos dentro da tua própria casa. Perdoa-nos. Pai, nesta semana, ajuda-nos a viver como um só corpo. Dá-nos coragem para procurar quem está afastado, humildade para pedir perdão e paciência para suportar as diferenças que existem entre nós. Obrigado porque já não somos estrangeiros, mas concidadãos dos santos e membros da tua família, edificados sobre o fundamento dos apóstolos e profetas, sendo Cristo Jesus a pedra angular. Que a nossa igreja seja, de verdade, habitação tua no Espírito. Em nome de Jesus, amém."
    }
  },
  {
    "id": "2026-29",
    "year": 2026,
    "weekNumber": 29,
    "subtitle": "Semana 29",
    "days": [
      {
        "key": "mon",
        "name": "Segunda-feira (27/07)",
        "readings": [
          "Lucas 10–11",
          "Salmo 104.1–9"
        ]
      },
      {
        "key": "tue",
        "name": "Terça-feira (28/07)",
        "readings": [
          "1 Timóteo 1–2",
          "Salmo 104.10–18"
        ]
      },
      {
        "key": "wed",
        "name": "Quarta-feira (29/07)",
        "readings": [
          "1 Timóteo 3–4",
          "Salmo 104.19–30"
        ]
      },
      {
        "key": "thu",
        "name": "Quinta-feira (30/07)",
        "readings": [
          "Gênesis 30",
          "Salmo 104.31–35; 105.1–6"
        ]
      },
      {
        "key": "fri",
        "name": "Sexta-feira (31/07)",
        "readings": [
          "Provérbios 27",
          "Salmo 105.7–22"
        ]
      },
      {
        "key": "sat",
        "name": "Sábado (01/08)",
        "readings": [
          "Efésios 2.1–10"
        ]
      }
    ],
    "sunday": {
      "name": "Domingo (02/08)",
      "prayer": "Pai amado, muito obrigado porque, quando nós estávamos mortos em nossos delitos e pecados, o Senhor nos deu vida junto com Cristo. Obrigado porque a nossa salvação não começou em nós, mas na tua misericórdia, no teu grande amor e na riqueza da tua graça. Confessamos que muitas vezes vivemos como se a tua aceitação fosse um salário a ser conquistado, e não um dom recebido. Perdoa-nos. Pela graça somos salvos, mediante a fé, e isso não vem de nós; é presente teu, para que ninguém se glorie. Pai, nesta semana, livra-nos do orgulho de quem pensa que se salvou sozinho e do desânimo de quem pensa que ainda precisa se provar diante de ti. Somos feitura tua, criados em Cristo Jesus para boas obras que o Senhor de antemão preparou. Que a nossa obediência não seja tentativa de pagar a graça, mas gratidão em movimento. Em nome de Jesus, amém."
    }
  },
  {
    "id": "2026-28",
    "year": 2026,
    "weekNumber": 28,
    "subtitle": "Semana 28",
    "days": [
      {
        "key": "mon",
        "name": "Segunda-feira (20/07)",
        "readings": [
          "Lucas 8–9",
          "Salmo 101"
        ]
      },
      {
        "key": "tue",
        "name": "Terça-feira (21/07)",
        "readings": [
          "1 Tessalonicenses 5; 2 Tessalonicenses 1",
          "Salmo 102.1–11"
        ]
      },
      {
        "key": "wed",
        "name": "Quarta-feira (22/07)",
        "readings": [
          "2 Tessalonicenses 2–3",
          "Salmo 102.12–22"
        ]
      },
      {
        "key": "thu",
        "name": "Quinta-feira (23/07)",
        "readings": [
          "Gênesis 29",
          "Salmo 102.23–28; 103.1–5"
        ]
      },
      {
        "key": "fri",
        "name": "Sexta-feira (24/07)",
        "readings": [
          "Provérbios 26",
          "Salmo 103.6–22"
        ]
      },
      {
        "key": "sat",
        "name": "Sábado (25/07)",
        "readings": [
          "Salmo 1"
        ]
      }
    ],
    "sunday": {
      "name": "Domingo (26/07) – Oração",
      "prayer": "Pai amado, muito obrigado porque a tua Palavra não nos deixa no escuro sobre onde a vida realmente se sustenta. Obrigado porque o Senhor chama de bem-aventurado aquele que tem prazer na tua lei e nela medita de dia e de noite. Confessamos que muitas vezes buscamos conselho em qualquer lugar antes de te buscar, e que a nossa raiz fica rasa porque não bebemos da fonte certa. Perdoa-nos. Pai, planta-nos junto à corrente das tuas águas. Dá-nos, nesta semana, prazer de verdade na tua Palavra, e não apenas disciplina obrigada. Que a nossa vida dê fruto no tempo certo e que a nossa folha não murche, mesmo quando os dias forem secos. Guarda-nos do caminho que parece atraente mas termina em nada. Obrigado porque o Senhor conhece o caminho dos justos, e porque em Cristo esse caminho foi aberto para nós. Em nome de Jesus, amém."
    }
  },
  {
    "id": "2026-27",
    "year": 2026,
    "weekNumber": 27,
    "subtitle": "Semana 27",
    "days": [
      {
        "key": "mon",
        "name": "Segunda-feira (13/07)",
        "readings": [
          "Lucas 6–7",
          "Salmo 94.12–23"
        ]
      },
      {
        "key": "tue",
        "name": "Terça-feira (14/07)",
        "readings": [
          "1 Tessalonicenses 1–2",
          "Salmo 95"
        ]
      },
      {
        "key": "wed",
        "name": "Quarta-feira (15/07)",
        "readings": [
          "1 Tessalonicenses 3–4",
          "Salmo 96"
        ]
      },
      {
        "key": "thu",
        "name": "Quinta-feira (16/07)",
        "readings": [
          "Gênesis 28",
          "Salmo 97–98"
        ]
      },
      {
        "key": "fri",
        "name": "Sexta-feira (17/07)",
        "readings": [
          "Provérbios 25",
          "Salmo 99–100"
        ]
      },
      {
        "key": "sat",
        "name": "Sábado (18/07)",
        "readings": [
          "Efésios 1.15–23"
        ]
      }
    ],
    "sunday": {
      "name": "Domingo (19/07) – Oração",
      "prayer": "Pai amado, muito obrigado porque, em Cristo, o Senhor nos deu uma esperança viva e uma herança gloriosa. Assim como Paulo orou pelos efésios, nós também pedimos: dá-nos o Espírito de sabedoria e de revelação no pleno conhecimento de ti. Ilumina os olhos do nosso coração, para que conheçamos qual é a esperança do teu chamado, a riqueza da tua herança nos santos e a imensurável grandeza do teu poder para conosco, os que cremos. Pai, confessamos que muitas vezes vivemos com os olhos fechados para essas verdades, dominados pelo medo e pela falta de fé. Perdoa-nos. Nesta semana, lembra-nos de que o mesmo poder que ressuscitou Jesus dentre os mortos e o exaltou acima de todo nome opera em nós. Que vivamos debaixo do senhorio de Cristo, cabeça da igreja, que enche tudo em todos. Em nome de Jesus, amém."
    }
  },
  {
    "id": "2026-26",
    "year": 2026,
    "weekNumber": 26,
    "subtitle": "Semana 26",
    "days": [
      {
        "key": "mon",
        "name": "Segunda (06/07)",
        "readings": [
          "Lucas 4–5",
          "Salmo 89.45–52"
        ]
      },
      {
        "key": "tue",
        "name": "Terça (07/07)",
        "readings": [
          "Colossenses 1–2",
          "Salmo 90"
        ]
      },
      {
        "key": "wed",
        "name": "Quarta (08/07)",
        "readings": [
          "Colossenses 3–4",
          "Salmo 91"
        ]
      },
      {
        "key": "thu",
        "name": "Quinta (09/07)",
        "readings": [
          "Gênesis 27",
          "Salmo 92–93"
        ]
      },
      {
        "key": "fri",
        "name": "Sexta (10/07)",
        "readings": [
          "Provérbios 24",
          "Salmo 94.1–11"
        ]
      },
      {
        "key": "sat",
        "name": "Sábado (11/07)",
        "readings": [
          "Efésios 1.1–14"
        ]
      }
    ],
    "sunday": {
      "name": "Domingo (12/07) – Oração",
      "prayer": "Pai, obrigado porque em Cristo habita toda a plenitude e nele estamos completos. Ensina-nos, como pede o Salmo 90, a contar os nossos dias, para que alcancemos coração sábio. Firma a nossa igreja na supremacia e suficiência de Jesus e, ao iniciarmos a série em Efésios, ajuda-nos a viver a identidade que temos nele. Em nome de Jesus, amém."
    }
  }
,
  {
    "id": "2026-25",
    "year": 2026,
    "weekNumber": 25,
    "subtitle": "Semana 25",
    "days": [
      {
        "key": "mon",
        "name": "Segunda (29/06)",
        "readings": [
          "Lucas 2–3",
          "Salmo 88.7–18"
        ]
      },
      {
        "key": "tue",
        "name": "Terça (30/06)",
        "readings": [
          "Filipenses 1–2",
          "Salmo 89.1–8"
        ]
      },
      {
        "key": "wed",
        "name": "Quarta (01/07)",
        "readings": [
          "Filipenses 3–4",
          "Salmo 89.9–18"
        ]
      },
      {
        "key": "thu",
        "name": "Quinta (02/07)",
        "readings": [
          "Gênesis 26",
          "Salmo 89.19–29"
        ]
      },
      {
        "key": "fri",
        "name": "Sexta (03/07)",
        "readings": [
          "Provérbios 23",
          "Salmo 89.30–44"
        ]
      },
      {
        "key": "sat",
        "name": "Sábado (04/07)",
        "readings": [
          "Neemias 1"
        ]
      }
    ],
    "sunday": {
      "name": "Domingo (05/07) – Oração",
      "prayer": "Pai amado, muito obrigado porque o Senhor ouve a oração dos teus servos e é fiel à tua aliança. Obrigado pelo exemplo de Neemias, que diante da ruína do teu povo buscou a ti em jejum, confissão e súplica, confiando na tua misericórdia. Pai, confessamos, como ele, os nossos pecados e os pecados do teu povo; muitas vezes agimos com infidelidade diante de ti. Perdoa-nos e restaura-nos. Neste dia, enquanto nos achegamos à mesa do Senhor, lembra-nos do corpo e do sangue de Jesus, entregues por nós. Que o pão e o cálice proclamem a obra perfeita de Cristo, que selou a nova aliança e nos reconciliou contigo. Nesta semana, levanta em nós corações quebrantados e cheios de esperança, prontos a buscar a tua face e a servir o teu povo. Em nome de Jesus, amém."
    }
  },
  {
    "id": "2026-24",
    "year": 2026,
    "weekNumber": 24,
    "subtitle": "Semana 24",
    "days": [
      {
        "key": "mon",
        "name": "Segunda-feira (22/06)",
        "readings": [
          "Mateus 28; Lucas 1",
          "Salmo 84"
        ]
      },
      {
        "key": "tue",
        "name": "Terça-feira (23/06)",
        "readings": [
          "Efésios 3–4",
          "Salmo 85"
        ]
      },
      {
        "key": "wed",
        "name": "Quarta-feira (24/06)",
        "readings": [
          "Efésios 5–6",
          "Salmo 86.1–8"
        ]
      },
      {
        "key": "thu",
        "name": "Quinta-feira (25/06)",
        "readings": [
          "Gênesis 25",
          "Salmo 86.9–17"
        ]
      },
      {
        "key": "fri",
        "name": "Sexta-feira (26/06)",
        "readings": [
          "Provérbios 22",
          "Salmo 87–88.1–6"
        ]
      },
      {
        "key": "sat",
        "name": "Sábado (27/06)",
        "readings": [
          "Mateus 6.11–13"
        ]
      }
    ],
    "sunday": {
      "name": "Domingo (28/06) – Oração",
      "prayer": "Pai amado, muito obrigado porque podemos confiar a ti cada necessidade da nossa vida. Obrigado porque o Senhor nos ensina a depender de ti para o pão de cada dia, a buscar e oferecer perdão, e a clamar por livramento da tentação e do mal. Pai, confessamos que muitas vezes confiamos nas nossas próprias forças, guardamos mágoas e nos entregamos à tentação. Perdoa as nossas dívidas, assim como também perdoamos aos nossos devedores. Nesta semana, dá-nos um coração dependente, perdoador e vigilante. Sustenta-nos com o que é necessário, guarda-nos do maligno e ensina-nos a viver um dia de cada vez, confiando no teu cuidado. Em nome de Jesus, amém."
    }
  }
,
  {
    id: "2026-23",
    year: 2026,
    weekNumber: 23,
    subtitle: "Semana 23",
    days: [
      { key: "mon", name: "Segunda-feira (15/06)", readings: ["Mateus 26–27", "Salmo 79"] },
      { key: "tue", name: "Terça-feira (16/06)", readings: ["Gálatas 5–6", "Salmo 80.1–7"] },
      { key: "wed", name: "Quarta-feira (17/06)", readings: ["Efésios 1–2", "Salmo 80.8–19"] },
      { key: "thu", name: "Quinta-feira (18/06)", readings: ["Gênesis 24", "Salmo 81"] },
      { key: "fri", name: "Sexta-feira (19/06)", readings: ["Provérbios 21", "Salmo 82–83"] },
      { key: "sat", name: "Sábado (20/06)", readings: ["Mateus 6.5–10"] },
    ],
    sunday: {
      name: "Domingo (21/06) – Oração",
      prayer: "Pai amado, muito obrigado porque Jesus nos ensinou a orar. Obrigado porque a oração não é espetáculo para ser visto pelos outros, mas encontro no secreto com o Pai que vê e ouve. Obrigado porque, antes mesmo de pedirmos, o Senhor já sabe do que precisamos. Pai, confessamos que muitas vezes oramos por aparência, com palavras vazias e repetidas, ou simplesmente deixamos de orar. Perdoa-nos. Nesta semana, ensina-nos a buscar a tua face em lugar reservado, com sinceridade e confiança. Que a nossa maior alegria seja a santificação do teu nome, a vinda do teu reino e o cumprimento da tua vontade, assim na terra como no céu. Em nome de Jesus, amém."
    }
  }
];
