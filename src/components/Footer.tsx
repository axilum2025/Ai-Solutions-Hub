import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-2 text-lg font-bold text-zinc-900 dark:text-white">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 text-sm text-white">AI</span>
            AI Solutions Hub
          </div>
          <div className="flex gap-8">
            <Link href="/" className="text-sm text-zinc-500 transition hover:text-zinc-900 dark:hover:text-white">Home</Link>
            <Link href="/about" className="text-sm text-zinc-500 transition hover:text-zinc-900 dark:hover:text-white">About</Link>
            <Link href="/features" className="text-sm text-zinc-500 transition hover:text-zinc-900 dark:hover:text-white">Features</Link>
          </div>
        </div>
        <div className="mt-8 border-t border-zinc-200 pt-8 text-center text-sm text-zinc-500 dark:border-zinc-800">
          &copy; 2025 AI Solutions Hub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
