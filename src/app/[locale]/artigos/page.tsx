import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getTranslations } from "next-intl/server";

export default async function ArtigosPage() {
  const t = await getTranslations('Artigos');
  const posts = [
    { id: 1, title: "A Importância da Comunhão", author: "Pr. Gustavo", date: "15 Set 2026", category: "Igreja" },
    { id: 2, title: "Como ler a Bíblia todos os dias", author: "Equipe Pastoral", date: "01 Set 2026", category: "Vida Cristã" },
    { id: 3, title: "O papel da família na sociedade", author: "Pr. Gustavo", date: "15 Ago 2026", category: "Família" },
    { id: 4, title: "Lidando com a ansiedade", author: "Aconselhamento", date: "01 Ago 2026", category: "Cuidado" },
    { id: 5, title: "O que é o Evangelho?", author: "Equipe Pastoral", date: "15 Jul 2026", category: "Teologia" },
    { id: 6, title: "A missão da Igreja Local", author: "Pr. Gustavo", date: "01 Jul 2026", category: "Igreja" }
  ];

  return (
    <>
      <Header />
      <main className="min-h-[70vh] bg-brand-canvas py-20 px-8">
        <div className="max-w-[1000px] mx-auto">
          <h1 className="text-[40px] font-bold text-brand-ink mb-4">{t('title')}</h1>
          <p className="text-xl text-brand-body mb-12">{t('desc')}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map(post => (
              <article key={post.id} className="bg-white p-8 rounded-lg border border-brand-hairline shadow-sm flex flex-col cursor-pointer hover:shadow-md transition-shadow">
                <span className="text-sm font-bold text-brand-primary uppercase tracking-wider mb-3">{post.category}</span>
                <h2 className="text-2xl font-bold text-brand-ink mb-4 leading-snug">{post.title}</h2>
                <div className="mt-auto flex items-center justify-between text-sm text-brand-mute font-medium border-t border-brand-hairline/50 pt-4">
                  <span>{t('by')} {post.author}</span>
                  <span>{post.date}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
