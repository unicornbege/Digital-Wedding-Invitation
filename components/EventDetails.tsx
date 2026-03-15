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
    className=" w-full px-6 md:px-8 py-16 md:py-24 bg-white relative bg-no-repeat bg-cover bg-center"
    style={{ backgroundImage: 'url("/beige.png")' }}
    >
      <div className="max-w-6xl mx-auto">
        
        {/* content */}
        <h2 className="relative elegant-serif text-5xl md:text-7xl text-[#8B2E32] text-center mb-16 md:mb-8 " style={{ fontFamily: 'Pinyon', fontWeight: 'bold' }}>
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
              
              <div className=" relative rounded-xl p-8 md:p-10 border-3xl border-[#343728] h-full flex flex-col "
              style={{backgroundImage: 'url("/grstars.jpeg")', backgroundSize: 'cover', backgroundPosition: 'center', }}
              >

              {/* overlay */}
              <div className="absolute rounded-xl inset-0 bg-black/20"></div>
              
                {/* Icon area */}
                <div className="mb-6 z-10">
                  <div className="w-12 h-12 border border-[#FFF5E1]/75 rounded-full flex items-center justify-center mb-4  ">
                    <span className="elegant-sans text-lg font-semibold text-[#FFF5E1] ">
                      {event.id}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="elegant-serif text-2xl md:text-3xl text-[#FFF5E1] mb-2 z-10 ">
                  {event.title}
                </h3>
                <p className="elegant-sans text-xs md:text-sm tracking-widest text-[#FFF5E1]/80 uppercase mb-6 z-10">
                  {event.subtitle}
                </p>

                {/* Divider */}
                <div className="w-48 h-px bg-[#FFF5E1]/80 mb-6 z-10" />

                {/* Details */}
                <div className="flex-grow z-10">
                  <div className="mb-4">
                    <p className="elegant-sans text-xs md:text-sm text-[#FFF5E1]/80 uppercase tracking-wider mb-1">
                      Date
                    </p>
                    <p className="elegant-sans text-base md:text-lg text-[#FFF5E1]">
                      {event.date}
                    </p>
                  </div>

                  <div className="mb-4">
                    <p className="elegant-sans text-xs md:text-sm text-[#FFF5E1]/80 uppercase tracking-wider mb-1">
                      Time
                    </p>
                    <p className="elegant-sans text-base md:text-lg text-[#FFF5E1]">
                      {event.time}
                    </p>
                  </div>

                  <div className="mb-6">
                    <p className="elegant-sans text-xs md:text-sm text-[#FFF5E1]/80 uppercase tracking-wider mb-1">
                      Location
                    </p>
                    <p className="elegant-sans text-base md:text-lg text-[#FFF5E1] mb-1">
                      {event.location}
                    </p>
                  </div>

                  <p className="elegant-sans text-sm md:text-base text-[#FFF5E1]/80 leading-relaxed">
                    {event.description}
                  </p>
                  
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 md:mt-16  ">
          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#8B2E32]/80 to-transparent mb-16 md:mb-14 "></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="relative elegant-sans text-xl md:text-xl tracking-widest text-[#8B2E32] uppercase mb-2" style={{ fontFamily: 'nunito'}}>
                Dress Code
              </p>
              <p className="relative elegant-serif text-xl md:text-3xl text-[#8B2E32]">
                Formal Attire
              </p>
            </div>
            <div className="text-center">
              <p className="relative elegant-sans text-xl md:text-xl tracking-widest text-[#8B2E32] uppercase mb-2" style={{ fontFamily: 'nunito'}}>
                Date
              </p>
              <p className="relative elegant-serif text-xl md:text-3xl text-[#8B2E32]">
                April 11, 2026
              </p>
            </div>
            <div className="text-center">
              <p className="relative elegant-sans text-xl md:text-xl tracking-widest text-[#8B2E32] uppercase mb-2" style={{ fontFamily: 'nunito'}}>
                Contact
              </p>
              <p className="relative elegant-serif text-xl md:text-3xl text-[#8B2E32]">
                +62 812-3042-7040
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
