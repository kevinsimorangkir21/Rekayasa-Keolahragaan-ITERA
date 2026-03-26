"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  GraduationCap,
  Microscope,
  Cog,
  Handshake,
} from "lucide-react";

export default function VisiMisiPage() {
  const misiList = [
    {
      icon: GraduationCap,
      text: "Menyelenggarakan pendidikan berbasis teknologi untuk menghasilkan lulusan unggul di bidang rekayasa keolahragaan.",
    },
    {
      icon: Microscope,
      text: "Mengembangkan penelitian dan pengabdian masyarakat yang inovatif dan relevan dengan kebutuhan olahraga modern.",
    },
    {
      icon: Cog,
      text: "Memberikan kontribusi terhadap industri olahraga melalui inovasi teknologi dan rekayasa.",
    },
    {
      icon: Handshake,
      text: "Membangun kolaborasi lintas bidang dalam pengembangan rekayasa keolahragaan.",
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/70" />

        <div className="relative text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Visi & Misi
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
            <span className="text-orange-400">Visi & Misi</span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-white py-28">
        <div className="max-w-5xl mx-auto px-6">

          {/* VISI (HIGHLIGHT) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="
              border border-gray-200
              rounded-3xl
              p-10
              text-center
              mb-20
              bg-white
            "
          >
            <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-4">
              Visi
            </h2>

            <p className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug max-w-3xl mx-auto">
              Menjadi Program Studi Pelopor di bidang Rekayasa Keolahragaan yang
              Inovatif, Profesional, dan Aplikatif.
            </p>
          </motion.div>

          {/* MISI */}
          <div className="grid md:grid-cols-2 gap-8">
            {misiList.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="
                    border border-gray-200
                    rounded-2xl
                    p-6
                    flex gap-4
                    group
                    hover:-translate-y-1
                    transition
                  "
                >

                  {/* NUMBER */}
                  <div className="text-lg font-semibold text-gray-400">
                    0{index + 1}
                  </div>

                  {/* ICON */}
                  <div className="p-2 rounded-lg bg-gray-100 text-gray-700 group-hover:text-orange-600 transition">
                    <Icon size={20} />
                  </div>

                  {/* TEXT */}
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {item.text}
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