const fs = require('fs');
const file = 'src/data/books.json';
let data = JSON.parse(fs.readFileSync(file, 'utf8'));

for (const section of data) {
  for (const book of section.books) {
    if (book.title === "Novo Catecismo") {
      book.cover = "https://m.media-amazon.com/images/I/511XUMxc6ML.jpg";
    }
  }
}

fs.writeFileSync(file, JSON.stringify(data, null, 2));
