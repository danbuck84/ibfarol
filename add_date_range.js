const fs = require('fs');
const file = 'src/data/readingPlans.ts';
let content = fs.readFileSync(file, 'utf8');

// The original dates we had:
const dateRanges = {
  "2026-23": "(15/06 a 21/06)",
  "2026-24": "(22/06 a 28/06)",
  "2026-25": "(29/06 a 05/07)",
  "2026-26": "(06/07 a 12/07)",
  "2026-27": "(13/07 a 19/07)",
  "2026-28": "(20/07 a 26/07)",
  "2026-29": "(27/07 a 02/08)",
  "2026-30": "(03/08 a 09/08)",
  "2026-31": "(10/08 a 16/08)",
  "2026-32": "(17/08 a 23/08)",
  "2026-33": "(24/08 a 30/08)",
  "2026-34": "(31/08 a 06/09)",
  "2026-35": "(07/09 a 13/09)",
  "2026-36": "(14/09 a 20/09)"
};

// First add the field to the typescript type
content = content.replace('subtitle: string;', 'subtitle: string;\n  dateRange?: string;');

// Then add the field to each json entry
for (const id in dateRanges) {
  const dateRange = dateRanges[id];
  // Regex to find the id and insert dateRange after subtitle
  const regex = new RegExp(`("?id"?:\\s*"${id}".*?"subtitle":\\s*"Semana \\d+",?)`, 's');
  content = content.replace(regex, `$1\n    "dateRange": "${dateRange}",`);
}

fs.writeFileSync(file, content);
