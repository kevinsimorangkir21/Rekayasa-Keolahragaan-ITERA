"use client";

import { use } from "react";
import Link from "next/link";
import { CalendarDays, ArrowLeft, Share2 } from "lucide-react";

export default function BeritaDetail({ params }) {
  const { slug } = use(params);

  const news = [
    {
      slug: "webinar-rekayasa-keolahragaan-itera-hadirkan-ketua-harian-koni-lampung",
      title: "Webinar Rekayasa Keolahragaan ITERA Hadirkan Ketua Harian KONI Lampung",
      date: "06 Mei 2025",
      tag: "Webinar",
      img: "/berita/webinar.png",
      content: `
      Mediaolahraga.id, 28 November 2024 – Ketua Harian KONI Lampung, BRIGJEN TNI (Purn.) Amalsyah Tarmizi, S.I.P berkesempatan menjadi pembicara utama dalam acara Stadium General bertajuk “Transformasi Performa Olahraga Melalui Teknologi”. Acara ini diselenggarakan oleh Fakultas Teknik Industri (FTI) Program Studi Rekayasa Keolahragaan, Institut Teknologi Sumatera (ITERA).

Dalam materinya yang berjudul Peranan Perguruan Tinggi dalam Pengembangan Sport Teknologi: Inovasi, Kolaborasi, dan Edukasi, Ketua Harian KONI Lampung memaparkan berbagai inovasi dan perkembangan teknologi yang dapat mengubah paradigma pengelolaan dan pengembangan olahraga, baik di tingkat lokal maupun nasional.

Beliau menyoroti peran teknologi dalam meningkatkan performa atlet, mulai dari analisis data performa menggunakan perangkat lunak canggih, penggunaan alat pemantau kebugaran, hingga aplikasi kecerdasan buatan (AI) dalam strategi pelatihan. Selain itu, Ketua Harian KONI juga menggarisbawahi pentingnya kolaborasi antara dunia akademik, organisasi olahraga, dan sektor industri untuk menciptakan ekosistem olahraga berbasis teknologi yang berkelanjutan.

Acara ini dihadiri oleh mahasiswa, dosen, dan praktisi olahraga, yang terlihat antusias mengikuti diskusi interaktif terkait materi yang disampaikan. Dalam sesi tanya jawab, peserta mengajukan berbagai pertanyaan seputar implementasi teknologi di dunia olahraga dan potensi pengembangannya di Lampung.

Selain Ketua Harian Koni Lampung ada pula pemateri lain nya yaitu :
1. Prof. Dr. Agus Kristiyanto, M.Pd (Guru Besar Universitas Negeri Solo)
2. Tika Yesi Kristiani (Pelatih dan Programer IT dari ENIGMA)

Melalui kegiatan ini, diharapkan dapat tercipta kesadaran akan pentingnya transformasi teknologi dalam olahraga untuk mencetak atlet berprestasi dan meningkatkan daya saing olahraga Indonesia di kancah internasional.
      `,
    },
    {
      slug: "dibuka-program-studi-rekayasa-keolahragaan-itera-siap-cetak-atlet-berbasis-teknologi",
      title: "Dibuka Program Studi Rekayasa Keolahragaan ITERA, Siap Cetak Atlet Berbasis Teknologi",
      date: "16 Mei 2023",
      tag: "Pengumuman",
      img: "/berita/dibuka.png",
      content: `
      Dengan mengucapkan rasa syukur ‘Alhamdulillah’ kepada tuhan yang Maha Esa, Per tanggal 16 Mei 2023, menyatakan bahwa ;

Program Studi Rekayasa Keolahragaan
Jurusan Teknologi Produksi dan Industri
Institut Teknologi Sumatera

telah resmi dibuka dan menerima mahasiswa baru tahun ajaran 2023/2024

Terimakasih kepada seluruh civitas akademika ITERA yang selama ini telah ikut berkontribusi dalam pembentukan prodi Rekayasa Keolahragaan 🙏🙏

Semoga kita bisa memberikan dampak positif bagi para stakeholder khusus nya dibidang olahraga untuk membantu mewujudkan cita-cita Bangsa Indonesia meraih peringkat 3 besar di Olimpiade 2044

Salam Olahraga !!!
      `,
    },
  ];

  const article = news.find((item) => item.slug === slug);

  if (!article) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p>Berita tidak ditemukan</p>
      </main>
    );
  }

  return (
    <main className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <section
        className="relative h-[420px] bg-cover bg-center flex items-end"
        style={{ backgroundImage: `url(${article.img})` }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 pb-10 text-white">

          <Link
            href="/berita"
            className="inline-flex items-center gap-2 text-sm text-gray-200 hover:text-white mb-4"
          >
            <ArrowLeft size={16} />
            Kembali ke Berita
          </Link>

          <span className="bg-orange-600 px-3 py-1 rounded text-xs">
            {article.tag}
          </span>

          <h1 className="text-3xl md:text-5xl font-extrabold mt-4 leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center gap-2 text-sm mt-4 text-gray-200">
            <CalendarDays size={16} />
            {article.date}
          </div>

        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6">

          {/* SHARE */}
          <div className="flex justify-between items-center mb-10">

            <p className="text-gray-500 text-sm">
              Dipublikasikan pada {article.date}
            </p>

            <button className="flex items-center gap-2 text-sm text-orange-600 hover:underline">
              <Share2 size={16} />
              Bagikan
            </button>

          </div>

          {/* ARTICLE */}
          <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
            {article.content}
          </article>

        </div>
      </section>

    </main>
  );
}