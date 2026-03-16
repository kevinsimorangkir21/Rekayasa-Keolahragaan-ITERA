"use client";

import { useEffect, useState } from "react";

export default function UpcomingEvent() {

  const eventDate = new Date("2024-12-15T09:00:00").getTime();

  const [time, setTime] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {

      const now = new Date().getTime();
      const diff = eventDate - now;

      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
      });

    }, 1000);

    return () => clearInterval(timer);

  }, []);

  return (
    <section className="bg-orange-600 text-white py-16">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold mb-6">
          Upcoming Event
        </h2>

        <div className="flex justify-center gap-6 text-2xl font-bold">

          <div>{time.days} Hari</div>
          <div>{time.hours} Jam</div>
          <div>{time.minutes} Menit</div>

        </div>

      </div>

    </section>
  );
}