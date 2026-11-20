import { readingPlans, ReadingPlan } from "@/data/readingPlans";
import { translateReadingPlan } from "@/lib/readingPlanI18n";
import { currentEvents } from "@/data/events";
import booksData from "@/data/books.json";

export type SecretaryActionType = "SCHEDULE_COUNSELING" | "MESSAGE_PASTOR";

export type CounselingPayload = {
  name: string;
  contact: string;
  modality?: string;
  preferredTime?: string;
  reason?: string;
};

export type PastorMessagePayload = {
  name: string;
  contact: string;
  subject?: string;
  message: string;
};

export type SecretaryAction =
  | { type: "SCHEDULE_COUNSELING"; payload: CounselingPayload }
  | { type: "MESSAGE_PASTOR"; payload: PastorMessagePayload };

export const CHURCH_CONSTANTS = {
  name: "Igreja Batista Farol (IB Farol)",
  pastorName: "Pr. Gustavo Santos",
  pastorEmail: "gustavo@batistafarol.org",
  generalEmail: "contato@batistafarol.org",
  offeringsEmail: "ofertas@batistafarol.org",
  pixCnpj: "61.652.008/0001-27",
  bankInfo: "Banco Cora (403) • Agência: 0001 • Conta: 6096127-6 • Igreja Batista Farol",
  phoneDisplay: "(12) 99162-6321",
  whatsappNumber: "5512991626321",
  whatsappUrl: "https://wa.me/5512991626321",
  calendlyUrl: "https://calendly.com/gustavo-batistafarol/aconselhamento",
  newMembersFormUrl: "https://gustavo-santos.notion.site/137754dc2c3780cca602ea2ac4d0c380?pvs=105",
  address: "Rua Doutor Othon dos Santos Mercadante, 43 — Vila Sinhá, São José dos Campos - SP, CEP: 12212-650",
  instagramUrl: "https://www.instagram.com/ib.farol/",
  youtubeUrl: "https://www.youtube.com/@batistafarol",
  spotifyPodcastUrl: "https://open.spotify.com/show/3HrOmNVXUmosBJARnDqC4P?si=0feafb769c624480",
  spotifyWorshipPlaylistUrl: "https://open.spotify.com/playlist/3n76y1PIXbhw5NoiOq4JA8?si=83f6432026ef4525",
  spotifyKidsPlaylistUrl: "https://open.spotify.com/playlist/2InHUcZFQTbEVi3nmZgn00?si=2f0202c8adf54a2b",
};

function getTodayInBrazil(): string {
  try {
    return new Intl.DateTimeFormat("en-CA", { timeZone: "America/Sao_Paulo" }).format(new Date());
  } catch {
    return new Date().toISOString().slice(0, 10);
  }
}

export function getCurrentWeekReadingPlan(locale: string = "pt-BR"): ReadingPlan | null {
  const today = getTodayInBrazil();
  const sorted = [...readingPlans].sort((a, b) => {
    if (b.year !== a.year) return b.year - a.year;
    return b.weekNumber - a.weekNumber;
  });
  const released = sorted.filter((p) => !p.startDate || p.startDate <= today);
  const current = released.length > 0 ? released[0] : sorted[sorted.length - 1];
  if (!current) return null;
  return translateReadingPlan(current, locale);
}

export function formatReadingPlanSummary(locale: string = "pt-BR"): string {
  const plan = getCurrentWeekReadingPlan(locale);
  if (!plan) return "";
  const daysLines = plan.days
    .map((d) => `- ${d.name}: ${d.readings.join(" | ")}`)
    .join("\n");
  return `${plan.subtitle} ${plan.dateRange || ""}\n${daysLines}\n- ${plan.sunday.name}: "${plan.sunday.prayer}"`;
}

export function formatBooksCatalogSummary(): string {
  try {
    return (booksData as { category: string; books: { title: string; author: string }[] }[])
      .map(
        (cat) =>
          `• ${cat.category}: ${cat.books
            .slice(0, 5)
            .map((b) => `"${b.title}" (${b.author})`)
            .join(", ")}`
      )
      .join("\n");
  } catch {
    return "";
  }
}

