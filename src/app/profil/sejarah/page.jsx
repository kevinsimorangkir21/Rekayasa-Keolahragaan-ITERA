"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar } from "lucide-react";

export default function SejarahPage() {
  const timeline = [
    {
      year: "2023",
      title: "Pembukaan Program Studi",
      desc: "Program Studi Rekayasa Keolahragaan resmi dibuka berdasarkan SK Kemendikbudristek.",
    },
    {
      year: "2024",
      title: "Penerimaan Mahasiswa Pertama",
      desc: "Mulai menerima mahasiswa melalui jalur SNBT, SNBP, dan Mandiri.",
    },
    {
      year: "Sekarang",
      title: "Pengembangan Kurikulum & Riset",
      desc: "Berfokus pada teknologi olahraga, riset inovatif, dan kolaborasi industri.",
    },
  ];

  return (
    <>
      {/* HERO */}
      <section
        className="relative h-[360px] flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1599058918144-7573e96b37f1)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

        <div className="relative text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Sejarah Program Studi
          </h1>

          {/* Breadcrumb */}
          <div className="mt-4 text-sm text-gray-300 flex justify-center gap-2">
            <Link href="/" className="hover:text-white">
              Beranda
            </Link>
            <span>/</span>
            <Link href="/profil" className="hover:text-white">
              Profil
            </Link>
            <span>/</span>
            <span className="text-orange-400">Sejarah</span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-white py-28">
        <div className="max-w-5xl mx-auto px-6">

          {/* DESKRIPSI */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-gray-600 leading-relaxed space-y-6 mb-24"
          >
            <p>
              Program Studi Rekayasa Keolahragaan di Institut Teknologi Sumatera
              merupakan langkah strategis dalam pengembangan ilmu dan teknologi
              olahraga di Indonesia.
            </p>

            <p>
              Program ini resmi dibuka pada tahun <strong>2023</strong> sebagai
              bentuk integrasi antara rekayasa teknologi dan ilmu keolahragaan
              untuk meningkatkan performa atlet serta inovasi peralatan olahraga.
            </p>

            <p>
              Hingga saat ini, program studi terus berkembang dengan kurikulum
              berbasis teknologi, riset inovatif, serta kolaborasi industri
              sport-tech.
            </p>
          </motion.div>

          {/* TIMELINE */}
          <div className="relative">

            {/* LINE */}
            <div className="absolute left-3 top-0 bottom-0 w-px bg-gray-200" />

            <div className="space-y-12">

              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-10"
                >

                  {/* DOT */}
                  <div className="absolute left-0 top-1 w-6 h-6 rounded-full border border-gray-300 bg-white flex items-center justify-center">
                    <Calendar size={14} className="text-gray-500" />
                  </div>

                  {/* CONTENT */}
                  <div className="border border-gray-200 rounded-2xl p-6 bg-white">

                    <div className="text-sm text-orange-600 font-medium mb-1">
                      {item.year}
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="text-gray-500 mt-2 text-sm leading-relaxed">
                      {item.desc}
                    </p>

                  </div>

                </motion.div>
              ))}

            </div>
          </div>

        </div>
      </section>
    </>
  );
}