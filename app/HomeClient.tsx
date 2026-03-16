"use client";

import { useEffect, useState, useRef } from "react";
import { useSearchParams } from "next/navigation";
import OpeningCover from "@/components/OpeningCover";
import HeroSection from "@/components/HeroSection";
import CoupleSection from "@/components/CoupleSection";
import EventDetails from "@/components/EventDetails";
import CountdownTimer from "@/components/CountdownTimer";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

export default function HomeClient() {
  const searchParams = useSearchParams();
  const [guestName, setGuestName] = useState<string>("Guest");
  const [isInvitationOpened, setIsInvitationOpened] = useState(false);
  const [musicStarted, setMusicStarted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const toParam = searchParams.get("to");
    if (toParam) {
      setGuestName(decodeURIComponent(toParam));
    }
  }, [searchParams]);

  const handleOpenInvitation = () => {
    setIsInvitationOpened(true);

    if (audioRef.current && !musicStarted) {
      audioRef.current.play().catch(() => {
        console.log("Audio playback initiated");
      });
      setMusicStarted(true);
    }
  };

  return (
    <main className="w-full overflow-hidden bg-background">
      <audio
        ref={audioRef}
        src="/Ed Sheeran - Tenerife Sea (Official Lyric Video).mp3"
        loop
        style={{ display: "none" }}
      />

      {!isInvitationOpened ? (
        <OpeningCover onOpen={handleOpenInvitation} guestName={guestName} />
      ) : (
        <>
          <HeroSection guestName={guestName} />
          <CoupleSection />
          <EventDetails />
          <CountdownTimer />
          <LocationSection />
          <Footer />
        </>
      )}
    </main>
  );
}
