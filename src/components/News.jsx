"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CalendarDays, ArrowRight } from "lucide-react";

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

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">

          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-orange-600">
              Berita Terbaru
            </h2>

            <p className="text-gray-600 mt-3 max-w-xl">
              Informasi terbaru seputar kegiatan, penelitian, dan inovasi
              Program Studi Rekayasa Keolahragaan ITERA.
            </p>
          </div>

          <Link
            href="/berita"
            className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:gap-3 transition"
          >
            Lihat Semua Berita
            <ArrowRight size={18} />
          </Link>

        </div>

        {/* NEWS GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {news.map((item, i) => (
            <Link key={i} href={`/berita/${item.slug}`}>
              <motion.article
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-md
                hover:shadow-xl hover:-translate-y-2 transition duration-300 group h-full flex flex-col"
              >

                {/* IMAGE */}
                <div
                  className="h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url(${item.img})` }}
                />

                {/* CONTENT */}
                <div className="p-6 flex flex-col flex-1">

                  {/* TAG */}
                  <span className="text-xs font-semibold bg-orange-600 text-white px-3 py-1 rounded-full w-fit">
                    {item.tag}
                  </span>

                  {/* TITLE */}
                  <h3 className="mt-4 font-semibold text-lg text-gray-900 group-hover:text-orange-600 transition line-clamp-2">
                    {item.title}
                  </h3>

                  {/* DATE */}
                  <div className="flex items-center gap-2 text-sm text-gray-500 mt-auto pt-4">
                    <CalendarDays size={16} />
                    {item.date}
                  </div>

                </div>

              </motion.article>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}