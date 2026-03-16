"use client";

import { useEffect, useState } from "react";

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    days: 17,
    hours: 2,
    minutes: 43,
    seconds: 43,
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    const element = document.getElementById("countdown-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  useEffect(() => {
    const calculateTimeRemaining = () => {
      // Wedding date: April 11, 2026
      const weddingDate = new Date("2026-04-11T08:00:00+07:00").getTime();
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeRemaining({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeRemaining();
    const interval = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(interval);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="relative w-20 h-20 md:w-24 md:h-24 border border-[#FFF5E1]/30 rounded-sm flex items-center justify-center mb-3 overflow-hidden group">
        <div className="absolute inset-0 bg-[#2A2C20] group-hover:bg-[#2A2C20] transition-colors duration-300" />
        <span className="elegant-serif text-2xl md:text-4xl text-[#FFF5E1] relative z-10">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <p className="elegant-sans text-xs md:text-sm tracking-widest text-[#FFF5E1]/80 uppercase">
        {label}
      </p>
    </div>
  );

  return (
    <section
      id="countdown-section"
      className="relative w-full px-6 md:px-8 py-16 md:py-24 bg-center"
      style={{ backgroundImage: 'url("/red.png")' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>
      {/* Content */}
      <div className="relative max-w-4xl mx-auto ">
        {/* <h2 className={`elegant-serif text-3xl md:text-5xl text-[#FFF5E1] text-center mb-4 md:mb-6 transition-all duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`} >
          Our Wedding Day 
        </h2> */}
        {/* <p className={`elegant-serif text-4xl md:text-5xl text-[#FFF5E1] text-center mb-12 md:mb-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } delay-75`} style={{fontFamily: 'onnier', fontWeight: '100'}}>
          countdown to the big day
        </p> */}
        {/* Message */}
        <div className="mb-12 md:mb-10 text-center">
          <p
            className="elegant-sans text-xl md:text-3xl text-[#FFF5E1] leading-relaxed"
            style={{ fontFamily: "ephesis" }}
          >
            "We're counting down the days until we <br />
            can celebrate this beautiful moment with you"
          </p>
        </div>
        {/* Countdown boxes */}
        <div
          className={`flex items-center justify-center gap-4 md:gap-6 flex-wrap transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <TimeUnit value={timeRemaining.days} label="Days" />
          <div className="elegant-serif text-[#FFF5E1] text-2xl md:text-4xl h-6 md:h-8">
            :
          </div>
          <TimeUnit value={timeRemaining.hours} label="Hours" />
          <div className="elegant-serif text-[#FFF5E1] text-2xl md:text-4xl h-6 md:h-8">
            :
          </div>
          <TimeUnit value={timeRemaining.minutes} label="Minutes" />
          <div className="elegant-serif text-[#FFF5E1] text-2xl md:text-4xl h-6 md:h-8">
            :
          </div>
          <TimeUnit value={timeRemaining.seconds} label="Seconds" />
        </div>
        <div className=" relative mt-8 md:mt-8 pt-8 md:pt-8">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#FFF5E1] to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
