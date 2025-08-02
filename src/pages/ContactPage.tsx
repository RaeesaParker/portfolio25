import { Navigation } from "../components/homepage/Navigation";
import { Footer } from "../components/homepage/Footer";
import { ContactSection } from "../components/contact/ContactSection";

export function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-brand-50 to-slate-50 dark:from-slate-900 dark:via-brand-900 dark:to-slate-900 transition-colors duration-500">
      <Navigation />
      <div className="pt-20">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}
