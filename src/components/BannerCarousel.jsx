"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2000&auto=format&fit=crop",
  },
  {
    image:
      "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?q=80&w=2000&auto=format&fit=crop",
  },
  {
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2000&auto=format&fit=crop",
  },
];

export default function BannerCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[65vh] md:h-[85vh] overflow-hidden">

      {/* Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${slides[current].image})`,
          }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300
            ${i === current ? "bg-orange-500 scale-125" : "bg-white/50"}`}
          />
        ))}
      </div>

    </section>
  );
}