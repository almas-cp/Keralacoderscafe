"use client";

import Link from "next/link";
import NavBar from "@/app/components/NavBar";

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-[#fef9ea] font-sans text-black neo-brutalist-grid selection:bg-[#FFE66D] selection:text-black">
      <NavBar />

      <main className="max-w-6xl mx-auto px-6 py-24 pb-32">
        {/* Month Header Section */}
        <section className="mt-12 mb-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="relative inline-block transform -rotate-2 bg-[#FF6B6B] border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-black">
              MARCH 2024
            </h1>
            <div className="absolute -top-4 -right-4 bg-[#6dfe9c] border-2 border-black px-4 py-1 font-black text-sm rotate-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase">
              Upcoming
            </div>
          </div>

          <div className="max-w-md text-right md:text-left animate-fade-in-up delay-100">
            <p className="text-xl font-bold uppercase leading-tight border-l-4 border-black pl-4">
              Kerala's Premier Tech Collective gathering for code, coffee, and community.
            </p>
            <div className="mt-4 flex gap-2 justify-end md:justify-start">
              <span className="bg-black text-white px-3 py-1 text-xs font-black uppercase">Live Updates</span>
              <span className="bg-white text-black border-2 border-black px-3 py-1 text-xs font-black uppercase">Every Weekend</span>
            </div>
          </div>
        </section>

        {/* Events Grid Section with Blur & Coming Soon */}
        <section className="relative mt-20">
          {/* Coming Soon Overlay */}
          <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
            <div className="bg-[#FF6B6B] border-4 border-black p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] -rotate-2 animate-bounce-slow">
              <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-black text-center">
                COMING<br />SOON
              </h2>
              <div className="mt-4 border-t-4 border-black pt-4 text-center text-sm font-black uppercase tracking-widest">
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 blur-xl grayscale opacity-30 pointer-events-none select-none">
            {/* Event Card 1 */}
            <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-1 transition-transform animate-fade-in-up delay-200">
              <div className="flex justify-between items-start mb-6">
                <div className="bg-[#6dfe9c] border-4 border-black w-20 h-20 flex flex-col items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <span className="text-4xl font-black leading-none">09</span>
                  <span className="text-xs font-black uppercase">MAR</span>
                </div>
                <span className="material-symbols-outlined text-4xl">code</span>
              </div>
              <h3 className="text-2xl font-black uppercase leading-none mb-4 tracking-tighter">Rust Meetup Kochi: Memory Safety 101</h3>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">schedule</span>
                  <span className="text-sm font-bold uppercase">10:00 AM - 01:00 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  <span className="text-sm font-bold uppercase underline">Cafe Coffee Day, Panampilly Nagar</span>
                </div>
              </div>
              <button className="w-full bg-black text-white py-4 font-black uppercase border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,109,54,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all">
                JOIN THE STACK
              </button>
            </div>

            {/* Event Card 2 */}
            <div className="bg-[#e7e2d4] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 transition-transform animate-fade-in-up delay-300">
              <div className="flex justify-between items-start mb-6">
                <div className="bg-[#FF6B6B] border-4 border-black w-20 h-20 flex flex-col items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-white">
                  <span className="text-4xl font-black leading-none">16</span>
                  <span className="text-xs font-black uppercase">MAR</span>
                </div>
                <span className="material-symbols-outlined text-4xl">rocket_launch</span>
              </div>
              <h3 className="text-2xl font-black uppercase leading-none mb-4 tracking-tighter">Hacker News Meetup: Show HN Live</h3>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">schedule</span>
                  <span className="text-sm font-bold uppercase">04:00 PM - 07:00 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  <span className="text-sm font-bold uppercase underline">KCC Hub, Infopark Phase 2</span>
                </div>
              </div>
              <button className="w-full bg-[#6dfe9c] text-black py-4 font-black uppercase border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all">
                RSVP NOW
              </button>
            </div>

            {/* Event Card 3 */}
            <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-2 transition-transform relative overflow-hidden animate-fade-in-up delay-400">
              <div className="halftone-texture absolute inset-0 opacity-10 pointer-events-none"></div>
              <div className="flex justify-between items-start mb-6">
                <div className="bg-black text-white border-4 border-black w-20 h-20 flex flex-col items-center justify-center shadow-[4px_4px_0px_0px_rgba(77,224,130,1)]">
                  <span className="text-4xl font-black leading-none">23</span>
                  <span className="text-xs font-black uppercase">MAR</span>
                </div>
                <span className="material-symbols-outlined text-4xl">coffee</span>
              </div>
              <h3 className="text-2xl font-black uppercase leading-none mb-4 tracking-tighter">Breakfast & Bytes: AI Workflow Brunch</h3>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">schedule</span>
                  <span className="text-sm font-bold uppercase">09:00 AM - 12:00 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  <span className="text-sm font-bold uppercase underline">The Voyager Cafe, Kakkanad</span>
                </div>
              </div>
              <button className="w-full bg-black text-white py-4 font-black uppercase border-4 border-black shadow-[4px_4px_0px_0px_rgba(255,107,107,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all">
                BOOK A SEAT
              </button>
            </div>

            {/* Event Card 4 */}
            <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 transition-transform animate-fade-in-up delay-500">
              <div className="flex justify-between items-start mb-6">
                <div className="bg-[#ede8d9] border-4 border-black w-20 h-20 flex flex-col items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <span className="text-4xl font-black leading-none">30</span>
                  <span className="text-xs font-black uppercase">MAR</span>
                </div>
                <span className="material-symbols-outlined text-4xl">terminal</span>
              </div>
              <h3 className="text-2xl font-black uppercase leading-none mb-4 tracking-tighter">Open Source Saturday: PR Marathon</h3>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">schedule</span>
                  <span className="text-sm font-bold uppercase">10:00 AM - 05:00 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  <span className="text-sm font-bold uppercase underline">Online & Hybrid @ KCC Discord</span>
                </div>
              </div>
              <button className="w-full bg-white text-black py-4 font-black uppercase border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all">
                GET INVITE
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="mt-24 bg-black p-8 md:p-12 relative overflow-hidden border-4 border-black animate-fade-in">
          <div className="halftone-texture absolute inset-0 text-white/5 pointer-events-none"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none mb-4">
                DON'T MISS THE <br /><span className="text-[#6dfe9c] underline">NEXT BREW.</span>
              </h2>
              <p className="text-white/60 font-bold uppercase text-sm tracking-widest">
                Weekly updates on meetups, jobs, and tools. No spam, only code.
              </p>
            </div>
            <div className="w-full md:auto flex flex-col sm:flex-row gap-0">
              <input className="bg-white border-4 border-black px-6 py-4 font-black uppercase placeholder:text-black/30 focus:outline-none focus:ring-0 w-full sm:w-80 text-black" placeholder="YOUR-EMAIL@TECH.COM" type="email" />
              <button className="bg-[#6dfe9c] text-black px-8 py-4 border-4 border-black border-l-0 font-black uppercase hover:bg-white transition-colors">
                SUBSCRIBE
              </button>
            </div>
          </div>
          {/* News Ticker Decoration */}
          <div className="absolute -bottom-1 left-0 w-full bg-[#6dfe9c] border-t-4 border-black overflow-hidden py-1 whitespace-nowrap">
            <div className="flex gap-12 text-[10px] font-black uppercase tracking-widest">
              <span>* KERALA CODERS CAFE *</span>
              <span>* COMMUNITY DRIVEN *</span>
              <span>* EST 2024 *</span>
              <span>* 5000+ CODERS *</span>
              <span>* KERALA CODERS CAFE *</span>
              <span>* COMMUNITY DRIVEN *</span>
              <span>* EST 2024 *</span>
              <span>* 5000+ CODERS *</span>
            </div>
          </div>
        </section>
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-3 pb-safe bg-[#fef9ea] text-black font-black uppercase text-[10px] tracking-widest border-t-4 border-black md:hidden">
        <Link className="flex flex-col items-center justify-center text-black p-2 hover:bg-[#FF6B6B] transition-colors" href="/">
          <span className="material-symbols-outlined">home</span>
          Home
        </Link>
        <Link className="flex flex-col items-center justify-center bg-[#6dfe9c] text-black border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] translate-x-[2px] translate-y-[2px] shadow-none" href="/events">
          <span className="material-symbols-outlined">calendar_month</span>
          Events
        </Link>
        <Link className="flex flex-col items-center justify-center text-black p-2 hover:bg-[#FF6B6B] transition-colors" href="#">
          <span className="material-symbols-outlined">history</span>
          Archive
        </Link>
        <Link className="flex flex-col items-center justify-center text-black p-2 hover:bg-[#FF6B6B] transition-colors" href="/join">
          <span className="material-symbols-outlined">group_add</span>
          Join
        </Link>
      </nav>
    </div>
  );
}
