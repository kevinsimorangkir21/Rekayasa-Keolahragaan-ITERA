"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar } from "lucide-react";

export default function SejarahPage() {
  const timeline = [
    {
      year: "2023",
      title: "Pembukaan Program Studi",
      desc: "Program Studi Rekayasa Keolahragaan resmi dibuka di Institut Teknologi Sumatera berdasarkan SK Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi.",
    },
    {
      year: "2024",
      title: "Penerimaan Mahasiswa Pertama",
      desc: "Program Studi mulai menerima mahasiswa baru melalui berbagai jalur seleksi nasional seperti SNBT, SNBP, dan jalur Mandiri.",
    },
    {
      year: "Sekarang",
      title: "Pengembangan Kurikulum & Riset",
      desc: "Program Studi terus berkembang dengan kurikulum berbasis teknologi olahraga, penelitian inovatif, dan kolaborasi industri sport-tech.",
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
            Sejarah Program Studi
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
            <span className="text-orange-400">Sejarah</span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="section bg-white">
        <div className="max-w-6xl mx-auto px-6">

          {/* DESKRIPSI */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-gray-700 leading-relaxed text-justify space-y-6 mb-20"
          >
            <p>
              Program Studi Rekayasa Keolahragaan di Institut Teknologi Sumatera
              (ITERA) merupakan langkah strategis dalam pengembangan ilmu dan
              teknologi di bidang olahraga. Program studi ini resmi dibuka pada
              tahun <strong>2023</strong> berdasarkan Surat Keputusan
              Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi.
            </p>

            <p>
              Sejak saat itu, ITERA menjadi salah satu perguruan tinggi di
              Indonesia yang menawarkan pendekatan rekayasa dalam dunia
              keolahragaan. Kehadiran program studi ini menjadi bagian dari
              pengembangan ilmu yang mengintegrasikan teknologi dengan ilmu
              olahraga untuk meningkatkan performa atlet serta inovasi
              peralatan olahraga berbasis teknologi.
            </p>

            <p>
              Memasuki tahun <strong>2024 hingga sekarang</strong>, Program Studi
              Rekayasa Keolahragaan telah aktif menerima mahasiswa melalui jalur
              seleksi nasional seperti <strong>SNBT, SNBP, dan Mandiri</strong>.
              Hal ini menunjukkan komitmen ITERA dalam menyediakan pendidikan
              tinggi yang berkualitas di bidang rekayasa olahraga.
            </p>

            <p>
              Dengan kurikulum yang dirancang untuk menjawab tantangan era
              modern serta didukung oleh tenaga pengajar profesional, prodi ini
              diharapkan mampu mencetak lulusan yang unggul, inovatif, dan siap
              bersaing di dunia industri olahraga baik nasional maupun
              internasional.
            </p>
          </motion.div>

          {/* TIMELINE */}
          <div className="grid md:grid-cols-3 gap-8">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition"
              >
                <div className="flex items-center gap-2 text-orange-600 font-semibold mb-3">
                  <Calendar size={18} />
                  {item.year}
                </div>

                <h3 className="font-bold text-lg text-gray-900">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}