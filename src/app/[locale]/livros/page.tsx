import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getTranslations } from "next-intl/server";

const library = [
  {
    category: "Comece Por Aqui",
    books: [
      { title: "O que é o Evangelho?", author: "Greg Gilbert" },
      { title: "Cristianismo Puro e Simples", author: "C. S. Lewis" },
      { title: "A Cruz de Cristo", author: "John Stott" }
    ]
  },
  {
    category: "Conhecendo a Deus",
    books: [
      { title: "Conhecendo a Deus", author: "J. I. Packer" },
      { title: "Teologia Concisa", author: "J. I. Packer" },
      { title: "O Conhecimento do Deus Santo", author: "A. W. Tozer" },
      { title: "Manso e Humilde", author: "Dane Ortlund" }
    ]
  },
  {
    category: "Como Estudar a Bíblia",
    books: [
      { title: "Entendes o que Lês?", author: "Gordon Fee e Douglas Stuart" },
      { title: "Como Ler a Bíblia Livro por Livro", author: "Fee e Stuart" },
      { title: "Mulheres da Palavra", author: "Jen Wilkin" },
      { title: "Levando Deus a Sério", author: "Kevin DeYoung" }
    ]
  },
  {
    category: "Vida Devocional e Disciplinas Espirituais",
    books: [
      { title: "Disciplinas Espirituais para a Vida Cristã", author: "Donald Whitney" },
      { title: "O Vale da Visão", author: "orações puritanas" },
      { title: "Não Desperdice Sua Vida", author: "John Piper" },
      { title: "Brecha em Nossa Santidade", author: "Kevin DeYoung" },
      { title: "Faça Alguma Coisa", author: "Kevin DeYoung" },
      { title: "A Vida Centrada no Evangelho", author: "Robert Thune e Will Walker" }
    ]
  },
  {
    category: "Casamento",
    books: [
      { title: "O Significado do Casamento", author: "Timothy e Kathy Keller" },
      { title: "Quando Pecadores Dizem \"Sim\"", author: "Dave Harvey" }
    ]
  },
  {
    category: "Filhos e Parentalidade",
    books: [
      { title: "Desafio aos Pais", author: "Paul David Tripp" },
      { title: "Pastores da Família", author: "Voddie Baucham" },
      { title: "Pastoreando o Coração da Criança", author: "Tedd Tripp" }
    ]
  },
  {
    category: "Sofrimento, Ansiedade e Medo",
    books: [
      { title: "Confiando em Deus", author: "Jerry Bridges" },
      { title: "Como Vencer o Medo e a Ansiedade", author: "Edward Welch" },
      { title: "A Resposta do Evangelho às Aflições do Coração", author: "Robert Jones, Robert Green e Kristin Kellen" },
      { title: "O Segredo do Contentamento", author: "William Barcley" }
    ]
  },
  {
    category: "O Coração e a Mudança",
    books: [
      { title: "Instrumentos nas Mãos do Redentor", author: "Paul David Tripp" },
      { title: "O Coração Dinâmico na Vida Diária", author: "Jeremy Pierre" },
      { title: "Quando as Pessoas São Grandes e Deus é Pequeno", author: "Edward Welch" },
      { title: "O Desejo de Agradar Outros", author: "Edward Welch" }
    ]
  },
  {
    category: "Pureza Sexual",
    books: [
      { title: "Finalmente Livre", author: "Heath Lambert" },
      { title: "Com Toda Pureza", author: "Tim Chester" },
      { title: "Desintoxicação Sexual", author: "Tim Challies" }
    ]
  },
  {
    category: "Dinheiro",
    books: [
      { title: "Dinheiro, Posses e Eternidade", author: "Randy Alcorn" }
    ]
  },
  {
    category: "Para as Crianças",
    books: [
      { title: "A Bíblia de Histórias de Jesus", author: "Sally Lloyd-Jones" },
      { title: "Série Boas-Novas para os Coraçõezinhos", author: "Editora Fiel" },
      { title: "Grandes Verdades para Corações Pequenos", author: "Carine Mackenzie" },
      { title: "Novo Catecismo", author: "52 perguntas e respostas" }
    ]
  }
];

export default async function LivrosPage() {
  const t = await getTranslations('Livros');
  
  return (
    <>
      <Header />
      <main className="min-h-[70vh] bg-brand-canvas py-20 px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center md:text-left mb-16">
            <h1 className="text-[40px] font-bold text-brand-ink mb-4">{t('title')}</h1>
            <p className="text-xl text-brand-body">{t('desc')}</p>
          </div>
          
          <div className="space-y-16">
            {library.map((section, idx) => (
              <section key={idx}>
                <h2 className="text-2xl font-bold text-brand-ink border-b-2 border-brand-primary-ink pb-2 mb-6 inline-block">
                  {section.category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {section.books.map((book, bIdx) => (
                    <div key={bIdx} className="bg-white p-6 rounded-lg border border-brand-hairline shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                      <div className="w-full aspect-[2/3] bg-brand-canvas-soft border border-brand-hairline rounded-md mb-4 flex items-center justify-center">
                        <svg className="w-12 h-12 text-brand-mute" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                      </div>
                      <h3 className="font-bold text-brand-ink text-lg mb-2 flex-grow leading-tight">{book.title}</h3>
                      <p className="text-brand-body text-sm font-medium pt-2 border-t border-brand-hairline/50">{book.author}</p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
