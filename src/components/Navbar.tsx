"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { LogoIcon } from "./Icons";
import { useAuth } from "./AuthProvider";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, loading, signOut } = useAuth();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass shadow-sm" : "bg-white/80 backdrop-blur-sm"}`}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5 text-lg font-bold text-gray-900">
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
              className="text-sm font-medium text-gray-600 transition-colors hover:text-indigo-600"
            >
              {link.label}
            </Link>
          ))}
          {!loading && (
            user ? (
              <div className="flex items-center gap-4">
                <Link href="/dashboard" className="text-sm font-medium text-gray-600 transition-colors hover:text-indigo-600">
                  Dashboard
                </Link>
                <button
                  onClick={async () => { await signOut(); window.location.href = "/"; }}
                  className="rounded-full border border-gray-200 px-5 py-2 text-sm font-medium text-gray-600 transition hover:border-indigo-300 hover:text-indigo-600"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <Link href="/signin" className="btn-futuristic rounded-full px-6 py-2 text-sm font-semibold text-white">
                <span>Sign In</span>
              </Link>
            )
          )}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="flex flex-col gap-1.5 md:hidden" aria-label="Toggle menu">
          <span className={`h-0.5 w-6 bg-gray-800 transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-gray-800 transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-gray-800 transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-gray-100 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <Link href="/" onClick={() => setOpen(false)} className="text-sm font-medium text-gray-600 hover:text-indigo-600">Home</Link>
            <Link href="/about" onClick={() => setOpen(false)} className="text-sm font-medium text-gray-600 hover:text-indigo-600">About</Link>
            <Link href="/features" onClick={() => setOpen(false)} className="text-sm font-medium text-gray-600 hover:text-indigo-600">Features</Link>
            {user ? (
              <>
                <Link href="/dashboard" onClick={() => setOpen(false)} className="text-sm font-medium text-gray-600 hover:text-indigo-600">Dashboard</Link>
                <button
                  onClick={async () => { setOpen(false); await signOut(); window.location.href = "/"; }}
                  className="rounded-full border border-gray-200 px-5 py-2 text-center text-sm font-medium text-gray-600 hover:border-indigo-300"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <Link href="/signin" onClick={() => setOpen(false)} className="btn-futuristic rounded-full px-5 py-2 text-center text-sm font-medium text-white">
                <span>Sign In</span>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
