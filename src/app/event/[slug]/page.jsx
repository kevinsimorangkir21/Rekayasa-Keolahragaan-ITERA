"use client";

import { use, useState, useEffect } from "react";
import { CalendarDays, MapPin, Clock } from "lucide-react";

export default function EventDetail({ params }) {

  const { slug } = use(params);

  const events = [
    {
      slug: "seminar-biomekanika-2024",
      title: "Seminar Nasional Biomekanika Olahraga",
      date: "2024-12-15T09:00:00",
      location: "Aula Utama ITERA",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
      desc: "Seminar nasional yang membahas perkembangan biomekanika olahraga dan teknologi wearable sensor untuk meningkatkan performa atlet.",
      register: "#"
    },
    {
      slug: "workshop-sensor-atlet",
      title: "Workshop Wearable Sensor untuk Atlet",
      date: "2025-01-10T09:00:00",
      location: "Laboratorium Rekayasa Keolahragaan",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b",
      desc: "Workshop mengenai penggunaan sensor wearable untuk analisis performa atlet dan monitoring aktivitas olahraga.",
      register: "#"
    }
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
        seconds: Math.floor((diff / 1000) % 60),
      });

    }, 1000);

    return () => clearInterval(interval);

  }, [event]);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Event tidak ditemukan
      </div>
    );
  }

  return (
    <main className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <section
        className="relative h-[360px] flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${event.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative text-center px-6 max-w-3xl">

          <h1 className="text-3xl md:text-4xl font-extrabold">
            {event.title}
          </h1>

        </div>

      </section>

      <div className="max-w-4xl mx-auto px-6 py-16">

        {/* EVENT INFO */}
        <div className="flex flex-col md:flex-row gap-6 text-gray-600 mb-10">

          <div className="flex items-center gap-2">
            <CalendarDays size={18} />
            {new Date(event.date).toLocaleDateString()}
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={18} />
            {event.location}
          </div>

        </div>

        {/* COUNTDOWN */}
        {timeLeft && (

          <div className="bg-orange-600 text-white rounded-2xl p-8 text-center mb-10">

            <h3 className="text-xl font-bold mb-6 flex items-center justify-center gap-2">
              <Clock size={20} />
              Countdown Event
            </h3>

            <div className="grid grid-cols-4 gap-4">

              <div>
                <div className="text-3xl font-bold">
                  {timeLeft.days}
                </div>
                <div className="text-xs uppercase">
                  Hari
                </div>
              </div>

              <div>
                <div className="text-3xl font-bold">
                  {timeLeft.hours}
                </div>
                <div className="text-xs uppercase">
                  Jam
                </div>
              </div>

              <div>
                <div className="text-3xl font-bold">
                  {timeLeft.minutes}
                </div>
                <div className="text-xs uppercase">
                  Menit
                </div>
              </div>

              <div>
                <div className="text-3xl font-bold">
                  {timeLeft.seconds}
                </div>
                <div className="text-xs uppercase">
                  Detik
                </div>
              </div>

            </div>

          </div>

        )}

        {/* DESCRIPTION */}
        <p className="text-gray-700 leading-relaxed mb-10">
          {event.desc}
        </p>

        {/* REGISTER BUTTON */}
        <div className="text-center">

          <a
            href={event.register}
            target="_blank"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-xl font-semibold transition"
          >
            Daftar Event
          </a>

        </div>

      </div>

    </main>
  );
}