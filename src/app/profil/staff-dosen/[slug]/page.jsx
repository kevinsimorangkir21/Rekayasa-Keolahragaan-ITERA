"use client";

import { motion } from "framer-motion";
import { Mail, ArrowLeft, GraduationCap, User } from "lucide-react";
import Link from "next/link";

export default function DosenDetail({ params }) {
  const { slug } = params;

  const dosen = {
    nama: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
    foto: "https://via.placeholder.com/400x500.png?text=Dosen",
    jabatan: "Dosen Program Studi Rekayasa Keolahragaan",
    email: `${slug}@itera.ac.id`,
    nip: "198765432109876543",
    pendidikan: "S3 – Biomekanika Olahraga, Jepang",
    fokus: "Analisis Gerak Atlet, Wearable Sensor, Sport Engineering",
  };

  return (
    <>
      {/* HERO */}
      <section
        className="relative h-[260px] flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1599058918144-7573e96b37f1)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative text-center px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Profil Dosen
          </h1>

          <div className="mt-4 text-sm text-gray-200 flex justify-center gap-2">
            <Link href="/" className="hover:text-orange-400">
              Beranda
            </Link>
            <span>/</span>
            <Link href="/profil" className="hover:text-orange-400">
              Profil
            </Link>
            <span>/</span>
            <Link href="/profil/staff-dosen" className="hover:text-orange-400">
              Staff Dosen
            </Link>
            <span>/</span>
            <span className="text-orange-400">{dosen.nama}</span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-gray-50 py-20 min-h-screen">
        <div className="max-w-6xl mx-auto px-6">

          {/* Back Button */}
          <Link
            href="/profil/staff-dosen"
            className="inline-flex items-center gap-2 text-sm text-orange-600 mb-10 hover:underline"
          >
            <ArrowLeft size={16} /> Kembali ke Staff Dosen
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* FOTO */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <img
                src={dosen.foto}
                alt={dosen.nama}
                className="rounded-xl w-full object-cover"
              />
            </motion.div>

            {/* INFO DOSEN */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  {dosen.nama}
                </h2>

                <p className="text-orange-600 font-medium mt-2">
                  {dosen.jabatan}
                </p>
              </div>

              {/* DETAIL CARD */}
              <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">

                <InfoRow
                  icon={<User size={18} />}
                  label="NIP / NRK"
                  value={dosen.nip}
                />

                <InfoRow
                  icon={<GraduationCap size={18} />}
                  label="Pendidikan"
                  value={dosen.pendidikan}
                />

                <InfoRow
                  icon={<GraduationCap size={18} />}
                  label="Fokus Riset"
                  value={dosen.fokus}
                />

                <InfoRow
                  icon={<Mail size={18} />}
                  label="Email"
                  value={dosen.email}
                />

              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}

/* Info Row Component */
function InfoRow({ icon, label, value }) {
  return (
    <div className="flex items-start gap-3 text-sm">
      <div className="text-orange-600 mt-[2px]">{icon}</div>

      <div>
        <p className="font-semibold text-gray-900">{label}</p>
        <p className="text-gray-600">{value}</p>
      </div>
    </div>
  );
}