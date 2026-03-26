"use client";

import Link from "next/link";
import {
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  MapPin,
  ArrowUp,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-white text-gray-700 pt-24 pb-10 border-t border-gray-200">

      {/* WAVE (lebih subtle) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180 opacity-50">
        <svg
          className="relative block w-full h-16 text-gray-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,
            82.39-16.45,168.19-17.48,250.45-0.39,
            59,12.27,113.79,31.89,172,47.78,
            82.62,22.51,168.38,31.15,250.61,13.69V120H0V27.35
            A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* BRAND */}
          <div>
            <img
              src="/RekayasaKeolahragaan.png"
              alt="REKO"
              className="w-28 mb-4"
            />

            <p className="text-sm text-gray-500 leading-relaxed">
              Program Studi Rekayasa Keolahragaan ITERA berfokus pada
              pengembangan teknologi olahraga, sport science, serta inovasi
              rekayasa untuk meningkatkan performa atlet.
            </p>
          </div>

          {/* NAVIGASI */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">
              Navigasi
            </h4>

            <ul className="space-y-2 text-sm">
              {[
                ["Beranda", "/"],
                ["Sejarah", "/profil/sejarah"],
                ["Visi & Misi", "/profil/visi-misi"],
                ["Staff Dosen", "/profil/staff-dosen"],
                ["Prestasi Mahasiswa", "/profil/prestasi-mahasiswa"],
                ["Berita", "/berita"],
              ].map(([label, href], i) => (
                <li key={i}>
                  <Link
                    href={href}
                    className="text-gray-500 hover:text-orange-600 transition"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">
              Akademik
            </h4>

            <ul className="space-y-2 text-sm">
              {[
                ["Kurikulum", "/akademik/kurikulum"],
                ["Kerja Praktik", "/akademik/kerja-praktik"],
                ["KKN", "/akademik/kuliah-kerja-nyata"],
                ["PMB", "/layanan/pmb"],
                ["Perpustakaan", "/fasilitas/perpustakaan"],
              ].map(([label, href], i) => (
                <li key={i}>
                  <Link
                    href={href}
                    className="text-gray-500 hover:text-orange-600 transition"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">
              Kontak
            </h4>

            <div className="space-y-3 text-sm text-gray-500">

              <div className="flex gap-2 items-start">
                <MapPin size={16} className="mt-1" />
                <span>
                  Institut Teknologi Sumatera  
                  Lampung Selatan, Indonesia
                </span>
              </div>

              <div className="flex gap-2 items-center">
                <Mail size={16} />
                rekayasakeolahragaan@itera.ac.id
              </div>
            </div>

            {/* SOCIAL */}
            <div className="flex gap-3 mt-6">
              {[ 
                { icon: <Instagram size={18} />, link: "#" },
                { icon: <Linkedin size={18} />, link: "#" },
                { icon: <Youtube size={18} />, link: "#" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  className="
                    w-10 h-10 flex items-center justify-center
                    rounded-full border border-gray-200
                    text-gray-500
                    hover:bg-orange-600 hover:text-white
                    hover:scale-105
                    transition
                  "
                >
                  {item.icon}
                </a>
              ))}
            </div>

          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="mt-16 pt-6 border-t border-gray-200 text-center text-xs text-gray-400">
          © {new Date().getFullYear()}{" "}
          <span className="font-medium text-gray-600">
            Rekayasa Keolahragaan ITERA
          </span>
        </div>

      </div>

      {/* BACK TO TOP (clean version) */}
      {showTop && (
        <button
          onClick={scrollTop}
          className="
            fixed bottom-6 right-6
            w-11 h-11
            flex items-center justify-center
            rounded-full
            border border-gray-300
            bg-white
            text-gray-700
            hover:bg-gray-100
            transition
          "
        >
          <ArrowUp size={18} />
        </button>
      )}
    </footer>
  );
}