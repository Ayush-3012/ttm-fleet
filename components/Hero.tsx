import Image from "next/image";
import CTAButton from "./CTAButton";

export default function Hero() {
  return (
    <>
      <section className="bg-hero text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-28 grid md:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Real-time Fleet Visibility & ELD Compliance
            </h1>

            <p className="mt-4 max-w-lg text-slate-200 leading-relaxed">
              TTM unifies telematics, ELD, safety, and maintenance so you can
              operate safer, reduce costs, and scale with confidence.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <CTAButton href="#contact">Book a Demo</CTAButton>
              <CTAButton href="#features" variant="secondary">
                Explore Features
              </CTAButton>
            </div>

            <p className="mt-4 text-xs text-slate-300">
              Trusted by carriers across North America.
            </p>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-2 backdrop-blur">
              <Image
                src="/hero-dashboard.jpg"
                alt="TTM dashboard showing live vehicles, HOS logs, and alerts"
                width={800}
                height={500}
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
