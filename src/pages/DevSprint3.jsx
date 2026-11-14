import StarField from "../components-devsprint3/StarField";
import Navbar from "../components-devsprint3/Navbar";
import HeroSection from "../components-devsprint3/Hero";
import AboutSection from "../components-devsprint3/AboutSection";
import TimelineSection from "../components-devsprint3/TimelineSection";
import ParticipantFlowSection from "../components-devsprint3/ParticipantFlowSection";
import JudgingSection from "../components-devsprint3/JudgingSection";
import FacilitiesSection from "../components-devsprint3/FacilitiesSection";
import ThemeProblemsSection from "../components-devsprint3/ThemeProblemsSection";
import ContactSection from "../components-devsprint3/ContactSection";
import FooterSection from "../components-devsprint3/Footer";

export default function DevSprint3() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <StarField />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <ParticipantFlowSection />
      <JudgingSection />
      <FacilitiesSection />
      <ThemeProblemsSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
