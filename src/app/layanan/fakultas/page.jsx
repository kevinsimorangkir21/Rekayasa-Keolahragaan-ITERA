"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Building2, FileCheck, Users, ArrowUpRight } from "lucide-react";

export default function FakultasPage() {
  const layanan = [
    {
      icon: Building2,
      title: "Administrasi Akademik",
      desc: "Layanan administrasi yang mendukung kegiatan akademik mahasiswa seperti pengurusan dokumen akademik dan layanan fakultas.",
    },
    {
      icon: FileCheck,
      title: "Pengajuan Dokumen",
      desc: "Mahasiswa dapat mengajukan berbagai dokumen administrasi melalui sistem Harmony FTI secara online.",
    },
    {
      icon: Users,
      title: "Layanan Mahasiswa",
      desc: "Fakultas menyediakan berbagai layanan untuk mendukung kegiatan mahasiswa dalam proses akademik dan pengembangan diri.",
    },
  ];

  return (
    <>
      {/* HERO */}
      <section
        className="relative h-[280px] flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1562774053-701939374585)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative text-center px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Layanan Fakultas
          </h1>

          {/* Breadcrumb */}
          <div className="mt-4 text-sm text-gray-200 flex justify-center gap-2">
            <Link href="/" className="hover:text-orange-400">
              Beranda
            </Link>
            <span>/</span>
            <Link href="/layanan" className="hover:text-orange-400">
              Layanan
            </Link>
            <span>/</span>
            <span className="text-orange-400">Fakultas</span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">

          {/* INTRO */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-orange-600">
              Fakultas Teknologi Industri
            </h2>

            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Program Studi Rekayasa Keolahragaan berada di bawah Fakultas
              Teknologi Industri (FTI) ITERA. Fakultas menyediakan berbagai
              layanan administrasi akademik serta layanan mahasiswa melalui
              sistem Harmony FTI.
            </p>

            {/* BUTTON */}
            <a
              href="https://harmony.fti.itera.ac.id"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-xl
              bg-orange-600 text-white font-medium
              hover:bg-orange-700 transition"
            >
              Akses Harmony FTI <ArrowUpRight size={18} />
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