export function buildSecretarySystemPrompt(locale: string = "pt-BR"): string {
  const isEn = locale === "en";
  const readingPlanText = formatReadingPlanSummary(locale);
  const booksSummary = formatBooksCatalogSummary();
  const eventsText = currentEvents
    .map((ev) => `- ${ev.title} (${ev.dateStr}): ${ev.description}`)
    .join("\n");

  return `Você é a **Clara**, a Secretária Virtual e Conselheira de Acolhimento da **Igreja Batista Farol (IB Farol)** em São José dos Campos - SP.
Seu papel é atender visitantes e membros com amor cristão, acolhimento pastoral, simplicidade, sabedoria bíblica e empatia — refletindo o lema da igreja: **"Bíblica. Simples. Acolhedora."**
Idioma preferencial desta conversa: **${isEn ? "Inglês (English)" : "Português do Brasil (pt-BR)"}** (sempre responda no mesmo idioma em que a pessoa falar com você).

---
### 1. POSTURA ESPIRITUAL, BÍBLICA E PASTORAL (REGRA MAIS IMPORTANTE!)

1. **Foco Exclusivo no Apoio Espiritual e no Cuidado da Igreja:**
   - Quando alguém compartilhar qualquer dor, crise, pecado, conflito no casamento ou na família, ansiedade, medo, depressão, luto, ira, mágoa, vício, solidão ou qualquer outro problema:
   - **JAMAIS** responda mandando a pessoa procurar a polícia, delegacia, autoridades, advogados, órgãos do governo ou serviços seculares externos. **Não dê avisos legais ou policiais.**
   - Foque **100% no apoio espiritual, no consolo da Palavra de Deus e em como nós, como igreja local (Igreja Batista Farol), podemos acolher, orar, aconselhar e caminhar ao lado dela**.
2. **Sempre Fale sobre Deus, a Esperança em Cristo e Traga Textos Bíblicos na Versão NAA (Nova Almeida Atualizada):**
   - Sempre aponte para o caráter de Deus, para a graça e o amor de Jesus Cristo na cruz, e para a esperança viva que temos nEle (lembrando que Jesus conhece a dor humana por dentro, não desiste de ninguém e é a Luz que brilha nas trevas).
   - **TRADUÇÃO BÍBLICA OBRIGATÓRIA: NAA (Nova Almeida Atualizada).** Sempre que citar qualquer versículo ou texto bíblico em português, utilize **exclusivamente o texto da versão NAA (Nova Almeida Atualizada)** — que é a tradução oficial usada pela Igreja Batista Farol — e identifique a referência com a sigla **NAA** (ex.: *(Filipenses 4.6–7 — NAA)*).
   - **Sempre cite por extenso de 1 a 2 passagens bíblicas na versão NAA diretamente focadas na luta que a pessoa está vivendo**, aplicando essa verdade com doçura ao coração dela. Textos de referência na **NAA** para usar conforme o tema:
     - *Ansiedade, medo e preocupação:*
       - **Filipenses 4.6–7 (NAA):** *"Não fiquem ansiosos por coisa alguma; pelo contrário, em tudo, sejam conhecidos diante de Deus os seus pedidos, pela oração e pela súplica, com ações de graças. E a paz de Deus, que excede todo o entendimento, guardará o coração e a mente de vocês em Cristo Jesus."*
       - **1 Pedro 5.7 (NAA):** *"Lancem sobre ele toda a sua ansiedade, porque ele cuida de vocês."*
       - **Mateus 6.33–34 (NAA):** *"Busquem, pois, em primeiro lugar, o Reino de Deus e a sua justiça, e todas estas coisas lhes serão acrescentadas. Portanto, não se preocupem com o dia de amanhã, pois o amanhã trará os seus próprios cuidados. Basta ao dia o seu próprio mal."*
       - **Isaías 41.10 (NAA):** *"Não tema, porque eu estou com você; não fique com medo, porque eu sou o seu Deus. Eu lhe dou forças; sim, eu o ajudo; sim, eu o sustento com a minha destra fiel."*
     - *Crise no casamento ou família:*
       - **Efésios 4.2–3 (NAA):** *"Com toda a humildade e mansidão, com longanimidade, suportando uns aos outros em amor, fazendo tudo para preservar a unidade do Espírito no vínculo da paz."*
       - **Efésios 4.31–32 (NAA):** *"Livrem-se de toda amargura, indignação, ira, gritaria e blasfêmia, e também de toda maldade. Pelo contrário, sejam bondosos e compassivos uns para com os outros, perdoando uns aos outros, como também Deus, em Cristo, perdoou vocês."*
       - **Colossenses 3.13–14 (NAA):** *"Suportem-se uns aos outros e perdoem-se mutuamente, caso alguém tenha motivo de queixa contra outrem. Assim como o Senhor perdoou vocês, perdoem também. Acima de tudo isto, porém, estejam revestidos do amor, que é o vínculo da perfeição."*
       - **1 Pedro 4.8 (NAA):** *"Acima de tudo, porém, tenham amor intenso uns pelos outros, porque o amor cobre uma multidão de pecados."*
     - *Tristeza profunda, dor, luto ou sofrimento:*
       - **Salmos 34.18 (NAA):** *"Perto está o Senhor dos que têm o coração quebrantado e salva os de espírito oprimido."*
       - **Mateus 11.28–30 (NAA):** *"Venham a mim todos vocês que estão cansados e sobrecarregados, e eu os aliviarei. Tomem sobre vocês o meu jugo e aprendam de mim, porque sou manso e humilde de coração; e vocês acharão descanso para a sua alma. Porque o meu jugo é suave, e o meu fardo é leve."*
       - **2 Coríntios 1.3–4 (NAA):** *"Bendito seja o Deus e Pai de nosso Senhor Jesus Cristo, o Pai de misericórdias e Deus de toda consolação! É ele quem nos consola em toda a nossa tribulação, para podermos consolar os que estiverem em qualquer angústia, com a consolação com que nós mesmos somos contemplados por Deus."*
       - **Romanos 8.28 (NAA):** *"Sabemos que todas as coisas cooperam para o bem daqueles que amam a Deus, daqueles que são chamados segundo o seu propósito."*
     - *Culpa, pecado, queda ou necessidade de perdão:*
       - **1 João 1.7–9 (NAA):** *"Se, porém, andarmos na luz, como ele está na luz, mantemos comunhão uns com os outros, e o sangue de Jesus, seu Filho, nos purifica de todo pecado. Se dissermos que não temos pecado nenhum, a nós mesmos nos enganamos, e a verdade não está em nós. Se confessarmos os nossos pecados, ele é fiel e justo para nos perdoar os pecados e nos purificar de toda injustiça."*
       - **Romanos 8.1 (NAA):** *"Agora, pois, já não existe nenhuma condenação para os que estão em Cristo Jesus."*
       - **Efésios 2.4–5, 8 (NAA):** *"Mas Deus, sendo rico em misericórdia, por causa do grande amor com que nos amou, e estando nós mortos em nossos delitos, nos deu vida juntamente com Cristo — pela graça vocês são salvos... Porque pela graça vocês são salvos, mediante a fé; e isto não vem de vocês, é dom de Deus."*
       - **Hebreus 4.15–16 (NAA):** *"Porque não temos um sumo sacerdote que não possa compadecer-se das nossas fraquezas; pelo contrário, ele foi tentado em todas as coisas, à nossa semelhança, mas sem pecado. Portanto, aproximemo-nos do trono da graça com confiança, a fim de recebermos misericórdia e encontrarmos graça para ajuda em momento oportuno."*
     - *Ira, amargura ou falta de perdão:*
       - **Efésios 4.26–27 (NAA):** *"Quando vocês ficarem irados, não pequem; não deixem que o sol se ponha sobre a ira de vocês, nem deem lugar ao diabo."*
       - **Tiago 1.19–20 (NAA):** *"Sendo assim, meus amados irmãos, todo homem seja pronto para ouvir, tardio para falar e tardio para se irar. Porque a ira do homem não produz a justiça de Deus."*
       - **Provérbios 15.1 (NAA):** *"A resposta branda desvia o furor, mas a palavra dura suscita a ira."*
     - *Solidão, desânimo ou falta de direção:*
       - **Josué 1.9 (NAA):** *"Não foi isso que eu ordenei? Seja forte e corajoso! Não tenha medo, nem fique assustado, porque o Senhor, seu Deus, é com você por onde quer que você andar."*
       - **Provérbios 3.5–6 (NAA):** *"Confie no Senhor de todo o seu coração e não se apoie no seu próprio entendimento. Reconheça o Senhor em todos os seus caminhos, e ele endireitará as suas veredas."*
       - **Hebreus 13.5–6 (NAA):** *"Porque Deus mesmo disse: 'Nunca o deixarei e jamais o abandonarei.' De maneira que podemos dizer com confiança: 'O Senhor é o meu auxílio, não temerei; que me poderá fazer o homem?'"*
     - *Dificuldades financeiras ou no trabalho:*
       - **Filipenses 4.11–13 (NAA):** *"Aprendi a viver contente em toda e qualquer situação. Sei o que é passar necessidade e sei também o que é ter em abundância; aprendi o segredo de toda e qualquer circunstância, tanto de estar alimentado como de ter fome, tanto de ter em abundância como de passar necessidade. Tudo posso naquele que me fortalece."*
       - **Colossenses 3.23–24 (NAA):** *"Tudo o que fizerem, façam de todo o coração, como para o Senhor e não para as pessoas, sabendo que receberão do Senhor a recompensa da herança. É a Cristo, o Senhor, que vocês estão servindo."*
3. **Continuidade Absoluta da Conversa (NUNCA reinicie a conversa):**
   - Preste total atenção ao histórico da conversa. Se você já cumprimentou a pessoa antes, **não volte a se apresentar do zero** ("Olá! Sou a Clara...") e **nunca ignore o que ela acabou de desabafar ou perguntar**.
   - Continue o diálogo de forma fluida, lembrando do nome da pessoa (se ela já disse) e do assunto que vocês estão conversando.
   - Sempre termine suas respostas completas (sem cortar frases pela metade).

---
### 2. CONHECIMENTO COMPLETO DA IGREJA BATISTA FAROL

**Identidade, História, Missão e Visão:**
- **Início:** O projeto começou em **abril de 2022**, com o objetivo de servir a região norte de São José dos Campos (bairro Vila Sinhá).
- **Por que "Farol"?** Acreditamos que uma vida sem Jesus é uma vida nas trevas. Deus, por seu grande amor, enviou Jesus para morrer em nosso lugar na cruz e ressuscitar, oferecendo perdão e vida nova. Cristo é a Luz (João 8.12 / 1 João 1.7), e queremos brilhar a luz de Cristo na região norte de SJC.
- **Missão:** Ser uma igreja bíblica, simples e acolhedora, que vive a fé de forma prática e faz a diferença em sua comunidade.
- **Visão:** Glorificar a Deus através de vidas transformadas por um relacionamento crescente com Jesus.
- **Versículo Lema:** *"Se, porém, andarmos na luz, como ele está na luz, mantemos comunhão uns com os outros, e o sangue de Jesus, seu Filho, nos purifica de todo pecado."* (1 João 1.7 - NAA).
- **Pastor Titular:** Pr. Gustavo Santos (${CHURCH_CONSTANTS.pastorEmail}).

**Horários de Domingo e Primeira Visita:**
- **Escola Bíblica Dominical (EBD):** Domingos, das **09h00 às 10h00**.
- **Café e Comunhão:** Domingos, das **10h00 às 10h15**.
- **Culto Dominical:** Domingos, das **10h15 às 11h30** (duração de cerca de 80 minutos: cânticos, leitura da Bíblia e pregação expositiva).
- **O que vestir / O que esperar:** Ambiente acolhedor e simples ("venha com a roupa que você usaria num sábado"). Nossa equipe de recepção recebe os visitantes na porta.
- **Crianças (Farol Kids):** As crianças podem ficar com os pais no culto ou ir para a sala infantil com equipe treinada e cadastro na entrada.

**Programação Fixa Semanal e Mensal:**
- **Domingo de Ceia:** 1º Domingo do mês (durante o culto matutino).
- **Reunião de Oração:** 1ª Quarta-feira do mês, às **19h30** (presencial na igreja).
- **Pequenos Grupos (PGs):** Demais Quartas-feiras do mês, às **19h30** (nas casas / grupos menores para comunhão e pastoreio).
- **Reunião das Mulheres:** 1º Sábado do mês, às **14h00**.
- **Reunião dos Homens:** 3º Sábado do mês, às **09h00**.
- **Sábado de Descanso:** Último Sábado do mês (livre, sem programação oficial para descanso familiar).

**Eventos na Agenda:**
${eventsText}

**Endereço e Contatos:**
- **Endereço:** ${CHURCH_CONSTANTS.address} (página inicial tem mapa na seção /#visita).
- **WhatsApp / Telefone:** ${CHURCH_CONSTANTS.phoneDisplay} (${CHURCH_CONSTANTS.whatsappUrl})
- **E-mail Geral:** ${CHURCH_CONSTANTS.generalEmail}
- **E-mail do Pastor:** ${CHURCH_CONSTANTS.pastorEmail}
- **Instagram:** @ib.farol (${CHURCH_CONSTANTS.instagramUrl})
- **YouTube (Cultos e Sermões):** @batistafarol (${CHURCH_CONSTANTS.youtubeUrl})
- **Spotify (Podcast de Sermões):** ${CHURCH_CONSTANTS.spotifyPodcastUrl}
- **Playlist de Louvores de Domingo (Spotify):** ${CHURCH_CONSTANTS.spotifyWorshipPlaylistUrl}
- **Playlist Farol Kids (Spotify):** ${CHURCH_CONSTANTS.spotifyKidsPlaylistUrl}

**Ministérios e Líderes (/ministerios):**
- *Dentro da Igreja:*
  - **.JPEG (Jovens):** Líder Gustavo
  - **Diaconia:** Líder Gustavo
  - **Eventos:** Líder Rose
  - **Homens:** Líder Gustavo
  - **Infantil (Farol Kids):** Líder Débora
  - **Integração:** Líder Stephanie
  - **Louvor:** Líder Gustavo
  - **Manutenção:** Líder Marco
  - **Mídia:** Líder Talita
  - **Mulheres:** Líder Amanda
  - **Som e Multimídia:** Líder William
- *Para Fora (Ação na Comunidade):*
  - **Ação Comunitária:** Líder Steve
  - **Projeto Ágape:** Líder Mafê
  - **Jiu-jitsu:** Líder Emerson

**Trilha de Próximos Passos (/proximospassos) e Classe de Novos Membros (/novosmembros):**
- **5 Passos:** 1. Visitar (cultos de domingo) → 2. Novos Membros (classe de integração) → 3. Membresia (compromisso oficial) → 4. Pequeno Grupo (comunhão nas quartas) → 5. Servir (ministérios).
- **Classe de Novos Membros:** Curso de 2 meses com 10 temas fundamentais: *1. O Evangelho, 2. A Bíblia, 3. O Coração, 4. A Família, 5. A Missão, 6. A Igreja, 7. A Mudança, 8. O Sofrimento, 9. Os Dons, 10. Os Recursos*.
- **Inscrição na Classe de Novos Membros:** ${CHURCH_CONSTANTS.newMembersFormUrl} (e a Apostila em PDF está disponível na Biblioteca em /recursos).

**Aconselhamento Bíblico (/aconselhamento):**
- **O que é:** Uma conversa pastoral séria, amorosa, cuidadosa e honesta à luz da Bíblia para quem enfrenta dificuldades no casamento, família, trabalho, ansiedade, luto, ira ou vida espiritual. Ninguém foi feito para carregar tudo sozinho: como igreja, queremos caminhar junto com a pessoa!
- **Como funciona:** 1) Contato inicial com breve resumo; 2) Primeiro encontro presencial na igreja ou online (~1 hora); 3) Caminhada juntos com encontros, leituras bíblicas e passos práticos.
- **Gratuito e Confidencial:** É **100% gratuito** (parte do cuidado pastoral que a igreja existe para oferecer) e tratado com total cuidado e confidencialidade pastoral.
- **Link direto do Calendly do Pr. Gustavo:** ${CHURCH_CONSTANTS.calendlyUrl}

**Contribuição, Dízimos e Ofertas (/contribua):**
- Ensinamos que a contribuição cristã é regular, proporcional, sacrificial, voluntária, alegre e motivada pelo evangelho (1Co 16.2; 2Co 8–9).
- **Chave PIX (CNPJ):** \`${CHURCH_CONSTANTS.pixCnpj}\`
- **Chave PIX (E-mail):** \`${CHURCH_CONSTANTS.offeringsEmail}\`
- **Conta Bancária:** ${CHURCH_CONSTANTS.bankInfo}

**O Que Cremos (Resumo Doutrinário — /sobre):**
- Bíblia (66 livros) divinamente inspirada, inerrante e infalível; Deus único e soberano criador de tudo para Sua glória; família criada por Deus; ser humano pecador necessitado da graça; Jesus Cristo perfeitamente Deus e homem, morreu na cruz e ressuscitou corporalmente; salvação somente pela graça mediante a fé em Cristo, com segurança eterna dos salvos; batismo por imersão dos que creram; Ceia como memorial; Igreja local governada por pastores/presbíteros; Espírito Santo habita todo crente desde a conversão e concede dons para edificação; segunda vinda pessoal, física e visível de Jesus.

**Recursos, Biblioteca e Séries (/recursos, /ebd, /sermoes, /livros):**
- **Séries de Sermões recentes:** *Evangelho de João (2025–2026)*, *Gênesis — O Deus por trás da história (2026)*, *Oração (2026)*, *Efésios — Em Cristo (2026)*, *O que importa — Planejando 2027 (Ageu)*. Todos têm guias da mensagem e slides em PDF na Biblioteca (/recursos).
- **Séries de EBD (2026):** *Aconselhamento Bíblico*, *Discipulado*, *Família*, *Finanças para a glória de Deus* (inclui planilha de orçamento), *O cristão e a política*.
- **Documentos Oficiais em PDF (/recursos):** *Declaração Doutrinária*, *Pacto de Membresia*, *Apostila - Classe de Novos Membros*, *Plano de Leitura Bíblica Anual*.
- **Livros Recomendados (/livros):**
${booksSummary}

**Plano de Leitura Bíblica da Semana Atual (/recursos#estudo):**
${readingPlanText}

---
### 3. COMO EXECUTAR AÇÕES DE SECRETÁRIA NO CHAT

Você realiza duas ações administrativas diretamente pelo chat:

#### AÇÃO 1: Agendar Aconselhamento Bíblico
Quando a pessoa pedir para **marcar/agendar um aconselhamento** (ou aceitar sua sugestão de conversar com o pastor):
1. Acolha a pessoa com esperança bíblica e explique que o aconselhamento na IB Farol é gratuito, confidencial e pode ser presencial na igreja ou online (~1h).
2. Se a pessoa ainda não informou os dados abaixo, peça de forma gentil e natural:
   - **Nome**
   - **Telefone/WhatsApp ou E-mail para contato**
   - **Preferência de formato (Presencial ou Online) e melhores dias/horários**
   - **Breve motivo ou assunto** (se ela já contou o problema na conversa, você já sabe o motivo e NÃO precisa pedir para ela repetir!)
3. **Assim que a pessoa informar pelo menos o Nome e um Contato**, confirme com carinho que você já registrou e encaminhou o pedido de agendamento ao Pr. Gustavo Santos, oriente que ela também pode escolher o horário exato no botão do Calendly que aparecerá abaixo, e **inclua OBRIGATORIAMENTE no final da sua resposta** esta tag exata em uma única linha:
[[ACTION:SCHEDULE_COUNSELING|{"name":"NOME_DA_PESSOA","contact":"TELEFONE_OU_EMAIL","modality":"Presencial ou Online","preferredTime":"DIAS_HORARIOS","reason":"RESUMO_DO_MOTIVO"}]]

#### AÇÃO 2: Enviar Mensagem ou Pedido de Oração ao Pastor Gustavo
Quando a pessoa quiser **enviar uma mensagem ao pastor, pedir oração, tirar uma dúvida pastoral ou avisar que vai visitar a igreja**:
1. Se ela ainda não informou os dados, peça com simpatia:
   - **Nome**
   - **Telefone/WhatsApp ou E-mail de retorno**
   - **A mensagem ou pedido de oração** (se ela já compartilhou o pedido de oração na conversa, aproveite o que ela já disse!)
2. **Assim que você tiver Nome, Contato e a Mensagem/Pedido**, confirme com carinho que a mensagem foi enviada diretamente para o Pr. Gustavo Santos (e faça uma breve oração escrita abençoando a vida dela!) e **inclua OBRIGATORIAMENTE no final da sua resposta** esta tag exata em uma única linha:
[[ACTION:MESSAGE_PASTOR|{"name":"NOME_DA_PESSOA","contact":"TELEFONE_OU_EMAIL","subject":"Mensagem pela Secretária Virtual","message":"CONTEUDO_DA_MENSAGEM"}]]

---
### 4. LEMBRETES FINAIS
- Só emita a tag \`[[ACTION:...]]\` quando o usuário já tiver fornecido seu nome e contato reais na conversa.
- Nunca dê respostas secas: seja sempre pastoral, centrada em Deus, cite a Escritura com esperança e mostre como a Igreja Batista Farol está de braços abertos para caminhar com a pessoa.`;
}

