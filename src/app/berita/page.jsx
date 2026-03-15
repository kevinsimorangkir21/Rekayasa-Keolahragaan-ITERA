"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarDays, Search } from "lucide-react";

export default function BeritaPage() {

  const news = [
    {
      slug: "kompetisi-robotika-nasional",
      title: "Mahasiswa Sports Engineering Ikuti Kompetisi Robotika Nasional",
      date: "10 Nov 2024",
      tag: "Prestasi",
      featured: true,
      img: "https://images.unsplash.com/photo-1581093588401-22f6363f6a69",
    },
    {
      slug: "wearable-sensor-analisis-gerak-atlet",
      title: "Penelitian Wearable Sensor untuk Analisis Gerak Atlet",
      date: "03 Nov 2024",
      tag: "Penelitian",
      img: "https://images.unsplash.com/photo-1599058918144-7573e96b37f1",
    },
    {
      slug: "kolaborasi-industri-olahraga-nasional",
      title: "Kolaborasi Sports Engineering dengan Industri Olahraga Nasional",
      date: "28 Okt 2024",
      tag: "Kerjasama",
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978",
    },
    {
      slug: "smart-sport-tech-itera",
      title: "Mahasiswa ITERA Kembangkan Smart Sport Technology",
      date: "15 Okt 2024",
      tag: "Inovasi",
      img: "https://images.unsplash.com/photo-1517649763962-0c623066013b",
    },
    {
      slug: "workshop-wearable-sensor",
      title: "Workshop Wearable Sensor untuk Monitoring Atlet",
      date: "09 Okt 2024",
      tag: "Workshop",
      img: "https://images.unsplash.com/photo-1599058918144-7573e96b37f1",
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