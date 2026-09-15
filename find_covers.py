import urllib.request
import urllib.parse
import json
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

queries = [
    "O Conhecimento do Deus Santo A. W. Tozer",
    "Não Desperdice Sua Vida John Piper",
    "A Vida Centrada no Evangelho Robert Thune",
    "Confiando em Deus Jerry Bridges",
    "Como Vencer o Medo e a Ansiedade Edward Welch"
]

for q in queries:
    print(f"Searching for: {q}")
    url = f"https://www.googleapis.com/books/v1/volumes?q={urllib.parse.quote(q)}"
    req = urllib.request.Request(url)
    try:
        with urllib.request.urlopen(req, context=ctx) as response:
            data = json.loads(response.read().decode('utf-8'))
            if 'items' in data:
                for item in data['items'][:3]:
                    vol = item.get('volumeInfo', {})
                    title = vol.get('title', '')
                    images = vol.get('imageLinks', {})
                    if images and 'thumbnail' in images:
                        img = images['thumbnail'].replace('http:', 'https:')
                        # upgrade size if possible
                        img = img.replace('&edge=curl', '').replace('zoom=1', 'zoom=0')
                        print(f"  FOUND: {title} -> {img}")
                        break
    except Exception as e:
        print(f"  Error: {e}")
