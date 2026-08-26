import Header from "@/components/Header";
import NewHere from "@/components/NewHere";
import Footer from "@/components/Footer";

export default function NovoPage() {
  return (
    <>
      <Header />
      <main className="min-h-[70vh] flex flex-col justify-center">
        <NewHere />
      </main>
      <Footer />
    </>
  );
}
