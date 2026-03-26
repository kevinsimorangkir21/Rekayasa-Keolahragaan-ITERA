"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function StaffDosenPage() {
  const dosenList = [
    {
      nama: "Erny Amalia L, M.Pd.",
      jabatan: "Koordinator Prodi",
      foto: "/dosen/ErnyAmelia.jpg",
    },
    {
      nama: "Azry Ayu Nabilah, M.Pd.",
      jabatan: "Staff Dosen",
      foto: "/dosen/AzryAyu.jpg",
    },
    {
      nama: "Africo Ramadhani, M.Pd.",
      jabatan: "Staff Dosen",
      foto: "/dosen/Africo.jpg",
    },
    {
      nama: "Boy Sembaba Tarigan, M.Or.",
      jabatan: "Staff Dosen",
      foto: "/dosen/BoySembaba.jpg",
    },
    {
      nama: "Imam Safei, M.Or.",
      jabatan: "Staff Dosen",
      foto: "/dosen/ImamSafei.jpg",
    },
    {
      nama: "Bagus Aryatama, M.Or.",
      jabatan: "Staff Dosen",
      foto: "/dosen/BagusAryatama.jpg",
    },
    {
      nama: "Burhan Shodiq, M.Or.",
      jabatan: "Staff Dosen",
      foto: "/dosen/Burhan.jpg",
    },
    {
      nama: "Muhammad Ihsan Hufadz, M.Pd.",
      jabatan: "Staff Dosen",
      foto: "/dosen/Ihsan.jpg",
    },
  ];

  const slugify = (text) =>
    text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .trim();

  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-semibold text-gray-900">
            Staff Dosen
          </h1>

          <p className="text-gray-500 mt-3">
            Program Studi Rekayasa Keolahragaan ITERA
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {dosenList.map((dosen, i) => (
            <Link
              key={i}
              href={`/profil/staff-dosen/${slugify(dosen.nama)}`}
              className="group"
            >

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="
                  border border-gray-200
                  rounded-2xl
                  overflow-hidden
                  bg-white
                  transition
                  hover:-translate-y-1
                "
              >

                {/* IMAGE */}
                <div className="relative h-[260px] overflow-hidden">
                  <Image
                    src={dosen.foto}
                    alt={dosen.nama}
                    fill
                    className="
                      object-cover
                      object-[center_20%]
                      group-hover:scale-105
                      transition duration-500
                    "
                  />
                </div>

                {/* INFO */}
                <div className="p-5 text-center">

                  <h3 className="font-semibold text-gray-900 leading-tight">
                    {dosen.nama}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    {dosen.jabatan}
                  </p>

                </div>

              </motion.div>

            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}