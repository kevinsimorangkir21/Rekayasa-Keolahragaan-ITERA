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
    <main className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <section className="relative h-[300px] flex items-center justify-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d)",
          }}
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative text-center px-6">
          <h1 className="text-3xl md:text-4xl font-extrabold">
            Kuliah Kerja Nyata
          </h1>

          <div className="text-sm mt-3 opacity-90">
            <Link href="/" className="hover:underline">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/akademik" className="hover:underline">
              Akademik
            </Link>{" "}
            / <span>Kuliah Kerja Nyata</span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        {/* INTRO */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-orange-600">
            Program Kuliah Kerja Nyata
          </h2>

          <p className="text-gray-600 mt-4">
            Kuliah Kerja Nyata (KKN) merupakan kegiatan pengabdian kepada
            masyarakat yang dilaksanakan oleh mahasiswa dengan tujuan
            mengaplikasikan ilmu pengetahuan dan teknologi secara langsung
            kepada masyarakat.
          </p>
        </div>

        {/* CARD GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {layanan.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition"
              >
                <Icon size={32} className="text-orange-600 mb-4" />

                <h3 className="font-semibold text-lg text-gray-900">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm mt-2">
                  {item.desc}
                </p>

                <div className="flex items-center gap-2 text-orange-600 text-sm mt-4">
                  Kunjungi
                  <ExternalLink size={16} />
                </div>
              </motion.a>
            );
          })}
        </div>

      </section>
    </main>
  );
}