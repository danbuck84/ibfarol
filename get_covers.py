import urllib.request
import re
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

urls = [
    "https://www.amazon.com.br/dp/8531116309",
    "https://www.amazon.com.br/dp/8531116554",
    "https://www.amazon.com.br/dp/6556893455",
    "https://www.amazon.com.br/dp/8580642000",
    "https://www.amazon.com.br/dp/B0BRYNXT3W",
    "https://www.amazon.com.br/dp/B0DMB26NXB",
    "https://www.amazon.com.br/dp/8581321593",
    "https://www.amazon.com.br/dp/6559882950"
]

import json

results = []

for url in urls:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)'})
    try:
        html = urllib.request.urlopen(req, context=ctx).read().decode('utf-8', errors='ignore')
        img_match = re.search(r'data-a-dynamic-image="({[^}]+})"', html)
        if img_match:
            img_data = json.loads(img_match.group(1).replace('&quot;', '"'))
            cover = list(img_data.keys())[-1]
            title_match = re.search(r'<span id="productTitle"[^>]*>([^<]+)</span>', html)
            title = title_match.group(1).strip() if title_match else url.split('/')[-2]
            
            author_match = re.search(r'<span class="author notFaded"[^>]*><a[^>]*>([^<]+)</a>', html)
            if not author_match:
                author_match = re.search(r'<span class="author notFaded".*?>\s*(.*?)\s*<span', html, re.DOTALL)
            author = author_match.group(1).strip() if author_match else "Autor"
            
            results.append({"title": title, "author": author, "cover": cover})
        else:
            print(f"No image found for {url}")
    except Exception as e:
        print(f"Error {url}: {e}")

print(json.dumps(results, indent=2, ensure_ascii=False))

