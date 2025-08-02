import { CTASection } from "../CTASection";
import { ExperienceSection } from "./ExperienceSection";
import { TechStackSection } from "./TechStackSection";
import { WorkHeroSection } from "./WorkHeroSection";

export function WorkMainSection() {
  return (
    <div className="relative">
      {/* Background stars - subtle animation */}
      <div className="stars opacity-30"></div>
      <div className="stars2 opacity-20"></div>
      <div className="stars3 opacity-10"></div>

      <div className="relative z-10">
        <WorkHeroSection />
        <TechStackSection />
        <ExperienceSection />
        <CTASection />
      </div>
    </div>
  );
}
