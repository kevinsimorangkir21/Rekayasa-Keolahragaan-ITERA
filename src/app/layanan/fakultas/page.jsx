"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Building2, FileCheck, Users, ArrowUpRight } from "lucide-react";

export default function FakultasPage() {
  const layanan = [
    {
      icon: Building2,
      title: "Administrasi Akademik",
      desc: "Pengurusan dokumen akademik dan layanan administrasi fakultas.",
    },
    {
      icon: FileCheck,
      title: "Pengajuan Dokumen",
      desc: "Pengajuan dokumen akademik melalui sistem Harmony FTI.",
    },
    {
      icon: Users,
      title: "Layanan Mahasiswa",
      desc: "Layanan untuk mendukung kegiatan akademik dan pengembangan mahasiswa.",
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative h-[300px] flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1562774053-701939374585)",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative text-center px-6">
          <h1 className="text-4xl font-semibold">
            Layanan Fakultas
          </h1>

          <div className="mt-3 text-sm text-gray-300 flex justify-center gap-2">
            <Link href="/">Beranda</Link>
            <span>/</span>
            <Link href="/layanan">Layanan</Link>
            <span>/</span>
            <span className="text-orange-400">Fakultas</span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">

          {/* INTRO */}
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-900">
              Fakultas Teknologi Industri
            </h2>

            <p className="mt-4 text-gray-500 leading-relaxed">
              Program Studi Rekayasa Keolahragaan berada di bawah Fakultas
              Teknologi Industri (FTI) ITERA yang menyediakan layanan
              akademik dan administrasi melalui sistem terintegrasi.
            </p>

            {/* CTA */}
            <a
              href="https://harmony.fti.itera.ac.id"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                mt-6 px-5 py-2.5
                rounded-full
                border border-gray-300
                text-sm text-gray-700
                hover:bg-gray-100
                transition
              "
            >
              Akses Harmony
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-3 gap-6">

            {layanan.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="
                    border border-gray-200
                    rounded-2xl
                    p-6
                    hover:bg-gray-50
                    transition
                  "
                >

                  <div className="mb-4 text-gray-700">
                    <Icon size={26} />
                  </div>

                  <h3 className="font-semibold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-2 leading-relaxed">
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