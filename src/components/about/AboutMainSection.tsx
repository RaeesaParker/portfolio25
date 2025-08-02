import { IntroSection } from "./IntroSection";
import { JourneySection } from "./JourneySection";
import { CurrentWorkSection } from "./CurrentWorkSection";
import { WorkPhilosophySection } from "./WorkPhilosophySection";
import { OutsideCodeSection } from "./OutsideCodeSection";
import { AboutCTASection } from "./AboutCTASection";

export function AboutMainSection() {
  return (
    <div className="relative">
      {/* Background stars - subtle animation */}
      <div className="stars opacity-30"></div>
      <div className="stars2 opacity-20"></div>
      <div className="stars3 opacity-10"></div>

      <div className="relative z-10">
        <IntroSection />
        <JourneySection />
        <CurrentWorkSection />
        <WorkPhilosophySection />
        <OutsideCodeSection />
        <AboutCTASection />
      </div>
    </div>
  );
}
