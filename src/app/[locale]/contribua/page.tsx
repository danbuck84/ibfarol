import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Give from "@/components/Give";

export default function ContribuaPage() {
  return (
    <>
      <Header />
      <main className="bg-black min-h-[calc(100vh-66px)] flex flex-col">
        <Give />
      </main>
      <Footer />
    </>
  );
}
