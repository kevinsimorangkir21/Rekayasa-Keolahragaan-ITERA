"use client";

import { motion } from "framer-motion";
import { Smartphone, Apple, Laptop, Monitor, BookOpen } from "lucide-react";

export default function KebutuhanMahasiswaPage() {
  return (
    <main className="bg-white min-h-screen">

      {/* HERO */}
      <section className="relative h-[280px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative text-center px-6">
          <h1 className="text-4xl font-semibold">
            Kebutuhan Mahasiswa
          </h1>
          <p className="text-sm text-gray-300 mt-2">
            Akademik / Kebutuhan Mahasiswa
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-20 space-y-20">

        {/* ================= */}
        {/* POCKET ITERA */}
        {/* ================= */}
        <section>

          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            1. Pocket Mahasiswa ITERA
          </h2>

          <p className="text-gray-500 max-w-3xl">
            Aplikasi mobile untuk mengakses layanan akademik seperti SIAKAD,
            E-Learning, Library, dan lainnya.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-8">

            <Card
              icon={<Smartphone size={22} />}
              title="Android"
              action="Download"
            />

            <Card
              icon={<Apple size={22} />}
              title="iOS"
              action="Not Available"
              disabled
            />

          </div>
        </section>

        {/* ================= */}
        {/* LIBRARY */}
        {/* ================= */}
        <section>

          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            2. E-Library ITERA
          </h2>

          <p className="text-gray-500 max-w-3xl">
            Perpustakaan digital untuk akses buku, jurnal, dan referensi ilmiah.
          </p>

          <div className="grid md:grid-cols-4 gap-6 mt-8">

            <Card icon={<Smartphone />} title="Android" link />
            <Card icon={<Apple />} title="iOS" link />
            <Card icon={<Laptop />} title="MacOS" link />
            <Card icon={<Monitor />} title="Windows" link />

          </div>
        </section>

        {/* ================= */}
        {/* SISTEM AKADEMIK */}
        {/* ================= */}
        <section>

          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            3. Sistem Akademik
          </h2>

          <p className="text-gray-500 max-w-3xl">
            Sistem digital untuk mendukung aktivitas akademik mahasiswa ITERA.
          </p>

          <div className="grid md:grid-cols-4 gap-6 mt-8">

            <Card icon={<BookOpen />} title="SIAKAD" link />
            <Card icon={<Laptop />} title="E-Learning" link />
            <Card icon={<Monitor />} title="SIYUDIS" link />
            <Card icon={<BookOpen />} title="INCITE" link />

          </div>
        </section>

      </div>
    </main>
  );
}

/* ================= */
/* CARD COMPONENT */
/* ================= */

function Card({ icon, title, action, disabled, link }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="
        border border-gray-200
        rounded-2xl
        p-6
        text-center
        transition
      "
    >

      <div className="text-gray-700 mb-3 flex justify-center">
        {icon}
      </div>

      <h3 className="font-medium text-gray-900">
        {title}
      </h3>

      {action && (
        <button
          className={`
            mt-4 px-4 py-2 rounded-full text-sm
            ${disabled
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "border border-gray-300 hover:bg-gray-100"}
          `}
        >
          {action}
        </button>
      )}

      {link && (
        <button className="mt-4 text-sm text-gray-500 hover:text-gray-900">
          Buka →
        </button>
      )}

    </motion.div>
  );
}