import { ContactForm } from "./ContactForm";
import { SocialLinks } from "./SocialLinks";

export function ContactSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Contact Form Section - Left */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Vertical Divider - Middle */}
          <div className="hidden lg:flex items-center justify-center lg:col-span-1">
            <div className="flex flex-col items-center h-full min-h-[600px] justify-center">
              <div className="w-px bg-gradient-to-b from-transparent via-slate-300 dark:via-slate-600 to-transparent flex-1"></div>
              <span className="py-4 text-slate-500 dark:text-gray-400 text-sm font-medium bg-slate-50 dark:bg-slate-900 px-3 rounded-full border border-slate-200 dark:border-slate-700">
                OR
              </span>
              <div className="w-px bg-gradient-to-b from-transparent via-slate-300 dark:via-slate-600 to-transparent flex-1"></div>
            </div>
          </div>

          {/* Mobile Horizontal Divider */}
          <div className="flex items-center justify-center lg:hidden">
            <div className="h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-600 to-transparent w-full max-w-md"></div>
            <span className="px-6 text-slate-500 dark:text-gray-400 text-sm font-medium whitespace-nowrap">
              OR
            </span>
            <div className="h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-600 to-transparent w-full max-w-md"></div>
          </div>

          {/* Social Links Section - Right */}
          <div className="lg:col-span-2">
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
}
