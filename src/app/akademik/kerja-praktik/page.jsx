"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Eye,
  FileSearch,
  ClipboardList,
  Users,
  BookOpen,
  FileText,
  Upload,
  Download,
} from "lucide-react";

export default function KerjaPraktikPage() {
  const portal = [
    { title: "Monitoring Pengajuan KP", link: "#", icon: Eye },
    { title: "Monitoring Surat Tugas", link: "#", icon: FileSearch },
    { title: "Form Penerimaan KP", link: "#", icon: ClipboardList },
    { title: "Data Pembimbing KP", link: "#", icon: Users },
    { title: "Logbook KP", link: "#", icon: BookOpen },
    { title: "Laporan KP", link: "#", icon: FileText },
    { title: "Unggah Laporan", link: "#", icon: Upload },
  ];

  const alur = [
    "Unduh dan isi form permohonan KP",
    "Serahkan ke prodi untuk pengesahan",
    "Ajukan ke jurusan",
    "Proses surat pengantar",
    "Kirim ke perusahaan",
    "Terima balasan & lapor ke prodi",
    "Pengajuan surat tugas",
    "Terbit surat tugas",
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative h-[300px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative text-center">
          <h1 className="text-4xl font-semibold">Kerja Praktik</h1>

          <div className="mt-3 text-sm text-gray-300 flex gap-2 justify-center">
            <Link href="/">Beranda</Link>
            <span>/</span>
            <Link href="/akademik">Akademik</Link>
            <span>/</span>
            <span className="text-orange-400">Kerja Praktik</span>
          </div>
        </div>
      </section>

      {/* PORTAL */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-14">
            <h2 className="text-3xl font-semibold text-gray-900">
              Portal Kerja Praktik
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Akses seluruh layanan kerja praktik dalam satu tempat.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">

            {portal.map((item, i) => {
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
                    text-center
                    transition
                    hover:bg-gray-50
                  "
                >

                  <Icon
                    size={24}
                    className="mx-auto text-gray-700 mb-3"
                  />

                  <p className="text-sm font-medium text-gray-900">
                    {item.title}
                  </p>

                </motion.a>
              );
            })}

          </div>

        </div>
      </section>

      {/* JUKNIS */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900">
              Petunjuk Kerja Praktik
            </h2>
          </div>

          {/* DOWNLOAD */}
          <div className="border border-gray-200 rounded-2xl p-6 mb-12 bg-white">

            <p className="text-sm text-gray-500 mb-4">
              Unduh dokumen:
            </p>

            <div className="flex flex-wrap gap-3">

              {["Pedoman", "Logbook", "Laporan"].map((item, i) => (
                <button
                  key={i}
                  className="
                    px-4 py-2
                    rounded-full
                    border border-gray-300
                    text-sm
                    hover:bg-gray-100
                  "
                >
                  <Download size={14} className="inline mr-2" />
                  {item}
                </button>
              ))}

            </div>

          </div>

          {/* ALUR */}
          <h3 className="text-lg font-semibold mb-6">
            Alur Kerja Praktik
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

          {/* NOTE */}
          <div className="border border-gray-200 rounded-2xl p-5 mt-12 bg-white">

            <p className="font-medium text-gray-900 mb-2">
              Catatan Penting
            </p>

            <ul className="text-sm text-gray-500 space-y-1 list-disc pl-5">
              <li>Form wajib diketik</li>
              <li>Satu perusahaan per pengajuan</li>
              <li>Jika ditolak, bisa ajukan ulang</li>
            </ul>

          </div>

        </div>
      </section>
    </>
  );
}