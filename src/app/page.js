import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import EliteResidences from "@/components/sections/EliteResidences";
import ExclusiveTerritories from "@/components/sections/ExclusiveTerritories";
import OffPlanProjects from "@/components/sections/OffPlanProjects";
import ArchitectureLifestyle from "@/components/sections/ArchitectureLifestyle";
import AuthoritySection from "@/components/sections/AuthoritySection";
import Testimonials from "@/components/sections/Testimonials";
import StatsBar from "@/components/sections/StatsBar";
import MarketPalm from "@/components/sections/MarketPalm";
import MarketIntelligence from "@/components/sections/MarketIntelligence";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <EliteResidences />
        <ExclusiveTerritories />
        <OffPlanProjects />
        <ArchitectureLifestyle />
        <AuthoritySection />
        <Testimonials />
        <StatsBar />
        <MarketPalm />
        <MarketIntelligence />
      </main>
      <Footer />
    </>
  );
}
