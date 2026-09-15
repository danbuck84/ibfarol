const https = require('https');
const fs = require('fs');

const urls = [
"https://www.amazon.com.br/dp/8531116309/?bestFormat=true&k=o%20jardim%20a%20cortina%20e%20a%20cruz",
"https://www.amazon.com.br/Tempestade-que-Parou-V%C3%A1rios-Autores/dp/8531116554/",
"https://www.amazon.com.br/Vai-tudo-certo-Lysa-Terkeurst/dp/6556893455/",
"https://www.amazon.com.br/maior-todas-as-hist%C3%B3rias/dp/8580642000/",
"https://www.amazon.com.br/GRANDE-IDEIA-DEUS-TRILLIA-NEWBELL/dp/B0BRYNXT3W/",
"https://www.amazon.com.br/Jesus-Cova-Le%C3%B5es-ALISON-MITCHELL/dp/B0DMB26NXB/",
"https://www.amazon.com.br/Samuca-Pastor-Percebendo-Jesus-Salmo/dp/8581321593/",
"https://www.amazon.com.br/pequeno-peregrino-ilustrado-Helen-Taylor/dp/6559882950/",
"https://www.amazon.com.br/Jesus-Grande-Surpresa-CATALINA-ECHEVERYI/dp/B0DMBGMXLG/",
"https://www.amazon.com.br/festa-incr%C3%ADvel-super-fant%C3%A1stica-nunca/dp/6559884910/",
"https://www.amazon.com.br/Jesus-presente-amizade-Aprendendo-d%C3%A1diva/dp/6553505969/",
"https://www.amazon.com.br/Ser%C3%A1-que-Deus-tira-f%C3%A9rias/dp/6581489654/",
"https://www.amazon.com.br/Ser%C3%A1-que-Deus-dorme/dp/6581489662/",
"https://www.amazon.com.br/Ser%C3%A1-que-Deus-aprendeu-ler/dp/6581489557/"
];

function fetchHTML(url) {
    return new Promise((resolve, reject) => {
        const u = new URL(url);
        const options = {
            hostname: u.hostname,
            path: u.pathname + u.search,
            method: 'GET',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
                'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7'
            }
        };
        https.get(options, res => {
            if(res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                // handle redirect
                return fetchHTML("https://www.amazon.com.br" + res.headers.location).then(resolve).catch(reject);
            }
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', reject);
    });
}

async function run() {
    const results = [];
    for(const url of urls) {
        try {
            console.log("Fetching: " + url);
            const html = await fetchHTML(url);
            
            let title = "Unknown Title";
            const titleMatch = html.match(/<span id="productTitle"[^>]*>([^<]+)<\/span>/i);
            if (titleMatch) title = titleMatch[1].trim();
            
            let author = "Unknown Author";
            // Author might be in a span with class "author notFaded"
            const authorMatch = html.match(/<span class="author notFaded"[^>]*>.*?<a[^>]*>([^<]+)<\/a>/is);
            if (authorMatch) {
                author = authorMatch[1].trim();
            } else {
                const altAuthor = html.match(/<a class="a-link-normal contributorNameID"[^>]*>([^<]+)<\/a>/i);
                if (altAuthor) author = altAuthor[1].trim();
            }
            
            let cover = "";
            const imgMatch = html.match(/<img[^>]*id="imgBlkFront"[^>]*data-a-dynamic-image="([^"]+)"/i) || html.match(/<img[^>]*id="landingImage"[^>]*data-a-dynamic-image="([^"]+)"/i);
            if(imgMatch) {
                // parse the JSON
                const imgData = imgMatch[1].replace(/&quot;/g, '"');
                try {
                    const parsed = JSON.parse(imgData);
                    cover = Object.keys(parsed)[0]; // get the first URL
                } catch(e) {}
            }
            
            console.log(`Found: ${title} - ${author}`);
            results.push({ title, author, cover });
        } catch(e) {
            console.log("Error on " + url);
        }
        await new Promise(r => setTimeout(r, 1000));
    }
    
    // Add to books.json
    let data = JSON.parse(fs.readFileSync('src/data/books.json', 'utf8'));
    let childrenSection = data.find(s => s.category === "Para as Crianças");
    
    for (const res of results) {
        // filter out "Unknown" titles
        if (res.title !== "Unknown Title") {
            // Check if already in list
            if (!childrenSection.books.find(b => b.title === res.title)) {
                 childrenSection.books.push(res);
            }
        }
    }
    
    fs.writeFileSync('src/data/books.json', JSON.stringify(data, null, 2));
    console.log("Updated books.json");
}

run();
