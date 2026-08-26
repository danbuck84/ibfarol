import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SobrePage() {
  return (
    <>
      <Header />
      <main className="min-h-[70vh] py-20 px-8">
        <div className="max-w-[1280px] mx-auto space-y-24">
          <section>
            <h1 className="text-[36px] font-bold text-brand-ink mb-6">Nossa História</h1>
            <p className="text-lg text-brand-body leading-[28px] max-w-[80ch]">
              Nosso projeto começou em abril de 2022, com o objetivo de servir a região norte de São José dos Campos. Desde então, nos reunimos todos os domingos para adorar a Deus e crescer juntos.
              <br/><br/>
              Acreditamos que uma vida sem Jesus é uma vida nas trevas. Todos nós estávamos perdidos em nossos pecados, sem esperança e sem Deus. Mas ele, por seu grande amor, enviou Jesus para morrer em nosso lugar na cruz e ressuscitar, nos oferecendo perdão e vida nova.
              <br/><br/>
              Por isso nos chamamos FAROL! Queremos brilhar a luz de Cristo nesta região, ajudando pessoas a encontrarem perdão aos pés da cruz, relacionamento profundo com Deus por meio da Bíblia, e uma comunidade de pessoas simples, dispostas a servir e amar umas às outras.
            </p>
          </section>

          <section>
            <h1 className="text-[36px] font-bold text-brand-ink mb-6">O que Cremos</h1>
            <div className="space-y-6 text-lg text-brand-body leading-[28px] max-w-[80ch]">
              <p>Cremos que a Bíblia (os 39 livros do Velho Testamento e os 27 livros do Novo Testamento reconhecidos pelas Igrejas Evangélicas) é divinamente inspirada, inerrante e infalível (2 Pedro 1.19–21), e que a pregação e o ensino da Palavra são a base de transformação do indivíduo e da congregação, visando glorificar a Deus (João 14.21; 15.7,8, 2 Timóteo 3.16,17, Tiago 1.23–25).</p>
              <p>Cremos que toda a criação, incluindo o ser humano, foi feita para o louvor da glória de Deus. O Senhor é o centro de todas as coisas, único Deus, Todo-Poderoso (Salmo 145; Isaías 6.1–8; Efésios 1.3–12; Filipenses 2.5–11).</p>
              <p>Cremos que a família foi criada por Deus e tem seus padrões estabelecidos nas Escrituras (Gênesis 1.26–28; 2.23–24).</p>
              <p>Cremos que o ser humano é pecador desde o nascimento, por natureza e escolha pessoal (Romanos 3.10–12).</p>
              <p>Cremos que Jesus Cristo nasceu da virgem, sem pecado, morreu na cruz por nossos pecados, ressuscitou da morte ao terceiro dia e voltará outra vez para reinar (Atos 10.36–43). Cremos que Ele é perfeitamente Deus e perfeitamente homem (Colossenses 2.8–9; 1 Timóteo 2.5).</p>
              <p>Cremos que a salvação do ser humano é um dom gratuito, concedido pela graça soberana de Deus e recebido pela fé (Efésios 2.4–10), sendo assegurada somente pela Pessoa e obra de Jesus Cristo (Atos 4.12). Cremos que uma vez salvos, nos tornamos filhos de Deus e temos segurança eterna (Romanos 8.28–39).</p>
              <p>Cremos que o batismo é a afirmação externa de uma realidade interna, simbolizando a identificação do crente com a morte, sepultamento, ressurreição de Cristo, e com a Igreja (Romanos 6.3–4), sendo ministrado àqueles que creram em Jesus (Atos 8.35–39).</p>
              <p>Cremos que a Ceia é um memorial da morte e ressurreição de Jesus, e um anúncio de Seu retorno (1 Coríntios 11.23–36), participando todos os crentes presentes em comunhão com suas igrejas locais (1 Coríntios 11.27–30).</p>
              <p>Cremos que a Igreja é a comunidade dos crentes em Jesus, a noiva de Cristo, o Seu Corpo na terra (Efésios 2.19; 5.25–27). A igreja local é a agência de Deus na terra (Atos 13.1–3), sendo governada por homens que Deus deu como pastores/presbíteros/bispos (1 Pedro 5.1–3).</p>
              <p>Cremos que o Espírito Santo é recebido por todo crente no momento da conversão a Cristo, ocasião quando somos batizados/selados nele (Efésios 1.13–14). Cremos que os dons espirituais são capacidades dadas soberanamente aos crentes pelo Espírito Santo para a glorificação de Deus e edificação da Igreja (1 Coríntios 12.8–11; Romanos 1.11–13; 1 Pedro 4.10–11).</p>
              <p>Cremos que a segunda vinda de Jesus será pessoal, física e visível (Atos 1.11), e que ao fim haverá a criação de novos céus e de nova terra, onde não haverá mais a presença ou a possibilidade de pecado (Apocalipse 19–22).</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
