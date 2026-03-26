"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CalendarDays, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function News() {
  const [loading, setLoading] = useState(true);

  const news = [
    {
      slug: "webinar-rekayasa-keolahragaan-itera-hadirkan-ketua-harian-koni-lampung",
      title:
        "Webinar Rekayasa Keolahragaan ITERA Hadirkan Ketua Harian KONI Lampung",
      desc: "Kegiatan ini bertujuan untuk meningkatkan pemahaman dalam bidang rekayasa keolahragaan.",
      date: "06 Mei 2025",
      img: "/berita/webinar.png",
    },
    {
      slug: "dibuka-program-studi-rekayasa-keolahragaan-itera-siap-cetak-atlet-berbasis-teknologi",
      title:
        "Dibuka Program Studi Rekayasa Keolahragaan ITERA, Siap Cetak Atlet Berbasis Teknologi",
      desc: "Program ini dirancang untuk mencetak atlet unggul berbasis teknologi modern.",
      date: "16 Mei 2023",
      img: "/berita/dibuka.png",
    },
    {
      slug: "event-olahraga-itera-2025",
      title: "Event Olahraga ITERA 2025 Resmi Dibuka",
      desc: "Event tahunan ITERA kembali digelar dengan berbagai cabang olahraga.",
      date: "10 Januari 2025",
      img: "/berita/event.png",
    },
    {
      slug: "penelitian-baru-teknologi-olahraga",
      title: "Penelitian Baru di Bidang Teknologi Olahraga",
      desc: "Mahasiswa ITERA kembangkan inovasi terbaru dalam dunia olahraga.",
      date: "02 Februari 2025",
      img: "/berita/riset.png",
    },
  ];

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="bg-gray-50 py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex justify-between items-end mb-14">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Berita Terbaru
            </h2>
            <p className="text-gray-500 mt-2">
              Informasi terbaru ITERA
            </p>
          </div>

          <Link
            href="/berita"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 transition font-medium"
          >
            Lihat Semua
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* GRID 4 KOLOM */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {(loading ? Array(4).fill({}) : news).map((item, i) => (
            <div key={i}>
              {loading ? (
                <div className="border border-gray-200 rounded-2xl overflow-hidden animate-pulse">
                  <div className="h-40 bg-gray-200" />
                  <div className="p-4 space-y-3">
                    <div className="h-4 bg-gray-200 w-3/4 rounded" />
                    <div className="h-3 bg-gray-200 w-full rounded" />
                    <div className="h-3 bg-gray-200 w-2/3 rounded" />
                  </div>
                </div>
              ) : (
                <Link href={`/berita/${item.slug}`}>
                  <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="border border-gray-200 rounded-2xl overflow-hidden bg-white hover:-translate-y-1 transition group h-full"
                  >

                    {/* IMAGE */}
                    <div
                      className="h-40 bg-cover bg-center group-hover:scale-105 transition duration-500"
                      style={{ backgroundImage: `url(${item.img})` }}
                    />

                    {/* CONTENT */}
                    <div className="p-4 flex flex-col h-full">

                      <h3 className="font-semibold text-gray-900 text-sm group-hover:text-orange-600 line-clamp-2">
                        {item.title}
                      </h3>

                      <p className="text-gray-500 mt-2 text-xs line-clamp-2">
                        {item.desc}
                      </p>

                      <div className="flex items-center gap-2 text-xs text-gray-400 mt-auto pt-3">
                        <CalendarDays size={12} />
                        {item.date}
                      </div>

                    </div>

                  </motion.article>
                </Link>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}