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
      text: "Menyelenggarakan pendidikan dengan memanfaatkan teknologi dan informasi sehingga mampu menghasilkan lulusan yang menguasai ilmu rekayasa keolahragaan.",
    },
    {
      icon: Microscope,
      text: "Menyelenggarakan penelitian dan pengabdian masyarakat yang berorientasi pada bidang rekayasa keolahragaan guna menjawab permasalahan keolahragaan.",
    },
    {
      icon: Cog,
      text: "Memberikan kontribusi terhadap industri olahraga melalui inovasi dan penerapan teknologi yang relevan.",
    },
    {
      icon: Handshake,
      text: "Menjalin kerjasama lintas bidang baik akademik maupun non-akademik yang berkaitan dengan rekayasa keolahragaan.",
    },
  ];

  return (
    <>
      {/* HERO */}
      <section
        className="relative h-[320px] flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1599058918144-7573e96b37f1)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative text-center px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Visi & Misi
          </h1>

          {/* Breadcrumb */}
          <div className="mt-4 text-sm text-gray-200 flex justify-center gap-2">
            <Link href="/" className="hover:text-orange-400">
              Beranda
            </Link>
            <span>/</span>
            <Link href="/profil" className="hover:text-orange-400">
              Profil
            </Link>
            <span>/</span>
            <span className="text-orange-400">Visi & Misi</span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="section bg-white">
        <div className="max-w-6xl mx-auto px-6">

          {/* VISI */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20 bg-gray-50 p-10 rounded-2xl shadow-sm text-center"
          >
            <h2 className="text-3xl font-bold text-orange-600 mb-6">
              Visi
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
              Menjadi Program Studi Pelopor di bidang Rekayasa Keolahragaan
              yang Inovatif, Profesional, dan Aplikatif.
            </p>
          </motion.div>

          {/* MISI */}
          <div className="grid md:grid-cols-2 gap-10">
            {misiList.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition"
                >
                  <div className="flex items-start gap-4">

                    {/* Number */}
                    <div className="text-2xl font-bold text-orange-600">
                      {index + 1}.
                    </div>

                    {/* Icon */}
                    <div className="bg-orange-100 text-orange-600 p-3 rounded-lg">
                      <Icon size={24} />
                    </div>

                    {/* Text */}
                    <p className="text-gray-700 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}