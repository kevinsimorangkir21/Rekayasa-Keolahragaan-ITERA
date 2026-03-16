"use client";

import { motion } from "framer-motion";
import { Mail, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { use } from "react";

export default function DosenDetail({ params }) {
  const { slug } = use(params);

  const dosenList = [
    {
      slug: "burhaan-shodiq-mor",
      nama: "Burhaan Shodiq, M.Or.",
      nip: "199702072024061003",
      pendidikan: "S2 Ilmu Keolahragaan, UNY",
      fokus: "Fitness Technology and Sport Exercises",
      foto: "/dosen/Burhan.jpg",
    },
    {
      slug: "bagus-aryatama-mor",
      nama: "Bagus Aryatama, M.Or.",
      nip: "199405062024061003",
      pendidikan: "S2 Ilmu Keolahragaan, UNS",
      fokus: "Kepelatihan Olahraga dan Terapi Olahraga",
      foto: "/dosen/BagusAryatama.jpg",
    },
    {
      slug: "muhamad-ihsan-hufadz-mpd",
      nama: "Muhamad Ihsan Hufadz, M.Pd.",
      nip: "199612282024061002",
      pendidikan: "S2 Pendidikan Jasmani, UNY",
      fokus: "Sport Science",
      foto: "/dosen/Ihsan.jpg",
    },
    {
      slug: "azry-ayu-nabilah-mpd",
      nama: "Azry Ayu Nabilah, M.Pd.",
      nip: "199212292024062004",
      pendidikan: "S2 Pendidikan Olahraga, UNJ",
      fokus: "Teknologi Tes dan Pengukuran",
      foto: "/dosen/AzryAyu.jpg",
    },
    {
      slug: "imam-safei-mor",
      nama: "Imam Safei, M.Or.",
      nip: "1995012420221419",
      pendidikan: "S2 Ilmu Keolahragaan, ITB",
      fokus: "Fisiologi & Biomekanika Olahraga",
      foto: "/dosen/ImamSafei.jpg",
    },
    {
      slug: "erny-amalia-l-mpd",
      nama: "Erny Amalia L, M.Pd.",
      nip: "198810082024212033",
      pendidikan: "S2 Pendidikan Olahraga, UPI",
      fokus: "Manajemen Olahraga",
      foto: "/dosen/ErnyAmelia.jpg",
    },
    {
      slug: "africo-ramadhani-mpd",
      nama: "Africo Ramadhani, M.Pd.",
      nip: "198904172024061001",
      pendidikan: "S2 Ilmu Keolahragaan, UNY",
      fokus: "Sport Coaching",
      foto: "/dosen/Africo.jpg",
    },
    {
      slug: "boy-sembaba-tarigan-mor",
      nama: "Boy Sembaba Tarigan, M.Or.",
      nip: "1993042520201273",
      pendidikan: "S2 Ilmu Keolahragaan, UNS",
      fokus: "Fisiologi dan Analisis Gizi Olahraga",
      foto: "/dosen/BoySembaba.jpg",
    },
  ];

  const dosen = dosenList.find((d) => d.slug === slug);

  if (!dosen) {
    return (
      <div className="pt-24 text-center text-gray-600">
        Data dosen tidak ditemukan
      </div>
    );
  }

  return (
    <main className="pt-24 bg-gray-50 text-gray-900 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Breadcrumb */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-10">
          <div className="text-sm text-gray-500">
            <Link href="/profil/staff-dosen" className="hover:text-orange-500">
              Staff Dosen
            </Link>
            <span className="mx-2">/</span>
            <span className="font-medium text-gray-700">
              {dosen.nama}
            </span>
          </div>

          <Link
            href="/profil/staff-dosen"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg
            bg-gray-200 text-gray-700 hover:bg-gray-300 transition text-sm"
          >
            <ArrowLeft size={16} /> Kembali
          </Link>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col md:flex-row gap-10">

          {/* FOTO */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/3 rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={dosen.foto}
              alt={dosen.nama}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* INFO */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-2/3 space-y-4"
          >
            <h1 className="text-3xl md:text-4xl font-extrabold text-orange-600">
              {dosen.nama}
            </h1>

            <p className="text-gray-700 font-medium">
              Dosen Program Studi Rekayasa Keolahragaan
            </p>

            <div className="mt-6 space-y-4 text-gray-700">
              <InfoRow label="NIP/NRK" value={dosen.nip} />
              <InfoRow label="Pendidikan" value={dosen.pendidikan} />
              <InfoRow label="Fokus Riset" value={dosen.fokus} />
            </div>

            <div className="pt-3">
              <a
                href={`mailto:${slug}@itera.ac.id`}
                className="inline-flex items-center gap-2 text-sm hover:text-orange-500"
              >
                <Mail size={18} /> {slug}@itera.ac.id
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </main>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex gap-4 text-sm items-start">
      <span className="w-36 font-semibold">
        {label} :
      </span>
      <span className="flex-1 leading-relaxed">{value}</span>
    </div>
  );
}