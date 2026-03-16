"use client";

import { motion } from "framer-motion";
import { Smartphone, Apple, Laptop, Monitor, BookOpen } from "lucide-react";

export default function KebutuhanMahasiswaPage() {
  return (
    <main className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <section
        className="relative h-[280px] flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1523240795612-9a054b0db644)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-3xl md:text-4xl font-extrabold">
            Kebutuhan Mahasiswa
          </h1>

          <p className="text-sm text-gray-200 mt-2">
            Akademik / Kebutuhan Mahasiswa
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* ========================== */}
        {/* POCKET ITERA */}
        {/* ========================== */}

        <section className="mb-20">

          <h2 className="text-2xl font-bold text-orange-600 mb-4">
            1. Pocket Mahasiswa ITERA
          </h2>

          <p className="text-gray-700 leading-relaxed max-w-4xl">
            Pocket ITERA Mahasiswa merupakan aplikasi mobile yang memiliki
            beberapa fitur dari berbagai sistem di ITERA sebagai penunjang
            aktivitas mahasiswa. Sistem ini mencakup layanan seperti
            SIAKAD, Helpdesk, E-Learning, Digital Library, ITERA News,
            Izin Kegiatan, Kalender Akademik hingga Repository Jurnal.
            Pocket ITERA dapat diunduh melalui sistem Android maupun iOS.
          </p>

          {/* DOWNLOAD CARD */}
          <div className="grid md:grid-cols-2 gap-8 mt-10">

            {/* Android */}
            <motion.a
              href="#"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              className="bg-orange-500 text-white rounded-2xl p-10 text-center shadow-lg"
            >
              <Smartphone size={40} className="mx-auto" />

              <h3 className="text-3xl font-bold mt-4">
                Android
              </h3>

              <button className="mt-6 bg-white text-orange-600 px-6 py-2 rounded-full font-semibold">
                Download
              </button>
            </motion.a>

            {/* IOS */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-black text-white rounded-2xl p-10 text-center shadow-lg"
            >
              <Apple size={40} className="mx-auto" />

              <h3 className="text-3xl font-bold mt-4">
                iOS
              </h3>

              <button className="mt-6 bg-gray-300 text-black px-6 py-2 rounded-full font-semibold">
                Not Available
              </button>
            </motion.div>

          </div>
        </section>

        {/* ========================== */}
        {/* LIBRARY ITERA */}
        {/* ========================== */}

        <section>

          <h2 className="text-2xl font-bold text-orange-600 mb-4">
            2. Library / Perpustakaan ITERA
          </h2>

          <p className="text-gray-700 leading-relaxed max-w-4xl">
            E-Library ITERA adalah layanan perpustakaan digital yang
            disediakan oleh Institut Teknologi Sumatera untuk memudahkan
            mahasiswa, dosen, dan seluruh sivitas akademika dalam mengakses
            berbagai koleksi buku, jurnal, artikel ilmiah, dan sumber
            referensi lainnya secara online. Layanan ini mendukung kegiatan
            belajar dan penelitian di lingkungan kampus.
          </p>

          {/* OS CARD */}
          <div className="grid md:grid-cols-4 gap-8 mt-10">

            {/* Android */}
            <motion.a
              href="https://elib.itera.ac.id"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              className="bg-orange-500 text-white rounded-2xl p-8 text-center shadow-lg"
            >
              <Smartphone size={36} className="mx-auto" />

              <h3 className="text-xl font-bold mt-3">
                Android
              </h3>
            </motion.a>

            {/* IOS */}
            <motion.a
              href="https://elib.itera.ac.id"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              className="bg-black text-white rounded-2xl p-8 text-center shadow-lg"
            >
              <Apple size={36} className="mx-auto" />

              <h3 className="text-xl font-bold mt-3">
                iOS
              </h3>
            </motion.a>

            {/* MacOS */}
            <motion.a
              href="https://elib.itera.ac.id"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 text-white rounded-2xl p-8 text-center shadow-lg"
            >
              <Laptop size={36} className="mx-auto" />

              <h3 className="text-xl font-bold mt-3">
                MacOS
              </h3>
            </motion.a>

            {/* Windows */}
            <motion.a
              href="https://elib.itera.ac.id"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              className="bg-blue-600 text-white rounded-2xl p-8 text-center shadow-lg"
            >
              <Monitor size={36} className="mx-auto" />

              <h3 className="text-xl font-bold mt-3">
                Windows
              </h3>
            </motion.a>

          </div>
        </section>

        {/* ========================== */}
{/* SISTEM AKADEMIK ITERA */}
{/* ========================== */}

<section className="mt-20">

  <h2 className="text-2xl font-bold text-orange-600 mb-4">
    3. Sistem Akademik Mahasiswa
  </h2>

  <p className="text-gray-700 leading-relaxed max-w-4xl">
    ITERA menyediakan berbagai sistem digital untuk mendukung aktivitas
    akademik mahasiswa, mulai dari pengelolaan perkuliahan, administrasi
    akademik, hingga persyaratan kelulusan dan wisuda.
  </p>

  <div className="grid md:grid-cols-4 gap-8 mt-10">

    {/* SIAKAD */}
    <motion.a
      href="https://siakad.itera.ac.id"
      target="_blank"
      whileHover={{ scale: 1.05 }}
      className="bg-orange-500 text-white rounded-2xl p-8 text-center shadow-lg"
    >
      <BookOpen size={36} className="mx-auto" />

      <h3 className="text-lg font-bold mt-3">
        SIAKAD ITERA
      </h3>

      <p className="text-xs mt-2 opacity-90">
        Sistem Informasi Akademik mahasiswa ITERA.
      </p>
    </motion.a>

    {/* ELEARNING */}
    <motion.a
      href="https://kuliah.itera.ac.id"
      target="_blank"
      whileHover={{ scale: 1.05 }}
      className="bg-blue-600 text-white rounded-2xl p-8 text-center shadow-lg"
    >
      <Laptop size={36} className="mx-auto" />

      <h3 className="text-lg font-bold mt-3">
        E-Learning
      </h3>

      <p className="text-xs mt-2 opacity-90">
        Platform pembelajaran daring ITERA.
      </p>
    </motion.a>

    {/* SIYUDIS */}
    <motion.a
      href="https://siyudis.itera.ac.id"
      target="_blank"
      whileHover={{ scale: 1.05 }}
      className="bg-green-600 text-white rounded-2xl p-8 text-center shadow-lg"
    >
      <Monitor size={36} className="mx-auto" />

      <h3 className="text-lg font-bold mt-3">
        SIYUDIS
      </h3>

      <p className="text-xs mt-2 opacity-90">
        Sistem pendaftaran yudisium mahasiswa.
      </p>
    </motion.a>

    {/* INCITE */}
    <motion.a
      href="https://incite.itera.ac.id"
      target="_blank"
      whileHover={{ scale: 1.05 }}
      className="bg-purple-600 text-white rounded-2xl p-8 text-center shadow-lg"
    >
      <BookOpen size={36} className="mx-auto" />

      <h3 className="text-lg font-bold mt-3">
        INCITE
      </h3>

      <p className="text-xs mt-2 opacity-90">
        Tes TOEFL sebagai syarat kelulusan dan wisuda.
      </p>
    </motion.a>

  </div>

</section>

      </div>

    </main>
  );
}