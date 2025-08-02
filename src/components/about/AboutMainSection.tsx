import { CTASection } from "../common/CTASection";
import { CurrentWorkSection } from "./CurrentWorkSection";
import { IntroSection } from "./IntroSection";
import { JourneySection } from "./JourneySection";
import { OutsideCodeSection } from "./OutsideCodeSection";
import { WorkPhilosophySection } from "./WorkPhilosophySection";

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
        <CTASection />
      </div>
    </div>
  );
}
