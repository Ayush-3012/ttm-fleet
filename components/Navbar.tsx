import Link from "next/link";
import CTAButton from "./CTAButton";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="TTM"
            width={100}
            height={100}
            className="h-12 w-14 border-2 border-black rounded-xl"
          />
          <span className="sr-only">TTM</span>
        </Link>

        {/* Right: Links + CTA */}
        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="#features"
            className="text-sm text-slate-700 hover:text-slate-900"
          >
            Features
          </Link>
          <Link
            href="#benefits"
            className="text-sm text-slate-700 hover:text-slate-900"
          >
            Benefits
          </Link>
          <Link
            href="#contact"
            className="text-sm text-slate-700 hover:text-slate-900"
          >
            Contact
          </Link>
          <CTAButton href="#contact">Book a Demo</CTAButton>
        </div>
      </nav>
    </header>
  );
}
