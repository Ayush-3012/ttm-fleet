"use client";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <>
      <section id="contact" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
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
              <motion.li whileHover={{ x: 4 }} className="transition">
                • FMCSA-compliant ELD
              </motion.li>
              <motion.li whileHover={{ x: 4 }} className="transition">
                • Easy driver app (iOS/Android)
              </motion.li>
              <motion.li whileHover={{ x: 4 }} className="transition">
                • Open APIs & webhooks
              </motion.li>
            </ul>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-md hover:shadow-lg transition-shadow"
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
