"use client";

import { Vote } from "lucide-react";
import { useEffect, useState } from "react";
import { ELECTION_INFO } from "@/data/constants";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function ElectionCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const calculateTimeLeft = (): TimeLeft => {
      // Using centralized election date and time
      const electionDate = new Date(ELECTION_INFO.fullDateTime);
      const now = new Date();
      const difference = electionDate.getTime() - now.getTime();

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Set initial value
    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, []);

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
          Next Election
        </h2>
        <p className="text-gray-600">Loading countdown...</p>
      </div>
    );
  }

  const isElectionDay =
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  if (isElectionDay) {
    return (
      <div className="bg-white border border-green-200 rounded-lg p-8 text-center">
        <div className="flex items-center justify-center mb-4">
          <Vote className="h-8 w-8 mr-3 text-green-600" />
          <h2 className="text-3xl font-semibold text-green-900">
            Election Day!
          </h2>
        </div>
        <p className="text-green-700 text-lg mb-4">
          Today is Election Day - Make your voice heard!
        </p>
        <span className="inline-block bg-green-50 text-green-800 px-3 py-1 rounded-md border border-green-200 text-sm">
          Polls are open - find your polling station and vote!
        </span>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
          Next Election
        </h2>
        <p className="text-gray-600 text-lg">
          {new Date(ELECTION_INFO.fullDateTime).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>

      <div
        className="grid grid-cols-4 gap-4 md:gap-8 max-w-2xl mx-auto mb-8"
        role="timer"
        aria-live="polite"
        aria-label="Election countdown timer"
      >
        <div className="text-center">
          <span className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2 block">
            {timeLeft.days.toString().padStart(2, "0")}
          </span>
          <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wide">
            {timeLeft.days === 1 ? "Day" : "Days"}
          </div>
        </div>

        <div className="text-center">
          <span className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2 block">
            {timeLeft.hours.toString().padStart(2, "0")}
          </span>
          <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wide">
            {timeLeft.hours === 1 ? "Hour" : "Hours"}
          </div>
        </div>

        <div className="text-center">
          <span className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2 block">
            {timeLeft.minutes.toString().padStart(2, "0")}
          </span>
          <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wide">
            {timeLeft.minutes === 1 ? "Minute" : "Minutes"}
          </div>
        </div>

        <div className="text-center">
          <span className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2 block">
            {timeLeft.seconds.toString().padStart(2, "0")}
          </span>
          <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wide">
            {timeLeft.seconds === 1 ? "Second" : "Seconds"}
          </div>
        </div>
      </div>

      <div className="text-center">
        <span className="inline-block bg-gray-50 text-gray-700 px-3 py-1 rounded-md border border-gray-200 text-sm">
          Every vote counts - prepare to make an informed decision!
        </span>
      </div>
    </div>
  );
}
