"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, MapPin, Search } from "lucide-react";
import Link from "next/link";
import EventCalendar from "@/components/EventCalendar";

export default function EventPage() {

  const events = [
    {
      slug: "seminar-biomekanika-2024",
      title: "Seminar Nasional Biomekanika Olahraga",
      date: "15 Desember 2024",
      location: "Aula Utama ITERA",
      category: "Seminar",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87"
    },
    {
      slug: "workshop-sensor-atlet",
      title: "Workshop Wearable Sensor untuk Atlet",
      date: "10 Januari 2025",
      location: "Laboratorium Rekayasa Keolahragaan",
      category: "Workshop",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b"
    },
    {
      slug: "sport-tech-expo",
      title: "Sport Technology Expo",
      date: "25 Februari 2025",
      location: "Gedung Kuliah Umum ITERA",
      category: "Pameran",
      image: "https://images.unsplash.com/photo-1599058918144-7573e96b37f1"
    },
    {
      slug: "kompetisi-robotika-olahraga",
      title: "Kompetisi Robotika Olahraga Mahasiswa",
      date: "10 Maret 2025",
      location: "Gedung Teknik ITERA",
      category: "Kompetisi",
      image: "https://images.unsplash.com/photo-1581093588401-22f6363f6a69"
    },
    {
      slug: "pelatihan-data-olahraga",
      title: "Pelatihan Analisis Data Olahraga",
      date: "20 April 2025",
      location: "Lab Komputasi RO",
      category: "Workshop",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978"
    },
    {
      slug: "sport-innovation-forum",
      title: "Sport Innovation Forum",
      date: "5 Mei 2025",
      location: "Auditorium ITERA",
      category: "Seminar",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644"
    },
  ];

  const categories = ["Semua", "Seminar", "Workshop", "Kompetisi", "Pameran"];

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Semua");
  const [page, setPage] = useState(1);

  const perPage = 6;

  const filteredEvents = events.filter((event) => {
    const matchSearch = event.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      filter === "Semua" || event.category === filter;

    return matchSearch && matchCategory;
  });

  const totalPages = Math.ceil(filteredEvents.length / perPage);

  const paginatedEvents = filteredEvents.slice(
    (page - 1) * perPage,
    page * perPage
  );

  return (
    <main className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <section
        className="relative h-[260px] flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1523240795612-9a054b0db644)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold">
            Event & Kegiatan
          </h1>

          <p className="text-sm mt-2">
            Berita / Event
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* SEARCH + FILTER */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">

          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 text-gray-400" size={18} />

            <input
              type="text"
              placeholder="Cari event..."
              className="w-full pl-10 pr-4 py-3 border rounded-xl"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
            />
          </div>

          <select
            className="border rounded-xl px-4 py-3"
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value);
              setPage(1);
            }}
          >
            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>

        </div>

        {/* EVENT GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {paginatedEvents.map((event, i) => (
            <Link key={i} href={`/event/${event.slug}`}>
              <motion.div
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer"
              >

                <div
                  className="h-48 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${event.image})`
                  }}
                />

                <div className="p-6">

                  <span className="text-xs bg-orange-600 text-white px-2 py-1 rounded-full">
                    {event.category}
                  </span>

                  <h3 className="mt-3 font-semibold text-lg text-gray-900">
                    {event.title}
                  </h3>

                  <div className="flex items-center gap-2 text-sm text-gray-500 mt-3">
                    <CalendarDays size={16} />
                    {event.date}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                    <MapPin size={16} />
                    {event.location}
                  </div>

                </div>

              </motion.div>
            </Link>
          ))}

        </div>

        {/* PAGINATION */}
        <div className="flex justify-center gap-3 mt-12">

          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-4 py-2 rounded-lg text-sm ${
                page === i + 1
                  ? "bg-orange-600 text-white"
                  : "bg-white border"
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