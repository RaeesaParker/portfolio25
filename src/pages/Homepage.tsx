import { Footer } from "../components/common/Footer";
import { Navigation } from "../components/common/Navigation";
import { HomepageMainSection } from "../components/homepage/HomepageMainSection";

export function Homepage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-brand-50 to-slate-50 dark:from-slate-900 dark:via-brand-900 dark:to-slate-900 transition-colors duration-500">
      <Navigation />
      <div className="pt-20">
        <HomepageMainSection />
      </div>
      <Footer />

    </div>
  );
}
