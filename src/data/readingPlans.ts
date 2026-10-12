export type ReadingPlan = {
  id: string; // e.g. "2026-40"
  year: number;
  weekNumber: number;
  subtitle: string;
  dateRange?: string; // e.g. "(12/10 a 18/10)"
  startDate?: string; // e.g. "2026-10-12"
  endDate?: string;   // e.g. "2026-10-18"
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
    "id": "2026-01",
    "year": 2026,
    "weekNumber": 1,
    "subtitle": "Semana 1",
    "dateRange": "(12/01 a 18/01)",
    "startDate": "2026-01-12",
    "endDate": "2026-01-18",
    "days": [
      {
        "key": "mon",
        "name": "Segunda-feira (12/01)",
        "readings": [
          "Marcos 1–2",
          "Salmo 1"
        ]
      },
      {
        "key": "tue",
        "name": "Terça-feira (13/01)",
        "readings": [
          "Atos 1–2",
          "Salmo 2"
        ]
      },
      {
        "key": "wed",
        "name": "Quarta-feira (14/01)",
        "readings": [
          "Atos 3–4",
          "Salmo 3"
        ]
      },
      {
        "key": "thu",
        "name": "Quinta-feira (15/01)",
        "readings": [
          "Gênesis 1",
          "Salmo 4–5"
        ]
      },
      {
        "key": "fri",
        "name": "Sexta-feira (16/01)",
        "readings": [
          "Provérbios 1",
          "Salmo 6–7"
        ]
      },
      {
        "key": "sat",
        "name": "Sábado (17/01)",
        "readings": [
          "João 10"
        ]
      }
    ],
    "sunday": {
      "name": "Domingo (18/01) — Oração",
      "prayer": "Deus, muito obrigado porque o Senhor é o meu pastor. Obrigado porque o Senhor me conhece, cuida de mim e me sustenta. Obrigado por Jesus, que entregou sua vida por mim. Muito obrigado porque com o Senhor eu posso ter vida em abundância. Ajuda-me a seguir os comandos do Bom Pastor e a desfrutar da abundância que só Jesus pode me dar. Amém."
    }
  },
  {
    "id": "2026-02",
    "year": 2026,
    "weekNumber": 2,
    "subtitle": "Semana 2",
    "dateRange": "(19/01 a 25/01)",
    "startDate": "2026-01-19",
    "endDate": "2026-01-25",
    "days": [
      {
        "key": "mon",
        "name": "Segunda-feira (19/01)",
        "readings": [
          "Marcos 3–4",
          "Salmo 8"
        ]
      },
      {
        "key": "tue",
        "name": "Terça-feira (20/01)",
        "readings": [
          "Atos 5–6",
          "Salmo 9.1–10"
        ]
      },
      {
        "key": "wed",
        "name": "Quarta-feira (21/01)",
        "readings": [
          "Atos 7",
          "Salmo 9.11–20"
        ]
      },
      {
        "key": "thu",
        "name": "Quinta-feira (22/01)",
        "readings": [
          "Gênesis 2",
          "Salmo 10"
        ]
      },
      {
        "key": "fri",
        "name": "Sexta-feira (23/01)",
        "readings": [
          "Provérbios 2.1–11",
          "Salmo 11–12"
        ]
      },
      {
        "key": "sat",
        "name": "Sábado (24/01)",
        "readings": [
          "João 11"
        ]
      }
    ],
    "sunday": {
      "name": "Domingo (25/01) — Oração",
      "prayer": "Pai, muito obrigado por Jesus, que é a ressurreição e a vida. Obrigado porque eu sei que em Jesus, a morte não é o fim. Obrigado porque o Senhor se compadece de mim, se importa com a minha dor, e age de formas sobrenaturais para cuidar de mim. Deus, a espera no Senhor as vezes é dura, não sei como o Senhor vai agir, e nem quando o Senhor vai agir. Por favor, me ajuda a confiar em ti mesmo quando não entendo os teus caminhos, porque eu sei que o Senhor tem poder sobre a morte e a vida. Amém."
    }
  },
  {
    "id": "2026-03",
    "year": 2026,
    "weekNumber": 3,
    "subtitle": "Semana 3",
    "dateRange": "(26/01 a 01/02)",
    "startDate": "2026-01-26",
    "endDate": "2026-02-01",
    "days": [
      {
        "key": "mon",
        "name": "Segunda-feira (26/01)",
        "readings": [
          "Marcos 5–6",
          "Salmo 13"
        ]
      },
      {
        "key": "tue",
        "name": "Terça-feira (27/01)",
        "readings": [
          "Atos 8–9",
          "Salmo 14"
        ]
      },
      {
        "key": "wed",
        "name": "Quarta-feira (28/01)",
        "readings": [
          "Atos 10",
          "Salmo 15"
        ]
      },
      {
        "key": "thu",
        "name": "Quinta-feira (29/01)",
        "readings": [
          "Gênesis 3",
          "Salmo 16"
        ]
      },
      {
        "key": "fri",
        "name": "Sexta-feira (30/01)",
        "readings": [
          "Provérbios 2.12–22",
          "Salmo 17"
        ]
      },
      {
        "key": "sat",
        "name": "Sábado (31/01)",
        "readings": [
          "João 12"
        ]
      }
    ],
    "sunday": {
      "name": "Domingo (01/02) — Oração",
      "prayer": "Pai, muito obrigado por Jesus, o Rei que veio em mansidão, para nos salvar. Obrigado porque ele entregou a própria vida para que nós tivéssemos vida verdadeira em ti. Ajuda-nos a amar mais a tua glória do que a aprovação das pessoas, e a seguir Jesus mesmo quando isso significa deixar de lado a nossa própria vontade. Pai de amor, fortalece a nossa fé para que, nesta semana, as nossas escolhas, palavras e atitudes mostrem que cremos em Cristo, a luz que veio ao mundo. Em nome de Jesus, amém."
    }
  },
  {
    "id": "2026-04",
    "year": 2026,
    "weekNumber": 4,
    "subtitle": "Semana 4",
    "dateRange": "(02/02 a 08/02)",
    "startDate": "2026-02-02",
    "endDate": "2026-02-08",
    "days": [
      {
        "key": "mon",
        "name": "Segunda-feira (02/02)",
        "readings": [
          "Marcos 7–8",
          "Salmo 18.1–29"
        ]
      },
      {
        "key": "tue",
        "name": "Terça-feira (03/02)",
        "readings": [
          "Atos 11–12",
          "Salmo 18.30–50"
        ]
      },
      {
        "key": "wed",
        "name": "Quarta-feira (04/02)",
        "readings": [
          "Atos 13",
          "Salmo 19"
        ]
      },
      {
        "key": "thu",
        "name": "Quinta-feira (05/02)",
        "readings": [
          "Gênesis 4",
          "Salmo 20"
        ]
      },
      {
        "key": "fri",
        "name": "Sexta-feira (06/02)",
        "readings": [
          "Provérbios 3",
          "Salmo 21"
        ]
      },
      {
        "key": "sat",
        "name": "Sábado (07/02)",
        "readings": [
          "João 12"
        ]
      }
    ],
    "sunday": {
      "name": "Domingo (08/02) — Oração",
      "prayer": "Pai celestial, nós te agradecemos por Jesus, a luz que veio ao mundo para que não permaneçamos nas trevas. Obrigado porque, ao olharmos para ele, vemos a ti. Obrigado porque ele não veio para nos condenar, mas para nos salvar. Senhor, nesta semana, abre os nossos olhos para que vejamos a tua glória revelada em Cristo. Amolece os nossos corações para que entendamos a tua Palavra e nos convertamos a ti. Não permitas que sejamos como aqueles que ouvem, mas não guardam — antes, dá-nos ouvidos atentos e corações obedientes. Pai, ajuda-nos a crer de verdade. Não uma fé superficial, mas uma fé que reconhece que em Jesus nós te encontramos. Que as palavras de Cristo não sejam apenas ouvidas, mas guardadas e vividas por nós. Guarda-nos de amar mais a glória dos homens do que a tua glória. E que, ao final desta semana, possamos olhar para trás e ver os frutos de uma vida vivida na luz. Em nome de Jesus, amém."
    }
  },
  {
    "id": "2026-05",
    "year": 2026,
    "weekNumber": 5,
    "subtitle": "Semana 5",
    "dateRange": "(09/02 a 15/02)",
    "startDate": "2026-02-09",
    "endDate": "2026-02-15",
    "days": [
      {
        "key": "mon",
        "name": "Segunda-feira (09/02)",
        "readings": [
          "Marcos 9–10",
          "Salmo 22.1–8"
        ]
      },
      {
        "key": "tue",
        "name": "Terça-feira (10/02)",
        "readings": [
          "Atos 14–15",
          "Salmo 22.9–18"
        ]
      },
      {
        "key": "wed",
        "name": "Quarta-feira (11/02)",
        "readings": [
          "Atos 16",
          "Salmo 22.19–31"
        ]
      },
      {
        "key": "thu",
        "name": "Quinta-feira (12/02)",
        "readings": [
          "Gênesis 5",
          "Salmo 23–24"
        ]
      },
      {
        "key": "fri",
        "name": "Sexta-feira (13/02)",
        "readings": [
          "Provérbios 4",
          "Salmo 25"
        ]
      },
      {
        "key": "sat",
        "name": "Sábado (14/02)",
        "readings": [
          "João 13"
        ]
      }
    ],
    "sunday": {
      "name": "Domingo (15/02) — Oração",
      "prayer": "Pai, muito obrigado por Jesus, que sendo Senhor e Mestre, se humilhou para nos servir. Obrigado porque ele nos amou até o fim, demonstrando esse amor de forma prática ao lavar os pés dos seus discípulos. Obrigado porque o exemplo dele nos ensina que grandeza no seu reino não está em ser servido, mas em servir. Pai, obrigado pelo novo mandamento que Jesus nos deu: que nos amemos uns aos outros assim como ele nos amou. Ajuda-nos a viver esse amor de forma concreta e sacrificial nesta semana. Que possamos servir uns aos outros com humildade, colocando as necessidades dos outros acima das nossas. Dá-nos corações dispostos a amar mesmo quando isso exigir sacrifício. Que o mundo reconheça que somos discípulos de Jesus pelo amor que temos uns pelos outros. Em nome de Jesus, amém."
    }
  },
  {
    "id": "2026-06",
    "year": 2026,
    "weekNumber": 6,
    "subtitle": "Semana 6",
    "dateRange": "(16/02 a 22/02)",
    "startDate": "2026-02-16",
    "endDate": "2026-02-22",
    "days": [
      {
        "key": "mon",
        "name": "Segunda-feira (16/02)",
        "readings": [
          "Marcos 11–12",
          "Salmo 26"
        ]
      },
      {
        "key": "tue",
        "name": "Terça-feira (17/02)",
        "readings": [
          "Atos 17–18",
          "Salmo 27"
        ]
      },
      {
        "key": "wed",
        "name": "Quarta-feira (18/02)",
        "readings": [
          "Atos 19",
          "Salmo 28"
        ]
      },
      {
        "key": "thu",
        "name": "Quinta-feira (19/02)",
        "readings": [
          "Gênesis 6",
          "Salmo 29–30"
        ]
      },
      {
        "key": "fri",
        "name": "Sexta-feira (20/02)",
        "readings": [
          "Provérbios 5",
          "Salmo 31.1–16"
        ]
      },
      {
        "key": "sat",
        "name": "Sábado (21/02)",
        "readings": [
          "João 14"
        ]
      }
    ],
    "sunday": {
      "name": "Domingo (22/02) — Oração",
      "prayer": "Pai amado, muito obrigado porque, em Jesus, o nosso coração não precisa viver ansioso. Obrigado porque o Senhor é digno de confiança quando estamos com medo, confusos ou cansados. Pai, ajuda-nos a crer de verdade em ti, não apenas com palavras, mas com descanso do coração. Obrigado porque Jesus nos revelou o caminho até ti. Confessamos que tantas vezes buscamos caminhos próprios, soluções rápidas e controle. Perdoa-nos. Conduz-nos de volta a Cristo, a verdade que ilumina nossas decisões e a vida que sustenta nossa esperança. Pai, obrigado porque Jesus prometeu que não nos deixaria órfãos e que o Espírito da verdade habita conosco. Dá-nos sensibilidade e obediência para guardar a tua palavra. Que o amor por Jesus se torne visível nas nossas escolhas, na nossa casa, no nosso trabalho e na nossa igreja. E que a paz que Cristo nos dá, diferente da paz deste mundo, guarde a nossa mente e o nosso coração. Em nome de Jesus, amém."
    }
  },
  {
    "id": "2026-07",
    "year": 2026,
    "weekNumber": 7,
    "subtitle": "Semana 7",
    "dateRange": "(23/02 a 01/03)",
    "startDate": "2026-02-23",
    "endDate": "2026-03-01",
    "days": [
      {
        "key": "mon",
        "name": "Segunda-feira (23/02)",
        "readings": [
          "Marcos 13–14",
          "Salmo 31.17–24"
        ]
      },
      {
        "key": "tue",
        "name": "Terça-feira (24/02)",
        "readings": [
          "Atos 20–21",
          "Salmo 32"
        ]
      },
      {
        "key": "wed",
        "name": "Quarta-feira (25/02)",
        "readings": [
          "Atos 22–23",
          "Salmo 33.1–11"
        ]
      },
      {
        "key": "thu",
        "name": "Quinta-feira (26/02)",
        "readings": [
          "Gênesis 7",
          "Salmo 33.12–22"
        ]
      },
      {
        "key": "fri",
        "name": "Sexta-feira (27/02)",
        "readings": [
          "Provérbios 6",
          "Salmo 34.1–14"
        ]
      },
      {
        "key": "sat",
        "name": "Sábado (28/02)",
        "readings": [
          "João 15"
        ]
      }
    ],
    "sunday": {
      "name": "Domingo (01/03) — Oração",
      "prayer": "Pai amado, muito obrigado porque o Senhor nos deu Jesus, a videira verdadeira. Obrigado porque a vida que dá fruto não nasce do nosso esforço, mas da nossa união com Cristo. Obrigado porque o Senhor, como lavrador, cuida de nós com sabedoria e amor, podando o que precisa ser podado para que frutifiquemos mais. Pai, confessamos que muitas vezes buscamos viver desconectados, confiando na nossa força, no nosso ritmo e nas nossas estratégias. Perdoa-nos por quando tratamos a comunhão com Cristo como algo secundário e tentamos produzir “fruto” sem permanecer nele. Purifica nosso coração das falsas fontes de vida e alegria. Nesta semana, ajudanos a permanecer em Jesus com fé simples e obediente. Dá-nos disciplina e prazer na tua Palavra, constância na oração e sensibilidade ao teu Espírito. Quando o Senhor nos podar por meio de correções, perdas, atrasos ou confrontos, dá-nos humildade para receber a tua mão como cuidado, não como rejeição. Livra-nos da ansiedade de provar valor e do orgulho de querer controlar resultados. Pai, produz em nós o fruto que o Senhor deseja: amor verdadeiro, obediência sincera, palavras que edificam, pureza no secreto, perseverança na tentação e coragem para testemunhar de Cristo. E que, por meio de nós, outros sejam alcançados, discipulados e fortalecidos, para a glória do teu nome. Em nome de Jesus, amém."
    }
  },
  {
    "id": "2026-08",
    "year": 2026,
    "weekNumber": 8,
    "subtitle": "Semana 8",
    "dateRange": "(02/03 a 08/03)",
    "startDate": "2026-03-02",
    "endDate": "2026-03-08",
    "days": [
      {
        "key": "mon",
        "name": "Segunda-feira (02/03)",
        "readings": [
          "Marcos 15–16",
          "Salmo 34.15–22"
        ]
      },
      {
        "key": "tue",
        "name": "Terça-feira (03/03)",
        "readings": [
          "Atos 24–25",
          "Salmo 35.1–10"
        ]
      },
      {
        "key": "wed",
        "name": "Quarta-feira (04/03)",
        "readings": [
          "Atos 26",
          "Salmo 35.11–18"
        ]
      },
      {
        "key": "thu",
        "name": "Quinta-feira (05/03)",
        "readings": [
          "Gênesis 8",
          "Salmo 35.19–28"
        ]
      },
      {
        "key": "fri",
        "name": "Sexta-feira (06/03)",
        "readings": [
          "Provérbios 7.1–14",
          "Salmo 36"
        ]
      },
      {
        "key": "sat",
        "name": "Sábado (07/03)",
        "readings": [
          "João 16"
        ]
      }
    ],
    "sunday": {
      "name": "Domingo (08/03) — Oração",
      "prayer": "Pai amado, muito obrigado porque Jesus não nos deixou sozinhos, mas prometeu o Consolador, o Espírito da verdade. Obrigado porque, mesmo quando enfrentamos oposição, confusão e tristeza, o Senhor continua presente e conduz o seu povo. Pai, dá-nos coragem para testemunhar de Cristo, e humildade para depender do teu Espírito. Quando o pecado nos acusa e o mundo nos pressiona, lembra-nos da justiça de Jesus e sustenta a nossa fé. Ensina-nos a perseverar com alegria, sabendo que a tristeza não é a palavra final, porque o Senhor transforma o lamento em esperança. Guia-nos nesta semana a ouvir a tua voz, a andar na luz, e a viver para a tua glória. Em nome de Jesus, amém."
    }
  },
  {
    "id": "2026-09",
    "year": 2026,
    "weekNumber": 9,
    "subtitle": "Semana 9",
    "dateRange": "(09/03 a 15/03)",
    "startDate": "2026-03-09",
    "endDate": "2026-03-15",
    "days": [
      {
        "key": "mon",
        "name": "Segunda-feira (09/03)",
        "readings": [
          "Mateus 1–2",
          "Salmo 37.1–9"
        ]
      },
      {
        "key": "tue",
        "name": "Terça-feira (10/03)",
        "readings": [
          "Atos 27",
          "Salmo 37.10–20"
        ]
      },
      {
        "key": "wed",
        "name": "Quarta-feira (11/03)",
        "readings": [
          "Atos 28",
          "Salmo 37.21–31"
        ]
      },
      {
        "key": "thu",
        "name": "Quinta-feira (12/03)",
        "readings": [
          "Gênesis 9",
          "Salmo 37.32–40"
        ]
      },
      {
        "key": "fri",
        "name": "Sexta-feira (13/03)",
        "readings": [
          "Provérbios 7.15–27",
          "Salmo 38.1–11"
        ]
      },
      {
        "key": "sat",
        "name": "Sábado (14/03)",
        "readings": [
          "João 17"
        ]
      }
    ],
    "sunday": {
      "name": "Domingo (15/03) — Oração",
      "prayer": "Pai amado, muito obrigado porque o teu Filho orou por nós. Obrigado porque, em Jesus, nós temos vida eterna: que te conheçamos, o único Deus verdadeiro, e a Jesus Cristo, a quem enviaste. Pai, guarda-nos no teu nome e preserva a unidade da tua igreja. Santifica-nos na verdade; a tua palavra é a verdade. Livra-nos do maligno e dá-nos alegria completa em Cristo. E que a nossa vida, como povo redimido, mostre ao mundo que Jesus é o teu enviado. Em nome de Jesus, amém."
    }
  },
  {
    "id": "2026-10",
    "year": 2026,
    "weekNumber": 10,
    "subtitle": "Semana 10",
    "dateRange": "(16/03 a 22/03)",
    "startDate": "2026-03-16",
    "endDate": "2026-03-22",
    "days": [
      {
        "key": "mon",
        "name": "Segunda-feira (16/03)",
        "readings": [
          "Mateus 3–4",
          "Salmo 38.12–22"
        ]
      },
      {
        "key": "tue",
        "name": "Terça-feira (17/03)",
        "readings": [
          "Romanos 1–2",
          "Salmo 39"
        ]
      },
      {
        "key": "wed",
        "name": "Quarta-feira (18/03)",
        "readings": [
          "Romanos 3–4",
          "Salmo 40.1–8"
        ]
      },
      {
        "key": "thu",
        "name": "Quinta-feira (19/03)",
        "readings": [
          "Gênesis 10",
          "Salmo 40.9–17"
        ]
      },
      {
        "key": "fri",
        "name": "Sexta-feira (20/03)",
        "readings": [
          "Provérbios 8",
          "Salmo 41"
        ]
      },
      {
        "key": "sat",
        "name": "Sábado (21/03)",
        "readings": [
          "João 18"
        ]
      }
    ],
    "sunday": {
      "name": "Domingo (22/03) — Oração",
      "prayer": "Pai amado, muito obrigado porque a tua Palavra nos chama ao arrependimento e à fé. Obrigado porque, em Cristo, a nossa justiça não vem de nós mesmos, mas do teu evangelho, que é poder de Deus para salvação. Dá-nos um coração humilde para reconhecer o nosso pecado, e um coração confiante para descansar na graça de Jesus. Nesta semana, ajuda-nos a buscar a tua vontade com alegria: em casa, no trabalho e na igreja. Fortalece-nos para obedecer mesmo quando é difícil, e renova em nós o amor por Cristo e pelas pessoas ao nosso redor. Em nome de Jesus, amém."
    }
  },
  {
    "id": "2026-11",
    "year": 2026,
    "weekNumber": 11,
    "subtitle": "Semana 11",
    "dateRange": "(23/03 a 29/03)",
    "startDate": "2026-03-23",
    "endDate": "2026-03-29",
    "days": [
      {
        "key": "mon",
        "name": "Segunda-feira (23/03)",
        "readings": [
          "Mateus 5",
          "Salmo 42"
        ]
      },
      {
        "key": "tue",
        "name": "Terça-feira (24/03)",
        "readings": [
          "Romanos 5–6",
          "Salmo 43"
        ]
      },
      {
        "key": "wed",
        "name": "Quarta-feira (25/03)",
        "readings": [
          "Romanos 7–8",
          "Salmo 44.1–8"
        ]
      },
      {
        "key": "thu",
        "name": "Quinta-feira (26/03)",
        "readings": [
          "Gênesis 11",
          "Salmo 44.9–19"
        ]
      },
      {
        "key": "fri",
        "name": "Sexta-feira (27/03)",
        "readings": [
          "Provérbios 9",
          "Salmo 44.20–26; 45.1–5"
        ]
      },
      {
        "key": "sat",
        "name": "Sábado (28/03)",
        "readings": [
          "João 19"
        ]
      }
    ],
    "sunday": {
      "name": "Domingo (29/03) — Oração",
      "prayer": "Pai amado, nós te agradecemos porque, em Jesus Cristo, o Senhor não nos amou apenas com palavras, mas com uma entrega real e suficiente. Nesta semana, queremos lembrar da cruz: do Filho de Deus carregando a nossa culpa, sofrendo em nosso lugar, suportando a vergonha, a dor e a condenação que eram nossas. Senhor, ajuda-nos a viver os próximos dias sob a luz da cruz. Que a memória do que Jesus fez por nós não seja apenas informação, mas adoração. Que a cruz humilhe o nosso orgulho, desarme as nossas justificativas, cure a nossa frieza e renove a nossa gratidão. Dá-nos um coração quebrantado pelo pecado e, ao mesmo tempo, seguro na graça, porque foi “consumado” aquilo que nós jamais poderíamos cumprir. Que as nossas palavras, escolhas e atitudes lembrem, diante de todos, que pertencemos a Jesus crucificado e ressuscitado. E quando vierem tentações, medo, cansaço ou distração, traz-nos de volta ao pé da cruz, para que sejamos fortalecidos pela tua misericórdia. Em nome de Jesus, amém."
    }
  },
  {
    "id": "2026-12",
    "year": 2026,
    "weekNumber": 12,
    "subtitle": "Semana 12",
    "dateRange": "(30/03 a 05/04)",
    "startDate": "2026-03-30",
    "endDate": "2026-04-05",
    "days": [
      {
        "key": "mon",
        "name": "Segunda-feira (30/03)",
        "readings": [
          "Mateus 6",
          "Salmo 45.6–17"
        ]
      },
      {
        "key": "tue",
        "name": "Terça-feira (31/03)",
        "readings": [
          "Romanos 9–10",
          "Salmo 46"
        ]
      },
      {
        "key": "wed",
        "name": "Quarta-feira (01/04)",
        "readings": [
          "Romanos 11",
          "Salmo 47"
        ]
      },
      {
        "key": "thu",
        "name": "Quinta-feira (02/04)",
        "readings": [
          "Gênesis 12",
          "Salmo 48"
        ]
      },
      {
        "key": "fri",
        "name": "Sexta-feira (03/04)",
        "readings": [
          "Provérbios 10",
          "Salmo 49.1–12"
        ]
      },
      {
        "key": "sat",
        "name": "Sábado (04/04)",
        "readings": [
          "João 20"
        ]
      }
    ],
    "sunday": {
      "name": "Domingo (05/04) — Oração (Páscoa)",
      "prayer": "Pai amado, nós te louvamos porque Jesus Cristo ressuscitou. Obrigado porque o túmulo está vazio, a morte foi vencida, e a tua promessa se cumpriu com poder e glória. Neste Domingo de Páscoa, nós celebramos que a cruz não foi derrota, mas vitória, e que a ressurreição do teu Filho é a nossa esperança firme. Senhor, nós confessamos que muitas vezes vivemos como se o medo, a culpa e a ansiedade tivessem a palavra final. Perdoa-nos. Traz-nos de volta ao evangelho: Cristo morreu pelos nossos pecados, foi sepultado e ressuscitou ao terceiro dia. Que essa verdade renove o nosso coração hoje, e nos dê alegria real, paz profunda e coragem para obedecer. Obrigado porque, pela ressurreição de Jesus, nós sabemos que o pecado foi pago, a tua justiça foi satisfeita, e a nossa vida está segura em ti. Que, neste dia, a ressurreição não seja apenas lembrada, mas celebrada com adoração, gratidão e entrega. Em nome de Jesus, o Senhor vivo, nós oramos. Amém."
    }
  },
  {
    "id": "2026-13",
    "year": 2026,
    "weekNumber": 13,
    "subtitle": "Semana 13",
    "dateRange": "(06/04 a 12/04)",
    "startDate": "2026-04-06",
    "endDate": "2026-04-12",
    "days": [
      {
        "key": "mon",
        "name": "Segunda-feira (06/04)",
        "readings": [
          "Mateus 7",
          "Salmo 49.13–20"
        ]
      },
      {
        "key": "tue",
        "name": "Terça-feira (07/04)",
        "readings": [
          "Romanos 12–13",
          "Salmo 50.1–8"
        ]
      },
      {
        "key": "wed",
        "name": "Quarta-feira (08/04)",
        "readings": [
          "Romanos 14–15",
          "Salmo 50.9–15"
        ]
      },
      {
        "key": "thu",
        "name": "Quinta-feira (09/04)",
        "readings": [
          "Gênesis 13",
          "Salmo 50.16–23"
        ]
      },
      {
        "key": "fri",
        "name": "Sexta-feira (10/04)",
        "readings": [
          "Provérbios 11",
          "Salmo 51.1–11"
        ]
      },
      {
        "key": "sat",
        "name": "Sábado (11/04)",
        "readings": [
          "João 20.19–31"
        ]
      }
    ],
    "sunday": {
      "name": "Domingo (12/04) — Oração",
      "prayer": "Pai amado, muito obrigado porque Jesus ressuscitado veio ao encontro dos seus discípulos — veio ao meu encontro. Obrigado porque, mesmo quando sou afligido pelo medo, o Senhor entra e nos diz: “Paz seja convosco.” Obrigado por enviar o teu Espírito sobre mim e por me enviar a continuar a missão do teu Filho no mundo. Pai, confesso que muitas vezes eu sou como Tomé: preciso ver para crer, duvido das tuas promessas e exijo provas antes de confiar. Perdoa-me pela minha incredulidade. Ajuda-me a ser como aqueles que, mesmo sem ver, creem e são bemaventurados. Nesta semana, fortalece a minha fé para que eu possa confessar, de todo o coração: “Senhor meu e Deus meu!” E que a paz de Cristo me capacite a viver com coragem, perdoar com generosidade e testemunhar com ousadia. Em nome de Jesus, amém."
    }
  },
  {
    "id": "2026-14",
    "year": 2026,
    "weekNumber": 14,
    "subtitle": "Semana 14",
    "dateRange": "(13/04 a 19/04)",
    "startDate": "2026-04-13",
    "endDate": "2026-04-19",
    "days": [
      {
        "key": "mon",
        "name": "Segunda-feira (13/04)",
        "readings": [
          "Mateus 8–9",
          "Salmo 51.12–19"
        ]
      },
      {
        "key": "tue",
        "name": "Terça-feira (14/04)",
        "readings": [
          "Romanos 16; 1 Coríntios 1",
          "Salmo 52"
        ]
      },
      {
        "key": "wed",
        "name": "Quarta-feira (15/04)",
        "readings": [
          "1 Coríntios 2–3",
          "Salmo 53"
        ]
      },
      {
        "key": "thu",
        "name": "Quinta-feira (16/04)",
        "readings": [
          "Gênesis 14",
          "Salmo 54–55.1–8"
        ]
      },
      {
        "key": "fri",
        "name": "Sexta-feira (17/04)",
        "readings": [
          "Provérbios 12",
          "Salmo 55.9–23"
        ]
      },
      {
        "key": "sat",
        "name": "Sábado (18/04)",
        "readings": [
          "João 21.1–14"
        ]
      }
    ],
    "sunday": {
      "name": "Domingo (19/04) — Oração",
      "prayer": "Pai amado, muito obrigado porque Jesus ressuscitado continua presente no meu dia a dia, mesmo quando não o reconheço de imediato. Obrigado porque, assim como ele encontrou os discípulos no meio do trabalho e do cansaço, o Senhor também me encontra em minhas rotinas e frustrações. Obrigado porque, quando obedeço à tua palavra, experimento a abundância que só vem de ti. Pai, confesso que tantas vezes tento viver com as minhas próprias forças e volto de mãos vazias. Perdoa-me por não reconhecer a tua presença e por não obedecer à tua voz. Nesta semana, abre os meus olhos para ver Jesus em cada momento do meu cotidiano. Que eu possa, como os discípulos, aceitar o teu convite para me assentar à tua mesa, ser alimentado por ti e renovado pela tua graça. Em nome de Jesus, amém."
    }
  },
  {
    "id": "2026-15",
    "year": 2026,
    "weekNumber": 15,
    "subtitle": "Semana 15",
    "dateRange": "(20/04 a 26/04)",
    "startDate": "2026-04-20",
    "endDate": "2026-04-26",
    "days": [
      {
        "key": "mon",
        "name": "Segunda-feira (20/04)",
        "readings": [
          "Mateus 10–11",
          "Salmo 56"
        ]
      },
      {
        "key": "tue",
        "name": "Terça-feira (21/04)",
        "readings": [
          "1 Coríntios 4–5",
          "Salmo 57"
        ]
      },
      {
        "key": "wed",
        "name": "Quarta-feira (22/04)",
        "readings": [
          "1 Coríntios 6–7",
          "Salmo 58"
        ]
      },
      {
        "key": "thu",
        "name": "Quinta-feira (23/04)",
        "readings": [
          "Gênesis 15",
          "Salmo 59.1–10"
        ]
      },
      {
        "key": "fri",
        "name": "Sexta-feira (24/04)",
        "readings": [
          "Provérbios 13",
          "Salmo 59.11–17; 60.1–4"
        ]
      },
      {
        "key": "sat",
        "name": "Sábado (25/04)",
        "readings": [
          "João 21.15–25"
        ]
      }
    ],
    "sunday": {
      "name": "Domingo (26/04) — Oração",
      "prayer": "Pai amado, muito obrigado porque Jesus não desiste de mim, mesmo quando eu falho. Obrigado porque, assim como restaurou Pedro depois da sua negação, o Senhor também me restaura com amor e graça. Obrigado porque o teu chamado não depende da minha perfeição, mas da tua fidelidade. Pai, confesso que muitas vezes a minha confiança está em mim mesmo, e quando falho, fico paralisado pela culpa e pela vergonha. Perdoa-me. Ajuda-me a ouvir a pergunta de Jesus: “Tu me amas?” — e a responder com sinceridade e entrega. Nesta semana, renova o meu chamado. Dá-me um amor genuíno por ti que se traduza em cuidado pelas tuas ovelhas. Que eu possa alimentar, pastorear e servir o teu povo com fidelidade. E que, acima de tudo, eu possa ouvir e obedecer ao teu comando: “Segue-me.” Em nome de Jesus, amém."
    }
  },
  {
    "id": "2026-16",
    "year": 2026,
    "weekNumber": 16,
    "subtitle": "Semana 16",
    "dateRange": "(27/04 a 03/05)",
    "startDate": "2026-04-27",
    "endDate": "2026-05-03",
    "days": [
      {
        "key": "mon",
        "name": "Segunda-feira (27/04)",
        "readings": [
          "Mateus 12–13",
          "Salmo 60.5–12"
        ]
      },
      {
        "key": "tue",
        "name": "Terça-feira (28/04)",
        "readings": [
          "1 Coríntios 8–9",
          "Salmo 61"
        ]
      },
      {
        "key": "wed",
        "name": "Quarta-feira (29/04)",
        "readings": [
          "1 Coríntios 10–11",
          "Salmo 62"
        ]
      },
      {
        "key": "thu",
        "name": "Quinta-feira (30/04)",
        "readings": [
          "Gênesis 16",
          "Salmo 63–64"
        ]
      },
      {
        "key": "fri",
        "name": "Sexta-feira (01/05)",
        "readings": [
          "Provérbios 14",
          "Salmo 65"
        ]
      },
      {
        "key": "sat",
        "name": "Sábado (02/05)",
        "readings": [
          "Atos 6.1–7",
          "1 Timóteo 3.8–13"
        ]
      }
    ],
    "sunday": {
      "name": "Domingo (03/05) — Oração",
      "prayer": "Pai amado, muito obrigado porque o Senhor cuida da sua igreja com sabedoria e amor. Obrigado porque, desde o início, o Senhor levantou homens e mulheres cheios do Espírito e de sabedoria para servir o teu povo com dedicação e integridade. Obrigado pelos diáconos que o Senhor tem dado à nossa igreja — servos fiéis que cuidam das necessidades práticas para que a Palavra de Deus continue crescendo entre nós. Pai, ensina-nos a valorizar o serviço como algo sagrado. Que nunca desprezemos as tarefas práticas da vida da igreja, pois foi justamente ao servir às mesas que os primeiros diáconos demonstraram o caráter de Cristo. Levanta entre nós servos dignos, sinceros, cheios de fé e do Espírito Santo, que guardem o mistério da fé com consciência limpa. Nesta semana, molda o nosso coração para que sirvamos uns aos outros com alegria, sem buscar reconhecimento, mas desejando a glória do teu nome. E que, pelo serviço fiel dos teus servos, a tua Palavra continue se espalhando e o número de discípulos continue se multiplicando. Em nome de Jesus, amém."
    }
  },
  {
    "id": "2026-17",
    "year": 2026,
    "weekNumber": 17,
    "subtitle": "Semana 17",
    "dateRange": "(04/05 a 10/05)",
    "startDate": "2026-05-04",
    "endDate": "2026-05-10",
    "days": [
      {
        "key": "mon",
        "name": "Segunda-feira (04/05)",
        "readings": [
          "Mateus 14–15",
          "Salmo 66.1–9"
        ]
      },
      {
        "key": "tue",
        "name": "Terça-feira (05/05)",
        "readings": [
          "1 Coríntios 12–13",
          "Salmo 66.10–20"
        ]
      },
      {
        "key": "wed",
        "name": "Quarta-feira (06/05)",
        "readings": [
          "1 Coríntios 14",
          "Salmo 67"
        ]
      },
      {
        "key": "thu",
        "name": "Quinta-feira (07/05)",
        "readings": [
          "Gênesis 17",
          "Salmo 68.1–14"
        ]
      },
      {
        "key": "fri",
        "name": "Sexta-feira (08/05)",
        "readings": [
          "Provérbios 15",
          "Salmo 68.15–27"
        ]
      },
      {
        "key": "sat",
        "name": "Sábado (09/05)",
        "readings": [
          "1 Tessalonicenses 4.1–8"
        ]
      }
    ],
    "sunday": {
      "name": "Domingo (10/05) — Oração",
      "prayer": "Pai amado, muito obrigado porque a tua vontade para nós é a nossa santificação. Obrigado porque, em Cristo, fomos comprados por preço, e os nossos corpos são templo do teu Espírito Santo. Obrigado porque o Senhor não nos chamou para a impureza, mas para vivermos em santidade. Pai, nós confessamos que vivemos em um mundo que distorce o teu bom projeto para a sexualidade. Confessamos que somos tentados, que muitas vezes falhamos em pensamento, em olhares e em atitudes. Perdoa-nos. Purifica o nosso coração e renova a nossa mente pela tua Palavra. Nesta semana, dá-nos forças para fugir da imoralidade e buscar a santidade com todo o nosso ser. Que possamos honrar a ti com o nosso corpo, sabendo que pertencemos a Cristo. Guarda os nossos olhos, os nossos pensamentos e os nossos passos. E que o teu Espírito, que habita em nós, nos capacite a viver de forma digna do evangelho, para a tua glória. Em nome de Jesus, amém."
    }
  },
  {
    "id": "2026-18",
    "year": 2026,
    "weekNumber": 18,
    "subtitle": "Semana 18",
    "dateRange": "(11/05 a 17/05)",
    "startDate": "2026-05-11",
    "endDate": "2026-05-17",
    "days": [
      {
        "key": "mon",
        "name": "Segunda-feira (11/05)",
        "readings": [
          "Mateus 16–17",
          "Salmo 68.28–35"
        ]
      },
      {
        "key": "tue",
        "name": "Terça-feira (12/05)",
        "readings": [
          "1 Coríntios 15",
          "Salmo 69.1–9"
        ]
      },
      {
        "key": "wed",
        "name": "Quarta-feira (13/05)",
        "readings": [
          "1 Coríntios 16; 2 Coríntios 1",
          "Salmo 69.10–18"
        ]
      },
      {
        "key": "thu",
        "name": "Quinta-feira (14/05)",
        "readings": [
          "Gênesis 18",
          "Salmo 69.19–28"
        ]
      },
      {
        "key": "fri",
        "name": "Sexta-feira (15/05)",
        "readings": [
          "Provérbios 16",
          "Salmo 69.29–36; 70"
        ]
      },
      {
        "key": "sat",
        "name": "Sábado (16/05)",
        "readings": [
          "Gênesis 1.1–2.3"
        ]
      }
    ],
    "sunday": {
      "name": "Domingo (17/05) — Oração",
      "prayer": "Pai amado, muito obrigado porque o Senhor é o Criador de todas as coisas. Obrigado porque, antes de tudo existir, o Senhor já era — soberano, eterno e suficiente em si mesmo. Obrigado porque o Senhor criou o mundo pela sua Palavra, com ordem, propósito e bondade, e tudo o que fez é bom, porque vem de um Deus bom. Pai, confessamos que tantas vezes vivemos como se o mundo tivesse surgido por acaso, como se não houvesse um Criador soberano por trás de cada detalhe. Perdoa-nos por quando ignoramos a tua glória revelada na criação e vivemos sem propósito. Nesta semana, abre os nossos olhos para ver a tua mão em tudo o que nos cerca. Que possamos descansar na tua soberania, sabendo que o mesmo Deus que ordenou o universo com a sua Palavra sustenta a nossa vida hoje. Ensina-nos a também descansar em ti, seguindo o padrão que o Senhor estabeleceu desde o princípio. Em nome de Jesus, amém."
    }
  },
  {
    "id": "2026-19",
    "year": 2026,
    "weekNumber": 19,
    "subtitle": "Semana 19",
    "dateRange": "(18/05 a 24/05)",
    "startDate": "2026-05-18",
    "endDate": "2026-05-24",
    "days": [
      {
        "key": "mon",
        "name": "Segunda-feira (18/05)",
        "readings": [
          "Mateus 18–19",
          "Salmo 71.1–8"
        ]
      },
      {
        "key": "tue",
        "name": "Terça-feira (19/05)",
        "readings": [
          "2 Coríntios 2–3",
          "Salmo 71.9–16"
        ]
      },
      {
        "key": "wed",
        "name": "Quarta-feira (20/05)",
        "readings": [
          "2 Coríntios 4–5",
          "Salmo 71.17–24"
        ]
      },
      {
        "key": "thu",
        "name": "Quinta-feira (21/05)",
        "readings": [
          "Gênesis 19",
          "Salmo 72.1–11"
        ]
      },
      {
        "key": "fri",
        "name": "Sexta-feira (22/05)",
        "readings": [
          "Provérbios 17",
          "Salmo 72.12–20"
        ]
      },
      {
        "key": "sat",
        "name": "Sábado (23/05)",
        "readings": [
          "Gênesis 1.26–31"
        ]
      }
    ],
    "sunday": {
      "name": "Domingo (24/05) — Oração",
      "prayer": "Pai amado, muito obrigado porque fomos criados à tua imagem e semelhança. Obrigado porque o nosso valor não vem do que fazemos, do que temos ou do que o mundo diz sobre nós, mas do fato de que fomos feitos para representar o Criador. Obrigado porque cada vida humana tem dignidade diante de ti, independente de raça, capacidade ou condição. Pai, confessamos que muitas vezes buscamos a nossa identidade em lugares errados: no desempenho, na aprovação dos outros, nas conquistas. Perdoa-nos por esquecer que a nossa verdadeira identidade está em ti. Confessamos também que nem sempre tratamos o próximo com a dignidade que a tua imagem exige. Nesta semana, ajuda-nos a viver como quem foi criado com propósito e dependência total de ti. Que possamos olhar para cada pessoa ao nosso redor e ver alguém feito à tua imagem. E que a nossa vida inteira reflita a glória daquele que nos formou e nos sustenta. Em nome de Jesus, amém."
    }
  },
  {
    "id": "2026-20",
    "year": 2026,
    "weekNumber": 20,
    "subtitle": "Semana 20",
    "dateRange": "(25/05 a 31/05)",
    "startDate": "2026-05-25",
    "endDate": "2026-05-31",
    "days": [
      {
        "key": "mon",
        "name": "Segunda-feira (25/05)",
        "readings": [
          "Mateus 20–21",
          "Salmo 73.1–9"
        ]
      },
      {
        "key": "tue",
        "name": "Terça-feira (26/05)",
        "readings": [
          "2 Coríntios 6–7",
          "Salmo 73.10–20"
        ]
      },
      {
        "key": "wed",
        "name": "Quarta-feira (27/05)",
        "readings": [
          "2 Coríntios 8–9",
          "Salmo 73.21–28"
        ]
      },
      {
        "key": "thu",
        "name": "Quinta-feira (28/05)",
        "readings": [
          "Gênesis 20",
          "Salmo 74.1–11"
        ]
      },
      {
        "key": "fri",
        "name": "Sexta-feira (29/05)",
        "readings": [
          "Provérbios 18",
          "Salmo 74.12–23"
        ]
      },
      {
        "key": "sat",
        "name": "Sábado (30/05)",
        "readings": [
          "Gênesis 2.4–25"
        ]
      }
    ],
    "sunday": {
      "name": "Domingo (31/05) — Oração",
      "prayer": "Pai amado, muito obrigado porque o Senhor criou a família como parte do seu projeto perfeito. Obrigado porque o casamento é ideia tua, não invenção humana, e porque o Senhor viu que não era bom que o homem estivesse só antes mesmo que ele percebesse. Obrigado por criar homem e mulher como iguais em valor e complementares em função, para juntos refletirem a tua imagem no mundo. Pai, confessamos que vivemos em uma cultura que redefine e distorce os teus padrões para os relacionamentos. Confessamos que muitas vezes falhamos nos nossos papéis e negligenciamos o que o Senhor estabeleceu. Perdoa-nos e renova em nós o compromisso com o teu projeto para a família. Nesta semana, fortalece os casamentos da nossa igreja, protege as nossas famílias e dá-nos sabedoria para viver segundo os teus padrões — não como restrição, mas como bênção. Que os nossos lares sejam lugares onde a tua graça é visível e o teu nome é glorificado. Em nome de Jesus, amém."
    }
  },
  {
    "id": "2026-21",
    "year": 2026,
    "weekNumber": 21,
    "subtitle": "Semana 21",
    "dateRange": "(01/06 a 07/06)",
    "startDate": "2026-06-01",
    "endDate": "2026-06-07",
    "days": [
      {
        "key": "mon",
        "name": "Segunda-feira (01/06)",
        "readings": [
          "Mateus 22–23",
          "Salmo 75"
        ]
      },
      {
        "key": "tue",
        "name": "Terça-feira (02/06)",
        "readings": [
          "2 Coríntios 10–11",
          "Salmo 76"
        ]
      },
      {
        "key": "wed",
        "name": "Quarta-feira (03/06)",
        "readings": [
          "2 Coríntios 12–13",
          "Salmo 77.1–9"
        ]
      },
      {
        "key": "thu",
        "name": "Quinta-feira (04/06)",
        "readings": [
          "Gênesis 21",
          "Salmo 77.10–20"
        ]
      },
      {
        "key": "fri",
        "name": "Sexta-feira (05/06)",
        "readings": [
          "Provérbios 19",
          "Salmo 78.1–15"
        ]
      },
      {
        "key": "sat",
        "name": "Sábado (06/06)",
        "readings": [
          "Gênesis 3.1–13"
        ]
      }
    ],
    "sunday": {
      "name": "Domingo (07/06) — Oração",
      "prayer": "Pai amado, muito obrigado porque o Senhor não nos deixou presos no engano do pecado. Obrigado porque, mesmo conhecendo a nossa tendência à desobediência — como o engano leva à dúvida, a dúvida desperta o desejo, e o desejo gera a desobediência — o Senhor providenciou salvação em Cristo. Pai, confessamos que somos vulneráveis ao engano da serpente. Confessamos que muitas vezes questionamos a tua Palavra, olhamos para o que é proibido com desejo, e escolhemos a desobediência em vez da confiança. Perdoa-nos por transferir a culpa e fugir da tua presença quando pecamos. Nesta semana, enquanto nos preparamos para a mesa do Senhor, lembra-nos do preço que foi pago para nos libertar do poder do pecado. Que, ao partir o pão e beber o cálice, proclamemos a morte de Cristo até que ele venha. Dá-nos discernimento para reconhecer o processo da tentação e coragem para resistir pela tua Palavra. E que a verdade do evangelho produza em nós certeza, desejos puros e obediência alegre. Em nome de Jesus, amém."
    }
  },
  {
    "id": "2026-22",
    "year": 2026,
    "weekNumber": 22,
    "subtitle": "Semana 22",
    "dateRange": "(08/06 a 14/06)",
    "startDate": "2026-06-08",
    "endDate": "2026-06-14",
    "days": [
      {
        "key": "mon",
        "name": "Segunda-feira (08/06)",
        "readings": [
          "Mateus 24–25",
          "Salmo 78.16–31"
        ]
      },
      {
        "key": "tue",
        "name": "Terça-feira (09/06)",
        "readings": [
          "Gálatas 1–2",
          "Salmo 78.32–39"
        ]
      },
      {
        "key": "wed",
        "name": "Quarta-feira (10/06)",
        "readings": [
          "Gálatas 3–4",
          "Salmo 78.40–51"
        ]
      },
      {
        "key": "thu",
        "name": "Quinta-feira (11/06)",
        "readings": [
          "Gênesis 22–23",
          "Salmo 78.52–64"
        ]
      },
      {
        "key": "fri",
        "name": "Sexta-feira (12/06)",
        "readings": [
          "Provérbios 20",
          "Salmo 78.65–72"
        ]
      },
      {
        "key": "sat",
        "name": "Sábado (13/06)",
        "readings": [
          "Gênesis 3.14–24"
        ]
      }
    ],
    "sunday": {
      "name": "Domingo (14/06) — Oração",
      "prayer": "Pai amado, muito obrigado porque, antes mesmo de pronunciar as consequências do pecado, o Senhor já anunciou a promessa de salvação. Obrigado porque, em Gênesis 3.15, o Senhor revelou que a semente da mulher esmagaria a cabeça da serpente — e essa promessa se cumpriu em Jesus Cristo. Obrigado porque, mesmo no meio do juízo, a tua graça se fez presente quando o Senhor vestiu Adão e Eva, apontando para o sacrifício que estava por vir. Pai, confessamos que as consequências do pecado são reais na nossa vida: separação, dor, conflito e morte. Confessamos que muitas vezes sentimos o peso da queda nos nossos relacionamentos, no nosso corpo e na nossa alma. Mas agradecemos porque, em Cristo, temos esperança. Nesta semana, ajuda-nos a não minimizar o pecado nem a viver em desespero diante das suas consequências. Que possamos olhar para a cruz e ver tanto a gravidade da nossa condição quanto a grandeza da tua graça. E que a esperança do evangelho — de Gênesis 3.15 até a consumação de todas as coisas — nos sustente e nos mova a viver para a tua glória. Em nome de Jesus, amém."
    }
  },
  {
    "id": "2026-23",
    "year": 2026,
    "weekNumber": 23,
    "subtitle": "Semana 23",
    "dateRange": "(15/06 a 21/06)",
    "startDate": "2026-06-15",
    "endDate": "2026-06-21",
    "days": [
      {
        "key": "mon",
        "name": "Segunda-feira (15/06)",
        "readings": [
          "Mateus 26–27",
          "Salmo 79"
        ]
      },
      {
        "key": "tue",
        "name": "Terça-feira (16/06)",
        "readings": [
          "Gálatas 5–6",
          "Salmo 80.1–7"
        ]
      },
      {
        "key": "wed",
        "name": "Quarta-feira (17/06)",
        "readings": [
          "Efésios 1–2",
          "Salmo 80.8–19"
        ]
      },
      {
        "key": "thu",
        "name": "Quinta-feira (18/06)",
        "readings": [
          "Gênesis 24",
          "Salmo 81"
        ]
      },
      {
        "key": "fri",
        "name": "Sexta-feira (19/06)",
        "readings": [
          "Provérbios 21",
          "Salmo 82–83"
        ]
      },
      {
        "key": "sat",
        "name": "Sábado (20/06)",
        "readings": [
          "Mateus 6.5–10"
        ]
      }
    ],
    "sunday": {
      "name": "Domingo (21/06) — Oração",
      "prayer": "Pai amado, muito obrigado porque Jesus nos ensinou a orar. Obrigado porque a oração não é espetáculo para ser visto pelos outros, mas encontro no secreto com o Pai que vê e ouve. Obrigado porque, antes mesmo de pedirmos, o Senhor já sabe do que precisamos. Pai, confessamos que muitas vezes oramos por aparência, com palavras vazias e repetidas, ou simplesmente deixamos de orar. Perdoa-nos. Nesta semana, ensina-nos a buscar a tua face em lugar reservado, com sinceridade e confiança. Que a nossa maior alegria seja a santificação do teu nome, a vinda do teu reino e o cumprimento da tua vontade, assim na terra como no céu. Em nome de Jesus, amém."
    }
  },
  {
    "id": "2026-24",
    "year": 2026,
    "weekNumber": 24,
    "subtitle": "Semana 24",
    "dateRange": "(22/06 a 28/06)",
    "startDate": "2026-06-22",
    "endDate": "2026-06-28",
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
      "name": "Domingo (28/06) — Oração",
      "prayer": "Pai amado, muito obrigado porque podemos confiar a ti cada necessidade da nossa vida. Obrigado porque o Senhor nos ensina a depender de ti para o pão de cada dia, a buscar e oferecer perdão, e a clamar por livramento da tentação e do mal. Pai, confessamos que muitas vezes confiamos nas nossas próprias forças, guardamos mágoas e nos entregamos à tentação. Perdoa as nossas dívidas, assim como também perdoamos aos nossos devedores. Nesta semana, dá-nos um coração dependente, perdoador e vigilante. Sustenta-nos com o que é necessário, guardanos do maligno e ensina-nos a viver um dia de cada vez, confiando no teu cuidado. Em nome de Jesus, amém."
    }
  },
  {
    "id": "2026-25",
    "year": 2026,
    "weekNumber": 25,
    "subtitle": "Semana 25",
    "dateRange": "(29/06 a 05/07)",
    "startDate": "2026-06-29",
    "endDate": "2026-07-05",
    "days": [
      {
        "key": "mon",
        "name": "Segunda-feira (29/06)",
        "readings": [
          "Lucas 2–3",
          "Salmo 88.7–18"
        ]
      },
      {
        "key": "tue",
        "name": "Terça-feira (30/06)",
        "readings": [
          "Filipenses 1–2",
          "Salmo 89.1–8"
        ]
      },
      {
        "key": "wed",
        "name": "Quarta-feira (01/07)",
        "readings": [
          "Filipenses 3–4",
          "Salmo 89.9–18"
        ]
      },
      {
        "key": "thu",
        "name": "Quinta-feira (02/07)",
        "readings": [
          "Gênesis 26",
          "Salmo 89.19–29"
        ]
      },
      {
        "key": "fri",
        "name": "Sexta-feira (03/07)",
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
      "name": "Domingo (05/07) — Oração",
      "prayer": "Pai amado, muito obrigado porque o Senhor ouve a oração dos teus servos e é fiel à tua aliança. Obrigado pelo exemplo de Neemias, que diante da ruína do teu povo buscou a ti em jejum, confissão e súplica, confiando na tua misericórdia. Pai, confessamos, como ele, os nossos pecados e os pecados do teu povo; muitas vezes agimos com infidelidade diante de ti. Perdoa-nos e restauranos. Neste dia, enquanto nos achegamos à mesa do Senhor, lembra-nos do corpo e do sangue de Jesus, entregues por nós. Que o pão e o cálice proclamem a obra perfeita de Cristo, que selou a nova aliança e nos reconciliou contigo. Nesta semana, levanta em nós corações quebrantados e cheios de esperança, prontos a buscar a tua face e a servir o teu povo. Em nome de Jesus, amém."
    }
  },
  {
    "id": "2026-26",
    "year": 2026,
    "weekNumber": 26,
    "subtitle": "Semana 26",
    "dateRange": "(06/07 a 12/07)",
    "startDate": "2026-07-06",
    "endDate": "2026-07-12",
    "days": [
      {
        "key": "mon",
        "name": "Segunda-feira (06/07)",
        "readings": [
          "Lucas 4–5",
          "Salmo 89.45–52"
        ]
      },
      {
        "key": "tue",
        "name": "Terça-feira (07/07)",
        "readings": [
          "Colossenses 1–2",
          "Salmo 90"
        ]
      },
      {
        "key": "wed",
        "name": "Quarta-feira (08/07)",
        "readings": [
          "Colossenses 3–4",
          "Salmo 91"
        ]
      },
      {
        "key": "thu",
        "name": "Quinta-feira (09/07)",
        "readings": [
          "Gênesis 27",
          "Salmo 92–93"
        ]
      },
      {
        "key": "fri",
        "name": "Sexta-feira (10/07)",
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
      "name": "Domingo (12/07) — Oração",
      "prayer": "Pai amado, muito obrigado por toda bênção espiritual com que o Senhor nos abençoou nas regiões celestiais, em Cristo. Obrigado porque, antes da fundação do mundo, o Senhor nos escolheu para sermos santos e irrepreensíveis; em amor nos predestinou para a adoção como filhos, por meio de Jesus. Obrigado pela redenção mediante o seu sangue, pelo perdão dos nossos pecados segundo as riquezas da tua graça, e pelo selo do Espírito Santo, que é o penhor da nossa herança. Pai, confessamos que muitas vezes vivemos como órfãos, esquecidos de tudo o que temos em Cristo. Perdoa-nos. Nesta semana, ajuda-nos a viver à altura do teu chamado, descansando na nossa adoção e gastando a nossa vida para o louvor da tua glória. Em nome de Jesus, amém."
    }
  },
  {
    "id": "2026-27",
    "year": 2026,
    "weekNumber": 27,
    "subtitle": "Semana 27",
    "dateRange": "(13/07 a 19/07)",
    "startDate": "2026-07-13",
    "endDate": "2026-07-19",
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
      "name": "Domingo (19/07) — Oração",
      "prayer": "Pai amado, muito obrigado porque, em Cristo, o Senhor nos deu uma esperança viva e uma herança gloriosa. Assim como Paulo orou pelos efésios, nós também pedimos: dá-nos o Espírito de sabedoria e de revelação no pleno conhecimento de ti. Ilumina os olhos do nosso coração, para que conheçamos qual é a esperança do teu chamado, a riqueza da tua herança nos santos e a imensurável grandeza do teu poder para conosco, os que cremos. Pai, confessamos que muitas vezes vivemos com os olhos fechados para essas verdades, dominados pelo medo e pela falta de fé. Perdoa-nos. Nesta semana, lembra-nos de que o mesmo poder que ressuscitou Jesus dentre os mortos e o exaltou acima de todo nome opera em nós. Que vivamos debaixo do senhorio de Cristo, cabeça da igreja, que enche tudo em todos. Em nome de Jesus, amém."
    }
  },
  {
    "id": "2026-28",
    "year": 2026,
    "weekNumber": 28,
    "subtitle": "Semana 28",
    "dateRange": "(20/07 a 26/07)",
    "startDate": "2026-07-20",
    "endDate": "2026-07-26",
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
      "name": "Domingo (26/07) — Oração",
      "prayer": "Pai amado, muito obrigado porque a tua Palavra não nos deixa no escuro sobre onde a vida realmente se sustenta. Obrigado porque o Senhor chama de bem-aventurado aquele que tem prazer na tua lei e nela medita de dia e de noite. Confessamos que muitas vezes buscamos conselho em qualquer lugar antes de te buscar, e que a nossa raiz fica rasa porque não bebemos da fonte certa. Perdoa-nos. Pai, planta-nos junto à corrente das tuas águas. Dá-nos, nesta semana, prazer de verdade na tua Palavra, e não apenas disciplina obrigada. Que a nossa vida dê fruto no tempo certo e que a nossa folha não murche, mesmo quando os dias forem secos. Guarda-nos do caminho que parece atraente mas termina em nada. Obrigado porque o Senhor conhece o caminho dos justos, e porque em Cristo esse caminho foi aberto para nós. Em nome de Jesus, amém."
    }
  },
  {
    "id": "2026-29",
    "year": 2026,
    "weekNumber": 29,
    "subtitle": "Semana 29",
    "dateRange": "(27/07 a 02/08)",
    "startDate": "2026-07-27",
    "endDate": "2026-08-02",
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
      "name": "Domingo (02/08) — Oração",
      "prayer": "Pai amado, muito obrigado porque, quando nós estávamos mortos em nossos delitos e pecados, o Senhor nos deu vida junto com Cristo. Obrigado porque a nossa salvação não começou em nós, mas na tua misericórdia, no teu grande amor e na riqueza da tua graça. Confessamos que muitas vezes vivemos como se a tua aceitação fosse um salário a ser conquistado, e não um dom recebido. Perdoa-nos. Pela graça somos salvos, mediante a fé, e isso não vem de nós; é presente teu, para que ninguém se glorie. Pai, nesta semana, livra-nos do orgulho de quem pensa que se salvou sozinho e do desânimo de quem pensa que ainda precisa se provar diante de ti. Somos feitura tua, criados em Cristo Jesus para boas obras que o Senhor de antemão preparou. Que a nossa obediência não seja tentativa de pagar a graça, mas gratidão em movimento. Em nome de Jesus, amém."
    }
  },
  {
    "id": "2026-30",
    "year": 2026,
    "weekNumber": 30,
    "subtitle": "Semana 30",
    "dateRange": "(03/08 a 09/08)",
    "startDate": "2026-08-03",
    "endDate": "2026-08-09",
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
      "name": "Domingo (09/08) — Oração",
      "prayer": "Pai amado, muito obrigado porque nós, que um dia estávamos longe, sem esperança e sem Deus no mundo, fomos trazidos para perto pelo sangue de Cristo. Obrigado porque ele mesmo é a nossa paz, e derrubou o muro que nos separava. Confessamos que insistimos em levantar de novo as paredes que Jesus derrubou: as distâncias que criamos, os julgamentos que alimentamos, as pessoas que evitamos dentro da tua própria casa. Perdoa-nos. Pai, nesta semana, ajuda-nos a viver como um só corpo. Dá-nos coragem para procurar quem está afastado, humildade para pedir perdão e paciência para suportar as diferenças que existem entre nós. Obrigado porque já não somos estrangeiros, mas concidadãos dos santos e membros da tua família, edificados sobre o fundamento dos apóstolos e profetas, sendo Cristo Jesus a pedra angular. Que a nossa igreja seja, de verdade, habitação tua no Espírito. Em nome de Jesus, amém."
    }
  },
  {
    "id": "2026-31",
    "year": 2026,
    "weekNumber": 31,
    "subtitle": "Semana 31",
    "dateRange": "(10/08 a 16/08)",
    "startDate": "2026-08-10",
    "endDate": "2026-08-16",
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
      "name": "Domingo (16/08) — Oração",
      "prayer": "Pai amado, muito obrigado porque o mistério que esteve oculto por gerações foi revelado em Cristo: em Jesus, os que estavam de fora se tornaram coerdeiros, membros do mesmo corpo e coparticipantes da promessa. Obrigado porque isso não foi conquista de ninguém, mas dom da tua graça. Pai, obrigado porque o Senhor usa pessoas comuns para anunciar as riquezas insondáveis de Cristo. Confessamos que muitas vezes calamos por medo do que vão pensar, ou por acharmos que não temos preparo suficiente. Perdoa-nos e ajuda-nos a lembrar que a força nunca esteve em nós. Nesta semana, dá-nos ousadia e acesso confiante a ti pela fé em Cristo. Que as dificuldades não nos desanimem, mas nos lembrem de que o teu propósito eterno segue firme, e que a tua sabedoria está sendo manifestada por meio da igreja. Em nome de Jesus, amém."
    }
  },
  {
    "id": "2026-32",
    "year": 2026,
    "weekNumber": 32,
    "subtitle": "Semana 32",
    "dateRange": "(17/08 a 23/08)",
    "startDate": "2026-08-17",
    "endDate": "2026-08-23",
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
      "name": "Domingo (23/08) — Oração",
      "prayer": "Pai amado, dobramos os nossos joelhos diante de ti, de quem toma o nome toda família nos céus e na terra. Fortalece-nos com poder, pelo teu Espírito, no homem interior. Que Cristo habite nos nossos corações pela fé, e que estejamos arraigados e alicerçados em amor. Pai, confessamos que muitas vezes conhecemos o teu amor apenas de ouvido, como informação que não desce ao coração. Perdoa-nos pela frieza. Dá-nos força para compreender, junto com todos os santos, qual é a largura, a extensão, a altura e a profundidade do amor de Cristo, que excede todo entendimento. Enche-nos de toda a tua plenitude. E que nesta semana a nossa esperança não seja medida pelo que conseguimos imaginar, porque o Senhor é poderoso para fazer infinitamente mais do que tudo quanto pedimos ou pensamos. A ti seja a glória, na igreja e em Cristo Jesus, por todas as gerações. Em nome de Jesus, amém."
    }
  },
  {
    "id": "2026-33",
    "year": 2026,
    "weekNumber": 33,
    "subtitle": "Semana 33",
    "dateRange": "(24/08 a 30/08)",
    "startDate": "2026-08-24",
    "endDate": "2026-08-30",
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
    "id": "2026-34",
    "year": 2026,
    "weekNumber": 34,
    "subtitle": "Semana 34",
    "dateRange": "(31/08 a 06/09)",
    "startDate": "2026-08-31",
    "endDate": "2026-09-06",
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
    "id": "2026-35",
    "year": 2026,
    "weekNumber": 35,
    "subtitle": "Semana 35",
    "dateRange": "(07/09 a 13/09)",
    "startDate": "2026-09-07",
    "endDate": "2026-09-13",
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
    "id": "2026-36",
    "year": 2026,
    "weekNumber": 36,
    "subtitle": "Semana 36",
    "dateRange": "(14/09 a 20/09)",
    "startDate": "2026-09-14",
    "endDate": "2026-09-20",
    "days": [
      {
        "key": "mon",
        "name": "Segunda-feira (14/09)",
        "readings": [
          "Lucas 24; João 1",
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
          "Hebreus 13; Tiago 1",
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
  },
  {
    "id": "2026-37",
    "year": 2026,
    "weekNumber": 37,
    "subtitle": "Semana 37",
    "dateRange": "(21/09 a 27/09)",
    "startDate": "2026-09-21",
    "endDate": "2026-09-27",
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
      "name": "Domingo (27/09) — Oração",
      "prayer": "Pai amado, muito obrigado porque outrora éramos trevas, mas agora somos luz no Senhor. Ajuda-nos a andar como filhos da luz, em toda bondade, justiça e verdade. Confessamos que muitas vezes nos deixamos enganar por palavras vãs e nos acomodamos com o que o Senhor chama de trevas, desde que ninguém veja. Perdoa-nos. Expõe o que precisa ser exposto em nós, com misericórdia, para que sejamos curados. Pai, ensina-nos a examinar o que te agrada e a viver com cuidado, aproveitando bem o tempo que o Senhor nos dá, porque os dias são maus e a vida é curta. Guarda-nos das fugas que prometem alívio e só aprofundam o vazio. Enche-nos do teu Espírito, para que a nossa alegria tenha fonte certa. Que nesta semana o nosso coração esteja cantando a ti, e que a gratidão seja a nossa resposta constante, em todas as coisas. Em nome de Jesus, amém."
    }
  },
  {
    "id": "2026-38",
    "year": 2026,
    "weekNumber": 38,
    "subtitle": "Semana 38",
    "dateRange": "(28/09 a 04/10)",
    "startDate": "2026-09-28",
    "endDate": "2026-10-04",
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
  },
  {
    "id": "2026-39",
    "year": 2026,
    "weekNumber": 39,
    "subtitle": "Semana 39",
    "dateRange": "(05/10 a 11/10)",
    "startDate": "2026-10-05",
    "endDate": "2026-10-11",
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
  },
  {
    "id": "2026-40",
    "year": 2026,
    "weekNumber": 40,
    "subtitle": "Semana 40",
    "dateRange": "(12/10 a 18/10)",
    "startDate": "2026-10-12",
    "endDate": "2026-10-18",
    "days": [
      {
        "key": "mon",
        "name": "Segunda-feira (12/10)",
        "readings": [
          "João 8–9",
          "Salmo 132.10–18"
        ]
      },
      {
        "key": "tue",
        "name": "Terça-feira (13/10)",
        "readings": [
          "1 João 1–2",
          "Salmo 133"
        ]
      },
      {
        "key": "wed",
        "name": "Quarta-feira (14/10)",
        "readings": [
          "1 João 3–4",
          "Salmo 134"
        ]
      },
      {
        "key": "thu",
        "name": "Quinta-feira (15/10)",
        "readings": [
          "Gênesis 42",
          "Salmo 135.1–12"
        ]
      },
      {
        "key": "fri",
        "name": "Sexta-feira (16/10)",
        "readings": [
          "Eclesiastes 6",
          "Salmo 135.13–21"
        ]
      },
      {
        "key": "sat",
        "name": "Sábado (17/10)",
        "readings": [
          "Efésios 6.1–4"
        ]
      }
    ],
    "sunday": {
      "name": "Domingo (18/10) — Oração",
      "prayer": "Pai amado, muito obrigado porque o Senhor colocou a família como o primeiro lugar onde aprendemos a te conhecer. Obrigado porque o teu mandamento aos filhos vem acompanhado de promessa, e porque o Senhor cuida das gerações. Pai, aos filhos, dá corações dispostos a obedecer e a honrar pai e mãe, mesmo quando não entendem. Aos pais, confessamos que muitas vezes provocamos os nossos filhos à ira: pela impaciência, pela incoerência, pelas exigências que fazemos sem oferecer cuidado. Perdoa-nos. Ensina-nos a criar os nossos filhos na disciplina e na admoestação do Senhor, e não na nossa própria irritação. Dá-nos firmeza sem dureza e ternura sem omissão. Nesta semana, ajuda-nos a pedir perdão dentro de casa quando errarmos, e a apontar os nossos filhos para Cristo mais pelo que vivemos do que pelo que dizemos. Em nome de Jesus, amém."
    }
  },
  {
    "id": "2026-41",
    "year": 2026,
    "weekNumber": 41,
    "subtitle": "Semana 41",
    "dateRange": "(19/10 a 25/10)",
    "startDate": "2026-10-19",
    "endDate": "2026-10-25",
    "days": [
      {
        "key": "mon",
        "name": "Segunda-feira (19/10)",
        "readings": [
          "João 10–11",
          "Salmo 136.1–6"
        ]
      },
      {
        "key": "tue",
        "name": "Terça-feira (20/10)",
        "readings": [
          "1 João 5; 2 João",
          "Salmo 136.7–12"
        ]
      },
      {
        "key": "wed",
        "name": "Quarta-feira (21/10)",
        "readings": [
          "3 João; Judas",
          "Salmo 136.13–18"
        ]
      },
      {
        "key": "thu",
        "name": "Quinta-feira (22/10)",
        "readings": [
          "Gênesis 43",
          "Salmo 136.19–26"
        ]
      },
      {
        "key": "fri",
        "name": "Sexta-feira (23/10)",
        "readings": [
          "Eclesiastes 7",
          "Salmo 137"
        ]
      },
      {
        "key": "sat",
        "name": "Sábado (24/10)",
        "readings": [
          "Efésios 6.5–9"
        ]
      }
    ],
    "sunday": {
      "name": "Domingo (25/10) — Oração",
      "prayer": "Pai amado, muito obrigado porque nenhum trabalho honesto é pequeno demais para ser feito para ti. Obrigado porque o Senhor vê o que ninguém vê e recompensa o que ninguém reconhece. Confessamos que trabalhamos muitas vezes para agradar aos olhos, produzindo bem quando alguém está olhando e mal quando ninguém está. Perdoa-nos pela falta de integridade no comum dos dias. Pai, nesta semana, ajuda-nos a servir de boa vontade, como a ti e não a homens, seja no emprego, no estudo ou dentro de casa. E aos que exercem autoridade sobre outros, dá justiça e mansidão. Que ninguém sob a nossa liderança seja tratado com ameaça ou desprezo, porque tanto eles quanto nós temos o mesmo Senhor nos céus, e diante de ti não há acepção de pessoas. Em nome de Jesus, amém."
    }
  },
  {
    "id": "2026-42",
    "year": 2026,
    "weekNumber": 42,
    "subtitle": "Semana 42",
    "dateRange": "(26/10 a 01/11)",
    "startDate": "2026-10-26",
    "endDate": "2026-11-01",
    "days": [
      {
        "key": "mon",
        "name": "Segunda-feira (26/10)",
        "readings": [
          "João 12–13",
          "Salmo 138"
        ]
      },
      {
        "key": "tue",
        "name": "Terça-feira (27/10)",
        "readings": [
          "Apocalipse 1–2",
          "Salmo 139.1–6"
        ]
      },
      {
        "key": "wed",
        "name": "Quarta-feira (28/10)",
        "readings": [
          "Apocalipse 3–4",
          "Salmo 139.7–12"
        ]
      },
      {
        "key": "thu",
        "name": "Quinta-feira (29/10)",
        "readings": [
          "Gênesis 44",
          "Salmo 139.13–18"
        ]
      },
      {
        "key": "fri",
        "name": "Sexta-feira (30/10)",
        "readings": [
          "Eclesiastes 8",
          "Salmo 139.19–24"
        ]
      },
      {
        "key": "sat",
        "name": "Sábado (31/10)",
        "readings": [
          "Efésios 6.10–24"
        ]
      }
    ],
    "sunday": {
      "name": "Domingo (01/11) — Oração",
      "prayer": "Pai amado, muito obrigado porque a nossa força não vem de nós, mas do Senhor e do poder da tua força. Obrigado porque o Senhor não nos manda para a batalha desarmados. Confessamos que muitas vezes lutamos contra pessoas e esquecemos que a nossa luta não é contra carne e sangue. Perdoa-nos por transformar irmãos em inimigos e por subestimar o inimigo real. Pai, nesta semana, reveste-nos de toda a tua armadura: a verdade cingindo a nossa cintura, a justiça de Cristo cobrindo o nosso peito, a prontidão do evangelho da paz nos nossos pés, o escudo da fé para apagar os dardos inflamados, o capacete da salvação guardando a nossa mente e a tua Palavra como espada do Espírito. E ensina-nos a orar em todo tempo, com perseverança, uns pelos outros. Que, tendo feito tudo, fiquemos firmes. Em nome de Jesus, amém."
    }
  },
  {
    "id": "2026-43",
    "year": 2026,
    "weekNumber": 43,
    "subtitle": "Semana 43",
    "dateRange": "(02/11 a 08/11)",
    "startDate": "2026-11-02",
    "endDate": "2026-11-08",
    "days": [
      {
        "key": "mon",
        "name": "Segunda-feira (02/11)",
        "readings": [
          "João 14–15",
          "Salmo 140.1–8"
        ]
      },
      {
        "key": "tue",
        "name": "Terça-feira (03/11)",
        "readings": [
          "Apocalipse 5–6",
          "Salmo 140.9–13"
        ]
      },
      {
        "key": "wed",
        "name": "Quarta-feira (04/11)",
        "readings": [
          "Apocalipse 7–8",
          "Salmo 141.1–4"
        ]
      },
      {
        "key": "thu",
        "name": "Quinta-feira (05/11)",
        "readings": [
          "Gênesis 45",
          "Salmo 141.5–10"
        ]
      },
      {
        "key": "fri",
        "name": "Sexta-feira (06/11)",
        "readings": [
          "Eclesiastes 9",
          "Salmo 142"
        ]
      },
      {
        "key": "sat",
        "name": "Sábado (07/11)",
        "readings": [
          "Mateus 28.16–20"
        ]
      }
    ],
    "sunday": {
      "name": "Domingo (08/11) — Oração",
      "prayer": "Pai amado, muito obrigado porque toda a autoridade nos céus e na terra foi dada a Jesus. A missão que recebemos não depende da nossa capacidade, mas do poder dele. Obrigado porque, mesmo entre os discípulos que o adoraram, havia os que duvidavam, e ainda assim o Senhor os enviou. Isso nos dá esperança. Confessamos que muitas vezes tratamos a missão como assunto de especialistas, e não como o chamado de toda a igreja. Perdoa-nos pelo silêncio confortável. Pai, nesta semana, abre os nossos olhos para as pessoas que o Senhor já colocou ao nosso redor. Dá-nos coragem para falar de Cristo com naturalidade e amor, e paciência para ensinar os que começam a caminhar. Que façamos discípulos de verdade, e não apenas conversas. E obrigado pela promessa que sustenta tudo: Jesus está conosco todos os dias, até a consumação do século. Em nome de Jesus, amém."
    }
  },
  {
    "id": "2026-44",
    "year": 2026,
    "weekNumber": 44,
    "subtitle": "Semana 44",
    "dateRange": "(09/11 a 15/11)",
    "startDate": "2026-11-09",
    "endDate": "2026-11-15",
    "days": [
      {
        "key": "mon",
        "name": "Segunda-feira (09/11)",
        "readings": [
          "João 16–17",
          "Salmo 143.1–6"
        ]
      },
      {
        "key": "tue",
        "name": "Terça-feira (10/11)",
        "readings": [
          "Apocalipse 9–10",
          "Salmo 143.7–12"
        ]
      },
      {
        "key": "wed",
        "name": "Quarta-feira (11/11)",
        "readings": [
          "Apocalipse 11–12",
          "Salmo 144.1–8"
        ]
      },
      {
        "key": "thu",
        "name": "Quinta-feira (12/11)",
        "readings": [
          "Gênesis 46–47",
          "Salmo 144.9–15"
        ]
      },
      {
        "key": "fri",
        "name": "Sexta-feira (13/11)",
        "readings": [
          "Eclesiastes 10",
          "Salmo 145.1–13"
        ]
      },
      {
        "key": "sat",
        "name": "Sábado (14/11)",
        "readings": [
          "Atos 1.1–11"
        ]
      }
    ],
    "sunday": {
      "name": "Domingo (15/11) — Oração",
      "prayer": "Pai amado, muito obrigado porque Jesus não enviou a sua igreja antes de prometer o teu Espírito. Obrigado porque a testemunha fiel nunca depende só da própria força. Confessamos que, como os discípulos, gastamos energia querendo saber tempos e datas que o Senhor reservou para si, enquanto deixamos de fazer o que o Senhor claramente nos mandou. Perdoa-nos pela curiosidade que substitui a obediência. Pai, enche-nos do teu Espírito e faz de nós testemunhas de Cristo: na nossa Jerusalém, que é a nossa casa e a nossa rua; na nossa Judeia e Samaria, entre os que são diferentes de nós; e até os confins da terra. Sustenta os missionários enviados por esta igreja, e dá-nos generosidade para sustentá-los. E que vivamos com os olhos levantados, esperando o mesmo Jesus que há de voltar. Em nome de Jesus, amém."
    }
  },
  {
    "id": "2026-45",
    "year": 2026,
    "weekNumber": 45,
    "subtitle": "Semana 45",
    "dateRange": "(16/11 a 22/11)",
    "startDate": "2026-11-16",
    "endDate": "2026-11-22",
    "days": [
      {
        "key": "mon",
        "name": "Segunda-feira (16/11)",
        "readings": [
          "João 18–19",
          "Salmo 145.14–21"
        ]
      },
      {
        "key": "tue",
        "name": "Terça-feira (17/11)",
        "readings": [
          "Apocalipse 13–14",
          "Salmo 146"
        ]
      },
      {
        "key": "wed",
        "name": "Quarta-feira (18/11)",
        "readings": [
          "Apocalipse 15–16",
          "Salmo 147.1–11"
        ]
      },
      {
        "key": "thu",
        "name": "Quinta-feira (19/11)",
        "readings": [
          "Gênesis 48–49",
          "Salmo 147.12–20"
        ]
      },
      {
        "key": "fri",
        "name": "Sexta-feira (20/11)",
        "readings": [
          "Eclesiastes 11",
          "Salmo 148"
        ]
      },
      {
        "key": "sat",
        "name": "Sábado (21/11)",
        "readings": [
          "Romanos 10.9–17"
        ]
      }
    ],
    "sunday": {
      "name": "Domingo (22/11) — Oração",
      "prayer": "Pai amado, muito obrigado porque a salvação está ao alcance de quem crê com o coração e confessa com a boca que Jesus é Senhor. Obrigado porque não há distinção: o mesmo Senhor é rico para todos os que o invocam. Confessamos que às vezes cremos nisso para nós e duvidamos disso para os outros, como se alguém estivesse longe demais da tua graça. Perdoa-nos. Pai, a tua Palavra nos lembra que ninguém crerá sem ouvir, e ninguém ouvirá sem alguém que anuncie. Então dá-nos disposição para ser esse alguém. Levanta pregadores, envia obreiros, e usa a nossa igreja para levar o evangelho onde ele ainda não chegou. Que a fé venha pelo ouvir, e o ouvir pela palavra de Cristo, e que muitos, nesta semana, ouçam por meio de nós. Em nome de Jesus, amém."
    }
  },
  {
    "id": "2026-46",
    "year": 2026,
    "weekNumber": 46,
    "subtitle": "Semana 46",
    "dateRange": "(23/11 a 29/11)",
    "startDate": "2026-11-23",
    "endDate": "2026-11-29",
    "days": [
      {
        "key": "mon",
        "name": "Segunda-feira (23/11)",
        "readings": [
          "João 20–21",
          "Salmo 149.1–4"
        ]
      },
      {
        "key": "tue",
        "name": "Terça-feira (24/11)",
        "readings": [
          "Apocalipse 17–19",
          "Salmo 149.5–9"
        ]
      },
      {
        "key": "wed",
        "name": "Quarta-feira (25/11)",
        "readings": [
          "Apocalipse 20–22",
          "Salmo 150.1–2"
        ]
      },
      {
        "key": "thu",
        "name": "Quinta-feira (26/11)",
        "readings": [
          "Gênesis 50",
          "Salmo 150.3–4"
        ]
      },
      {
        "key": "fri",
        "name": "Sexta-feira (27/11)",
        "readings": [
          "Eclesiastes 12",
          "Salmo 150.5–6"
        ]
      },
      {
        "key": "sat",
        "name": "Sábado (28/11)",
        "readings": [
          "Apocalipse 7.9–17"
        ]
      }
    ],
    "sunday": {
      "name": "Domingo (29/11) — Oração",
      "prayer": "Pai amado, muito obrigado porque o Senhor nos mostra o fim da história: uma multidão que ninguém pode contar, de toda nação, tribo, povo e língua, diante do trono e diante do Cordeiro. Obrigado porque a missão que o Senhor confiou à sua igreja não vai fracassar. Pai, encerramos este ano de leitura com gratidão. Obrigado por cada dia em que a tua Palavra nos alimentou, e perdoa-nos pelos dias em que a deixamos de lado. Obrigado por nos conduzir dos Salmos à cruz, de Gênesis ao Apocalipse, mostrando que a história toda aponta para Cristo. Que a salvação pertence ao nosso Deus, que se assenta no trono, e ao Cordeiro. E que, enquanto esperamos o dia em que o Senhor enxugará dos nossos olhos toda lágrima, a nossa vida seja adoração, serviço e testemunho. Em nome de Jesus, amém."
    }
  }
];
