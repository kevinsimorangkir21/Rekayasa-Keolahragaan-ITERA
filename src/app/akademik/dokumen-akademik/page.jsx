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
    { name: "Form Permohonan Data TA", type: "doc", category: "TA" },
    { name: "Form Perbaikan Nilai", type: "doc", category: "Akademik" },
    { name: "Form Penyembunyian MK", type: "doc", category: "Akademik" },
    { name: "Form Penilaian KP", type: "xls", category: "Magang" },
    { name: "Form Pengunduran Diri TPB", type: "pdf", category: "Administrasi" },
    { name: "Form Pengisian KRS", type: "xls", category: "Akademik" },
    { name: "Form Yudisium", type: "pdf", category: "Yudisium" },
    { name: "Form Cuti Mahasiswa", type: "pdf", category: "Akademik" },
  ];

  const categories = ["Semua", "Akademik", "Magang", "Administrasi", "TA", "Yudisium"];

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
    if (type === "pdf") return <FileBadge className="text-red-500" size={20} />;
    if (type === "xls") return <FileSpreadsheet className="text-green-600" size={20} />;
    return <FileText className="text-blue-600" size={20} />;
  };

  return (
    <main className="bg-white min-h-screen">

      {/* HERO */}
      <section className="relative h-[280px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative text-center">
          <h1 className="text-4xl font-semibold">Dokumen Akademik</h1>
          <p className="text-sm text-gray-300 mt-2">Akademik / Dokumen</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* SEARCH */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">

          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 text-gray-400" size={18} />

            <input
              type="text"
              placeholder="Cari dokumen..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
            />
          </div>

          <select
            className="border border-gray-200 rounded-xl px-4 py-3"
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

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-6">

          {paginatedDocs.map((doc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="
                border border-gray-200
                rounded-2xl
                p-5
                flex justify-between items-center
                hover:bg-gray-50
                transition
              "
            >

              {/* LEFT */}
              <div className="flex items-center gap-3">
                {getIcon(doc.type)}

                <div>
                  <h3 className="text-sm font-medium text-gray-900">
                    {doc.name}
                  </h3>
                  <p className="text-xs text-gray-400">
                    {doc.category}
                  </p>
                </div>
              </div>

              {/* ACTION */}
              <button className="
                inline-flex items-center gap-2
                px-3 py-2
                rounded-full
                border border-gray-300
                text-sm
                hover:bg-gray-100
                transition
              ">
                <Download size={14} />
              </button>

            </motion.div>
          ))}

        </div>

        {/* PAGINATION */}
        <div className="flex justify-center gap-2 mt-12">

          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-4 py-2 rounded-full text-sm ${
                page === i + 1
                  ? "bg-gray-900 text-white"
                  : "border border-gray-300"
              }`}
            >
              {i + 1}
            </button>
          ))}

        </div>

        {/* LINK */}
        <div className="text-center mt-16">

          <p className="text-gray-500 mb-4">
            Dokumen belum lengkap?
          </p>

          <a
            href="https://fti.itera.ac.id/mahasiswa/"
            target="_blank"
            className="
              inline-flex items-center gap-2
              px-6 py-3
              rounded-full
              border border-gray-300
              hover:bg-gray-100
              transition
            "
          >
            Lihat Semua
            <ExternalLink size={16} />
          </a>

        </div>

      </div>
    </main>
  );
}