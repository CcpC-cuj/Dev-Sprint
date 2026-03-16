import HeroSection from "../components/Hero";
import Navbar from "../components/Navbar";
import StarFeild from "../components/StarField";
import TimelineSection from "../components/TimelineSection";
import ContactSection from  "../components/ContactSection";



export default function Home() {
  return (
    <>
      <StarFeild /> 
      
      <Navbar />
      <HeroSection />
      <TimelineSection/>
      <ContactSection/>

    </>
  );
}