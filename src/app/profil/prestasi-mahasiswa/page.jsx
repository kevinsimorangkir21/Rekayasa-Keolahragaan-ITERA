"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function PrestasiMahasiswaPage() {
  const data = [
    {
      nama: "Lusy Rona Rumata Sihombing",
      nim: "124510007",
      prodi: "Rekayasa Keolahragaan",
      prestasi: "Juara 3 Kejuaraan Karate Nasional",
      foto: "/prestasi/lusy.jpg",
    },
    {
      nama: "Damianus Dei Waradana",
      nim: "124510021",
      prodi: "Rekayasa Keolahragaan",
      prestasi:
        "Juara 1 Kejuaraan Terbuka Wushu Pelajar Tingkat Nasional – WUGAMES UI 2024",
      foto: "/prestasi/damianus.jpg",
    },
    {
      nama: "Damianus Dei Waradana",
      nim: "124510021",
      prodi: "Rekayasa Keolahragaan",
      prestasi:
        "Juara 1 CHANGQUAN B Mahasiswa Male – WUGAMES UI 2024",
      foto: "/prestasi/damianus.jpg",
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
              "url(https://images.unsplash.com/photo-1546519638-68e109498ffc)",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative text-center px-6">
          <h1 className="text-4xl font-semibold">
            Prestasi Mahasiswa
          </h1>

          <div className="text-sm mt-3 text-gray-300">
            <Link href="/">Beranda</Link> / Profil /{" "}
            <span className="text-orange-400">Prestasi</span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center mb-14">
          <h2 className="text-3xl font-semibold text-gray-900">
            Prestasi Mahasiswa
          </h2>

          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Pencapaian mahasiswa dalam berbagai kompetisi nasional dan internasional.
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="
                border border-gray-200
                rounded-2xl
                overflow-hidden
                group
                hover:-translate-y-1
                transition
              "
            >

              {/* IMAGE */}
              <div className="relative h-52">
                <Image
                  src={item.foto}
                  alt={item.nama}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5 space-y-2">

                <h3 className="font-semibold text-gray-900">
                  {item.nama}
                </h3>

                <p className="text-xs text-gray-400">
                  {item.nim} • {item.prodi}
                </p>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.prestasi}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </section>
    </main>
  );
}