"use client";

import { Calendar, Clock, Vote } from "lucide-react";
import { useEffect, useState } from "react";
import { ELECTION_INFO } from "@/data/constants";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
      <Card className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 border-blue-500 text-white">
        <CardHeader className="text-center pb-4">
          <div className="flex items-center justify-center mb-2">
            <Vote className="h-8 w-8 mr-3" />
            <CardTitle className="text-2xl text-white">Next Election</CardTitle>
          </div>
          <CardDescription className="text-blue-100">
            Loading countdown...
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  const isElectionDay =
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  if (isElectionDay) {
    return (
      <Card className="bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 border-green-500 text-white animate-pulse">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Vote className="h-12 w-12 mr-3 animate-bounce" />
            <CardTitle className="text-3xl text-white">Election Day!</CardTitle>
          </div>
          <CardDescription className="text-green-100 text-lg">
            Today is Election Day - Make your voice heard!
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <Badge
            variant="secondary"
            className="bg-green-800 text-green-100 text-sm"
          >
            Polls are open - find your polling station and vote!
          </Badge>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 border-blue-500 text-white overflow-hidden relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:30px_30px]"></div>
      </div>

      <CardHeader className="text-center pb-6 relative z-10">
        <div className="flex items-center justify-center mb-4">
          <div className="bg-white/10 p-3 rounded-full backdrop-blur-sm">
            <Vote className="h-8 w-8 text-white" />
          </div>
        </div>
        <CardTitle className="text-3xl md:text-4xl font-bold text-white mb-2">
          Next Election
        </CardTitle>
        <CardDescription className="text-blue-100 text-lg">
          {new Date(ELECTION_INFO.fullDateTime).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </CardDescription>
        <div className="flex items-center justify-center mt-2">
          <Badge
            variant="secondary"
            className="bg-white/10 text-blue-100 border-white/20"
          >
            <Clock className="h-3 w-3 mr-1" />
            Kathmandu Time
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="relative z-10">
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6"
          role="timer"
          aria-live="polite"
          aria-label="Election countdown timer"
        >
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6 text-center">
              <div
                className="text-4xl md:text-5xl lg:text-6xl font-bold transition-all duration-500 ease-in-out mb-2 text-white"
                aria-label={`${timeLeft.days} ${timeLeft.days === 1 ? "day" : "days"} remaining`}
              >
                {timeLeft.days.toString().padStart(2, "0")}
              </div>
              <div className="text-sm font-medium text-blue-100 uppercase tracking-wide">
                {timeLeft.days === 1 ? "Day" : "Days"}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6 text-center">
              <div
                className="text-4xl md:text-5xl lg:text-6xl font-bold transition-all duration-500 ease-in-out mb-2 text-white"
                aria-label={`${timeLeft.hours} ${timeLeft.hours === 1 ? "hour" : "hours"} remaining`}
              >
                {timeLeft.hours.toString().padStart(2, "0")}
              </div>
              <div className="text-sm font-medium text-blue-100 uppercase tracking-wide">
                {timeLeft.hours === 1 ? "Hour" : "Hours"}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6 text-center">
              <div
                className="text-4xl md:text-5xl lg:text-6xl font-bold transition-all duration-500 ease-in-out mb-2 text-white"
                aria-label={`${timeLeft.minutes} ${timeLeft.minutes === 1 ? "minute" : "minutes"} remaining`}
              >
                {timeLeft.minutes.toString().padStart(2, "0")}
              </div>
              <div className="text-sm font-medium text-blue-100 uppercase tracking-wide">
                {timeLeft.minutes === 1 ? "Minute" : "Minutes"}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6 text-center">
              <div
                className="text-4xl md:text-5xl lg:text-6xl font-bold transition-all duration-500 ease-in-out mb-2 text-white animate-pulse"
                aria-label={`${timeLeft.seconds} ${timeLeft.seconds === 1 ? "second" : "seconds"} remaining`}
              >
                {timeLeft.seconds.toString().padStart(2, "0")}
              </div>
              <div className="text-sm font-medium text-blue-100 uppercase tracking-wide">
                {timeLeft.seconds === 1 ? "Second" : "Seconds"}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Badge
            variant="outline"
            className="bg-white/5 text-blue-100 border-white/30 hover:bg-white/10"
          >
            <Calendar className="h-3 w-3 mr-1" />
            Every vote counts - prepare to make an informed decision!
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}
