"use client";

import { use, useState, useEffect } from "react";
import { CalendarDays, MapPin, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function EventDetail({ params }) {
  const { slug } = use(params);

  const events = [
    {
      slug: "seminar",
      title: "Seminar Nasional Biomekanika Olahraga",
      date: "2024-12-15T09:00:00",
      location: "Aula Utama ITERA",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
      desc: "Seminar nasional tentang biomekanika olahraga dan teknologi wearable sensor.",
      register: "#",
    },
  ];

  const event = events.find((e) => e.slug === slug);

  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    if (!event) return;

    const eventDate = new Date(event.date).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = eventDate - now;

      if (diff <= 0) {
        setTimeLeft(null);
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [event]);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Event tidak ditemukan
      </div>
    );
  }

  return (
    <main className="bg-white min-h-screen">

      {/* HERO */}
      <section
        className="relative h-[320px] flex items-end text-white"
        style={{
          backgroundImage: `url(${event.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative max-w-4xl mx-auto px-6 pb-10">

          <Link
            href="/event"
            className="inline-flex items-center gap-2 text-sm text-gray-300 mb-4"
          >
            <ArrowLeft size={14} />
            Kembali
          </Link>

          <h1 className="text-3xl md:text-4xl font-semibold">
            {event.title}
          </h1>

        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-12">

        {/* META */}
        <div className="flex flex-wrap gap-6 text-sm text-gray-500">

          <div className="flex items-center gap-2">
            <CalendarDays size={14} />
            {new Date(event.date).toLocaleDateString()}
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={14} />
            {event.location}
          </div>

        </div>

        {/* COUNTDOWN */}
        {timeLeft && (
          <div className="border border-gray-200 rounded-2xl p-6 text-center">

            <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-4">
              <Clock size={14} />
              Menuju Event
            </div>

            <div className="flex justify-center gap-6">

              {["days", "hours", "minutes"].map((unit) => (
                <div key={unit}>
                  <div className="text-2xl font-semibold text-gray-900">
                    {timeLeft[unit]}
                  </div>
                  <div className="text-xs text-gray-400 uppercase">
                    {unit}
                  </div>
                </div>
              ))}

            </div>

          </div>
        )}

        {/* DESCRIPTION */}
        <p className="text-gray-700 leading-relaxed">
          {event.desc}
        </p>

        {/* CTA */}
        <div>
          <a
            href={event.register}
            target="_blank"
            className="
              inline-flex items-center justify-center
              px-6 py-2.5
              rounded-full
              bg-gray-900 text-white
              text-sm
              hover:bg-gray-800
              transition
            "
          >
            Daftar Event
          </a>
        </div>

      </section>
    </main>
  );
}