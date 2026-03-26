"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Users, FileText, ClipboardList } from "lucide-react";

export default function KKNPage() {
  const layanan = [
    {
      title: "Portal KKN ITERA",
      desc: "Akses portal resmi KKN ITERA untuk pendaftaran dan informasi program.",
      link: "https://kkn.itera.ac.id",
      icon: Users,
    },
    {
      title: "Panduan KKN",
      desc: "Unduh panduan pelaksanaan Kuliah Kerja Nyata bagi mahasiswa.",
      link: "https://kkn.itera.ac.id",
      icon: FileText,
    },
    {
      title: "Pendaftaran KKN",
      desc: "Formulir pendaftaran dan pengisian data peserta KKN ITERA.",
      link: "https://kkn.itera.ac.id",
      icon: ClipboardList,
    },
  ];

  return (
    <main className="bg-white min-h-screen">

      {/* HERO */}
      <section className="relative h-[300px] flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d)",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative text-center px-6">
          <h1 className="text-4xl font-semibold">
            Kuliah Kerja Nyata
          </h1>

          <div className="text-sm mt-3 text-gray-300 flex justify-center gap-2">
            <Link href="/">Beranda</Link>
            <span>/</span>
            <Link href="/akademik">Akademik</Link>
            <span>/</span>
            <span className="text-orange-400">KKN</span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        {/* INTRO */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-900">
            Program Kuliah Kerja Nyata
          </h2>

          <p className="text-gray-500 mt-4 leading-relaxed">
            KKN merupakan kegiatan pengabdian kepada masyarakat yang dilakukan
            mahasiswa untuk mengaplikasikan ilmu secara langsung di lapangan.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">

          {layanan.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                whileHover={{ y: -3 }}
                className="
                  border border-gray-200
                  rounded-2xl
                  p-6
                  transition
                  hover:bg-gray-50
                  flex flex-col justify-between
                "
              >

                <div>
                  <Icon
                    size={26}
                    className="text-gray-700 mb-4"
                  />

                  <h3 className="font-semibold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-500 mt-6">
                  Kunjungi
                  <ExternalLink size={14} />
                </div>

              </motion.a>
            );
          })}

        </div>

      </section>
    </main>
  );
}