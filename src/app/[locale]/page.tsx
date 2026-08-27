import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import HighlightsCarousel from "@/components/HighlightsCarousel";
import Agenda from "@/components/Agenda";
import Give from "@/components/Give";
import PlanVisit from "@/components/PlanVisit";
import Quote from "@/components/Quote";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <HighlightsCarousel />
        <Agenda />
        <Give />
        <PlanVisit />
        <Quote />
      </main>
      <Footer />
    </>
  );
}
