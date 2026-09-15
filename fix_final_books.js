const fs = require('fs');
const file = 'src/data/books.json';
let data = JSON.parse(fs.readFileSync(file, 'utf8'));

for (const section of data) {
    if (section.category === "Para as Crianças") {
        for (const book of section.books) {
            if (book.title === "A Bíblia de Histórias de Jesus") {
                book.title = "Livro de Histórias Bíblicas de Jesus";
            }
            if (book.title === "Série Boas-Novas para os Coraçõezinhos") {
                book.cover = "/boas-novas-serie.jpg";
            }
            if (book.title === "Novo Catecismo") {
                book.author = "52 perguntas e respostas";
            }
        }
    }
}

fs.writeFileSync(file, JSON.stringify(data, null, 2));
