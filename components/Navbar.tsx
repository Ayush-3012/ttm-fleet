"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import CTAButton from "./CTAButton";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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

        <button
          className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X className="h-6 w-6 text-slate-700" />
          ) : (
            <Menu className="h-6 w-6 text-slate-700" />
          )}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-3 shadow-lg">
          <Link
            href="#features"
            className="block text-sm text-slate-700 hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            Features
          </Link>
          <Link
            href="#benefits"
            className="block text-sm text-slate-700 hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            Benefits
          </Link>
          <Link
            href="#contact"
            className="block text-sm text-slate-700 hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
          <div className="pt-3">
            <CTAButton href="#contact">Book a Demo</CTAButton>
          </div>
        </div>
      )}
    </header>
  );
}
