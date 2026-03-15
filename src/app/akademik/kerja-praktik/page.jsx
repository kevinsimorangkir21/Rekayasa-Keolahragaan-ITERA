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
    {
      title: "Monitoring Pengajuan KP",
      link: "https://pengajuanjtmb.rf.gd/viewstudent_kpform.php?i=1",
      icon: Eye,
    },
    {
      title: "Monitoring Surat Tugas",
      link: "https://pengajuanjtmb.rf.gd/viewstudent_stmform.php",
      icon: FileSearch,
    },
    {
      title: "Form Penerimaan KP",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSdZaMm_5Ez9kTvwGeWJgvCADY6ESzoYFVqA_UU2Hg4A8dg5Sg/viewform",
      icon: ClipboardList,
    },
    {
      title: "Data Pembimbing KP",
      link: "https://docs.google.com/spreadsheets/d/1YVkPgnImakhECflyznVkiAo8jT-cmFjL9ZmBpn5V9FY",
      icon: Users,
    },
    {
      title: "Logbook Kerja Praktik",
      link: "https://docs.google.com/document/d/1EdjicttmQp2h-pDbZgZThnmM9TRO-Jw9",
      icon: BookOpen,
    },
    {
      title: "Laporan Kerja Praktik",
      link: "https://docs.google.com/document/d/1rft5UZawJNYuec7viwhCZ8cR_11TtGRY",
      icon: FileText,
    },
    {
      title: "Unggah Laporan KP",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeTFl8UxXA-BCg2eI5RmD_7RymRWedU-wPmUXnpgdZfkecG_w/viewform",
      icon: Upload,
    },
  ];

  const alur = [
    "Mahasiswa mengunduh form permohonan KP dan melengkapi tanda tangan mahasiswa serta dosen wali.",
    "Menyerahkan form ke prodi untuk dibuatkan surat pengantar dan tanda tangan kaprodi.",
    "Menyerahkan form dan surat pengantar ke jurusan.",
    "Pembuatan surat pengantar KP di jurusan.",
    "Mahasiswa mengambil surat pengantar untuk dikirim ke perusahaan.",
    "Jika disetujui perusahaan, mahasiswa melapor ke prodi dengan melampirkan surat balasan.",
    "Pengajuan surat tugas KP ke jurusan oleh prodi.",
    "Penerbitan surat tugas KP oleh jurusan.",
  ];

  return (
    <>
      {/* HERO */}
      <section
        className="relative h-[280px] flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1541339907198-e08756dedf3f)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative text-center px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Kerja Praktik
          </h1>

          <div className="mt-4 text-sm text-gray-200 flex justify-center gap-2">
            <Link href="/" className="hover:text-orange-400">
              Beranda
            </Link>
            <span>/</span>
            <Link href="/akademik" className="hover:text-orange-400">
              Akademik
            </Link>
            <span>/</span>
            <span className="text-orange-400">Kerja Praktik</span>
          </div>
        </div>
      </section>

      {/* PORTAL KP */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-orange-600">
              Portal Kerja Praktik
            </h2>

            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Portal ini digunakan untuk memantau proses pengajuan,
              administrasi, serta pengumpulan laporan Kerja Praktik mahasiswa
              Rekayasa Keolahragaan ITERA.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {portal.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={i}
                  href={item.link}
                  target="_blank"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 text-center shadow-md
                  hover:shadow-xl hover:-translate-y-1 transition group"
                >
                  <Icon
                    size={32}
                    className="mx-auto text-orange-600 mb-3 group-hover:scale-110 transition"
                  />

                  <p className="font-semibold text-gray-800 text-sm">
                    {item.title}
                  </p>
                </motion.a>
              );
            })}
          </div>

        </div>
      </section>

      {/* JUKNIS */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-orange-600">
              Petunjuk Teknis Kerja Praktik
            </h2>

            <p className="text-gray-600 mt-2">
              Program Studi Rekayasa Keolahragaan – ITERA
            </p>
          </div>

          {/* DOWNLOAD */}
          <div className="bg-gray-50 border border-dashed p-6 rounded-xl mb-10">
            <p className="text-sm text-gray-600 mb-4">
              Unduh dokumen pendukung pelaksanaan Kerja Praktik:
            </p>

            <div className="flex flex-wrap gap-4">

              <a
                href="https://docs.google.com/document/d/1s0UAa4ueIkug6My7RG2BZRNabO3MjJLS"
                target="_blank"
                className="flex items-center gap-2 bg-orange-600 text-white px-5 py-2 rounded-lg hover:bg-orange-700"
              >
                <Download size={16} /> Buku Pedoman KP
              </a>

              <a
                href="https://docs.google.com/document/d/1EdjicttmQp2h-pDbZgZThnmM9TRO-Jw9"
                target="_blank"
                className="flex items-center gap-2 bg-orange-600 text-white px-5 py-2 rounded-lg hover:bg-orange-700"
              >
                <Download size={16} /> Logbook KP
              </a>

              <a
                href="https://docs.google.com/document/d/1rft5UZawJNYuec7viwhCZ8cR_11TtGRY"
                target="_blank"
                className="flex items-center gap-2 bg-orange-600 text-white px-5 py-2 rounded-lg hover:bg-orange-700"
              >
                <Download size={16} /> Format Laporan KP
              </a>

            </div>
          </div>

          {/* ALUR */}
          <h3 className="text-xl font-semibold mb-6">
            Alur Pendaftaran Kerja Praktik
          </h3>

          <div className="space-y-4">
            {alur.map((item, i) => (
              <div
                key={i}
                className="flex gap-4 items-start bg-gray-50 p-4 rounded-lg border-l-4 border-orange-500"
              >
                <div className="bg-orange-600 text-white w-8 h-8 flex items-center justify-center rounded-full font-bold">
                  {i + 1}
                </div>

                <p className="text-gray-700 text-sm">{item}</p>
              </div>
            ))}
          </div>

          {/* CATATAN */}
          <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mt-10 rounded">
            <p className="font-semibold text-yellow-800 mb-2">
              Catatan Penting
            </p>

            <ul className="text-sm text-yellow-900 list-disc pl-5 space-y-1">
              <li>Form pengajuan KP harus diisi dengan cara diketik.</li>
              <li>
                Mahasiswa hanya dapat mengajukan ke satu perusahaan dalam satu
                kali pengajuan.
              </li>
              <li>
                Jika ditolak perusahaan, mahasiswa dapat mengajukan ulang
                dengan melampirkan bukti penolakan.
              </li>
            </ul>
          </div>

        </div>
      </section>
    </>
  );
}