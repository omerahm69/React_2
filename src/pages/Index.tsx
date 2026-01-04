import GeographySection from "@/components/GeographySection";
import HeroSection from "@/components/HeroSection";
import TimelineSection from "@/components/TimelineSection";
import FooterSection from "../components/FooterSection";
import Header from '../components/Header';
import HeritageSection from "../components/Heritage";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        <GeographySection />
        <HeritageSection/>
        <TimelineSection />
      </main>
      <FooterSection/>
    </div>
  );
};

export default Index;
