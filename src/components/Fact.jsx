"use client";
import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    { value: "60+", label: "Students" },
    { value: "5+", label: "Lecturer" },
  ];

  return (
    <section className="relative py-28 overflow-hidden bg-gray-50 text-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-orange-600">
          Sports Engineering People
        </h2>

        {/* SUBTITLE */}
        <p className="text-gray-600 max-w-2xl mx-auto mt-4 mb-14">
          Komunitas mahasiswa & dosen yang berperan aktif dalam pengembangan
          rekayasa olahraga di Indonesia.
        </p>

        {/* STATS */}
        <div className="grid grid-cols-2 gap-10">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <span className="text-6xl md:text-7xl font-extrabold text-orange-600">
                {item.value}
              </span>

              <span className="mt-3 text-lg font-medium text-gray-700">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* WAVE BAWAH */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-24 text-gray-50"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,
            82.39-16.45,168.19-17.48,250.45-0.39,
            59,12.27,113.79,31.89,172,47.78,
            82.62,22.51,168.38,31.15,250.61,13.69V120H0V27.35
            A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}