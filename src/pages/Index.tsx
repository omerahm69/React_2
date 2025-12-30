import { FooterSection as Footer } from "@/components/FooterSection";
import GeographySection from "@/components/GeographySection";
import { HeritageHighlight } from "@/components/HeritageHighligt";
import { HeroSection } from "@/components/HeroSection";
import { Navigation } from "@/components/Navigation";
import TimelineSection from "@/components/TimelineSection";

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
      <Footer />
    </div>
  );
};

export default Index;
