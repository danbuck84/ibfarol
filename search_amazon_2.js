const https = require('https');

const queries = [
    "Quando as Pessoas São Grandes e Deus é Pequeno Welch",
    "Dinheiro, Posses e Eternidade Randy Alcorn",
    "A Bíblia de Histórias de Jesus Sally",
    "Série Boas-Novas para os Coraçõezinhos",
    "Grandes Verdades para Corações Pequenos Carine"
];

queries.forEach(q => {
    const options = {
        hostname: 'www.amazon.com.br',
        path: '/s?k=' + encodeURIComponent(q),
        method: 'GET',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8'
        }
    };
    
    https.get(options, (res) => {
        let body = '';
        res.on('data', chunk => body += chunk);
        res.on('end', () => {
            const match = body.match(/<img[^>]*class="s-image"[^>]*src="([^"]+)"/);
            if (match) {
                console.log(`${q} -> ${match[1]}`);
            } else {
                console.log(`${q} -> NOT FOUND`);
            }
        });
    }).on('error', e => console.error(e));
});
