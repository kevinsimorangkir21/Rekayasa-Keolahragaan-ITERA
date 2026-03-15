"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, MapPin, X, Clock } from "lucide-react";

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [timeLeft, setTimeLeft] = useState(null);

  const events = [
    {
      title: "Seminar Nasional Biomekanika Olahraga 2024",
      date: "2024-12-15T09:00:00",
      location: "Aula Utama ITERA",
      img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",
      desc: "Seminar sport science dengan topik biomekanika atlet dan wearable sensor terbaru.",
    },
    {
      title: "Smart Sport Technology Expo",
      date: "2025-01-05T08:30:00",
      location: "GSG ITERA",
      img: "https://images.unsplash.com/photo-1517649763962-0c623066013b",
      desc: "Pameran teknologi olahraga hasil kolaborasi kampus dan industri sport-tech.",
    },
    {
      title: "Workshop Wearable Sensor untuk Atlet",
      date: "2025-01-22T09:00:00",
      location: "Lab REKO",
      img: "https://images.unsplash.com/photo-1599058918144-7573e96b37f1",
      desc: "Pelatihan teknis wearable sensor untuk monitoring performa atlet secara akurat dan real-time.",
    },
  ];

  useEffect(() => {
    if (!selectedEvent) return;

    const eventDate = new Date(selectedEvent.date).getTime();

    const interval = setInterval(() => {
      const now = Date.now();
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
  }, [selectedEvent]);

  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-orange-600">
            Event & Kegiatan
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Ikuti kesempatan berharga untuk berkembang dalam dunia rekayasa olahraga.
          </p>
        </div>

        {/* EVENTS GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="
                bg-white rounded-2xl overflow-hidden shadow-md
                hover:shadow-xl hover:-translate-y-2
                transition duration-300 cursor-pointer
              "
              onClick={() => {
                setSelectedEvent(item);
                setTimeLeft(null);
              }}
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.img})` }}
              />

              <div className="p-6 text-left">
                <div className="flex items-center gap-2 text-sm text-orange-600 font-medium">
                  <CalendarDays size={16} />
                  <span>{new Date(item.date).toLocaleDateString()}</span>
                </div>

                <h3 className="mt-2 font-semibold text-lg text-gray-900">
                  {item.title}
                </h3>

                <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                  <MapPin size={14} /> {item.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              className="bg-white rounded-2xl p-6 max-w-lg w-full shadow-xl relative"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-orange-600"
                onClick={() => setSelectedEvent(null)}
              >
                <X size={20} />
              </button>

              <h3 className="text-xl font-bold text-orange-600">
                {selectedEvent.title}
              </h3>

              <div className="flex items-center gap-2 mt-3 text-sm text-gray-600">
                <CalendarDays size={16} />
                {new Date(selectedEvent.date).toLocaleString()}
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                <MapPin size={16} />
                {selectedEvent.location}
              </div>

              {/* COUNTDOWN */}
              {timeLeft ? (
                <div className="grid grid-cols-4 gap-2 text-center mt-6">
                  {Object.entries(timeLeft).map(([k, v]) => (
                    <div key={k} className="bg-orange-600 text-white rounded-xl py-2">
                      <div className="text-lg md:text-2xl font-bold">{v}</div>
                      <div className="text-[10px] uppercase">{k}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="flex items-center justify-center gap-2 text-orange-500 font-semibold mt-6">
                  <Clock size={18} /> Event sudah dimulai atau selesai
                </p>
              )}

              <p className="mt-5 text-gray-700 leading-relaxed">
                {selectedEvent.desc}
              </p>

              <button className="mt-6 w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-xl font-medium transition">
                Daftar Event
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}