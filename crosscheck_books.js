const fs = require('fs');

const userList = `
*COMECE POR AQUI*
O que é o Evangelho? — Greg Gilbert
Cristianismo Puro e Simples — C. S. Lewis
A Cruz de Cristo — John Stott

*CONHECENDO A DEUS*
Conhecendo a Deus — J. I. Packer
Teologia Concisa — J. I. Packer
O Conhecimento do Deus Santo — A. W. Tozer
Manso e Humilde — Dane Ortlund

*COMO ESTUDAR A BÍBLIA*
Entendes o que Lês? — Gordon Fee e Douglas Stuart
Como Ler a Bíblia Livro por Livro — Fee e Stuart
Mulheres da Palavra — Jen Wilkin
Levando Deus a Sério — Kevin DeYoung

*VIDA DEVOCIONAL E DISCIPLINAS ESPIRITUAIS*
Disciplinas Espirituais para a Vida Cristã — Donald Whitney
O Vale da Visão — orações puritanas
Não Desperdice Sua Vida — John Piper
Brecha em Nossa Santidade — Kevin DeYoung
Faça Alguma Coisa — Kevin DeYoung
A Vida Centrada no Evangelho — Robert Thune e Will Walker

*CASAMENTO*
O Significado do Casamento — Timothy e Kathy Keller
Quando Pecadores Dizem "Sim" — Dave Harvey

*FILHOS E PARENTALIDADE*
Desafio aos Pais — Paul David Tripp
Pastores da Família — Voddie Baucham
Pastoreando o Coração da Criança — Tedd Tripp

*SOFRIMENTO, ANSIEDADE E MEDO*
Confiando em Deus — Jerry Bridges
Como Vencer o Medo e a Ansiedade — Edward Welch
A Resposta do Evangelho às Aflições do Coração — Robert Jones, Robert Green e Kristin Kellen
O Segredo do Contentamento — William Barcley

*O CORAÇÃO E A MUDANÇA*
Instrumentos nas Mãos do Redentor — Paul David Tripp
O Coração Dinâmico na Vida Diária — Jeremy Pierre
Quando as Pessoas São Grandes e Deus é Pequeno — Edward Welch
O Desejo de Agradar Outros — Edward Welch

*PUREZA SEXUAL*
Finalmente Livre — Heath Lambert
Com Toda Pureza — Tim Chester
Desintoxicação Sexual — Tim Challies

*DINHEIRO*
Dinheiro, Posses e Eternidade — Randy Alcorn

*PARA AS CRIANÇAS*
A Bíblia de Histórias de Jesus — Sally Lloyd-Jones
Série Boas-Novas para os Coraçõezinhos — Editora Fiel (série completa)
Grandes Verdades para Corações Pequenos — Carine Mackenzie
Novo Catecismo — 52 perguntas e respostas, uma por semana
`;

// 1. Read existing
const oldData = JSON.parse(fs.readFileSync('src/data/books.json', 'utf8'));
const oldCovers = {};
for (const section of oldData) {
    for (const b of section.books) {
        // Strip spaces for matching
        const key = b.title.toLowerCase().trim();
        oldCovers[key] = b.cover;
    }
}

// 2. Parse new list
const newData = [];
let currentSection = null;

const lines = userList.trim().split('\n').map(l => l.trim()).filter(l => l.length > 0);
for (const line of lines) {
    if (line.startsWith('*') && line.endsWith('*')) {
        let cat = line.replace(/\*/g, '');
        // Title case the category (except some words if needed, but let's just make it title case)
        cat = cat.toLowerCase().split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        // Fix up small words
        cat = cat.replace(' A ', ' a ').replace(' E ', ' e ').replace(' Por ', ' por ').replace(' Para ', ' para ').replace(' As ', ' as ').replace(' Os ', ' os ').replace(' Da ', ' da ').replace(' Do ', ' do ').replace(' Às ', ' às ');
        // Capitalize first letter again just in case
        cat = cat.charAt(0).toUpperCase() + cat.slice(1);
        
        currentSection = { category: cat, books: [] };
        newData.push(currentSection);
    } else if (line.includes('—')) {
        const parts = line.split('—');
        const title = parts[0].trim();
        const author = parts[1].trim();
        const key = title.toLowerCase();
        let cover = oldCovers[key] || "";
        currentSection.books.push({ title, author, cover });
    } else if (line.includes('-')) { // just in case
        const parts = line.split('-');
        const title = parts[0].trim();
        const author = parts[1].trim();
        const key = title.toLowerCase();
        let cover = oldCovers[key] || "";
        currentSection.books.push({ title, author, cover });
    }
}

// 3. Write back
fs.writeFileSync('src/data/books.json', JSON.stringify(newData, null, 2));

// 4. Output missing covers
const missing = [];
for (const sec of newData) {
    for (const b of sec.books) {
        if (!b.cover) missing.push(b.title + " " + b.author);
    }
}
console.log("Missing covers for:");
console.log(missing.join('\n'));
