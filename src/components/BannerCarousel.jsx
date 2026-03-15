"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const slides = [
  {
    title: "Membangun Talenta Muda Indonesia",
    subtitle:
      "MagangHub menghubungkan mahasiswa & perusahaan untuk pengalaman magang yang berdampak",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
  },
  {
    title: "Percepat Karier Masa Depanmu",
    subtitle: "Dapatkan pengalaman kerja nyata sebelum lulus",
    image: "https://images.unsplash.com/photo-1556767576-f1cde4e47887",
  },
  {
    title: "Jadilah Bagian Transformasi Digital",
    subtitle:
      "Raih kesempatan magang di perusahaan inovatif dan teknologi modern",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902",
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

  const slide = slides[current];

  return (
    <section className="relative overflow-hidden text-white h-[80vh] md:h-[85vh] flex items-center">

      {/* Background image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center w-full">
        <motion.h1
          key={slide.title}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight"
        >
          {slide.title}
        </motion.h1>

        <motion.p
          key={slide.subtitle}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-5 max-w-3xl mx-auto text-lg md:text-xl text-gray-200"
        >
          {slide.subtitle}
        </motion.p>
      </div>

      {/* Indicator dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300
            ${i === current ? "bg-orange-500 scale-125" : "bg-white/40"}`}
          />
        ))}
      </div>
    </section>
  );
}