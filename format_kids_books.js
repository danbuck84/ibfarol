const fs = require('fs');
const file = 'src/data/books.json';
let data = JSON.parse(fs.readFileSync(file, 'utf8'));

let childrenSection = data.find(s => s.category === "Para as Crianças");

// The final cleaned up array of books the user wants in "Para as Crianças":
const cleanedBooks = [
    // The first 4 they requested previously
    ...childrenSection.books.slice(0, 4),
    // The newly added ones with proper names
    { title: "O Jardim, a Cortina e a Cruz", author: "Carl Laferton", cover: childrenSection.books.find(b => b.title.includes("O Jardim, a Cortina"))?.cover },
    { title: "A Tempestade que Parou", author: "Alison Mitchell", cover: childrenSection.books.find(b => b.title.includes("A Tempestade que Parou"))?.cover },
    { title: "Vai dar tudo certo", author: "Lysa Terkeurst", cover: childrenSection.books.find(b => b.title.includes("Vai dar tudo certo"))?.cover },
    { title: "A maior de todas as histórias", author: "Kevin DeYoung", cover: childrenSection.books.find(b => b.title.includes("maior de todas as"))?.cover },
    { title: "A Grande Ideia de Deus", author: "Trillia Newbell", cover: childrenSection.books.find(b => b.title.includes("GRANDE IDEIA DE DEUS"))?.cover },
    { title: "Jesus e a Cova dos Leões", author: "Alison Mitchell", cover: childrenSection.books.find(b => b.title.includes("Cova dos Leões"))?.cover },
    { title: "Samuca e seu Pastor", author: "Susan Hunt", cover: childrenSection.books.find(b => b.title.includes("Samuca e seu Pastor"))?.cover },
    { title: "O pequeno peregrino ilustrado", author: "Helen L. Taylor", cover: childrenSection.books.find(b => b.title.includes("pequeno peregrino ilustrado"))?.cover },
    { title: "Jesus e a Grande Surpresa", author: "Carl Laferton", cover: childrenSection.books.find(b => b.title.includes("Jesus e a Grande Surpresa"))?.cover },
    { title: "A festa incrível e super fantástica que nunca acaba", author: "Joni Eareckson Tada", cover: childrenSection.books.find(b => b.title.includes("festa incrível"))?.cover },
    { title: "Jesus e o presente da amizade", author: "Jared Kennedy", cover: childrenSection.books.find(b => b.title.includes("presente da amizade"))?.cover },
    { title: "Será que Deus tira férias?", author: "Amy Gannett", cover: childrenSection.books.find(b => b.title.includes("tira férias"))?.cover },
    { title: "Será que Deus dorme?", author: "Amy Gannett", cover: childrenSection.books.find(b => b.title.includes("dorme?"))?.cover },
    { title: "Será que Deus aprendeu a ler?", author: "Amy Gannett", cover: childrenSection.books.find(b => b.title.includes("aprendeu a ler"))?.cover }
];

childrenSection.books = cleanedBooks.filter(b => b.cover); // ensure we found them

fs.writeFileSync(file, JSON.stringify(data, null, 2));
