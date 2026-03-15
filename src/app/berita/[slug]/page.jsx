"use client";

import { use } from "react";
import Link from "next/link";
import { CalendarDays, ArrowLeft, Share2 } from "lucide-react";

export default function BeritaDetail({ params }) {
  const { slug } = use(params);

  const news = [
    {
      slug: "kompetisi-robotika-nasional",
      title: "Mahasiswa Sports Engineering Ikuti Kompetisi Robotika Nasional",
      date: "10 Nov 2024",
      tag: "Prestasi",
      img: "https://images.unsplash.com/photo-1581093588401-22f6363f6a69",
      content: `
      Mahasiswa Program Studi Rekayasa Keolahragaan ITERA berhasil meraih
      prestasi dalam kompetisi robotika tingkat nasional.

      Kompetisi ini diikuti oleh berbagai universitas di Indonesia dan
      menampilkan inovasi teknologi terbaru dalam bidang robotika dan sport technology.

      Prestasi ini menunjukkan bahwa mahasiswa Rekayasa Keolahragaan ITERA
      mampu bersaing secara nasional dalam bidang teknologi dan rekayasa olahraga.
      `,
    },
    {
      slug: "wearable-sensor-analisis-gerak-atlet",
      title: "Penelitian Wearable Sensor untuk Analisis Gerak Atlet",
      date: "03 Nov 2024",
      tag: "Penelitian",
      img: "https://images.unsplash.com/photo-1599058918144-7573e96b37f1",
      content: `
      Penelitian terbaru dari mahasiswa Rekayasa Keolahragaan ITERA
      berfokus pada penggunaan wearable sensor untuk analisis gerak atlet.

      Teknologi ini memungkinkan monitoring performa atlet secara real-time
      sehingga pelatih dapat mengambil keputusan berbasis data.
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