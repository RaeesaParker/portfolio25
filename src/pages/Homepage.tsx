import { Footer } from "../components/common/Footer";
import { Navigation } from "../components/common/Navigation";
import { AboutSection } from "../components/homepage/AboutSection";
import { ContactSection } from "../components/homepage/ContactSection";
import { HeroSection } from "../components/homepage/HeroSection";
import { WorkSection } from "../components/homepage/WorkSection";

export function Homepage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-brand-50 to-slate-50 dark:from-slate-900 dark:via-brand-900 dark:to-slate-900 transition-colors duration-500">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
