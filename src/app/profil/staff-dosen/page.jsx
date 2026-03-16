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
    <section className="bg-gray-50 py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-16">

          <h1 className="text-4xl font-bold text-orange-600">
            Staff Dosen
          </h1>

          <p className="text-gray-600 mt-3">
            Program Studi Rekayasa Keolahragaan ITERA
          </p>

        </div>


        {/* GRID DOSEN */}
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
                className="
                relative
                h-[380px]
                rounded-2xl
                overflow-hidden
                shadow-lg
                hover:shadow-2xl
                transition
                "
              >

                {/* FOTO DOSEN */}
                <Image
                  src={dosen.foto}
                  alt={dosen.nama}
                  fill
                  className="
                  object-cover
                  object-[center_20%]
                  group-hover:scale-110
                  transition duration-500
                  "
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* INFO */}
                <div
                  className="
                  absolute bottom-0 w-full
                  translate-y-full
                  group-hover:translate-y-0
                  transition duration-500
                  "
                >

                  <div className="bg-orange-600 text-white text-center py-5 px-4">

                    <h3 className="font-semibold text-lg leading-tight">
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