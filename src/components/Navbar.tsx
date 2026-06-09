"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(true);

  useEffect(() => {
    const onHome = window.location.pathname === "/";
    const checkScroll = () => setScrolled(onHome ? window.scrollY > 20 : true);
    checkScroll();
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-warm-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className={`font-heading text-2xl font-bold tracking-tight transition-colors duration-300 ${scrolled ? 'text-bark' : 'text-cream'}`}>
              Soul Bliss
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${scrolled ? 'text-text/80 hover:text-deep-sage' : 'text-cream/90 hover:text-cream'}`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://stayportstephens.com.au/accommodation/?property=soul-bliss-at-shoal-bay-&postId=243591&adults=1&arrival=Arrival&departure=Departure&shem=rimspwouoe"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-deep-sage px-6 py-2.5 text-sm font-bold text-cream transition-all hover:bg-bark hover:shadow-md"
            >
              Book a Stay
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden rounded-md p-2 text-text"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-warm-white/95 backdrop-blur-md px-4 pb-6 pt-2 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-3 text-base font-medium text-text/80 transition-colors hover:text-deep-sage"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://stayportstephens.com.au/accommodation/?property=soul-bliss-at-shoal-bay-&postId=243591&adults=1&arrival=Arrival&departure=Departure&shem=rimspwouoe"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block w-full rounded-full bg-deep-sage px-6 py-3 text-center text-sm font-bold text-cream transition-all hover:bg-bark"
            onClick={() => setIsOpen(false)}
          >
            Book a Stay
          </a>
        </div>
      </div>
    </nav>
  );
}
