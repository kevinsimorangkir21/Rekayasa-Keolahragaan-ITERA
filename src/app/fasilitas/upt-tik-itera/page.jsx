"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Server, Wifi, Headphones, ArrowUpRight } from "lucide-react";

export default function UPTTIKPage() {
  const layanan = [
    {
      icon: Wifi,
      title: "Jaringan Internet Kampus",
      desc: "UPT TIK menyediakan layanan jaringan internet kampus yang stabil untuk mendukung kegiatan akademik dan penelitian.",
    },
    {
      icon: Server,
      title: "Sistem Informasi Kampus",
      desc: "Pengelolaan berbagai sistem informasi seperti SIAKAD, e-learning, email institusi, dan layanan digital lainnya.",
    },
    {
      icon: Headphones,
      title: "Help Desk IT",
      desc: "Layanan bantuan teknis bagi mahasiswa dan civitas akademika terkait permasalahan teknologi informasi di ITERA.",
    },
  ];

  return (
    <>
      {/* HERO */}
      <section
        className="relative h-[280px] flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1518779578993-ec3579fee39f)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative text-center px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            UPT TIK ITERA
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
            <span className="text-orange-400">UPT TIK</span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">

          {/* INTRO */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-orange-600">
              Unit Pelaksana Teknis Teknologi Informasi dan Komunikasi
            </h2>

            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              UPT TIK ITERA bertanggung jawab dalam pengelolaan dan pengembangan
              infrastruktur teknologi informasi untuk mendukung kegiatan
              akademik, administrasi, dan layanan digital di lingkungan
              Institut Teknologi Sumatera.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap justify-center gap-4 mt-6">

              <a
                href="https://tik.itera.ac.id"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                bg-orange-600 text-white font-medium
                hover:bg-orange-700 transition"
              >
                Website UPT TIK <ArrowUpRight size={18} />
              </a>

              <a
                href="https://helpdesk.itera.ac.id"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                bg-gray-900 text-white font-medium
                hover:bg-black transition"
              >
                Help Desk TIK <ArrowUpRight size={18} />
              </a>

            </div>
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