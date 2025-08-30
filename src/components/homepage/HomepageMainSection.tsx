import { AboutSection } from "./AboutSection";
import { ContactSection } from "./ContactSection";
import { HeroSection } from "./HeroSection";
import { WorkSection } from "./WorkSection";
import ProjectsSection from "./ProjectsSection";

export const HomepageMainSection = () => {
  return (
    <div className="relative">
      {/* Background stars - subtle animation */}
      <div className="stars opacity-30"></div>
      <div className="stars2 opacity-20"></div>
      <div className="stars3 opacity-10"></div>

      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </div>
  );
};
