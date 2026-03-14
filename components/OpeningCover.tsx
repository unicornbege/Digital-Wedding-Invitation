'use client';

import { useState, useEffect } from 'react';

interface OpeningCoverProps {
  onOpen: () => void;
  guestName: string;
}

export default function OpeningCover({ onOpen, guestName }: OpeningCoverProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
  }, []);

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center  overflow-hidden text-white bg-no-repeat bg-cover"
    style={{ backgroundImage: 'url("/bunga.png")' }}>
    
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Subtle decorative lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-1/2 bg-gradient-to-b from-white/50 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-1/2 bg-gradient-to-t from-white/50 to-transparent" />
      </div>

      {/* Content */}
      <div className={`relative flex flex-col items-center justify-center px-6 text-center transition-all duration-1000 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}>
        {/* Decorative ornament */}
        <div className="mb-8 md:mb-12 scale-in">
          <svg className="w-12 h-12 md:w-16 md:h-16 text-white/100" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="50" cy="50" r="45" />
            <circle cx="50" cy="50" r="40" />
            <path d="M 50 15 Q 70 35, 70 50 Q 70 65, 50 85 Q 30 65, 30 50 Q 30 35, 50 15" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Main text */}
        <div className="mb-8 md:mb-12">
          <p className="elegant-sans text-xs md:text-sm tracking-widest text-white/80 mb-4 md:mb-6 uppercase">
            You are cordially invited to
          </p>
          <h1 className="elegant-serif text-4xl md:text-6xl lg:text-7xl text-white mb-4 md:mb-6 leading-tight " >
            The Wedding
          </h1>
          <p className="text-2xl md:text-xl text-white max-w-md mx-auto leading-relaxed" style={{ fontFamily: 'Sophia-Martini', fontWeight: "bold" }} >
            Of
          </p>
          <h2 className="elegant-serif text-2xl md:text-4xl text-white mt-4 mb-8">
            Putri & Budi
          </h2>
        </div>

        {/* Guest name */}
        <div className="mb-12 md:mb-16">
          <p className="elegant-sans text-xs md:text-sm tracking-widest text-white/80 uppercase">
            Dear {guestName}
          </p>
        </div>

        {/* Button */}
        <button
          onClick={onOpen}
          className="cursor-pointer elegant-sans relative group px-8 md:px-12 py-3 md:py-4 border border-white text-white text-sm md:text-base tracking-widest uppercase transition-all duration-500 hover:bg-white hover:text-black"
        >
          <span className="relative z-10">Open Invitation</span>
          <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
        </button>

      </div>
    </section>
  );
}
