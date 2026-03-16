"use client";

import { useEffect, useState } from "react";

interface HeroSectionProps {
  guestName: string;
}

export default function HeroSection({ guestName }: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-center justify-center 
  bg-contain bg-center bg-cover bg-no-repeat bg-white px-6 md:px-8 py-16 md:py-24 "
      style={{ backgroundImage: 'url("/beige.png")' }}
    >
      <div
        className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {/* Date - top accent */}
        <div className="mb-6 md:mb-0">
          <p className="elegant-sans text-xs md:text-sm tracking-widest text-[#8B2E32] uppercase">
            Saturday, the 11th of April, 2026
          </p>
        </div>

        {/* Main heading */}
        <h1 className="elegant-serif text-5xl md:text-7xl lg:text-8xl text-[#8B2E32] mb-6 md:mb-0 leading-tight">
          Putri
          <br />
          <span className="text-[#8B2E32]">&</span>
          <br />
          Budi
        </h1>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 my-8 md:my-4">
          <div className="w-12 md:w-16 h-px bg-[#8B2E32]/70" />
          <svg
            className="w-4 h-4 md:w-5 md:h-5 text-[#8B2E32]/80"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <circle cx="12" cy="12" r="2" />
          </svg>
          <div className="w-12 md:w-16 h-px bg-[#8B2E32]/70" />
        </div>

        {/* Subheading */}
        <p className="elegant-sans text-base md:text-base text-[#8B2E32] max-w-2xl mx-auto leading-relaxed mb-8 md:mb-12 uppercase">
          We would be delighted to celebrate with you, {guestName}
        </p>

        {/* Guest message */}
        <p
          className="elegant-serif text-4xl md:text-4xl text-[#8B2E32]/80"
          style={{ fontFamily: "Ephesis", fontWeight: "normal" }}
        >
          Request the honor of your presence at our wedding celebration
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 md:bottom-18 animate-bounce">
        <svg
          className="w-5 h-5 md:w-6 md:h-6 text-[#8B2E32]/70"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
