const fs = require('fs');
const file = 'src/data/readingPlans.ts';
let content = fs.readFileSync(file, 'utf8');

content = content.replace('subtitle: "Semana 23",', 'subtitle: "Semana 23",\n    dateRange: "(15/06 a 21/06)",');

fs.writeFileSync(file, content);
