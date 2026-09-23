const fs = require('fs');

const pt = JSON.parse(fs.readFileSync('messages/pt-BR.json', 'utf8'));
const en = JSON.parse(fs.readFileSync('messages/en.json', 'utf8'));

// Contribua
pt.Contribua = {
  title: "Contribua",
  desc1: "A Igreja Batista Farol se sustenta pelas ofertas dos seus membros. É assim que a gente paga as contas, mantém o trabalho de ensino, cuida das pessoas e sustenta os ministérios da igreja.",
  desc2: "Mas se você não é membro daqui e quer contribuir, sua oferta é muito bem-vinda. Talvez você tenha sido abençoado por uma pregação, esteja acompanhando a igreja de longe ou simplesmente queira somar com o que Deus está fazendo por aqui. Toda oferta ajuda a igreja a seguir anunciando o evangelho e alcançando mais pessoas com ele.",
  desc3: "Contribuir não é pagar por um serviço religioso. É participar de uma obra que é de Deus, com aquilo que ele mesmo colocou nas nossas mãos.",
  biblical_title: "O que a Bíblia ensina sobre contribuição",
  regular: "Regular",
  regular_verse: '\"No primeiro dia da semana, cada um de vocês separe uma quantia…\" (1 Coríntios 16.2)',
  proportional: "Proporcional",
  proportional_verse: '\"…conforme a sua prosperidade…\" (1 Coríntios 16.2)',
  sacrificial: "Sacrificial",
  sacrificial_verse: '\"…mesmo em meio à extrema pobreza transbordaram em rica generosidade.\" (2 Coríntios 8.2)',
  voluntary: "Voluntária",
  voluntary_verse: '\"Cada um contribua segundo tiver proposto no coração…\" (2 Coríntios 9.7a)',
  joyful: "Alegre",
  joyful_verse: '\"…não com tristeza ou por necessidade; porque Deus ama quem dá com alegria.\" (2 Coríntios 9.7b)',
  motivated: "Motivada pelo evangelho",
  motivated_verse: '\"Pois vocês conhecem a graça de nosso Senhor Jesus Cristo…\" (2 Coríntios 8.9)',
  card_title: "Dados para Contribuição",
  cnpj_label: "Chave PIX — CNPJ",
  email_label: "Chave PIX — E-mail",
  bank_label: "Conta Bancária",
  bank_name: "Igreja Batista Farol",
  bank_cora: "Banco Cora",
  bank_agency: "Agência: 0001",
  bank_account: "Conta: 6096127-6",
  copy_cnpj: "Copiar CNPJ",
  copy_email: "Copiar E-mail"
};

en.Contribua = {
  title: "Give",
  desc1: "Farol Baptist Church is sustained by the offerings of its members. This is how we pay the bills, maintain our teaching ministry, care for people, and support the church's ministries.",
  desc2: "But if you are not a member here and want to contribute, your offering is very welcome. Perhaps you have been blessed by a sermon, are following the church from afar, or simply want to join in what God is doing here. Every offering helps the church continue to proclaim the gospel and reach more people with it.",
  desc3: "Giving is not paying for a religious service. It is participating in a work that belongs to God, using what He Himself has placed in our hands.",
  biblical_title: "What the Bible teaches about giving",
  regular: "Regular",
  regular_verse: '\"On the first day of every week, each one of you should set aside a sum of money in keeping with your income…\" (1 Corinthians 16:2)',
  proportional: "Proportional",
  proportional_verse: '\"…in keeping with your income…\" (1 Corinthians 16:2)',
  sacrificial: "Sacrificial",
  sacrificial_verse: '\"…their extreme poverty welled up in rich generosity.\" (2 Corinthians 8:2)',
  voluntary: "Voluntary",
  voluntary_verse: '\"Each of you should give what you have decided in your heart to give…\" (2 Corinthians 9:7a)',
  joyful: "Joyful",
  joyful_verse: '\"…not reluctantly or under compulsion, for God loves a cheerful giver.\" (2 Corinthians 9:7b)',
  motivated: "Motivated by the gospel",
  motivated_verse: '\"For you know the grace of our Lord Jesus Christ…\" (2 Corinthians 8:9)',
  card_title: "Giving Details",
  cnpj_label: "PIX Key — CNPJ",
  email_label: "PIX Key — E-mail",
  bank_label: "Bank Account",
  bank_name: "Igreja Batista Farol",
  bank_cora: "Banco Cora",
  bank_agency: "Agency: 0001",
  bank_account: "Account: 6096127-6",
  copy_cnpj: "Copy CNPJ",
  copy_email: "Copy E-mail"
};

// CookieBanner
pt.CookieBanner = {
  title: "Nós valorizamos sua privacidade",
  desc: "Utilizamos cookies essenciais para o funcionamento do site e cookies analíticos para entender como você interage com nosso conteúdo. Você pode aceitar todos os cookies ou configurar suas preferências.",
  btn_config: "Configurar",
  btn_essential: "Apenas Essenciais",
  btn_all: "Aceitar Todos",
  pref_title: "Preferências de Privacidade",
  pref_desc: "Escolha quais cookies você permite que sejam armazenados.",
  ess_title: "Cookies Estritamente Necessários (Essenciais)",
  ess_desc: "Sempre ativos. São necessários para o site funcionar e não podem ser desligados.",
  analyt_title: "Cookies de Desempenho e Analytics",
  analyt_desc: "Ajudam-nos a entender como os visitantes interagem com o site, coletando informações anonimamente.",
  btn_back: "Voltar",
  btn_save: "Salvar Minhas Escolhas"
};

en.CookieBanner = {
  title: "We value your privacy",
  desc: "We use essential cookies for the site to function and analytics cookies to understand how you interact with our content. You can accept all cookies or configure your preferences.",
  btn_config: "Configure",
  btn_essential: "Essential Only",
  btn_all: "Accept All",
  pref_title: "Privacy Preferences",
  pref_desc: "Choose which cookies you allow to be stored.",
  ess_title: "Strictly Necessary Cookies (Essential)",
  ess_desc: "Always active. These are necessary for the site to function and cannot be switched off.",
  analyt_title: "Performance and Analytics Cookies",
  analyt_desc: "Help us understand how visitors interact with the site by collecting information anonymously.",
  btn_back: "Back",
  btn_save: "Save My Choices"
};

fs.writeFileSync('messages/pt-BR.json', JSON.stringify(pt, null, 2));
fs.writeFileSync('messages/en.json', JSON.stringify(en, null, 2));
