const fs = require('fs');
const file = 'src/components/ReadingPlan.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  /<p className="mt-3 text-lg text-brand-body font-medium">\s*\{plan\.subtitle\}\s*<\/p>/,
  `<p className="mt-3 text-lg text-brand-body font-medium flex flex-col items-center">
            <span>{plan.subtitle}</span>
            {plan.dateRange && <span className="text-sm font-normal text-brand-mute mt-1">{plan.dateRange}</span>}
          </p>`
);

content = content.replace(
  /<h3 className="text-xl font-bold text-brand-ink mb-6 text-center">\{plan\.subtitle\}<\/h3>/,
  `<div className="text-center mb-6">
          <h3 className="text-xl font-bold text-brand-ink">{plan.subtitle}</h3>
          {plan.dateRange && <p className="text-sm font-normal text-brand-mute mt-1">{plan.dateRange}</p>}
        </div>`
);

content = content.replace(
  /<span>\{plan\.subtitle\}<\/span>/,
  `<div className="flex flex-col">
                            <span>{plan.subtitle}</span>
                            {plan.dateRange && <span className="text-sm font-normal text-brand-mute mt-1">{plan.dateRange}</span>}
                          </div>`
);

fs.writeFileSync(file, content);
