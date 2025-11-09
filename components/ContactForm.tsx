"use client";
import { useState } from "react";
import axios from "axios";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
  }),
};

const ContactForm = () => {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);

    try {
      const res = await axios.post("/api/contact", formData);
      if (res.status === 200) {
        setStatus("success");
        e.currentTarget?.reset();
      } else {
        throw new Error("Failed");
      }
    } catch (error) {
      console.log(error);
      setStatus("error");
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-4"
      aria-labelledby="contact-heading"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {[
        {
          id: "name",
          label: "Full Name",
          type: "text",
          required: true,
        },
        {
          id: "email",
          label: "Work Email",
          type: "email",
          required: true,
        },
      ].map((field, i) => (
        <motion.div key={field.id} variants={fadeUp} custom={i}>
          <label
            htmlFor={field.id}
            className="block text-sm font-medium text-slate-700"
          >
            {field.label}
          </label>
          <input
            id={field.id}
            name={field.id}
            type={field.type}
            required={field.required}
            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-blue-600 focus:outline-none"
          />
        </motion.div>
      ))}

      {/* Company + Fleet */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        variants={fadeUp}
        custom={2}
      >
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-slate-700"
          >
            Company
          </label>
          <input
            id="company"
            name="company"
            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-blue-600 focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="fleet"
            className="block text-sm font-medium text-slate-700"
          >
            Fleet Size
          </label>
          <input
            id="fleet"
            name="fleet"
            type="number"
            min={1}
            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-blue-600 focus:outline-none"
          />
        </div>
      </motion.div>

      {/* Message */}
      <motion.div variants={fadeUp} custom={3}>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-slate-700"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-blue-600 focus:outline-none"
        ></textarea>
      </motion.div>

      {/* Button */}
      <motion.button
        variants={fadeUp}
        custom={4}
        disabled={status === "loading"}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className="inline-flex w-full items-center cursor-pointer justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 disabled:opacity-50 transition"
      >
        {status === "loading" ? "Sending..." : "Request a Demo"}
      </motion.button>

      {status === "success" && (
        <motion.p
          role="status"
          className="text-sm text-green-600"
          variants={fadeUp}
          custom={5}
        >
          ✅ Thanks! We’ll reach out within 1 business day.
        </motion.p>
      )}
      {status === "error" && (
        <motion.p
          role="status"
          className="text-sm text-red-600"
          variants={fadeUp}
          custom={5}
        >
          ❌ Something went wrong. Please try again.
        </motion.p>
      )}
    </motion.form>
  );
};

export default ContactForm;