/**
 * Parses and strips any [[ACTION:TYPE|{json}]] tag from the assistant response.
 */
export function extractActionFromReply(rawReply: string): {
  cleanReply: string;
  action: SecretaryAction | null;
} {
  // Remove any <think>...</think> blocks (or unclosed <think> prefix) produced by reasoning models
  let cleaned = rawReply.replace(/<think>[\s\S]*?<\/think>/gi, "").trim();
  if (cleaned.toLowerCase().startsWith("<think>")) {
    cleaned = cleaned.replace(/^<think>/i, "").trim();
  }

  const actionRegex = /\[\[ACTION:(SCHEDULE_COUNSELING|MESSAGE_PASTOR)\|(\{[\s\S]*?\})\]\]/;
  const match = cleaned.match(actionRegex);

  if (!match) {
    return { cleanReply: cleaned, action: null };
  }

  const actionType = match[1] as SecretaryActionType;
  const jsonStr = match[2];
  cleaned = cleaned.replace(actionRegex, "").trim();

  try {
    const parsed = JSON.parse(jsonStr);
    if (actionType === "SCHEDULE_COUNSELING") {
      return {
        cleanReply: cleaned,
        action: {
          type: "SCHEDULE_COUNSELING",
          payload: {
            name: String(parsed.name || "").trim(),
            contact: String(parsed.contact || "").trim(),
            modality: String(parsed.modality || "A combinar").trim(),
            preferredTime: String(parsed.preferredTime || "A combinar").trim(),
            reason: String(parsed.reason || "Aconselhamento bíblico").trim(),
          },
        },
      };
    } else if (actionType === "MESSAGE_PASTOR") {
      return {
        cleanReply: cleaned,
        action: {
          type: "MESSAGE_PASTOR",
          payload: {
            name: String(parsed.name || "").trim(),
            contact: String(parsed.contact || "").trim(),
            subject: String(parsed.subject || "Mensagem via Secretária Virtual").trim(),
            message: String(parsed.message || "").trim(),
          },
        },
      };
    }
  } catch {
    // Ignore malformed JSON
  }

  return { cleanReply: cleaned, action: null };
}

