const fs = require('fs');

const pt = JSON.parse(fs.readFileSync('messages/pt-BR.json', 'utf8'));
const en = JSON.parse(fs.readFileSync('messages/en.json', 'utf8'));

function compare(ptObj, enObj, path = '') {
    for (const key in ptObj) {
        if (!enObj[key]) {
            console.log(`Missing key in EN: ${path}${key}`);
            continue;
        }
        
        if (typeof ptObj[key] === 'object' && ptObj[key] !== null) {
            compare(ptObj[key], enObj[key], path + key + '.');
        } else {
            if (ptObj[key] === enObj[key]) {
                console.log(`Identical translation: ${path}${key} -> "${ptObj[key]}"`);
            }
        }
    }
}

compare(pt, en);
