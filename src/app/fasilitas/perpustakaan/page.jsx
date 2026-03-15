"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BookOpen, Search, Library, ArrowUpRight } from "lucide-react";

export default function PerpustakaanPage() {
  const layanan = [
    {
      icon: BookOpen,
      title: "Koleksi Buku",
      desc: "Perpustakaan ITERA menyediakan berbagai koleksi buku akademik, referensi ilmiah, serta literatur pendukung kegiatan pembelajaran.",
    },
    {
      icon: Search,
      title: "Katalog Online",
      desc: "Mahasiswa dapat mencari koleksi buku dan referensi melalui sistem katalog online perpustakaan ITERA.",
    },
    {
      icon: Library,
      title: "Ruang Belajar",
      desc: "Perpustakaan menyediakan ruang belajar yang nyaman untuk mendukung kegiatan belajar mandiri maupun diskusi akademik.",
    },
  ];

  return (
    <>
      {/* HERO */}
      <section
        className="relative h-[280px] flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1507842217343-583bb7270b66)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative text-center px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Perpustakaan ITERA
          </h1>

          {/* Breadcrumb */}
          <div className="mt-4 text-sm text-gray-200 flex justify-center gap-2">
            <Link href="/" className="hover:text-orange-400">
              Beranda
            </Link>
            <span>/</span>
            <Link href="/fasilitas" className="hover:text-orange-400">
              Fasilitas
            </Link>
            <span>/</span>
            <span className="text-orange-400">Perpustakaan</span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">

          {/* INTRO */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-orange-600">
              Perpustakaan Institut Teknologi Sumatera
            </h2>

            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Perpustakaan ITERA menyediakan berbagai sumber informasi ilmiah
              untuk mendukung kegiatan pembelajaran, penelitian, dan pengabdian
              kepada masyarakat bagi seluruh civitas akademika.
            </p>

            {/* BUTTON */}
            <a
              href="https://perpustakaan.itera.ac.id"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-xl
              bg-orange-600 text-white font-medium
              hover:bg-orange-700 transition"
            >
              Kunjungi Perpustakaan ITERA <ArrowUpRight size={18} />
            </a>
          </div>

          {/* LAYANAN */}
          <div className="grid md:grid-cols-3 gap-8">
            {layanan.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
                >
                  <div className="mb-4 text-orange-600">
                    <Icon size={32} />
                  </div>

                  <h3 className="font-bold text-lg text-gray-900">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}