import Header from "@/components/Header";
import Ministries from "@/components/Ministries";
import Footer from "@/components/Footer";

export default function MinisteriosPage() {
  return (
    <>
      <Header />
      <main className="min-h-[70vh] flex flex-col justify-center">
        <Ministries />
      </main>
      <Footer />
    </>
  );
}
