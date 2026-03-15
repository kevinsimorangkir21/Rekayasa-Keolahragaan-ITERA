"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MessageSquareWarning, Send, ShieldAlert, User } from "lucide-react";

export default function LaporPengaduanPage() {
  const kategori = [
    {
      icon: ShieldAlert,
      title: "Layanan Akademik",
      desc: "Pengaduan terkait proses akademik seperti jadwal kuliah, administrasi akademik, dan layanan program studi.",
    },
    {
      icon: User,
      title: "Layanan Mahasiswa",
      desc: "Pengaduan terkait fasilitas mahasiswa, kegiatan kemahasiswaan, atau pelayanan administrasi mahasiswa.",
    },
    {
      icon: MessageSquareWarning,
      title: "Fasilitas Kampus",
      desc: "Pengaduan terkait fasilitas kampus seperti laboratorium, ruang kelas, jaringan internet, dan sarana lainnya.",
    },
  ];

  return (
    <>
      {/* HERO */}
      <section
        className="relative h-[280px] flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1551836022-d5d88e9218df)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative text-center px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Lapor Pengaduan
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
            <span className="text-orange-400">Pengaduan</span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">

          {/* INTRO */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-orange-600">
              Sistem Pengaduan Mahasiswa
            </h2>

            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Layanan pengaduan ini disediakan untuk membantu mahasiswa
              menyampaikan kritik, saran, maupun laporan terkait layanan
              akademik, fasilitas, maupun kegiatan kampus di ITERA.
            </p>
          </div>

          {/* KATEGORI */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {kategori.map((item, i) => {
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

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-10"
          >
            <h3 className="text-xl font-bold mb-6 text-gray-900">
              Kirim Pengaduan
            </h3>

            <form className="grid md:grid-cols-2 gap-6">

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Nama
                </label>
                <input
                  type="text"
                  placeholder="Nama lengkap"
                  className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="email@itera.ac.id"
                  className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div className="md:col-span-2">
                <label className="text-sm font-medium text-gray-700">
                  Kategori Pengaduan
                </label>
                <select className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500">
                  <option>Akademik</option>
                  <option>Fasilitas Kampus</option>
                  <option>Layanan Mahasiswa</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="text-sm font-medium text-gray-700">
                  Pesan Pengaduan
                </label>
                <textarea
                  rows="5"
                  placeholder="Tuliskan laporan atau pengaduan Anda..."
                  className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                  bg-orange-600 text-white font-medium
                  hover:bg-orange-700 transition"
                >
                  Kirim Pengaduan <Send size={18} />
                </button>
              </div>

            </form>
          </motion.div>

        </div>
      </section>
    </>
  );
}