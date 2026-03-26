"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MessageSquareWarning, Send, ShieldAlert, User } from "lucide-react";

export default function Page() {
  const kategori = [
    { icon: ShieldAlert, title: "Akademik" },
    { icon: User, title: "Mahasiswa" },
    { icon: MessageSquareWarning, title: "Fasilitas" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      nama: e.target.nama.value,
      email: e.target.email.value,
      kategori: e.target.kategori.value,
      isi: e.target.pesan.value,
      tanggal: new Date().toISOString().split("T")[0],
      status: "baru",
    };

    const existing =
      JSON.parse(localStorage.getItem("pengaduanData")) || [];

    localStorage.setItem(
      "pengaduanData",
      JSON.stringify([formData, ...existing])
    );

    alert("Pengaduan berhasil dikirim ✅");
    e.target.reset();
  };

  return (
    <>
      {/* HERO */}
      <section className="relative h-[300px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative text-center">
          <h1 className="text-4xl font-semibold">
            Lapor Pengaduan
          </h1>

          <div className="mt-3 text-sm text-gray-300 flex gap-2 justify-center">
            <Link href="/">Beranda</Link>
            <span>/</span>
            <Link href="/layanan">Layanan</Link>
            <span>/</span>
            <span className="text-orange-400">Pengaduan</span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">

          <form
            onSubmit={handleSubmit}
            className="border border-gray-200 rounded-2xl p-8 space-y-6"
          >
            <h3 className="text-lg font-semibold">
              Kirim Pengaduan
            </h3>

            <Input name="nama" label="Nama" />
            <Input name="email" label="Email" />

            <select
              name="kategori"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm"
            >
              {kategori.map((k, i) => (
                <option key={i}>{k.title}</option>
              ))}
            </select>

            <textarea
              name="pesan"
              rows="5"
              placeholder="Isi pengaduan..."
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm"
            />

            <button className="bg-gray-900 text-white px-5 py-2.5 rounded-full flex items-center gap-2">
              Kirim <Send size={16} />
            </button>
          </form>

        </div>
      </section>
    </>
  );
}

function Input({ name, label }) {
  return (
    <div>
      <label className="text-sm text-gray-500">{label}</label>
      <input
        name={name}
        className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-200 text-sm"
      />
    </div>
  );
}