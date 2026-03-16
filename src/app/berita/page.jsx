"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarDays, Search } from "lucide-react";

export default function BeritaPage() {

  const news = [
    {
      slug: "webinar-rekayasa-keolahragaan-itera-hadirkan-ketua-harian-koni-lampung",
      title: "Webinar Rekayasa Keolahragaan ITERA Hadirkan Ketua Harian KONI Lampung",
      date: "06 Mei 2025",
      tag: "Webinar",
      img: "/berita/webinar.png",
      content: `
      Mediaolahraga.id, 28 November 2024 – Ketua Harian KONI Lampung, BRIGJEN TNI (Purn.) Amalsyah Tarmizi, S.I.P berkesempatan menjadi pembicara utama dalam acara Stadium General bertajuk “Transformasi Performa Olahraga Melalui Teknologi”. Acara ini diselenggarakan oleh Fakultas Teknik Industri (FTI) Program Studi Rekayasa Keolahragaan, Institut Teknologi Sumatera (ITERA).
      `
    },
    {
      slug: "dibuka-program-studi-rekayasa-keolahragaan-itera-siap-cetak-atlet-berbasis-teknologi",
      title: "Dibuka Program Studi Rekayasa Keolahragaan ITERA, Siap Cetak Atlet Berbasis Teknologi",
      date: "16 Mei 2023",
      tag: "Pengumuman",
      img: "/berita/dibuka.png",
      content: `
      Dengan mengucapkan rasa syukur ‘Alhamdulillah’ kepada tuhan yang Maha Esa, Per tanggal 16 Mei 2023, menyatakan bahwa ;
      `
    },
  ];

  const tags = ["Semua", "Prestasi", "Penelitian", "Kerjasama", "Workshop", "Inovasi"];

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Semua");
  const [page, setPage] = useState(1);

  const perPage = 6;

  const filteredNews = useMemo(() => {
    return news.filter((item) => {
      const matchSearch = item.title.toLowerCase().includes(search.toLowerCase());
      const matchTag = filter === "Semua" || item.tag === filter;
      return matchSearch && matchTag;
    });
  }, [search, filter]);

  const totalPages = Math.ceil(filteredNews.length / perPage);

  const paginatedNews = filteredNews.slice(
    (page - 1) * perPage,
    page * perPage
  );

  const featured = news.find((n) => n.featured);

  return (
    <main className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <section
        className="relative h-[280px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1521737711867-e3b97375f902)",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold">Berita</h1>
          <p className="text-sm mt-2 text-gray-200">Home / Berita</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          {/* FEATURED NEWS */}
          {featured && (
            <Link href={`/berita/${featured.slug}`}>
              <div className="mb-16 relative rounded-2xl overflow-hidden shadow-lg group">

                <div
                  className="h-[420px] bg-cover bg-center group-hover:scale-105 transition"
                  style={{ backgroundImage: `url(${featured.img})` }}
                />

                <div className="absolute inset-0 bg-black/50 flex items-end">
                  <div className="p-10 text-white">
                    <span className="bg-orange-600 px-3 py-1 rounded text-xs">
                      Featured
                    </span>

                    <h2 className="text-3xl font-bold mt-3 max-w-xl">
                      {featured.title}
                    </h2>

                    <p className="flex items-center gap-2 mt-3 text-sm text-gray-200">
                      <CalendarDays size={16} /> {featured.date}
                    </p>
                  </div>
                </div>

              </div>
            </Link>
          )}

          {/* SEARCH */}
          <div className="flex items-center gap-4 mb-10">

            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Cari berita..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-orange-500"
              />
            </div>

          </div>

          {/* TAG FILTER */}
          <div className="flex flex-wrap gap-3 mb-12">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => {
                  setFilter(tag);
                  setPage(1);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition
                  ${
                    filter === tag
                      ? "bg-orange-600 text-white"
                      : "bg-white text-gray-700 hover:bg-orange-100"
                  }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* NEWS GRID */}
          <motion.div layout className="grid md:grid-cols-3 gap-8">
            {paginatedNews.map((item, i) => (
              <Link key={i} href={`/berita/${item.slug}`}>
                <motion.article
                  layout
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition group"
                >

                  <div
                    className="h-52 bg-cover bg-center group-hover:scale-105 transition"
                    style={{ backgroundImage: `url(${item.img})` }}
                  />

                  <div className="p-6">

                    <span className="text-xs bg-orange-600 text-white px-3 py-1 rounded-full">
                      {item.tag}
                    </span>

                    <h3 className="mt-4 font-semibold text-lg text-gray-900 group-hover:text-orange-600 transition line-clamp-2">
                      {item.title}
                    </h3>

                    <div className="flex items-center gap-2 text-sm text-gray-500 mt-4">
                      <CalendarDays size={16} />
                      {item.date}
                    </div>

                  </div>

                </motion.article>
              </Link>
            ))}
          </motion.div>

          {/* PAGINATION */}
          <div className="flex justify-center mt-16 gap-3">

            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition
                  ${
                    page === i + 1
                      ? "bg-orange-600 text-white"
                      : "bg-white border hover:bg-orange-100"
                  }`}
              >
                {i + 1}
              </button>
            ))}

          </div>

        </div>
      </section>
    </main>
  );
}