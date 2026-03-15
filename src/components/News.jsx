"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function News() {
  const news = [
    {
      slug: "kompetisi-robotika-nasional",
      title: "Mahasiswa Sports Engineering Ikuti Kompetisi Robotika Nasional",
      date: "10 Nov 2024",
      tag: "Prestasi",
      img: "https://images.unsplash.com/photo-1581093588401-22f6363f6a69",
    },
    {
      slug: "wearable-sensor-analisis-gerak-atlet",
      title: "Penelitian Wearable Sensor untuk Analisis Gerak Atlet",
      date: "03 Nov 2024",
      tag: "Penelitian",
      img: "https://images.unsplash.com/photo-1599058918144-7573e96b37f1",
    },
    {
      slug: "kolaborasi-industri-olahraga-nasional",
      title: "Kolaborasi Sports Engineering dengan Industri Olahraga Nasional",
      date: "28 Okt 2024",
      tag: "Kerjasama",
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978",
    },
  ];

  return (
    <section className="bg-gray-50 py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-orange-600">
            Berita Terbaru
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Info terkini seputar kegiatan dan inovasi Rekayasa Keolahragaan
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, i) => (
            <Link key={i} href={`/news/${item.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="
                  bg-white rounded-2xl overflow-hidden shadow-md
                  hover:shadow-xl hover:-translate-y-2
                  transition duration-300 group
                "
              >
                <div
                  className="h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: `url(${item.img})` }}
                />

                <div className="p-6">
                  <span className="text-xs font-semibold bg-orange-600 text-white px-2 py-1 rounded-full">
                    {item.tag}
                  </span>

                  <h3 className="mt-3 font-semibold text-lg text-gray-900 group-hover:text-orange-600 transition">
                    {item.title}
                  </h3>

                  <p className="text-xs text-gray-500 mt-1">
                    {item.date}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}