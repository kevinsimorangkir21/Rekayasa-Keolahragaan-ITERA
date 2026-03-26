"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FileText,
  Calendar,
  Upload,
  ClipboardList,
  ExternalLink,
} from "lucide-react";

export default function UjianAkhirPage() {
  const layanan = [
    {
      title: "Pendaftaran Ujian Akhir",
      desc: "Form pendaftaran sidang tugas akhir mahasiswa.",
      icon: ClipboardList,
      link: "#",
    },
    {
      title: "Upload Berkas TA",
      desc: "Unggah dokumen skripsi dan persyaratan sidang.",
      icon: Upload,
      link: "#",
    },
    {
      title: "Jadwal Ujian",
      desc: "Lihat jadwal pelaksanaan sidang tugas akhir.",
      icon: Calendar,
      link: "#",
    },
    {
      title: "Template Laporan TA",
      desc: "Format penulisan laporan tugas akhir.",
      icon: FileText,
      link: "#",
    },
  ];

  const alur = [
    "Mahasiswa menyelesaikan penulisan laporan tugas akhir.",
    "Melakukan bimbingan dan mendapatkan persetujuan dosen pembimbing.",
    "Mengajukan pendaftaran ujian akhir melalui sistem.",
    "Melengkapi seluruh berkas administrasi.",
    "Penjadwalan sidang oleh program studi.",
    "Pelaksanaan ujian akhir (sidang).",
    "Revisi laporan (jika ada).",
    "Pengumpulan laporan final.",
  ];

  return (
    <main className="bg-white min-h-screen">

      {/* HERO */}
      <section className="relative h-[300px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative text-center">
          <h1 className="text-4xl font-semibold">
            Ujian Akhir
          </h1>

          <div className="mt-3 text-sm text-gray-300 flex gap-2 justify-center">
            <Link href="/">Beranda</Link>
            <span>/</span>
            <Link href="/akademik">Akademik</Link>
            <span>/</span>
            <span className="text-orange-400">Ujian Akhir</span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-20 space-y-20">

        {/* INTRO */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900">
            Ujian Akhir (Tugas Akhir / Skripsi)
          </h2>

          <p className="text-gray-500 mt-4 leading-relaxed">
            Ujian akhir merupakan tahap akhir mahasiswa dalam menyelesaikan
            studi melalui sidang tugas akhir sebagai bentuk evaluasi akademik.
          </p>
        </div>

        {/* PORTAL */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">

          {layanan.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                whileHover={{ y: -3 }}
                className="
                  border border-gray-200
                  rounded-2xl
                  p-6
                  hover:bg-gray-50
                  transition
                "
              >

                <Icon size={24} className="text-gray-700 mb-3" />

                <h3 className="font-semibold text-gray-900 text-sm">
                  {item.title}
                </h3>

                <p className="text-xs text-gray-500 mt-2">
                  {item.desc}
                </p>

                <div className="flex items-center gap-2 text-xs text-gray-400 mt-4">
                  Buka
                  <ExternalLink size={12} />
                </div>

              </motion.a>
            );
          })}

        </div>

        {/* ALUR */}
        <div>

          <h3 className="text-xl font-semibold mb-6">
            Alur Ujian Akhir
          </h3>

          <div className="relative">

            {/* LINE */}
            <div className="absolute left-3 top-0 bottom-0 w-px bg-gray-200" />

            <div className="space-y-6">

              {alur.map((item, i) => (
                <div key={i} className="relative pl-10">

                  <div className="absolute left-0 top-1 w-6 h-6 rounded-full border border-gray-300 bg-white flex items-center justify-center text-xs">
                    {i + 1}
                  </div>

                  <div className="border border-gray-200 rounded-xl p-4 text-sm text-gray-600">
                    {item}
                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

        {/* CATATAN */}
        <div className="border border-gray-200 rounded-2xl p-6">

          <h3 className="font-semibold text-gray-900 mb-3">
            Catatan Penting
          </h3>

          <ul className="text-sm text-gray-500 space-y-2 list-disc pl-5">
            <li>Pastikan seluruh berkas telah lengkap sebelum mendaftar.</li>
            <li>Ikuti jadwal yang telah ditentukan oleh program studi.</li>
            <li>Gunakan format laporan yang sesuai dengan pedoman.</li>
          </ul>

        </div>

      </section>
    </main>
  );
}