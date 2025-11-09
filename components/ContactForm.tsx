"use client";

import { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        setStatus("success");
        e.currentTarget.reset();
      } else {
        throw new Error("Failed");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="space-y-4"
        aria-labelledby="contact-heading"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-slate-700"
          >
            Full Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-blue-600 focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-slate-700"
          >
            Work Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-blue-600 focus:outline-none"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
        </div>

        <div>
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
        </div>

        <button
          disabled={status === "loading"}
          className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 disabled:opacity-50 transition"
        >
          {status === "loading" ? "Sending..." : "Request a Demo"}
        </button>

        {status === "success" && (
          <p role="status" className="text-sm text-green-600">
            ✅ Thanks! We’ll reach out within 1 business day.
          </p>
        )}
        {status === "error" && (
          <p role="status" className="text-sm text-red-600">
            ❌ Something went wrong. Please try again.
          </p>
        )}
      </form>
    </>
  );
};

export default ContactForm;
