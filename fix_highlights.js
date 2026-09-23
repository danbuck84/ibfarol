const fs = require('fs');

let code = fs.readFileSync('src/components/HighlightsCarousel.tsx', 'utf8');

// The closing tag for Reading Plan is currently </a>
// Let's find it. It's the last </a> before the end of the divs.
// Just a simple regex to replace the specific </a> after "Acessar</span>"
code = code.replace(/Acessar<\/span>\s*<\/div>\s*<\/a>/g, 'Acessar</span>\n                </div>\n              </Link>');

fs.writeFileSync('src/components/HighlightsCarousel.tsx', code);