/**
 * Contextual pastoral & church fallback responder (never resets the conversation).
 */
export function generateLocalFallbackReply(
  userMessage: string,
  locale: string = "pt-BR",
  isOngoingConversation: boolean = false
): string {
  const isEn = locale === "en";
  const q = userMessage
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  if (q.includes("aconselhamento") || q.includes("counseling") || q.includes("agendar") || q.includes("marcar")) {
    return isEn
      ? `We would love to walk alongside you in **Biblical Counseling** with **Pastor Gustavo Santos**!\n\nRemember what God's Word promises in **Matthew 11:28**: *"Come to me, all who labor and are heavy laden, and I will give you rest."*\n\nAt Farol Baptist Church, counseling is **100% free and confidential**, available in person or online (~1 hour). Please share with me:\n1. **Your name**\n2. **Your WhatsApp or email**\n3. **Preferred format (In-person or Online) & best days/times**\n4. **A brief summary of how we can help and pray for you**`
      : `Será uma alegria caminhar ao seu lado por meio do **Aconselhamento Bíblico** com o **Pr. Gustavo Santos**!\n\nLembre-se da promessa de Jesus em **Mateus 11.28 (NAA)**: *"Venham a mim todos vocês que estão cansados e sobrecarregados, e eu os aliviarei."*\n\nNa IB Farol, o aconselhamento é **100% gratuito e confidencial**, presencial na igreja ou online (~1 hora). Para eu registrar seu pedido agora mesmo, me informe aqui no chat (ou na aba **📅 Aconselhamento** acima):\n1. **Seu nome**\n2. **Seu WhatsApp ou e-mail**\n3. **Preferência (Presencial ou Online) e melhores dias/horários**\n4. **Em poucas palavras, como podemos ajudar e orar por você**`;
  }

  if (q.includes("pastor") || q.includes("gustavo") || q.includes("oracao") || q.includes("prayer") || q.includes("orar")) {
    return isEn
      ? `We want to pray with you and support you as a church! As **1 Peter 5:7** says: *"Casting all your anxieties on him, because he cares for you."*\n\nI can send your message or prayer request directly to **Pastor Gustavo Santos**. Just reply with:\n1. **Your name**\n2. **Your WhatsApp or email**\n3. **Your prayer request or message**`
      : `Nós, como igreja, queremos orar com você e caminhar ao seu lado! A Palavra de Deus nos lembra em **1 Pedro 5.7 (NAA)**: *"Lancem sobre ele toda a sua ansiedade, porque ele cuida de vocês."*\n\nPosso encaminhar sua mensagem ou pedido de oração diretamente para o **Pr. Gustavo Santos**. Basta me responder com:\n1. **Seu nome**\n2. **Seu WhatsApp ou e-mail para retorno**\n3. **Seu pedido de oração ou mensagem**`;
  }

  if (q.includes("horario") || q.includes("culto") || q.includes("domingo") || q.includes("programacao") || q.includes("agenda") || q.includes("ebd") || q.includes("time") || q.includes("schedule")) {
    return isEn
      ? `Here is our **Sunday & Monthly Schedule** at Farol Baptist Church:\n\n**Every Sunday:**\n- **9:00 AM – 10:00 AM:** Sunday School (EBD)\n- **10:00 AM – 10:15 AM:** Coffee & Fellowship\n- **10:15 AM – 11:30 AM:** Sunday Worship Service (with Farol Kids available)\n\n**Monthly / Weekly Fixed Schedule:**\n- **1st Sunday:** Lord's Supper (Communion)\n- **1st Wednesday (7:30 PM):** Prayer Meeting at the church\n- **Other Wednesdays (7:30 PM):** Small Groups (PGs)\n- **1st Saturday (2:00 PM):** Women's Meeting\n- **3rd Saturday (9:00 AM):** Men's Meeting\n- **Last Saturday:** Rest Saturday (free day)`
      : `Aqui estão os **Horários e Programação** da Igreja Batista Farol:\n\n**Todos os Domingos:**\n- **09h00 às 10h00:** Escola Bíblica Dominical (EBD)\n- **10h00 às 10h15:** Café e Comunhão\n- **10h15 às 11h30:** Culto Dominical (temos sala do **Farol Kids** para as crianças)\n\n**Programação Fixa Mensal / Semanal:**\n- **1º Domingo do mês:** Domingo de Ceia\n- **1ª Quarta-feira do mês (19h30):** Reunião de Oração (na igreja)\n- **Demais Quartas-feiras (19h30):** Pequenos Grupos (PGs)\n- **1º Sábado do mês (14h00):** Reunião das Mulheres\n- **3º Sábado do mês (09h00):** Reunião dos Homens\n- **Último Sábado do mês:** Sábado de Descanso`;
  }

  if (q.includes("endereco") || q.includes("onde") || q.includes("local") || q.includes("chegar") || q.includes("address") || q.includes("location")) {
    return isEn
      ? `We are located in the northern area of São José dos Campos:\n\n📍 **${CHURCH_CONSTANTS.address}**\n\n📱 **WhatsApp:** ${CHURCH_CONSTANTS.phoneDisplay}\n✉️ **Email:** ${CHURCH_CONSTANTS.generalEmail}`
      : `Estamos localizados na zona norte de São José dos Campos:\n\n📍 **${CHURCH_CONSTANTS.address}**\n\n📱 **WhatsApp:** ${CHURCH_CONSTANTS.phoneDisplay}\n✉️ **E-mail:** ${CHURCH_CONSTANTS.generalEmail}`;
  }

  if (q.includes("pix") || q.includes("dizimo") || q.includes("oferta") || q.includes("contribu") || q.includes("banco") || q.includes("give") || q.includes("tithe")) {
    return isEn
      ? `Here is the information for **Giving & Offerings** (\`/contribua\`):\n\n- **PIX Key (CNPJ):** \`${CHURCH_CONSTANTS.pixCnpj}\`\n- **PIX Key (Email):** \`${CHURCH_CONSTANTS.offeringsEmail}\`\n- **Bank Account:** ${CHURCH_CONSTANTS.bankInfo}`
      : `Aqui estão os dados para **Dízimos e Ofertas** (também disponíveis na página \`/contribua\`):\n\n- **Chave PIX (CNPJ):** \`${CHURCH_CONSTANTS.pixCnpj}\`\n- **Chave PIX (E-mail):** \`${CHURCH_CONSTANTS.offeringsEmail}\`\n- **Dados Bancários:** ${CHURCH_CONSTANTS.bankInfo}`;
  }

  if (q.includes("leitura") || q.includes("plano") || q.includes("reading") || q.includes("biblia")) {
    const planText = formatReadingPlanSummary(locale);
    return isEn
      ? `Here is our **Current Weekly Bible Reading Plan**:\n\n${planText}\n\nYou can also view the full archive on the \`/recursos\` page!`
      : `Aqui está o nosso **Plano de Leitura Bíblica da Semana**:\n\n${planText}\n\nVocê também pode consultar todas as semanas anteriores na página \`/recursos\`!`;
  }

  if (q.includes("ministerio") || q.includes("servir") || q.includes("kids") || q.includes("jovens") || q.includes("louvor") || q.includes("ministries")) {
    return isEn
      ? `Our ministries at **IB Farol** (\`/ministerios\`):\n\n**Inside the Church:**\n- **.JPEG (Youth):** Gustavo\n- **Farol Kids (Children):** Débora\n- **Worship:** Gustavo\n- **Women:** Amanda\n- **Men:** Gustavo\n- **Integration:** Stephanie\n- **Deacons:** Gustavo\n- **Events:** Rose\n- **Media:** Talita | **Sound & Multimedia:** William | **Maintenance:** Marco\n\n**Outreach:**\n- **Community Action:** Steve\n- **Ágape Project:** Mafê\n- **Jiu-jitsu:** Emerson`
      : `Estes são os ministérios da **IB Farol** (página \`/ministerios\`):\n\n**Dentro da Igreja:**\n- **.JPEG (Jovens):** Líder Gustavo\n- **Farol Kids (Infantil):** Líder Débora\n- **Louvor:** Líder Gustavo\n- **Mulheres:** Líder Amanda\n- **Homens:** Líder Gustavo\n- **Integração:** Líder Stephanie\n- **Diaconia:** Líder Gustavo\n- **Eventos:** Líder Rose\n- **Mídia:** Líder Talita | **Som e Multimídia:** Líder William | **Manutenção:** Líder Marco\n\n**Para Fora (Comunidade):**\n- **Ação Comunitária:** Líder Steve\n- **Projeto Ágape:** Líder Mafê\n- **Jiu-jitsu:** Líder Emerson`;
  }

  if (q.includes("membro") || q.includes("classe") || q.includes("integracao") || q.includes("member")) {
    return isEn
      ? `Our **New Members Class** (\`/novosmembros\`) is a 2-month course covering 10 topics: *The Gospel, The Bible, The Heart, The Family, The Mission, The Church, Change, Suffering, Gifts, and Resources*.\n\nYou can sign up here: ${CHURCH_CONSTANTS.newMembersFormUrl}`
      : `A nossa **Classe de Novos Membros** (\`/novosmembros\`) dura 2 meses e aborda 10 temas essenciais: *O Evangelho, A Bíblia, O Coração, A Família, A Missão, A Igreja, A Mudança, O Sofrimento, Os Dons e Os Recursos*.\n\n- **Inscrição online:** ${CHURCH_CONSTANTS.newMembersFormUrl}\n- **Apostila em PDF:** Disponível gratuitamente na Biblioteca em \`/recursos\`.`;
  }

  // If already in an ongoing conversation, never reset with "Olá! Sou a Clara..."
  if (isOngoingConversation) {
    return isEn
      ? `Thank you for opening your heart. Remember that you don't have to carry this burden alone — in Christ there is true hope, grace, and restoration. As **Psalm 34:18** says:\n\n*"The LORD is near to the brokenhearted and saves the crushed in spirit."* And in **Philippians 4:6–7**, God invites us to bring everything to Him in prayer, promising that *"the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus."*\n\nAs a church, we want to walk closely with you in this moment. Would you like me to **schedule a Biblical Counseling conversation with Pastor Gustavo Santos** or **send a prayer request directly to him**? If so, just share your **name** and **WhatsApp/email** here!`
      : `Muito obrigada por abrir o seu coração conosco. Saiba que você não precisa carregar esse fardo sozinho(a) — em Jesus Cristo há esperança verdadeira, graça, perdão e restauração. A Palavra de Deus nos consola em **Salmos 34.18 (NAA)**:\n\n*"Perto está o Senhor dos que têm o coração quebrantado e salva os de espírito oprimido."*\n\nE em **Filipenses 4.6–7 (NAA)**, o Senhor nos convida:\n*"Não fiquem ansiosos por coisa alguma; pelo contrário, em tudo, sejam conhecidos diante de Deus os seus pedidos, pela oração e pela súplica, com ações de graças. E a paz de Deus, que excede todo o entendimento, guardará o coração e a mente de vocês em Cristo Jesus."*\n\nComo igreja, nós queremos caminhar de perto com você. Você gostaria que eu **agendasse um Aconselhamento Bíblico gratuito com o Pr. Gustavo Santos** ou que eu **enviasse seu pedido de oração diretamente para ele**? Se quiser, basta me dizer o seu **nome** e o seu **WhatsApp ou e-mail** aqui mesmo!`;
  }

  return isEn
    ? `Hello! I'm **Clara**, Farol Baptist Church's virtual secretary. I can help you with:\n\n- 🙏 **Spiritual support, prayer & Biblical Counseling** with Pastor Gustavo\n- 🕒 **Service times & Location** (Sundays: EBD at 9:00 AM, Service at 10:15 AM)\n- ✉️ **Sending a message or prayer request** to Pastor Gustavo\n- 📖 **Weekly Bible Reading Plan**, Sermons, EBD & Books\n- 🤝 **Ministries, Small Groups & New Members Class**\n\nHow can we walk alongside you today?`
    : `Olá! Sou a **Clara**, secretária virtual da **Igreja Batista Farol**. Posso ajudar você com:\n\n- 🙏 **Apoio espiritual, oração e Aconselhamento Bíblico** com o Pr. Gustavo\n- 🕒 **Horários e Endereço** (Domingos: EBD às 9h, Café às 10h, Culto às 10h15)\n- ✉️ **Enviar mensagem ou pedido de oração** ao Pr. Gustavo\n- 📖 **Plano de Leitura da Semana**, Sermões, EBD e Livros\n- 🤝 **Ministérios, Pequenos Grupos e Classe de Novos Membros**\n\nComo podemos caminhar com você hoje?`;
}
