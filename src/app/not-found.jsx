"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white px-6 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-orange-100 rounded-full blur-3xl opacity-40 top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-gray-100 rounded-full blur-3xl opacity-40 bottom-[-100px] right-[-100px]" />

      <div className="relative text-center max-w-xl">

        {/* BIG 404 OUTLINE */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.1, scale: 1 }}
          className="
            absolute inset-0 flex items-center justify-center
            text-[140px] md:text-[180px]
            font-extrabold
            text-gray-900
            pointer-events-none
          "
        >
          404
        </motion.h1>

        {/* MAIN CONTENT */}
        <div className="relative">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-semibold text-gray-900"
          >
            Halaman Tidak Ditemukan
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 mt-4 leading-relaxed"
          >
            Halaman yang Anda cari mungkin telah dipindahkan,
            dihapus, atau tidak tersedia.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center gap-4 mt-8 flex-wrap"
          >

            <Link
              href="/"
              className="
                inline-flex items-center gap-2
                px-5 py-2.5
                rounded-full
                bg-gray-900 text-white
                text-sm
                hover:bg-gray-800
                transition
              "
            >
              <Home size={16} />
              Beranda
            </Link>

            <button
              onClick={() => window.history.back()}
              className="
                inline-flex items-center gap-2
                px-5 py-2.5
                rounded-full
                border border-gray-300
                text-sm text-gray-700
                hover:bg-gray-100
                transition
              "
            >
              <ArrowLeft size={16} />
              Kembali
            </button>

          </motion.div>

        </div>

      </div>
    </section>
  );
}