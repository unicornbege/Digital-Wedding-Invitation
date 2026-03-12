'use client';

import { useEffect, useState } from 'react';

export default function EventDetails() {
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

    const element = document.getElementById('event-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const events = [
    {
      id: 1,
      title: 'Akad Nikah',
      subtitle: 'Solemnization',
      date: 'Saturday, April 11, 2026',
      time: '06:30 AM - 08:00 AM',
      location: 'Magnolia Cofee & Space',
      description: 'The sacred ceremony where we will pledge our vows'
    },
    {
      id: 2,
      title: 'Reception',
      subtitle: 'Celebration & Dinner',
      date: 'Saturday, April 11, 2026',
      time: '18:00 PM - 22:00 PM',
      location: 'Magnolia Cofee & Space',
      description: 'Join us for an elegant evening of celebration &'
    }
  ];

  return (
    <section
    id="event-section"
    className=" w-full px-6 md:px-8 py-16 md:py-24 bg-white relative"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* content */}
        <h2 className="relative elegant-serif text-3xl md:text-5xl text-black text-center mb-16 md:mb-16">
          Event Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 rounded-xl overflow-hidden">
          {events.map((event, index) => (
            <div
              key={event.id}
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } ${index === 1 ? 'delay-100' : ''}`}
            >
              
              <div className=" relative rounded-xl p-8 md:p-10 border border-foreground h-full flex flex-col "
              style={{backgroundImage: 'url("/border.png")', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'grayscale(100%)'}}>

              {/* overlay */}
              <div className="absolute inset-0 bg-white/40"></div>
              
                {/* Icon area */}
                <div className="mb-6 z-10">
                  <div className="w-12 h-12 border border-foreground/75 rounded-full flex items-center justify-center mb-4  ">
                    <span className="elegant-sans text-lg font-semibold text-foreground ">
                      {event.id}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="elegant-serif text-2xl md:text-3xl text-foreground mb-2 z-10 ">
                  {event.title}
                </h3>
                <p className="elegant-sans text-xs md:text-sm tracking-widest text-foreground/50 uppercase mb-6 z-10">
                  {event.subtitle}
                </p>

                {/* Divider */}
                <div className="w-48 h-px bg-foreground/50 mb-6 z-10" />

                {/* Details */}
                <div className="flex-grow z-10">
                  <div className="mb-4">
                    <p className="elegant-sans text-xs md:text-sm text-black/60 uppercase tracking-wider mb-1">
                      Date
                    </p>
                    <p className="elegant-sans text-base md:text-lg text-black">
                      {event.date}
                    </p>
                  </div>

                  <div className="mb-4">
                    <p className="elegant-sans text-xs md:text-sm text-black/60 uppercase tracking-wider mb-1">
                      Time
                    </p>
                    <p className="elegant-sans text-base md:text-lg text-black">
                      {event.time}
                    </p>
                  </div>

                  <div className="mb-6">
                    <p className="elegant-sans text-xs md:text-sm text-black/60 uppercase tracking-wider mb-1">
                      Location
                    </p>
                    <p className="elegant-sans text-base md:text-lg text-black mb-1">
                      {event.location}
                    </p>
                  </div>

                  <p className="elegant-sans text-sm md:text-base text-black/70 leading-relaxed">
                    {event.description}
                  </p>
                  
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 md:mt-16  ">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-black/80 to-transparent mb-16 md:mb-14 "></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="relative elegant-sans text-xs md:text-sm tracking-widest text-black uppercase mb-2">
                Dress Code
              </p>
              <p className="relative elegant-serif text-lg md:text-xl text-black">
                Formal Attire
              </p>
            </div>
            <div className="text-center">
              <p className="relative elegant-sans text-xs md:text-sm tracking-widest text-black uppercase mb-2">
                Date
              </p>
              <p className="relative elegant-serif text-lg md:text-xl text-black">
                April 11, 2026
              </p>
            </div>
            <div className="text-center">
              <p className="relative elegant-sans text-xs md:text-sm tracking-widest text-black uppercase mb-2">
                Contact
              </p>
              <p className="relative elegant-serif text-lg md:text-xl text-black">
                kak bud & kak put
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
