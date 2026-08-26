import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import NewHere from "@/components/NewHere";
import LatestMessage from "@/components/LatestMessage";
import Ministries from "@/components/Ministries";
import PlanVisit from "@/components/PlanVisit";
import ReadingPlan from "@/components/ReadingPlan";
import Quote from "@/components/Quote";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <NewHere />
        <LatestMessage />
        <Ministries />
        <ReadingPlan />
        <PlanVisit />
        <Quote />
      </main>
      <Footer />
    </>
  );
}
