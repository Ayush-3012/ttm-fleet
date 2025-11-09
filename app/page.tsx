import Benefits from "@/components/Benefits";
import ContactForm from "@/components/ContactForm";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Benefits />

      <section id="contact" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2
              id="contact-heading"
              className="text-3xl font-bold tracking-tight text-slate-900"
            >
              Talk to our team
            </h2>
            <p className="mt-3 text-slate-600">
              Tell us about your fleet and goals. We’ll tailor a demo for you.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-slate-700">
              <li>• FMCSA-compliant ELD</li>
              <li>• Easy driver app (iOS/Android)</li>
              <li>• Open APIs & webhooks</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <ContactForm />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
