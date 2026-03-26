"use client";

import React, { useEffect, useRef } from "react";
import { communityQuotes } from "./data";

type MarqueeProps = {
  quotes?: string[];
};

const Marquee: React.FC<MarqueeProps> = ({ quotes = communityQuotes }) => {
  const skillsElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (skillsElementRef.current) {
      const element = skillsElementRef.current;
      const scrollWidth = element.scrollWidth;
      const animationDuration = scrollWidth / 150; // Much faster speed

      element.animate(
        [
          { transform: "translateX(0)" },
          { transform: `translateX(-${scrollWidth / 2}px)` },
        ],
        {
          duration: animationDuration * 1000,
          easing: "linear",
          iterations: Infinity,
        }
      );
    }
  }, [quotes]);

  return (
    <div className="relative overflow-hidden bg-kcc-gold border-y-4 border-black py-6 z-20 -rotate-[6deg] scale-[1.05] my-20 shadow-[0_12px_0_0_#000]">
      <div
        id="quotes"
        className="w-max whitespace-nowrap flex will-change-transform"
        ref={skillsElementRef}
      >
        {[1, 2].map((set) => (
          <div key={set} className="flex gap-12 items-center">
            {quotes.map((quote, index) => (
              <span
                key={`${set}-${index}`}
                className="flex items-center gap-12 text-3xl md:text-5xl font-headline italic tracking-tight text-black lowercase px-6"
              >
                {quote}
                <span className="text-3xl text-black/50">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;