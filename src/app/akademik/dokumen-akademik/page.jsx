"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Download,
  Search,
  ExternalLink,
  FileSpreadsheet,
  FileBadge
} from "lucide-react";

export default function DokumenAkademikPage() {

  const documents = [
    { name: "Form Tampil Mata Kuliah", type: "doc", category: "Akademik" },
    { name: "Form Surat Tugas Mahasiswa", type: "doc", category: "Administrasi" },
    { name: "Form Surat Pengantar Magang", type: "doc", category: "Magang" },
    { name: "Form Rekomendasi Mahasiswa", type: "doc", category: "Administrasi" },
    { name: "Form Permohonan Pengantar Izin Permintaan Data TA", type: "doc", category: "TA" },

    { name: "Form Perbaikan Nilai Mata Kuliah Baru", type: "doc", category: "Akademik" },
    { name: "Form Penyembunyian Mata Kuliah", type: "doc", category: "Akademik" },
    { name: "Form Penilaian Kerja Praktik", type: "xls", category: "Magang" },
    { name: "Form Pengunduran Diri Mahasiswa TPB", type: "pdf", category: "Administrasi" },
    { name: "Form Pengunduran Diri Mahasiswa FTI", type: "pdf", category: "Administrasi" },

    { name: "Form Pengisian KRS", type: "xls", category: "Akademik" },
    { name: "Form Pengajuan Pengantar Kuliah Lapangan", type: "doc", category: "Akademik" },
    { name: "Form Pengajuan Pengantar Kerja Praktik", type: "doc", category: "Magang" },
    { name: "Form Pendaftaran Yudisium", type: "pdf", category: "Yudisium" },
    { name: "Form Legalisir", type: "pdf", category: "Administrasi" },

    { name: "Form Layanan Perubahan KRS", type: "xls", category: "Akademik" },
    { name: "Form Izin Ruangan Kelas", type: "doc", category: "Administrasi" },
    { name: "Form Izin Kegiatan Senin-Jumat HIMA", type: "doc", category: "Kegiatan" },
    { name: "Form Izin Kegiatan Sabtu-Minggu HIMA", type: "doc", category: "Kegiatan" },
    { name: "Form Dispensasi Kuliah", type: "pdf", category: "Akademik" },
    { name: "Form Cuti Mahasiswa", type: "pdf", category: "Akademik" },
  ];

  const categories = ["Semua", "Akademik", "Magang", "Administrasi", "TA", "Yudisium", "Kegiatan"];

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Semua");
  const [page, setPage] = useState(1);

  const perPage = 6;

  const filteredDocs = documents.filter((doc) => {
    const matchSearch = doc.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = filter === "Semua" || doc.category === filter;
    return matchSearch && matchCategory;
  });

  const totalPages = Math.ceil(filteredDocs.length / perPage);

  const paginatedDocs = filteredDocs.slice(
    (page - 1) * perPage,
    page * perPage
  );

  const getIcon = (type) => {
    if (type === "pdf") return <FileBadge className="text-red-500" />;
    if (type === "xls") return <FileSpreadsheet className="text-green-600" />;
    return <FileText className="text-blue-600" />;
  };

  return (
    <main className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <section
        className="relative h-[260px] flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1523240795612-9a054b0db644)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold">
            Dokumen Akademik
          </h1>
          <p className="text-sm mt-2">Akademik / Dokumen Akademik</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* SEARCH + FILTER */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">

          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 text-gray-400" size={18} />

            <input
              type="text"
              placeholder="Cari dokumen..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
            />
          </div>

          <select
            className="border rounded-xl px-4 py-3"
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value);
              setPage(1);
            }}
          >
            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>

        </div>

        {/* TABLE */}
        <div className="bg-white rounded-2xl shadow overflow-hidden">

          <table className="w-full text-sm">

            <thead className="bg-orange-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left">Dokumen</th>
                <th className="px-6 py-4 text-left">Kategori</th>
                <th className="px-6 py-4 text-center">Unduh</th>
              </tr>
            </thead>

            <tbody>

              {paginatedDocs.map((doc, i) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="border-b hover:bg-gray-50"
                >

                  <td className="px-6 py-4 flex items-center gap-3">
                    {getIcon(doc.type)}
                    {doc.name}
                  </td>

                  <td className="px-6 py-4 text-gray-600">
                    {doc.category}
                  </td>

                  <td className="px-6 py-4 text-center">
                    <button className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg text-xs">
                      <Download size={14} />
                      Unduh
                    </button>
                  </td>

                </motion.tr>
              ))}

            </tbody>

          </table>

        </div>

        {/* PAGINATION */}
        <div className="flex justify-center gap-3 mt-10">

          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-4 py-2 rounded-lg text-sm ${
                page === i + 1
                  ? "bg-orange-600 text-white"
                  : "bg-white border"
              }`}
            >
              {i + 1}
            </button>
          ))}

        </div>

        {/* LINK LANJUTAN */}
        <div className="text-center mt-14">

          <p className="text-gray-600 mb-4">
            Jika dokumen yang Anda cari tidak tersedia di halaman ini,
            silakan cek halaman layanan mahasiswa Fakultas Teknologi Industri.
          </p>

          <a
            href="https://fti.itera.ac.id/mahasiswa/"
            target="_blank"
            className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-xl"
          >
            Lihat Dokumen Lain
            <ExternalLink size={16} />
          </a>

        </div>

      </div>
    </main>
  );
}