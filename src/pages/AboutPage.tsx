import { Navigation } from "../components/homepage/Navigation";
import { AboutMainSection } from "../components/about/AboutMainSection";
import { Footer } from "../components/homepage/Footer";

export function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-brand-50 to-slate-50 dark:from-slate-900 dark:via-brand-900 dark:to-slate-900 transition-colors duration-500">
      <Navigation />
      <div className="pt-20">
        <AboutMainSection />
      </div>
      <Footer />
    </div>
  );
}
