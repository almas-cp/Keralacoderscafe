"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import KccCupMark from "./KccCupMark";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Contributors", href: "#contributors" },
  { name: "Projects", href: "#projects" },
  { name: "Guidelines", href: "#guidelines" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
        <nav className="mx-auto max-w-[1280px] border-3 border-black bg-white px-5 py-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:px-6 transition-all">
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/"
              aria-label="Kerala Coders Cafe home"
              className="flex min-w-0 items-center gap-3 group"
            >
              <div className="h-11 w-11 shrink-0 border-2 border-black bg-kcc-gold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] group-hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all">
                <KccCupMark className="h-full w-full" />
              </div>

              <div className="min-w-0">
                <div className="truncate text-[1.1rem] font-black tracking-[-0.03em] text-black uppercase">
                  Kerala Coders Cafe
                </div>
                <div className="hidden truncate text-xs font-bold text-black/70 sm:block">
                  BUILD • LEARN • CONTRIBUTE
                </div>
              </div>
            </Link>

            <div className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-black uppercase text-black hover:text-kcc-accent transition-colors underline decoration-2 underline-offset-4 decoration-transparent hover:decoration-kcc-accent"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <Link
                href="https://chat.whatsapp.com/Kd3tVwJfjjh0HRZtoYfxcm"
                target="_blank"
                rel="noopener"
                className="inline-flex h-11 items-center gap-2 border-2 border-black bg-kcc-accent px-5 text-sm font-black uppercase text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                Join WhatsApp
                <ArrowUpRight className="h-4 w-4 stroke-[3]" />
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              className="inline-flex h-11 w-11 items-center justify-center border-2 border-black bg-white text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-kcc-gold transition-all md:hidden"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-5 w-5 stroke-[3]" /> : <Menu className="h-5 w-5 stroke-[3]" />}
            </button>
          </div>
        </nav>
      </div>

      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-200 md:hidden ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <button
          type="button"
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          aria-label="Close menu overlay"
          onClick={() => setIsOpen(false)}
        />

        <div
          className={`absolute inset-x-4 top-4 border-3 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-transform duration-300 ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 shrink-0 border-2 border-black bg-kcc-gold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <KccCupMark className="h-full w-full" />
              </div>

              <div>
                <div className="text-xl font-black uppercase tracking-[-0.03em] text-black">
                  Kerala Coders Cafe
                </div>
                <div className="mt-1 text-xs font-bold uppercase text-black/60">
                  Join the builders.
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center border-2 border-black bg-white text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
              aria-label="Close menu"
            >
              <X className="h-5 w-5 stroke-[3]" />
            </button>
          </div>

          <div className="mt-8 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="border-2 border-black bg-white px-4 py-3 text-sm font-black uppercase text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <Link
            href="https://chat.whatsapp.com/Kd3tVwJfjjh0HRZtoYfxcm"
            target="_blank"
            rel="noopener"
            onClick={() => setIsOpen(false)}
            className="mt-6 inline-flex h-14 w-full items-center justify-center gap-2 border-2 border-black bg-kcc-accent px-5 text-sm font-black uppercase text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            Join WhatsApp
            <ArrowUpRight className="h-5 w-5 stroke-[3]" />
          </Link>
        </div>
      </div>
    </>
  );
}
