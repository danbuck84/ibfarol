import json
import re

data = [
  {
    "title": "O Jardim, a Cortina e a Cruz: Tradução Novos Leitores (TNL)",
    "author": "Carl Laferton",
    "cover": "https://m.media-amazon.com/images/I/71LZlvQjFwL._SY522_.jpg"
  },
  {
    "title": "A Tempestade que Parou",
    "author": "Alison Mitchell",
    "cover": "https://m.media-amazon.com/images/I/71gq+b2ujmL._SY522_.jpg"
  },
  {
    "title": "Vai dar tudo certo",
    "author": "Lysa Terkeurst",
    "cover": "https://m.media-amazon.com/images/I/91KBHzp4h4L._SY522_.jpg"
  },
  {
    "title": "A maior de todas as histórias",
    "author": "Kevin DeYoung",
    "cover": "https://m.media-amazon.com/images/I/71Q3CSszJSL._SY522_.jpg"
  },
  {
    "title": "A Grande Ideia de Deus",
    "author": "Trillia Newbell",
    "cover": "https://m.media-amazon.com/images/I/61i+JAZ7v3L._SY522_.jpg"
  },
  {
    "title": "Jesus e a Cova dos Leões",
    "author": "Alison Mitchell",
    "cover": "https://m.media-amazon.com/images/I/61ebEkgTYML._SY522_.jpg"
  },
  {
    "title": "Samuca e seu Pastor",
    "author": "Susan Hunt",
    "cover": "https://m.media-amazon.com/images/I/A1s0r0SRWZL._SY522_.jpg"
  },
  {
    "title": "O pequeno peregrino ilustrado",
    "author": "Helen L. Taylor",
    "cover": "https://m.media-amazon.com/images/I/71xKTzEe6kL._SY522_.jpg"
  }
]

with open('src/data/books.json', 'r') as f:
    books_data = json.load(f)

# Find "Para as Crianças"
for category in books_data:
    if category['category'] == "Para as Crianças":
        category['books'].extend(data)
        break

with open('src/data/books.json', 'w', encoding='utf-8') as f:
    json.dump(books_data, f, indent=2, ensure_ascii=False)
