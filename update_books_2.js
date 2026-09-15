const fs = require('fs');
const file = 'src/data/books.json';
let data = JSON.parse(fs.readFileSync(file, 'utf8'));

const updates = {
  "Quando as Pessoas São Grandes e Deus é Pequeno": "https://m.media-amazon.com/images/I/615hBhZBsfL.jpg",
  "Dinheiro, Posses e Eternidade": "https://m.media-amazon.com/images/I/71JD8ua9UEL.jpg",
  "Série Boas-Novas para os Coraçõezinhos": "https://m.media-amazon.com/images/I/912Dm4ADhCL.jpg",
  "A Bíblia de Histórias de Jesus": "https://m.media-amazon.com/images/I/61kC4R9ZLmL.jpg",
  "Grandes Verdades para Corações Pequenos": "https://m.media-amazon.com/images/I/7195lL+OFAL.jpg"
};

for (const section of data) {
  for (const book of section.books) {
    if (updates[book.title]) {
      book.cover = updates[book.title];
    }
  }
}

fs.writeFileSync(file, JSON.stringify(data, null, 2));
