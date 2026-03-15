'use client';

import { useEffect, useState } from 'react';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('footer-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <footer id="footer-section" className="w-full bg-foreground text-background px-6 md:px-8 py-16 md:py-10">
      
      <div className="max-w-4xl mx-auto">
        {/* Main content */}
        <div className={`text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="elegant-serif text-3xl md:text-5xl text-background mb-6 md:mb-8">
            We Look Forward
          </h2>
          <p className="elegant-serif text-base md:text-xl text-background/80  mb-8 md:mb-8" style={{ fontFamily:'cormorant', fontWeight: '200'}}>
            To celebrating with you on this special day
          </p>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 my-6 md:my-6">
            <div className="w-8 md:w-12 h-px bg-background/50" />
            <svg className="w-4 h-4 md:w-5 md:h-5 text-background/50" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="2" />
            </svg>
            <div className="w-8 md:w-12 h-px bg-background/50" />
          </div>

          {/* Secondary text */}
          <p className="elegant-sans text-base md:text-lg text-background/80 mb-8 md:mb-8 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily:'cormorant'}}>
            Your presence is the most precious gift we could ask for. Join us as we embark on this beautiful journey together.
          </p>

        </div>

        {/* Bottom section */}
        <div className=" relative mb-8 md:mb-8 pt-8 md:pt-8">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#FFF5E1]/75 to-transparent"></div>
        </div>
          <div className="text-center">
            <p className="elegant-sans text-xs md:text-sm tracking-widest uppercase text-background/50 mb-4">
              Putri & Budi's Wedding
            </p>
            <p className="elegant-sans text-xs md:text-sm text-background/40">
              © 2025 All rights reserved
            </p>
          </div>
      </div>
    </footer>
  );
}
