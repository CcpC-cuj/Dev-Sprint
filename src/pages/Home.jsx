import HeroSection from "../components/Hero";
import Navbar from "../components/Navbar";
import StarFeild from "../components/StarField";
import AboutSection from "../components/AboutSection";
import TimelineSection from "../components/TimelineSection";
import DomainsSection from "../components/DomainsSection";
import RulesSection from "../components/RulesSection";
import LeaderboardSection from "../components/LeaderboardSection";
import JudgesSection from "../components/JudgesSection";
//import GallerySection from "../components/GallerySection";
import ContactSection from  "../components/ContactSection";
import FooterSection from "../components/Footer";


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
      <LeaderboardSection/>
      
      <JudgesSection/>
      
      <ContactSection/>

      <FooterSection />

      </div>

    </>
  );
}