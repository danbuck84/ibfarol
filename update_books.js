const fs = require('fs');
const file = 'src/data/books.json';
let data = JSON.parse(fs.readFileSync(file, 'utf8'));

const updates = {
  "O Conhecimento do Deus Santo": "https://m.media-amazon.com/images/I/516cmvGM7wL.jpg",
  "Não Desperdice Sua Vida": "https://m.media-amazon.com/images/I/81POPliD+OL.jpg",
  "A Vida Centrada no Evangelho": "https://m.media-amazon.com/images/I/61P-GF08+TL.jpg",
  "Confiando em Deus": "https://m.media-amazon.com/images/I/61LJwCNxvDL.jpg",
  "Como Vencer o Medo e a Ansiedade": "https://m.media-amazon.com/images/I/61YQsM+2hFL.jpg"
};

for (const section of data) {
  for (const book of section.books) {
    if (updates[book.title]) {
      book.cover = updates[book.title];
    }
  }
}

fs.writeFileSync(file, JSON.stringify(data, null, 2));
