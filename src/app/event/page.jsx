"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, MapPin, Search } from "lucide-react";
import Link from "next/link";

export default function EventPage() {
  const events = [
    {
      slug: "seminar",
      title: "Seminar Nasional Biomekanika Olahraga",
      date: "15 Desember 2024",
      location: "Aula Utama ITERA",
      category: "Seminar",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
    },
    {
      slug: "workshop",
      title: "Workshop Wearable Sensor untuk Atlet",
      date: "10 Januari 2025",
      location: "Laboratorium RO",
      category: "Workshop",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b",
    },
  ];

  const categories = ["Semua", "Seminar", "Workshop", "Kompetisi", "Pameran"];

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Semua");
  const [page, setPage] = useState(1);

  const perPage = 6;

  const filteredEvents = events.filter((event) => {
    const matchSearch = event.title.toLowerCase().includes(search.toLowerCase());
    const matchCategory = filter === "Semua" || event.category === filter;
    return matchSearch && matchCategory;
  });

  const totalPages = Math.ceil(filteredEvents.length / perPage);

  const paginatedEvents = filteredEvents.slice(
    (page - 1) * perPage,
    page * perPage
  );

  return (
    <main className="bg-white min-h-screen">

      {/* HERO */}
      <section className="relative h-[260px] flex items-center text-white">
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-semibold">Event</h1>
          <p className="text-sm text-gray-300 mt-2">Beranda / Event</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* SEARCH */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">

          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Cari event..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              className="
                w-full pl-9 pr-4 py-2.5
                rounded-full
                border border-gray-200
                text-sm
                focus:outline-none
              "
            />
          </div>

        </div>

        {/* FILTER */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat);
                setPage(1);
              }}
              className={`px-3 py-1.5 rounded-full text-xs transition
                ${
                  filter === cat
                    ? "bg-gray-900 text-white"
                    : "border border-gray-200 text-gray-600 hover:bg-gray-100"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">

          {paginatedEvents.map((event, i) => (
            <Link key={i} href={`/event/${event.slug}`}>

              <motion.div
                whileHover={{ y: -4 }}
                className="
                  border border-gray-200
                  rounded-2xl
                  overflow-hidden
                  transition
                  hover:bg-gray-50
                "
              >

                <div
                  className="h-44 bg-cover bg-center"
                  style={{ backgroundImage: `url(${event.image})` }}
                />

                <div className="p-5">

                  <span className="text-xs text-gray-400">
                    {event.category}
                  </span>

                  <h3 className="mt-2 text-sm font-semibold text-gray-900 line-clamp-2">
                    {event.title}
                  </h3>

                  <div className="flex items-center gap-2 text-xs text-gray-500 mt-3">
                    <CalendarDays size={12} />
                    {event.date}
                  </div>

                  <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                    <MapPin size={12} />
                    {event.location}
                  </div>

                </div>

              </motion.div>

            </Link>
          ))}

        </div>

        {/* PAGINATION */}
        <div className="flex justify-center gap-2 mt-12">

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
    </main>
  );
}