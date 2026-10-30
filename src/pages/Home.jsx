import HeroSection from "../components-devsprint/Hero";
import Navbar from "../components-devsprint/Navbar";
import StarFeild from "../components-devsprint/StarField";
import AboutSection from "../components-devsprint/AboutSection";
import TimelineSection from "../components-devsprint/TimelineSection";
import DomainsSection from "../components-devsprint/DomainsSection";
import RulesSection from "../components-devsprint/RulesSection";
// import LeaderboardSection from "../components-devsprint/LeaderboardSection";
import JudgesSection from "../components-devsprint/JudgesSection";
//import GallerySection from "../components-devsprint/GallerySection";
import ContactSection from "../components-devsprint/ContactSection";
import FooterSection from "../components-devsprint/Footer";


export default function Home() {
  return (
    <>
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <StarFeild /> 
      
      <Navbar />
      <HeroSection />
      <AboutSection/>
      <TimelineSection/>
      <DomainsSection/>
      <RulesSection/>
      {/* <LeaderboardSection/> */}
      
      <JudgesSection/>
  
      <ContactSection/>
      <FooterSection />

      </div>

    </>
  );
}