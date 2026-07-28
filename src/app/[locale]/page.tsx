import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NewHere from "@/components/NewHere";
import LatestMessage from "@/components/LatestMessage";
import Ministries from "@/components/Ministries";
import ReadingPlan from "@/components/ReadingPlan";
import Quote from "@/components/Quote";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <NewHere />
        <LatestMessage />
        <Ministries />
        <ReadingPlan />
        <Quote />
      </main>
      <Footer />
    </>
  );
}
