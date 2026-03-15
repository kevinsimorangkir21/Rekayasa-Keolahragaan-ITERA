"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CreditCard, FileText, Wallet, ArrowUpRight } from "lucide-react";

export default function KeuanganPage() {
  const layanan = [
    {
      icon: CreditCard,
      title: "Pembayaran UKT",
      desc: "Mahasiswa dapat melakukan pembayaran Uang Kuliah Tunggal (UKT) melalui sistem AVITA ITERA secara online.",
    },
    {
      icon: FileText,
      title: "Riwayat Transaksi",
      desc: "Melihat riwayat pembayaran dan transaksi keuangan mahasiswa secara transparan dan terintegrasi.",
    },
    {
      icon: Wallet,
      title: "Tagihan Mahasiswa",
      desc: "Mahasiswa dapat memeriksa tagihan pembayaran kuliah maupun biaya administrasi lainnya.",
    },
  ];

  return (
    <>
      {/* HERO */}
      <section
        className="relative h-[280px] flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1554224155-6726b3ff858f)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative text-center px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Layanan Keuangan
          </h1>

          {/* Breadcrumb */}
          <div className="mt-4 text-sm text-gray-200 flex justify-center gap-2">
            <Link href="/" className="hover:text-orange-400">
              Beranda
            </Link>
            <span>/</span>
            <Link href="/layanan" className="hover:text-orange-400">
              Layanan
            </Link>
            <span>/</span>
            <span className="text-orange-400">Keuangan</span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">

          {/* TITLE */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-orange-600">
              AVITA ITERA
            </h2>

            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              AVITA merupakan sistem layanan keuangan ITERA yang digunakan
              untuk pengelolaan pembayaran kuliah, tagihan mahasiswa, serta
              informasi transaksi keuangan secara terintegrasi.
            </p>

            {/* Button External */}
            <a
              href="https://avita.itera.ac.id"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-xl
              bg-orange-600 text-white font-medium
              hover:bg-orange-700 transition"
            >
              Akses AVITA ITERA <ArrowUpRight size={18} />
            </a>
          </div>

          {/* FITUR */}
          <div className="grid md:grid-cols-3 gap-8">
            {layanan.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
                >
                  <div className="mb-4 text-orange-600">
                    <Icon size={32} />
                  </div>

                  <h3 className="font-bold text-lg text-gray-900">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                    {item.desc}
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