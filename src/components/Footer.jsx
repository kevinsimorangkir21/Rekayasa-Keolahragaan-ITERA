"use client";

import Link from "next/link";
import { Instagram, Linkedin, Youtube, Mail, MapPin, ArrowUp } from "lucide-react";
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
    <footer className="relative overflow-hidden bg-gray-50 text-gray-700 pt-20 pb-10 border-t border-gray-200">

      {/* Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-full h-20 text-gray-50"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
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

      {/* CONTENT */}
      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-12">

        {/* BRAND */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src="/RekayasaKeolahragaan.png" alt="REKO" className="w-25 h-25" />
          </div>

          <p className="text-sm text-gray-600 leading-relaxed">
            Program Studi Rekayasa Keolahragaan Institut Teknologi Sumatera
            berfokus pada pengembangan teknologi olahraga, sport science,
            serta inovasi rekayasa untuk meningkatkan performa atlet dan industri olahraga.
          </p>
        </div>

        {/* NAVIGASI */}
        <div>
          <h4 className="font-semibold text-orange-600 mb-4">
            Navigasi
          </h4>

          <ul className="space-y-2 text-sm">

            <li>
              <Link href="/" className="hover:text-orange-600">
                Beranda
              </Link>
            </li>

            <li>
              <Link href="/profil/sejarah" className="hover:text-orange-600">
                Sejarah
              </Link>
            </li>

            <li>
              <Link href="/profil/visi-misi" className="hover:text-orange-600">
                Visi & Misi
              </Link>
            </li>

            <li>
              <Link href="/profil/staff-dosen" className="hover:text-orange-600">
                Staff Dosen
              </Link>
            </li>

            <li>
              <Link href="/profil/prestasi-mahasiswa" className="hover:text-orange-600">
                Prestasi Mahasiswa
              </Link>
            </li>

            <li>
              <Link href="/berita" className="hover:text-orange-600">
                Berita
              </Link>
            </li>

          </ul>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="font-semibold text-orange-600 mb-4">
            Quick Links
          </h4>

          <ul className="space-y-2 text-sm">

            <li>
              <Link href="/akademik/kurikulum" className="hover:text-orange-600">
                Kurikulum
              </Link>
            </li>

            <li>
              <Link href="/akademik/kerja-praktik" className="hover:text-orange-600">
                Kerja Praktik
              </Link>
            </li>

            <li>
              <Link href="/akademik/kuliah-kerja-nyata" className="hover:text-orange-600">
                Kuliah Kerja Nyata
              </Link>
            </li>

            <li>
              <Link href="/layanan/pmb" className="hover:text-orange-600">
                Penerimaan Mahasiswa Baru
              </Link>
            </li>

            <li>
              <Link href="/fasilitas/perpustakaan" className="hover:text-orange-600">
                Perpustakaan
              </Link>
            </li>

          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="font-semibold text-orange-600 mb-4">
            Kontak
          </h4>

          <div className="space-y-3 text-sm text-gray-600">

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
          <div className="flex gap-4 mt-5">

            <a
              href="https://www.instagram.com/rekayasa_keolahragaan"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-orange-600 hover:text-white transition"
            >
              <Instagram size={18} />
            </a>

            <a
              href="#"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-orange-600 hover:text-white transition"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="https://www.youtube.com/@rekayasakeolahragaan"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-orange-600 hover:text-white transition"
            >
              <Youtube size={18} />
            </a>

          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="mt-12 pt-6 border-t border-gray-200 text-center text-xs text-gray-500">
        © {new Date().getFullYear()}{" "}
        <strong>Rekayasa Keolahragaan ITERA</strong>. Semua Hak Cipta Dilindungi.
      </div>

      {/* BACK TO TOP */}
      {showTop && (
        <button
          onClick={scrollTop}
          className="fixed bottom-6 right-6 bg-orange-600 hover:bg-orange-700 text-white p-3 rounded-full shadow-lg transition"
        >
          <ArrowUp size={20} />
        </button>
      )}

    </footer>
  );
}