import Header from "@/components/Header";
import ReadingPlan from "@/components/ReadingPlan";
import Footer from "@/components/Footer";

export default function RecursosPage() {
  return (
    <>
      <Header />
      <main className="min-h-[70vh]">
        <ReadingPlan />
      </main>
      <Footer />
    </>
  );
}
