import { Navigation } from "../../components/homepage/Navigation";
import { HeroSection } from "../../components/homepage/HeroSection";
import { AboutSection } from "../../components/homepage/AboutSection";
import { WorkSection } from "../../components/homepage/WorkSection";
import { ContactSection } from "../../components/homepage/ContactSection";
import { Footer } from "../../components/homepage/Footer";

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
