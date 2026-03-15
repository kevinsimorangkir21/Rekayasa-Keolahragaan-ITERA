"use client";
import { motion } from "framer-motion";
import { Cpu, MapPin, Rocket } from "lucide-react";

export default function Impact() {
  const facts = [
    {
      icon: Cpu,
      title: "Kurikulum dengan sentuhan teknologi",
      desc: "Pembelajaran olahraga yang terintegrasi dengan teknologi modern untuk menghadapi era industri digital.",
    },
    {
      icon: MapPin,
      title: "Satu-satunya di Indonesia",
      desc: "Program studi olahraga yang fokus pada inovasi dan perkembangan ilmu olahraga di tingkat nasional.",
    },
    {
      icon: Rocket,
      title: "Prospek kerja luas",
      desc: "Lulusan dapat berkarier di berbagai sektor seperti industri olahraga, kesehatan, pendidikan, hingga teknologi.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gray-50 text-gray-900 py-28">
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-extrabold">
          Fakta
        </h2>

        {/* SUBTITLE */}
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Mempersiapkan siswa untuk memberikan kontribusi yang berarti bagi masyarakat, bangsa dan dunia
        </p>

        {/* CARDS */}
        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {facts.map((fact, i) => {
            const Icon = fact.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="
                  p-8 rounded-2xl
                  bg-white
                  shadow-md
                  hover:shadow-xl hover:-translate-y-2
                  transition duration-300
                  text-left md:text-center
                "
              >
                <div className="flex md:justify-center">
                  <Icon className="w-10 h-10 text-orange-600 mb-4" />
                </div>

                <h3 className="text-xl font-bold text-orange-600">
                  {fact.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {fact.desc}
                </p>
              </motion.div>
            );
          })}
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