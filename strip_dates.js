const fs = require('fs');
const file = 'src/data/readingPlans.ts';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/"subtitle":\s*"Semana\s+(\d+).*?"/g, '"subtitle": "Semana $1"');

fs.writeFileSync(file, content);
