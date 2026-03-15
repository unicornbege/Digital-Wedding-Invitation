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
  <section id="couple-section"
  className="relative w-full px-6 md:px-8 py-16 md:py-24 bg-center"
  style={{ backgroundImage: 'url("/red.png")' }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/30 z-0"></div>

  <div className="relative z-10 max-w-6xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">

      {/* Putri */}
      <div className={`flex flex-col items-center text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Photo */}
        <div className="mb-6 relative">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-[#C9A96E] shadow-lg">
            <img
              src="/kakput.png"
              alt="Putri Mirza Bayyinatur Rosyidah"
              className="w-full h-full object-cover object-top"
            />
          </div>
          {/* Decorative ring */}
          <div className="absolute -inset-1.5 rounded-full border border-[#C9A96E]/40 pointer-events-none"></div>
        </div>

        <h3
          className="elegant-serif text-3xl md:text-4xl text-[#FFF5E1] mb-3"
          style={{ fontFamily: "cormorant" }}
        >
          Putri Mirza Bayyinatur Rosyidah
        </h3>
        <p
          className="elegant-sans text-xl md:text-xl text-[#FFF5E1] leading-relaxed max-w-lg"
          style={{ fontFamily: "cormorant" }}
        >
          Putri dari <br />
          bapak Suhermanto & ibu Walidah Qadar Tatik <br />
          (Dsn. Langsepan Ds. Randuagung - Lumajang)
        </p>
      </div>

      {/* Abdul */}
      <div className={`flex flex-col items-center text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} delay-100`}>
        {/* Photo */}
        <div className="mb-6 relative">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-[#C9A96E] shadow-lg">
            <img
              src="/kakbud.png"
              alt="Abdul Syukur Budi Santoso"
              className="w-full h-full object-cover object-top"
            />
          </div>
          {/* Decorative ring */}
          <div className="absolute -inset-1.5 rounded-full border border-[#C9A96E]/40 pointer-events-none"></div>
        </div>

        <h3
          className="elegant-serif text-3xl md:text-4xl text-[#FFF5E1] mb-3"
          style={{ fontFamily: "cormorant" }}
        >
          Abdul Syukur Budi Santoso
        </h3>
        <p
          className="elegant-sans text-xl md:text-xl text-[#FFF5E1] leading-relaxed max-w-sm"
          style={{ fontFamily: "cormorant" }}
        >
          Putra dari <br />
          bapak Ataberi Utomo & ibu Tasmiyati <br />
          (Kel. blimbing Kec. Paciran - Lamongan)
        </p>
      </div>
    </div>

    {/* Our Story */}
    <div className="relative mt-16 md:mt-16 pt-12 md:pt-8">
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#FFF5E1] to-transparent"></div>
      <div className="max-w-2xl mx-auto">
        <h2 className="elegant-serif text-3xl md:text-4xl text-[#FFF5E1] text-center mb-6 md:mb-8 mt-8 md:mt-12">
          OUR STORY
        </h2>
        <p
          className="text-xl md:text-xl text-[#FFF5E1] text-center leading-relaxed"
          style={{ fontFamily: "cormorant" }}
        >
          Their story began with a simple hello. From quiet conversations to countless
          cherished moments, two hearts discovered a love that was meant to be. With every
          shared smile and every passing day, their love grew deeper and stronger. Hand in
          hand, they now step forward to begin the beautiful journey of forever.
        </p>
      </div>
    </div>
  </div>
</section>
  );
}
