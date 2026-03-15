"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PrestasiMahasiswaPage() {
  const achievements = [
    {
      title: "Juara 1 Kejuaraan Atletik Nasional",
      desc: "Mewakili kampus dalam kategori sprint 100m tingkat nasional.",
      year: "2024",
      bidang: "Olahraga",
      img: "https://images.unsplash.com/photo-1502877338535-766e1452684a",
    },
    {
      title: "Finalis Kompetisi Smart Sport Technology",
      desc: "Inovasi wearable sensor monitoring performa atlet.",
      year: "2023",
      bidang: "Inovasi Teknologi",
      img: "https://images.unsplash.com/photo-1599058918144-7573e96b37f1",
    },
    {
      title: "Medali Perak POMDA Panjat Tebing",
      desc: "Berhasil meraih peringkat 2 kategori speed.",
      year: "2023",
      bidang: "Olahraga",
      img: "https://images.unsplash.com/photo-1551958219-acbc608c6377",
    },
  ];

  const slugify = (text) =>
    text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .trim();

  return (
    <main className="pt-24 bg-gray-50 dark:bg-[#0b0f15] text-gray-900 dark:text-gray-100 min-h-screen transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Heading */}
        <div className="text-center mb-14">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold text-orange-600 dark:text-orange-400"
          >
            Prestasi Mahasiswa
          </motion.h1>
          <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Dokumentasi prestasi mahasiswa Rekayasa Keolahragaan dalam bidang
            olahraga, inovasi teknologi, dan kompetisi akademik.
          </p>
        </div>

        {/* Achievement Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {achievements.map((item, i) => (
            <Link
              key={i}
              href={`/profil/prestasi-mahasiswa/${slugify(item.title)}`}
              className="group"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="
                  bg-white dark:bg-[#101826] rounded-2xl shadow-md overflow-hidden
                  hover:shadow-xl hover:-translate-y-2 transition-all duration-300
                  cursor-pointer
                "
              >
                <div
                  className="h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url(${item.img})` }}
                />

                <div className="p-6 space-y-3">
                  <span className="inline-block px-3 py-1 text-xs font-semibold
                    bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-400 rounded-full">
                    {item.bidang}
                  </span>

                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>

                  <p className="text-sm font-medium text-orange-600 dark:text-orange-400">
                    {item.year}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}
