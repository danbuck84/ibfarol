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
      <main className="relative">
        <div className="sticky top-[66px] z-10 bg-white"><Hero /></div>
        <div className="sticky top-[66px] z-20 bg-[#E2D769]"><FadeIn><AboutUs /></FadeIn></div>
        <div className="sticky top-[66px] z-30 bg-white"><FadeIn><HighlightsCarousel /></FadeIn></div>
        <div className="sticky top-[66px] z-40 bg-white"><FadeIn><Agenda /></FadeIn></div>
        <div className="sticky top-[66px] z-50 bg-black"><FadeIn><Give /></FadeIn></div>
        <div className="sticky top-[66px] z-60 bg-white"><FadeIn><PlanVisit /></FadeIn></div>
        <div className="sticky top-[66px] z-70 bg-brand-canvas"><FadeIn><Quote /></FadeIn></div>
      </main>
      <Footer />
    </>
  );
}
