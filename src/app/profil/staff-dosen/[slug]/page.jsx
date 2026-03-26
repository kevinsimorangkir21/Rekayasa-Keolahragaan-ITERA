"use client";

import { motion } from "framer-motion";
import { Mail, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { use } from "react";
import Image from "next/image";

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
      <div className="pt-32 text-center text-gray-500">
        Data dosen tidak ditemukan
      </div>
    );
  }

  return (
    <main className="bg-white min-h-screen py-28">
      <div className="max-w-5xl mx-auto px-6">

        {/* TOP BAR */}
        <div className="flex justify-between items-center mb-12">

          <Link
            href="/profil/staff-dosen"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900"
          >
            <ArrowLeft size={16} />
            Kembali
          </Link>

        </div>

        {/* PROFILE */}
        <div className="grid md:grid-cols-3 gap-10 items-start">

          {/* FOTO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="border border-gray-200 rounded-2xl overflow-hidden"
          >
            <div className="relative h-[360px]">
              <Image
                src={dosen.foto}
                alt={dosen.nama}
                fill
                className="object-cover object-[center_20%]"
              />
            </div>
          </motion.div>

          {/* INFO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:col-span-2 space-y-6"
          >

            <div>
              <h1 className="text-3xl font-semibold text-gray-900">
                {dosen.nama}
              </h1>

              <p className="text-gray-500 mt-1">
                Dosen Rekayasa Keolahragaan ITERA
              </p>
            </div>

            {/* DATA */}
            <div className="border border-gray-200 rounded-2xl divide-y">

              <Info label="NIP / NRK" value={dosen.nip} />
              <Info label="Pendidikan" value={dosen.pendidikan} />
              <Info label="Fokus Riset" value={dosen.fokus} />

            </div>

            {/* EMAIL */}
            <a
              href={`mailto:${slug}@itera.ac.id`}
              className="
                inline-flex items-center gap-2
                px-4 py-2 rounded-full
                border border-gray-300
                text-sm text-gray-700
                hover:bg-gray-100
                transition
              "
            >
              <Mail size={16} />
              {slug}@itera.ac.id
            </a>

          </motion.div>

        </div>

      </div>
    </main>
  );
}

function Info({ label, value }) {
  return (
    <div className="flex justify-between px-5 py-4 text-sm">
      <span className="text-gray-400">{label}</span>
      <span className="text-gray-900 font-medium text-right max-w-[60%]">
        {value}
      </span>
    </div>
  );
}