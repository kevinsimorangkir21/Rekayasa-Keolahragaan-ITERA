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

  const coreCourses = [
    "Algoritma dan Pemrograman",
    "Matematika Teknik",
    "Implementasi Biomekanika",
    "Sensor dan IoT",
    "Desain dan Manufaktur",
    "Gizi dan Doping",
    "Sinyal dan Sistem",
    "Teknik Komputasi",
    "Analisis Performa",
    "Ergonomi",
    "Kecerdasan Buatan Keolahragaan",
    "Pemodelan dan Optimasi",
    "Tes dan Pengukuran",
  ];

  return (
    <main className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <section
        className="relative h-[280px] flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1523240795612-9a054b0db644)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative text-center px-6">
          <h1 className="text-3xl md:text-4xl font-extrabold">
            Kurikulum
          </h1>

          <p className="text-sm mt-2 text-gray-200">
            Akademik / Kurikulum
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* DESCRIPTION */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-orange-600">
            Kurikulum Program Studi Rekayasa Keolahragaan
          </h2>

          <p className="mt-4 text-gray-700 leading-relaxed">
            Program Studi Rekayasa Keolahragaan memiliki kurikulum yang
            dirancang untuk menghasilkan lulusan yang mampu mengintegrasikan
            teknologi dengan ilmu olahraga. Total beban studi yang harus
            ditempuh mahasiswa adalah <strong>144 SKS</strong> selama
            <strong> 8 semester</strong>.
          </p>
        </div>

        {/* CORE COURSES */}
        <section className="mb-20">

          <h3 className="text-xl font-bold text-orange-600 mb-6 flex items-center gap-2">
            <GraduationCap size={20} />
            Mata Kuliah Inti
          </h3>

          <div className="grid md:grid-cols-3 gap-4">
            {coreCourses.map((course, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="bg-white shadow-md rounded-xl p-4 border-l-4 border-orange-500"
              >
                {course}
              </motion.div>
            ))}
          </div>

        </section>

        {/* SEMESTER CURRICULUM */}
        <section>

          <h3 className="text-xl font-bold text-orange-600 mb-8 flex items-center gap-2">
            <BookOpen size={20} />
            Struktur Kurikulum per Semester
          </h3>

          <div className="grid md:grid-cols-2 gap-8">

            {semesters.map((sem, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-md p-6"
              >
                <h4 className="font-bold text-lg text-orange-600 mb-4">
                  {sem.semester}
                </h4>

                <ul className="space-y-2 text-gray-700 text-sm">
                  {sem.courses.map((course, index) => (
                    <li key={index} className="flex gap-2">
                      <span className="text-orange-600 font-bold">•</span>
                      {course}
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