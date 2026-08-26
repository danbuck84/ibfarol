import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import LatestMessage from "@/components/LatestMessage";
import Agenda from "@/components/Agenda";
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
        <LatestMessage />
        <Agenda />
        <PlanVisit />
        <Quote />
      </main>
      <Footer />
    </>
  );
}
