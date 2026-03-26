"use client";

import { motion } from "framer-motion";
import { BookOpen, GraduationCap } from "lucide-react";

export default function KurikulumPage() {
  const semesters = [
    {
      semester: "Semester 1",
      courses: [
        "Matematika Dasar 1",
        "Fisika Dasar 1",
        "Kimia Dasar 1",
        "Lingkungan Hidup Sumatera",
        "Pengenalan Komputer dan Software 1",
        "Olahraga",
        "Bahasa Inggris",
        "Pendidikan Pancasila",
      ],
    },
    {
      semester: "Semester 2",
      courses: [
        "Matematika Dasar 2",
        "Fisika Dasar 2",
        "Kimia Dasar 2",
        "Bahasa Indonesia",
        "Pengenalan Komputer dan Software 2",
        "Agama",
        "Biologi",
        "Pengantar Prodi di RO",
        "Motor Learning",
      ],
    },
    {
      semester: "Semester 3",
      courses: [
        "Anatomi dan Fisiologi",
        "Ergonomi",
        "Matematika Teknik",
        "Teknik Komputasi Teknologi Keolahragaan",
        "Biomekanika Olahraga",
        "Sinyal dan Sistem",
        "Gizi dan Anti Doping",
        "Basic Pemrograman dan Aplikasi",
      ],
    },
    {
      semester: "Semester 4",
      courses: [
        "Elektronika dan Rangkaian Dasar",
        "Parameter Klinis",
        "Algoritma dan Pemrograman",
        "Probabilitas dan Statistika",
        "Pemodelan dan Optimasi",
        "Menggambar Teknik",
        "Pendidikan Kewarganegaraan",
        "Studium Generale",
        "Matematika Teknik Lanjutan",
      ],
    },
    {
      semester: "Semester 5",
      courses: [
        "Sensor dan IoT",
        "Analisis Performa Keolahragaan",
        "Desain dan Manufaktur Keolahragaan",
        "Management Olahraga",
        "Metodologi Penelitian",
        "Kuliah Kerja Nyata",
        "Matematika Numerik",
        "Kewirausahaan",
      ],
    },
    {
      semester: "Semester 6",
      courses: [
        "Olahraga Kecabangan",
        "Teknologi Kepelatihan Keolahragaan",
        "Sistem Cerdas Keolahragaan",
        "Teknologi Tes dan Pengukuran",
        "Norma UU dan Etika Keolahragaan",
        "Mitigasi Keolahragaan",
        "Data Statistik Keolahragaan",
      ],
    },
    {
      semester: "Semester 7",
      courses: [
        "Olahraga Kesehatan",
        "Psikologi Olahraga",
        "Teknologi Perwasitan",
        "Teknologi Olahraga Adaptif",
        "Analisis Data Keolahragaan",
        "Manajemen Jurnalistik Olahraga",
        "Pencegahan dan Perawatan Cedera",
        "Manajemen Klub Olahraga",
        "Fisioterapi",
      ],
    },
    {
      semester: "Semester 8",
      courses: ["Tugas Akhir"],
    },
  ];

  // ✅ FIX: cuma satu coreCourses
  const coreCourses = [
    "Algoritma dan Pemrograman",
    "Matematika Teknik",
    "Biomekanika",
    "Sensor dan IoT",
    "Desain dan Manufaktur",
    "Gizi dan Doping",
    "Sinyal dan Sistem",
    "Teknik Komputasi",
    "Analisis Performa",
    "Ergonomi",
    "AI Keolahragaan",
    "Pemodelan dan Optimasi",
    "Tes dan Pengukuran",
  ];

  return (
    <main className="bg-white min-h-screen">

      {/* HERO */}
      <section className="relative h-[300px] flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1523240795612-9a054b0db644)",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative text-center px-6">
          <h1 className="text-4xl font-semibold">Kurikulum</h1>
          <p className="text-sm text-gray-300 mt-2">
            Akademik / Kurikulum
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* INTRO */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-900">
            Kurikulum Rekayasa Keolahragaan
          </h2>

          <p className="mt-4 text-gray-500 leading-relaxed">
            Kurikulum dirancang untuk mengintegrasikan teknologi dengan ilmu olahraga
            dalam 8 semester dengan total 144 SKS.
          </p>
        </div>

        {/* CORE */}
        <section className="mb-20">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-6">
            <GraduationCap size={18} />
            Mata Kuliah Inti
          </h3>

          <div className="flex flex-wrap gap-3">
            {coreCourses.map((course, i) => (
              <span
                key={i}
                className="
                  px-4 py-2
                  rounded-full
                  border border-gray-200
                  text-sm text-gray-700
                  hover:bg-gray-100
                  transition
                "
              >
                {course}
              </span>
            ))}
          </div>
        </section>

        {/* SEMESTER */}
        <section>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-8">
            <BookOpen size={18} />
            Struktur Semester
          </h3>

          <div className="grid md:grid-cols-2 gap-6">

            {semesters.map((sem, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="
                  border border-gray-200
                  rounded-2xl
                  p-6
                "
              >

                <h4 className="font-semibold text-gray-900 mb-4">
                  {sem.semester}
                </h4>

                <ul className="space-y-2 text-sm text-gray-600">
                  {sem.courses.map((c, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-gray-400">•</span>
                      {c}
                    </li>
                  ))}
                </ul>

              </motion.div>
            ))}

          </div>
        </section>

      </div>

    </main>
  );
}