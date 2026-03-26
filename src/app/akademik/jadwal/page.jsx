"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function JadwalKuliahPage() {
  const url =
    "https://docs.google.com/spreadsheets/d/YOUR_ID_HERE/edit";

  const embedUrl = url.replace("/edit", "/preview");

  return (
    <>
      {/* HERO */}
      <section
        className="relative h-[280px] flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1523580494863-6f3031224c94)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative text-center px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Jadwal Kuliah
          </h1>

          {/* BREADCRUMB */}
          <div className="mt-4 text-sm text-gray-200 flex justify-center gap-2">
            <Link href="/" className="hover:text-orange-400">
              Beranda
            </Link>
            <span>/</span>
            <Link href="/akademik" className="hover:text-orange-400">
              Akademik
            </Link>
            <span>/</span>
            <span className="text-orange-400">Jadwal Kuliah</span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">

          {/* INTRO */}
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-900">
              Jadwal Perkuliahan
            </h2>

            <p className="text-gray-500 mt-4">
              Berikut merupakan jadwal kuliah mahasiswa Program Studi
              Rekayasa Keolahragaan ITERA yang dapat diakses secara online.
            </p>

            {/* BUTTON */}
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                mt-6 px-5 py-2.5
                rounded-full
                border border-gray-300
                text-sm text-gray-700
                hover:bg-gray-100
                transition
              "
            >
              Buka Spreadsheet
              <ExternalLink size={16} />
            </a>
          </div>

          {/* EMBED */}
          <div className="border border-gray-200 rounded-2xl overflow-hidden">

            <iframe
              src={embedUrl}
              className="w-full h-[650px]"
            />

          </div>

        </div>
      </section>
    </>
  );
}