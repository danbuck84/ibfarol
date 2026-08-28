const fs = require('fs');
const https = require('https');

const library = [
  {
    category: "Comece Por Aqui",
    books: [
      { title: "O que é o Evangelho?", author: "Greg Gilbert" },
      { title: "Cristianismo Puro e Simples", author: "C. S. Lewis" },
      { title: "A Cruz de Cristo", author: "John Stott" }
    ]
  },
  {
    category: "Conhecendo a Deus",
    books: [
      { title: "Conhecendo a Deus", author: "J. I. Packer" },
      { title: "Teologia Concisa", author: "J. I. Packer" },
      { title: "O Conhecimento do Deus Santo", author: "A. W. Tozer" },
      { title: "Manso e Humilde", author: "Dane Ortlund" }
    ]
  },
  {
    category: "Como Estudar a Bíblia",
    books: [
      { title: "Entendes o que Lês?", author: "Gordon Fee e Douglas Stuart" },
      { title: "Como Ler a Bíblia Livro por Livro", author: "Fee e Stuart" },
      { title: "Mulheres da Palavra", author: "Jen Wilkin" },
      { title: "Levando Deus a Sério", author: "Kevin DeYoung" }
    ]
  },
  {
    category: "Vida Devocional e Disciplinas Espirituais",
    books: [
      { title: "Disciplinas Espirituais para a Vida Cristã", author: "Donald Whitney" },
      { title: "O Vale da Visão", author: "orações puritanas" },
      { title: "Não Desperdice Sua Vida", author: "John Piper" },
      { title: "Brecha em Nossa Santidade", author: "Kevin DeYoung" },
      { title: "Faça Alguma Coisa", author: "Kevin DeYoung" },
      { title: "A Vida Centrada no Evangelho", author: "Robert Thune e Will Walker" }
    ]
  },
  {
    category: "Casamento",
    books: [
      { title: "O Significado do Casamento", author: "Timothy e Kathy Keller" },
      { title: "Quando Pecadores Dizem \"Sim\"", author: "Dave Harvey" }
    ]
  },
  {
    category: "Filhos e Parentalidade",
    books: [
      { title: "Desafio aos Pais", author: "Paul David Tripp" },
      { title: "Pastores da Família", author: "Voddie Baucham" },
      { title: "Pastoreando o Coração da Criança", author: "Tedd Tripp" }
    ]
  },
  {
    category: "Sofrimento, Ansiedade e Medo",
    books: [
      { title: "Confiando em Deus", author: "Jerry Bridges" },
      { title: "Como Vencer o Medo e a Ansiedade", author: "Edward Welch" },
      { title: "A Resposta do Evangelho às Aflições do Coração", author: "Robert Jones, Robert Green e Kristin Kellen" },
      { title: "O Segredo do Contentamento", author: "William Barcley" }
    ]
  },
  {
    category: "O Coração e a Mudança",
    books: [
      { title: "Instrumentos nas Mãos do Redentor", author: "Paul David Tripp" },
      { title: "O Coração Dinâmico na Vida Diária", author: "Jeremy Pierre" },
      { title: "Quando as Pessoas São Grandes e Deus é Pequeno", author: "Edward Welch" },
      { title: "O Desejo de Agradar Outros", author: "Edward Welch" }
    ]
  },
  {
    category: "Pureza Sexual",
    books: [
      { title: "Finalmente Livre", author: "Heath Lambert" },
      { title: "Com Toda Pureza", author: "Tim Chester" },
      { title: "Desintoxicação Sexual", author: "Tim Challies" }
    ]
  },
  {
    category: "Dinheiro",
    books: [
      { title: "Dinheiro, Posses e Eternidade", author: "Randy Alcorn" }
    ]
  },
  {
    category: "Para as Crianças",
    books: [
      { title: "A Bíblia de Histórias de Jesus", author: "Sally Lloyd-Jones" },
      { title: "Série Boas-Novas para os Coraçõezinhos", author: "Editora Fiel" },
      { title: "Grandes Verdades para Corações Pequenos", author: "Carine Mackenzie" },
      { title: "Novo Catecismo", author: "52 perguntas e respostas" }
    ]
  }
];

function fetchCover(title, author) {
  return new Promise((resolve) => {
    const query = encodeURIComponent(`${title} ${author}`);
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=1`;
    
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json.items && json.items.length > 0 && json.items[0].volumeInfo.imageLinks) {
            let thumb = json.items[0].volumeInfo.imageLinks.thumbnail;
            thumb = thumb.replace('http:', 'https:');
            resolve(thumb);
          } else {
            resolve(null);
          }
        } catch(e) {
          resolve(null);
        }
      });
    }).on('error', () => resolve(null));
  });
}

async function run() {
  for (let section of library) {
    for (let book of section.books) {
      console.log(`Fetching: ${book.title}...`);
      book.cover = await fetchCover(book.title, book.author);
      // Wait a bit to avoid rate limits
      await new Promise(r => setTimeout(r, 500));
    }
  }
  fs.writeFileSync('src/data/books.json', JSON.stringify(library, null, 2));
  console.log('Done!');
}

run();
