"use client";

import { use } from "react";
import Link from "next/link";
import { CalendarDays, ArrowLeft, Share2 } from "lucide-react";

export default function BeritaDetail({ params }) {
  const { slug } = use(params);

  const news = [
    {
      slug: "webinar",
      title: "Webinar Rekayasa Keolahragaan ITERA",
      date: "06 Mei 2025",
      tag: "Webinar",
      img: "/berita/webinar.png",
      content: `Mediaolahraga.id – Ketua Harian KONI Lampung...`,
    },
    {
      slug: "dibuka",
      title: "Dibuka Program Studi Rekayasa Keolahragaan ITERA",
      date: "16 Mei 2023",
      tag: "Pengumuman",
      img: "/berita/dibuka.png",
      content: `Program Studi Rekayasa Keolahragaan...`,
    },
  ];

  const article = news.find((item) => item.slug === slug);

  if (!article) {
    return (
      <main className="min-h-screen flex items-center justify-center text-gray-500">
        Berita tidak ditemukan
      </main>
    );
  }

  return (
    <main className="bg-white min-h-screen">

      {/* TOP BAR */}
      <div className="max-w-3xl mx-auto px-6 pt-10">

        <Link
          href="/berita"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900"
        >
          <ArrowLeft size={16} />
          Kembali
        </Link>

      </div>

      {/* HEADER */}
      <section className="max-w-3xl mx-auto px-6 py-10">

        <span className="text-xs text-gray-400">
          {article.tag}
        </span>

        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mt-2 leading-tight">
          {article.title}
        </h1>

        <div className="flex items-center justify-between mt-4">

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <CalendarDays size={14} />
            {article.date}
          </div>

          <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900">
            <Share2 size={14} />
            Bagikan
          </button>

        </div>

      </section>

      {/* IMAGE */}
      <div className="max-w-4xl mx-auto px-6">
        <div
          className="h-[300px] md:h-[400px] rounded-2xl bg-cover bg-center"
          style={{ backgroundImage: `url(${article.img})` }}
        />
      </div>

      {/* CONTENT */}
      <section className="max-w-3xl mx-auto px-6 py-12">

        <article className="
          text-gray-700
          leading-relaxed
          whitespace-pre-line
          text-[15px]
        ">
          {article.content}
        </article>

      </section>

    </main>
  );
}