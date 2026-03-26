"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarDays, Search } from "lucide-react";

export default function BeritaPage() {

  const news = [
    {
      slug: "webinar",
      title: "Webinar Rekayasa Keolahragaan ITERA",
      date: "06 Mei 2025",
      tag: "Webinar",
      img: "/berita/webinar.png",
      featured: true,
    },
    {
      slug: "dibuka",
      title: "Dibuka Program Studi Rekayasa Keolahragaan ITERA",
      date: "16 Mei 2023",
      tag: "Pengumuman",
      img: "/berita/dibuka.png",
    },
  ];

  const tags = ["Semua", "Webinar", "Pengumuman", "Prestasi"];

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
    <main className="bg-white min-h-screen">

      {/* HERO */}
      <section className="relative h-[300px] flex items-center text-white">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-semibold">Berita</h1>
          <p className="text-sm text-gray-300 mt-2">Beranda / Berita</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          {/* FEATURED */}
          {featured && (
            <Link href={`/berita/${featured.slug}`}>
              <div className="mb-14 border border-gray-200 rounded-2xl overflow-hidden group">

                <div
                  className="h-[300px] bg-cover bg-center group-hover:scale-[1.02] transition"
                  style={{ backgroundImage: `url(${featured.img})` }}
                />

                <div className="p-6">

                  <span className="text-xs text-gray-500">
                    Featured
                  </span>

                  <h2 className="text-xl font-semibold text-gray-900 mt-2">
                    {featured.title}
                  </h2>

                  <p className="flex items-center gap-2 text-sm text-gray-500 mt-2">
                    <CalendarDays size={14} />
                    {featured.date}
                  </p>

                </div>

              </div>
            </Link>
          )}

          {/* SEARCH */}
          <div className="flex items-center gap-4 mb-10">

            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-3 text-gray-400" size={16} />
              <input
                type="text"
                placeholder="Cari berita..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-full border border-gray-200 text-sm focus:outline-none"
              />
            </div>

          </div>

          {/* TAG */}
          <div className="flex flex-wrap gap-2 mb-10">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => {
                  setFilter(tag);
                  setPage(1);
                }}
                className={`px-3 py-1.5 rounded-full text-xs transition
                  ${
                    filter === tag
                      ? "bg-gray-900 text-white"
                      : "border border-gray-200 text-gray-600 hover:bg-gray-100"
                  }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* GRID */}
          <motion.div layout className="grid md:grid-cols-3 gap-6">

            {paginatedNews.map((item, i) => (
              <Link key={i} href={`/berita/${item.slug}`}>

                <motion.article
                  layout
                  className="
                    border border-gray-200
                    rounded-2xl
                    overflow-hidden
                    hover:bg-gray-50
                    transition
                  "
                >

                  <div
                    className="h-44 bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.img})` }}
                  />

                  <div className="p-5">

                    <span className="text-xs text-gray-400">
                      {item.tag}
                    </span>

                    <h3 className="mt-2 text-sm font-semibold text-gray-900 line-clamp-2">
                      {item.title}
                    </h3>

                    <div className="flex items-center gap-2 text-xs text-gray-500 mt-3">
                      <CalendarDays size={12} />
                      {item.date}
                    </div>

                  </div>

                </motion.article>

              </Link>
            ))}

          </motion.div>

          {/* PAGINATION */}
          <div className="flex justify-center mt-12 gap-2">

            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`px-3 py-1.5 text-xs rounded-full transition
                  ${
                    page === i + 1
                      ? "bg-gray-900 text-white"
                      : "border border-gray-200 hover:bg-gray-100"
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