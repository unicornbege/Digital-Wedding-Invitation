"use client";

import { useEffect, useState } from "react";

export default function LocationSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    const element = document.getElementById("location-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const locations = [
    {
      id: 1,
      name: "Akad & Reception Venue",
      address: "Magnolia Cofee & Space, Jl. Jendral Ahmad Yani",
      city: "Kab. Lumajang, Jawa Timur",
      coordinates: { lat: -8.116358978234315, lng: 113.22914516098068 },
    },
  ];

  return (
    <section
      id="location-section"
      className="w-full bg-white px-6 md:px-4 py-16 md:py-16 relative bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url('/beige.png')" }}
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className={`elegant-serif text-3xl md:text-6xl text-[#8B2E32] text-center mb-16 md:mb-6 transition-all duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ fontFamily: "Ephesis", fontWeight: "bold" }}
        >
          Venue Information
        </h2>

        <div className="grid grid-cols-1 gap-10 md:gap-12 max-w-4xl mx-auto">
          {locations.map((location, index) => (
            <div
              key={location.id}
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              } ${index === 1 ? "delay-100" : ""}`}
            >
              <div className="bg-background rounded-2xl border border-[#6B1F22]  overflow-hidden">
                {/* Map placeholder */}
                <div className="w-full h-64 md:h-72 bg-muted relative overflow-hidden group">
                  <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    title={location.name}
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.${Math.floor(Math.random() * 100000000)}!2d${location.coordinates.lng}!3d${location.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2z${location.coordinates.lat},${location.coordinates.lng}!5e0!3m2!1sen!2sus!4v${Date.now()}`}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Info section */}
                <div
                  className="relative p-6 md:p-8 border-t border-[#8B2E32] bg-no-repeat bg-cover bg-center"
                  style={{ backgroundImage: 'url("/green.png")' }}
                >
                  {/* overlay */}
                  <div className="absolute inset-0 bg-black/30 z-0"></div>

                  <div className="relative z-10">
                    <h3 className="realtive elegant-serif text-2xl md:text-3xl text-[#FFF5E1] mb-2 ">
                      {location.name}
                    </h3>
                    <p className="relatice elegant-sans text-xs md:text-sm tracking-widest text-[#FFF5E1] uppercase mb-6">
                      Venue
                    </p>

                    <div className="space-y-4">
                      <div>
                        <p className="elegant-sans text-xs md:text-sm text-[#FFF5E1] uppercase tracking-wider mb-1">
                          Location
                        </p>
                        <p className="elegant-sans text-base md:text-lg text-[#FFF5E1]">
                          {location.address}
                        </p>
                        <p className="elegant-sans text-sm md:text-base text-[#FFF5E1]">
                          {location.city}
                        </p>
                      </div>

                      <div>
                        <a
                          href={
                            "https://www.google.com/maps/search/?api=1&query=Magnolia+Coffee+%26+Space+Lumajang"
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block elegant-sans text-sm md:text-base text-[#FFF5E1] border-b border-[#FFF5E1] hover:border-transparent transition-all duration-300"
                        >
                          Get Directions →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
