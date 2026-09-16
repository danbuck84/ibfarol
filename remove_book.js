const fs = require('fs');
const file = 'src/data/books.json';
let data = JSON.parse(fs.readFileSync(file, 'utf8'));

for (const section of data) {
    if (section.category === "Para as Crianças") {
        section.books = section.books.filter(b => b.title !== "Grandes Verdades para Corações Pequenos");
    }
}

fs.writeFileSync(file, JSON.stringify(data, null, 2));
