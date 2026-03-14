"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { LogoIcon } from "./Icons";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass shadow-lg shadow-indigo-500/5" : "bg-transparent"}`}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5 text-lg font-bold text-white">
          <LogoIcon className="h-9 w-9" />
          <span className="text-gradient">AI Solutions Hub</span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/features", label: "Features" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-zinc-400 transition-colors hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gradient-to-r after:from-indigo-500 after:to-purple-500 after:transition-all hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/signin" className="btn-futuristic rounded-full px-6 py-2 text-sm font-semibold text-white">
            <span>Sign In</span>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="flex flex-col gap-1.5 md:hidden" aria-label="Toggle menu">
          <span className={`h-0.5 w-6 bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-white transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="glass border-t border-white/5 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <Link href="/" onClick={() => setOpen(false)} className="text-sm font-medium text-zinc-400 hover:text-white">Home</Link>
            <Link href="/about" onClick={() => setOpen(false)} className="text-sm font-medium text-zinc-400 hover:text-white">About</Link>
            <Link href="/features" onClick={() => setOpen(false)} className="text-sm font-medium text-zinc-400 hover:text-white">Features</Link>
            <Link href="/signin" onClick={() => setOpen(false)} className="btn-futuristic rounded-full px-5 py-2 text-center text-sm font-medium text-white">
              <span>Sign In</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
