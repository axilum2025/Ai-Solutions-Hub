import Link from "next/link";
import { LogoIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-2.5 text-lg font-bold text-gray-900">
            <LogoIcon className="h-8 w-8" />
            <span className="text-gradient">AI Solutions Hub</span>
          </div>
          <div className="flex gap-8">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/features", label: "Features" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-gray-500 transition hover:text-indigo-600">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-400">
          &copy; 2025 AI Solutions Hub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
