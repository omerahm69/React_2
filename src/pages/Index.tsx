import GeographySection from "@/components/GeographySection";
import { HeritageHighlight } from "@/components/HeritageHighligt";
import { HeroSection } from "@/components/HeroSection";
import { Navigation } from "@/components/Navigation";
import TimelineSection from "@/components/TimelineSection";
import FooterSection from "../components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <HeroSection />
        <GeographySection />
        <TimelineSection />
        <HeritageHighlight />
      </main>
      <FooterSection/>
    </div>
  );
};

export default Index;
