"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function StaffDosenPage() {
  const dosenList = [
    {
      nama: "Erny Amalia L, M.Pd.",
      jabatan: "Koordinator Prodi",
      foto: "/dosen/erny.png",
    },
    {
      nama: "Azry Ayu Nabilah, M.Pd.",
      jabatan: "Staff Dosen",
      foto: "/dosen/azry.png",
    },
    {
      nama: "Africo Ramadhani, M.Pd.",
      jabatan: "Staff Dosen",
      foto: "/dosen/africo.png",
    },
    {
      nama: "Boy Sembaba Tarigan, M.Or.",
      jabatan: "Staff Dosen",
      foto: "/dosen/boy.png",
    },
    {
      nama: "Imam Safei, M.Or.",
      jabatan: "Staff Dosen",
      foto: "/dosen/imam.png",
    },
    {
      nama: "Bagus Aryatama, M.Or.",
      jabatan: "Staff Dosen",
      foto: "/dosen/bagus.png",
    },
    {
      nama: "Burhan Shodiq, M.Or.",
      jabatan: "Staff Dosen",
      foto: "/dosen/burhan.png",
    },
    {
      nama: "Muhammad Ihsan Hufadz, M.Pd.",
      jabatan: "Staff Dosen",
      foto: "/dosen/ihsan.png",
    },
  ];

  const slugify = (text) =>
    text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .trim();

  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-orange-600">
            Staff Dosen
          </h1>
          <p className="text-gray-600 mt-3">
            Program Studi Rekayasa Keolahragaan ITERA
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {dosenList.map((dosen, i) => (
            <Link
              key={i}
              href={`/profil/staff-dosen/${slugify(dosen.nama)}`}
              className="group"
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="relative h-[320px] rounded-2xl overflow-hidden shadow-md cursor-pointer"
              >

                {/* FOTO */}
                <img
                  src={dosen.foto}
                  alt={dosen.nama}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80" />

                {/* INFO (SLIDE UP) */}
                <div className="absolute bottom-0 w-full translate-y-full group-hover:translate-y-0 transition duration-500">
                  <div className="bg-orange-600 text-white text-center py-5 px-4">

                    <h3 className="font-semibold text-lg">
                      {dosen.nama}
                    </h3>

                    <p className="text-sm opacity-90">
                      {dosen.jabatan}
                    </p>

                  </div>
                </div>

              </motion.div>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}