const https = require('https');

const q = "Série Boas-Novas para os Coraçõezinhos Editora Fiel";
const options = {
    hostname: 'www.google.com.br',
    path: '/search?tbm=isch&q=' + encodeURIComponent(q),
    method: 'GET',
    headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
    }
};

https.get(options, (res) => {
    let body = '';
    res.on('data', chunk => body += chunk);
    res.on('end', () => {
        // Find the first external image URL that looks like a book cover
        const match = body.match(/https:\/\/m\.media-amazon\.com\/images\/I\/[^.]+\.jpg/g);
        if (match) {
            console.log(match[0]);
        } else {
            console.log("NOT FOUND");
        }
    });
});
