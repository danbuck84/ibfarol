const fs = require('fs');
const file = 'src/data/readingPlans.ts';
let content = fs.readFileSync(file, 'utf8');

// The string replacements
const replacements = [
  ["Semana 23 (15 a 21 de junho)", "Semana 23 (15/06 a 21/06)"],
  ["Semana 24 (22 a 28 de junho)", "Semana 24 (22/06 a 28/06)"],
  ["Semana 25 (29 de junho a 5 de julho)", "Semana 25 (29/06 a 05/07)"],
  ["Semana 26 (6 a 12 de julho)", "Semana 26 (06/07 a 12/07)"],
  ["Semana 27 (13 a 19 de julho)", "Semana 27 (13/07 a 19/07)"],
  ["Semana 28 (20 a 26 de julho)", "Semana 28 (20/07 a 26/07)"],
  ["Semana 29 (27 de julho a 2 de agosto)", "Semana 29 (27/07 a 02/08)"],
  ["Semana 30 (3 a 9 de agosto)", "Semana 30 (03/08 a 09/08)"],
  ["Semana 31 (10 a 16 de agosto)", "Semana 31 (10/08 a 16/08)"],
  ["Semana 32 (17 a 23 de agosto)", "Semana 32 (17/08 a 23/08)"],
  ["Semana 33 (24 a 30 de agosto)", "Semana 33 (24/08 a 30/08)"],
  ["Semana 34 — 31 de agosto a 6 de setembro", "Semana 34 (31/08 a 06/09)"],
  ["Semana 35 — 7 a 13 de setembro", "Semana 35 (07/09 a 13/09)"],
  ["Semana 36 — 14 a 20 de setembro", "Semana 36 (14/09 a 20/09)"]
];

for (const [oldStr, newStr] of replacements) {
  content = content.replace(oldStr, newStr);
}

fs.writeFileSync(file, content);
