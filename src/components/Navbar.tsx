"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold text-zinc-900 dark:text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 text-sm text-white">AI</span>
          AI Solutions Hub
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-sm font-medium text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">Home</Link>
          <Link href="/about" className="text-sm font-medium text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">About</Link>
          <Link href="/features" className="text-sm font-medium text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">Features</Link>
          <Link href="/signin" className="rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-2 text-sm font-medium text-white transition hover:opacity-90">
            Sign In
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="flex flex-col gap-1.5 md:hidden" aria-label="Toggle menu">
          <span className={`h-0.5 w-6 bg-zinc-900 transition dark:bg-white ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-zinc-900 transition dark:bg-white ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-zinc-900 transition dark:bg-white ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-zinc-200 bg-white px-6 py-4 dark:border-zinc-800 dark:bg-zinc-950 md:hidden">
          <div className="flex flex-col gap-4">
            <Link href="/" onClick={() => setOpen(false)} className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Home</Link>
            <Link href="/about" onClick={() => setOpen(false)} className="text-sm font-medium text-zinc-600 dark:text-zinc-400">About</Link>
            <Link href="/features" onClick={() => setOpen(false)} className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Features</Link>
            <Link href="/signin" onClick={() => setOpen(false)} className="rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-2 text-center text-sm font-medium text-white">Sign In</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
