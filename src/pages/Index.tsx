import GeographySection from "@/components/GeographySection";
import { HeroSection } from "@/components/HeroSection";
import { Navigation } from "@/components/Navigation";
import TimelineSection from "@/components/TimelineSection";
import FooterSection from "../components/FooterSection";
import HeritageSection from "../components/Heritage";



const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <HeroSection />
        <GeographySection />
        <TimelineSection />
        <HeritageSection />
      </main>
      <FooterSection/>
    </div>
  );
};

export default Index;
