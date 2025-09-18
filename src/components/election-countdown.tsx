"use client";

import { Calendar, Clock } from "lucide-react";
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
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl p-8 text-center">
        <div className="flex items-center justify-center mb-4">
          <Calendar className="h-8 w-8 mr-3" />
          <h2 className="text-2xl font-bold">Next Election</h2>
        </div>
        <p className="text-blue-100 mb-6">Loading countdown...</p>
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
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl p-8 text-center animate-pulse">
        <div className="flex items-center justify-center mb-4">
          <Calendar className="h-8 w-8 mr-3" />
          <h2 className="text-2xl font-bold">Election Day!</h2>
        </div>
        <p className="text-green-100 text-lg">
          Today is Election Day - Make your voice heard!
        </p>
        <div className="mt-4 text-sm text-green-200">
          Polls are open - find your polling station and vote!
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl p-8">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center mb-4">
          <Calendar className="h-8 w-8 mr-3" />
          <h2 className="text-2xl font-bold">Next Election</h2>
        </div>
        <p className="text-blue-100">
          {new Date(ELECTION_INFO.fullDateTime).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <div className="flex items-center justify-center mt-2 text-sm text-blue-200">
          <Clock className="h-4 w-4 mr-1" />
          Kathmandu Time
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white/10 rounded-lg p-4 text-center backdrop-blur-sm">
          <div className="text-3xl md:text-4xl font-bold transition-all duration-300 ease-in-out">
            {timeLeft.days.toString().padStart(2, "0")}
          </div>
          <div className="text-sm text-blue-200 mt-1">
            {timeLeft.days === 1 ? "Day" : "Days"}
          </div>
        </div>

        <div className="bg-white/10 rounded-lg p-4 text-center backdrop-blur-sm">
          <div className="text-3xl md:text-4xl font-bold transition-all duration-300 ease-in-out">
            {timeLeft.hours.toString().padStart(2, "0")}
          </div>
          <div className="text-sm text-blue-200 mt-1">
            {timeLeft.hours === 1 ? "Hour" : "Hours"}
          </div>
        </div>

        <div className="bg-white/10 rounded-lg p-4 text-center backdrop-blur-sm">
          <div className="text-3xl md:text-4xl font-bold transition-all duration-300 ease-in-out">
            {timeLeft.minutes.toString().padStart(2, "0")}
          </div>
          <div className="text-sm text-blue-200 mt-1">
            {timeLeft.minutes === 1 ? "Minute" : "Minutes"}
          </div>
        </div>

        <div className="bg-white/10 rounded-lg p-4 text-center backdrop-blur-sm">
          <div className="text-3xl md:text-4xl font-bold transition-all duration-300 ease-in-out animate-pulse">
            {timeLeft.seconds.toString().padStart(2, "0")}
          </div>
          <div className="text-sm text-blue-200 mt-1">
            {timeLeft.seconds === 1 ? "Second" : "Seconds"}
          </div>
        </div>
      </div>

      <div className="text-center mt-6">
        <p className="text-blue-100 text-sm">
          Every vote counts - prepare to make an informed decision!
        </p>
      </div>
    </div>
  );
}
