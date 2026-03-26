"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, MapPin, X, Clock } from "lucide-react";

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [timeLeft, setTimeLeft] = useState(null);

  const events = [
    {
      title: "Seminar Nasional Biomekanika Olahraga",
      date: "2026-12-15T09:00:00",
      location: "Aula Utama ITERA",
      img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",
      desc: "Seminar sport science dengan topik biomekanika atlet dan wearable sensor terbaru.",
    },
    {
      title: "Smart Sport Technology Expo",
      date: "2026-03-25T08:30:00",
      location: "GSG ITERA",
      img: "https://images.unsplash.com/photo-1517649763962-0c623066013b",
      desc: "Pameran teknologi olahraga hasil kolaborasi kampus dan industri sport-tech.",
    },
    {
      title: "Workshop Wearable Sensor untuk Atlet",
      date: "2025-01-22T09:00:00",
      location: "Lab REKO",
      img: "https://images.unsplash.com/photo-1599058918144-7573e96b37f1",
      desc: "Pelatihan teknis wearable sensor untuk monitoring performa atlet.",
    },
  ];

  // STATUS BADGE
  const getStatus = (date) => {
    const now = new Date();
    const eventDate = new Date(date);

    const isToday =
      now.toDateString() === eventDate.toDateString();

    if (eventDate < now) return "Ended";
    if (isToday) return "Today";
    return "Soon";
  };

  const getBadgeStyle = (status) => {
    switch (status) {
      case "Today":
        return "bg-green-100 text-green-600";
      case "Soon":
        return "bg-blue-100 text-blue-600";
      case "Ended":
        return "bg-gray-100 text-gray-500";
    }
  };

  // COUNTDOWN
  useEffect(() => {
    if (!selectedEvent) return;

    const eventDate = new Date(selectedEvent.date).getTime();

    const interval = setInterval(() => {
      const diff = eventDate - Date.now();

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
  }, [selectedEvent]);

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Event & Kegiatan
            </h2>
            <p className="text-gray-500 mt-2">
              Semua event terbaru bisa kamu lihat di sini
            </p>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {events.map((item, i) => {
            const status = getStatus(item.date);

            return (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="border border-gray-200 rounded-2xl overflow-hidden cursor-pointer group bg-white"
                onClick={() => setSelectedEvent(item)}
              >

                {/* IMAGE */}
                <div className="relative h-40">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition"
                    style={{ backgroundImage: `url(${item.img})` }}
                  />

                  {/* BADGE */}
                  <div
                    className={`absolute top-3 left-3 px-3 py-1 text-xs rounded-full font-medium ${getBadgeStyle(
                      status
                    )}`}
                  >
                    {status}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-4 flex flex-col h-full">

                  <h3 className="font-semibold text-gray-900 text-sm line-clamp-2 group-hover:text-orange-600">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-2 text-xs text-gray-500 mt-2">
                    <MapPin size={12} />
                    {item.location}
                  </div>

                  <div className="flex items-center gap-2 text-xs text-gray-400 mt-2">
                    <CalendarDays size={12} />
                    {new Date(item.date).toLocaleDateString()}
                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>
      </div>

      {/* MODAL DETAIL */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              className="bg-white rounded-2xl p-6 max-w-lg w-full border border-gray-200 relative"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >

              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-3 right-3 text-gray-400 hover:text-orange-600"
              >
                <X size={20} />
              </button>

              <h3 className="text-xl font-bold text-gray-900">
                {selectedEvent.title}
              </h3>

              <div className="text-sm text-gray-500 mt-3 flex items-center gap-2">
                <CalendarDays size={16} />
                {new Date(selectedEvent.date).toLocaleString()}
              </div>

              <div className="text-sm text-gray-500 mt-1 flex items-center gap-2">
                <MapPin size={16} />
                {selectedEvent.location}
              </div>

              {/* COUNTDOWN */}
              {timeLeft ? (
                <div className="grid grid-cols-4 gap-2 mt-6">
                  {Object.entries(timeLeft).map(([k, v]) => (
                    <div
                      key={k}
                      className="border border-gray-200 rounded-xl py-2 text-center"
                    >
                      <div className="font-semibold">{v}</div>
                      <div className="text-[10px] text-gray-400 uppercase">
                        {k}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-orange-500 mt-6 flex items-center gap-2 justify-center">
                  <Clock size={18} /> Event sudah selesai / berjalan
                </p>
              )}

              <p className="mt-5 text-gray-600">
                {selectedEvent.desc}
              </p>

              <button className="mt-6 w-full border border-gray-300 py-3 rounded-xl hover:bg-gray-100 transition">
                Daftar Event
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}