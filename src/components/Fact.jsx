"use client";
import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    { value: "60+", label: "Students" },
    { value: "5+", label: "Lecturer" },
  ];

  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600 text-white">
      <div className="max-w-6xl mx-auto px-6 relative z-10">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>

            <h2 className="text-3xl md:text-4xl font-extrabold">
              Sports Engineering People
            </h2>

            <p className="mt-5 leading-relaxed text-orange-100 max-w-lg">
              Komunitas mahasiswa dan dosen yang berperan aktif dalam
              pengembangan rekayasa olahraga di Indonesia melalui inovasi
              teknologi, sport science, dan penelitian di bidang olahraga.
            </p>

          </div>

          {/* RIGHT CARDS */}
          <div className="grid grid-cols-2 gap-8">

            {stats.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-8 text-center
                hover:shadow-xl hover:-translate-y-1 transition"
              >
                <div className="text-5xl md:text-6xl font-extrabold text-orange-600">
                  {item.value}
                </div>

                <div className="mt-3 text-gray-700 font-medium">
                  {item.label}
                </div>
              </motion.div>
            ))}

          </div>

        </div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-24 text-orange-500"
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