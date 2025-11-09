export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.03)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left Side */}
        <p className="text-sm text-slate-600 text-center sm:text-left">
          © {new Date().getFullYear()} TTM — Total Transport Management. All
          rights reserved.
        </p>

        {/* Right Side */}
        <nav className="flex items-center gap-6 text-sm">
          <a
            href="#"
            className="text-slate-600 hover:text-slate-900 transition"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-slate-600 hover:text-slate-900 transition"
          >
            Terms
          </a>
          <a
            href="#contact"
            className="text-slate-600 hover:text-slate-900 transition"
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}
