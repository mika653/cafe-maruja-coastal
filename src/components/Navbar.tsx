"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "The Story", href: "/#about" },
  { label: "Menu", href: "/menu" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Visit", href: "/#find-us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  const linkColor = scrolled ? "text-slate" : "text-ivory";
  const logoColor = scrolled ? "text-teal-deep" : "text-ivory";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? "nav-glass-luxe-scrolled py-3" : "nav-glass-luxe py-6"
      }`}
    >
      <div className="max-w-[1500px] mx-auto px-6 sm:px-10 flex items-center justify-between">
        <Link href="/" className="flex items-baseline gap-3 group">
          <span
            className={`font-[family-name:var(--font-heading)] text-2xl sm:text-3xl italic font-light tracking-tight ${logoColor} transition-colors duration-700`}
          >
            Maruja
          </span>
          <span
            className={`hidden sm:inline text-[10px] tracking-[0.32em] uppercase font-semibold transition-colors duration-700 ${
              scrolled ? "text-brass" : "text-brass-light"
            }`}
          >
            Boracay
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`link-luxe text-[11px] tracking-[0.22em] uppercase font-semibold transition-colors duration-700 ${linkColor} hover:text-brass`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/639260844793"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-[10px] tracking-[0.25em] uppercase font-semibold px-6 py-3 transition-all duration-500 ${
              scrolled
                ? "bg-teal text-ivory hover:bg-brass"
                : "border border-ivory/50 text-ivory hover:bg-ivory hover:text-teal-deep"
            }`}
          >
            Reserve
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2 -mr-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className={`block w-5 h-[1px] origin-center transition-colors duration-700 ${
              scrolled ? "bg-teal-deep" : "bg-ivory"
            }`}
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className={`block w-5 h-[1px] transition-colors duration-700 ${
              scrolled ? "bg-teal-deep" : "bg-ivory"
            }`}
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className={`block w-5 h-[1px] origin-center transition-colors duration-700 ${
              scrolled ? "bg-teal-deep" : "bg-ivory"
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden fixed inset-0 top-0 bg-teal-deep z-40 flex flex-col items-center justify-center gap-9 px-8"
          >
            <span className="eyebrow-luxe absolute top-7 left-7">Maruja</span>
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl text-ivory hover:text-brass transition-colors italic font-light"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.a
              href="https://wa.me/639260844793"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-[10px] tracking-[0.25em] uppercase font-semibold text-ivory border border-ivory/40 px-7 py-3 mt-4"
            >
              Reserve a Table
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
