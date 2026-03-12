'use client';

import { useEffect, useState } from 'react';

export default function CoupleSection() {
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

    const element = document.getElementById('couple-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="couple-section" className="w-full bg-black px-6 md:px-8 py-16 md:py-24"
    style={{backgroundImage: 'url("/hitam.png")'}}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Sarah */}
          <div className={`flex flex-col items-center text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="elegant-serif text-3xl md:text-4xl text-white mb-3">
              Putri Mirza Bayyinatur Rosyidah
            </h3>
            <p className="elegant-sans text-sm md:text-base text-white leading-relaxed max-w-sm">
              Putri dari <br />
              bapak Suhermanto 
              &
              ibu Walidah Qadar Tatik <br />
              (Dsn. Langsepan Ds. Randuagung - Lumajang)
            </p>
          </div>

          {/* Michael */}
          <div className={`flex flex-col items-center text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} delay-100`}>
            <h3 className="elegant-serif text-3xl md:text-4xl text-white mb-3">
              Abdul Syukur Budi Santoso
            </h3>
            <p className="elegant-sans text-sm md:text-base text-white leading-relaxed max-w-sm">
             Putra dari <br />
              bapak Ataberi Utomo
              &
              ibu Tasmiyati <br />
              (Kel. blimbing Kec. Paciran - Lamongan)
            </p>
          </div>
        </div>

        {/* Love story - optional section */}
        <div className="mt-16 md:mt-16 pt-12 md:pt-8">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/80 to-transparent"></div>

        <div className=""></div>
          <div className="max-w-2xl mx-auto">
            <h2 className="elegant-serif text-3xl md:text-4xl text-white text-center mb-6 md:mb-8 mt-8 md:mt-12 ">
              Our Story
            </h2>
            <p className="elegant-sans text-base md:text-lg text-white/90 text-center leading-relaxed">
              Putri and Budi met on a cold winter evening at a local gallery opening. Their shared passion for art and life sparked an instant connection that blossomed into an extraordinary love. Through laughter, adventure, and countless quiet moments, they discovered their perfect match and decided to embark on this beautiful journey together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
