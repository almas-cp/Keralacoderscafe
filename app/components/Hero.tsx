"use client";

import Link from "next/link";
import { type MouseEvent, useRef } from "react";
import { ArrowUpRight, Github, MessageCircle } from "lucide-react";

const highlights = [
  "From 1-day beginners to 10+ years experienced developers",
  "Open source, meetups, peer learning, and real collaboration",
];

const noteLines = [
  "learn out loud",
  "build with others",
  "share what you know",
];

export default function Hero() {
  const noteRef = useRef<HTMLDivElement | null>(null);

  function handleNoteMove(event: MouseEvent<HTMLDivElement>) {
    const element = noteRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const offsetX = (event.clientX - rect.left) / rect.width - 0.5;
    const offsetY = (event.clientY - rect.top) / rect.height - 0.5;

    element.style.transform =
      `perspective(1200px) rotateX(${(-offsetY * 9).toFixed(2)}deg) ` +
      `rotateY(${(offsetX * 11).toFixed(2)}deg) translateY(-6px)`;
  }

  function resetNote() {
    const element = noteRef.current;
    if (!element) return;

    element.style.transform =
      "perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0px)";
  }

  return (
    <header className="relative overflow-hidden px-6 pb-20 pt-32 md:px-12 lg:pb-28 lg:pt-48 bg-white border-b-4 border-black">
      {/* Geometric Background Elements */}
      <div className="absolute top-20 left-10 h-32 w-32 border-4 border-black bg-kcc-gold -z-10 rotate-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hidden lg:block" />
      <div className="absolute bottom-20 right-20 h-40 w-40 border-4 border-black bg-kcc-green -z-10 -rotate-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hidden lg:block" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full bg-[radial-gradient(#000_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-10 -z-10" />

      <div className="mx-auto max-w-[1280px]">
        <div className="grid items-center gap-20 lg:grid-cols-[minmax(0,1.1fr)_minmax(360px,0.9fr)]">
          <div className="max-w-[750px]">
            <div className="mt-7 animate-fade-in-up delay-100">
              <span className="inline-block border-2 border-black bg-kcc-green px-4 py-1.5 text-sm font-black uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
                Built in Kerala • Powered by curiosity
              </span>

              <h1 className="mt-2 max-w-[850px] text-[clamp(3.5rem,10vw,7.5rem)] font-black leading-[0.88] tracking-[-0.05em] text-black uppercase">
                Kerala <br className="hidden sm:block" />
                Coders
                <span className="ml-2 bg-kcc-gold px-4 py-2 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] sm:ml-4 inline-block -rotate-2">
                  Cafe
                </span>
              </h1>

              <p className="mt-12 max-w-[640px] text-[1.2rem] font-bold leading-relaxed text-black sm:text-[1.35rem] border-l-8 border-black pl-6">
                A vibrant community of developers, designers, and tech
                enthusiasts from Kerala. Building the future, one commit at a
                time.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-4 animate-fade-in-up delay-200">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="border-2 border-black bg-white px-4 py-2 text-sm font-black uppercase tracking-tight shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-14 flex flex-col gap-5 animate-fade-in-up delay-300 sm:flex-row">
              <Link
                href="https://github.com/KERALACODERSCAFE/Keralacoderscafe"
                target="_blank"
                rel="noopener"
                className="inline-flex h-16 items-center justify-center gap-3 border-3 border-black bg-black px-8 text-base font-black uppercase text-white shadow-[6px_6px_0px_0px_rgba(255,107,107,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_10px_rgba(255,107,107,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_rgba(255,107,107,1)] transition-all"
              >
                <Github className="h-5 w-5 stroke-[3]" />
                View on GitHub
              </Link>

              <Link
                href="https://chat.whatsapp.com/Kd3tVwJfjjh0HRZtoYfxcm"
                target="_blank"
                rel="noopener"
                className="inline-flex h-16 items-center justify-center gap-3 border-3 border-black bg-kcc-gold px-8 text-base font-black uppercase text-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <MessageCircle className="h-5 w-5 stroke-[3]" />
                Join WhatsApp
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-6 text-[0.95rem] font-bold uppercase animate-fade-in-up delay-400">
              <div className="inline-flex items-center gap-2 border-2 border-black bg-white px-3 py-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <span className="h-3 w-3 border-2 border-black bg-kcc-green" />
                700+ ACTIVE DEVS
              </div>
              <div className="inline-flex items-center gap-2 border-2 border-black bg-white px-3 py-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <ArrowUpRight className="h-4 w-4 stroke-[3]" />
                OPEN TO ALL
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[520px] animate-fade-in delay-200">
            <div className="relative pt-8">
              <div className="absolute left-1/2 top-0 z-20 h-10 w-32 -translate-x-1/2 rotate-[-6deg] border-3 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center font-black uppercase text-xs tracking-widest">
                IMPORTANT!
              </div>

              <div className="animate-float-gentle">
                <div
                  ref={noteRef}
                  onMouseMove={handleNoteMove}
                  onMouseLeave={resetNote}
                  className="relative border-4 border-black bg-kcc-gold p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-transform duration-200 ease-out will-change-transform sm:p-10 rotate-1"
                  style={{
                    transform:
                      "perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0px)",
                  }}
                >
                  <div className="relative">
                    <p className="text-[0.8rem] font-black uppercase tracking-[0.2em] text-black underline decoration-4 decoration-white">
                      A note from kcc
                    </p>

                    <div className="mt-8 font-black uppercase text-[2.5rem] leading-[0.95] text-black sm:text-[3rem]">
                      <div>Hey builder,</div>
                      <div className="mt-4 bg-white border-3 border-black px-4 py-2 inline-block -rotate-1 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                        come hang out
                      </div>
                      <div className="mt-4">with people who</div>
                      <div className="text-kcc-accent">actually share.</div>
                    </div>

                    <div className="mt-10 space-y-4 font-bold uppercase text-[1.1rem] text-black">
                      {noteLines.map((line) => (
                        <div key={line} className="flex items-center gap-4">
                          <span className="h-4 w-4 border-2 border-black bg-white flex-shrink-0" />
                          <span>{line}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-12 flex items-center justify-between gap-4 border-t-3 border-black pt-6">
                      <div className="font-black uppercase text-[1rem] text-black">
                        SEE YOU SOON!
                      </div>
                      <div className="border-2 border-black bg-white px-4 py-2 text-xs font-black uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                        700+ DEVS • 30+ CONTRIBS
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-10 -right-6 border-3 border-black bg-kcc-green p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-3 hidden sm:block">
                <div className="font-black uppercase text-[1.5rem] leading-none text-black">
                  Built with
                </div>
                <div className="mt-2 text-sm font-bold uppercase tracking-wide text-black/60">
                  CARE • CODE • COMMUNITY
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
