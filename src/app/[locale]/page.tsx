import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import HighlightsCarousel from "@/components/HighlightsCarousel";
import ReadingPlan from "@/components/ReadingPlan";
import Agenda from "@/components/Agenda";
import Give from "@/components/Give";
import PlanVisit from "@/components/PlanVisit";
import Quote from "@/components/Quote";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FadeIn><AboutUs /></FadeIn>
        <FadeIn><HighlightsCarousel /></FadeIn>
        <FadeIn><Agenda /></FadeIn>
        <FadeIn><Give /></FadeIn>
        <FadeIn><PlanVisit /></FadeIn>
        <FadeIn><Quote /></FadeIn>
      </main>
      <Footer />
    </>
  );
}
