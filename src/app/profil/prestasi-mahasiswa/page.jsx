"use client";

import Link from "next/link";
import { motion } from "framer-motion";

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
        "Juara 1 Kejuaraan Terbuka Wushu Pelajar Tingkat Nasional 'QIANGSHU C Mahasiswa Male' – WUGAMES Universitas Indonesia 2024",
      foto: "/prestasi/damianus.jpg",
    },
    {
      nama: "Damianus Dei Waradana",
      nim: "124510021",
      prodi: "Rekayasa Keolahragaan",
      prestasi:
        "Juara 1 Kejuaraan Terbuka Wushu Pelajar Tingkat Nasional 'CHANGQUAN B Mahasiswa Male' – WUGAMES Universitas Indonesia 2024",
      foto: "/prestasi/damianus.jpg",
    },
  ];

  return (
    <main className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <section className="relative h-[260px] flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1546519638-68e109498ffc)",
          }}
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative text-center px-6">
          <h1 className="text-3xl md:text-4xl font-extrabold">
            Prestasi Mahasiswa
          </h1>

          <div className="text-sm mt-3 opacity-90">
            <Link href="/" className="hover:underline">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/profil" className="hover:underline">
              Profil
            </Link>{" "}
            / <span>Prestasi Mahasiswa</span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-orange-600">
            Daftar Prestasi Mahasiswa
          </h2>

          <p className="text-gray-600 mt-4">
            Prestasi mahasiswa Program Studi Rekayasa Keolahragaan ITERA dalam
            berbagai kompetisi nasional maupun internasional.
          </p>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto bg-white shadow-md rounded-xl">
          <table className="w-full text-sm border-collapse">
            <thead className="bg-black text-white">
              <tr>
                <th className="p-4 text-left">Nama Mahasiswa</th>
                <th className="p-4 text-left">NIM</th>
                <th className="p-4 text-left">Prodi</th>
                <th className="p-4 text-left">Prestasi</th>
                <th className="p-4 text-left">Dokumentasi</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="border-t hover:bg-gray-50"
                >
                  <td className="p-4 font-medium">
                    {index + 1}. {item.nama}
                  </td>

                  <td className="p-4">{item.nim}</td>

                  <td className="p-4">{item.prodi}</td>

                  <td className="p-4 max-w-md">
                    {item.prestasi}
                  </td>

                  <td className="p-4">
                    <img
                      src={item.foto}
                      className="w-44 rounded-lg shadow"
                      alt="prestasi"
                    />
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

      </section>
    </main>
  );
}