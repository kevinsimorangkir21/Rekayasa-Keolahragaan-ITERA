"use client";

import Link from "next/link";
import { Github, Linkedin, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gray-50 text-gray-700 pt-20 pb-10 border-t border-gray-200">

      {/* Wave Top */}
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

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src="/logo.png" alt="REKO" className="w-10 h-10" />
            <span className="text-lg font-bold text-orange-600">
              Sports Engineering ITERA
            </span>
          </div>

          <p className="text-sm leading-relaxed">
            Mengembangkan talenta unggul dalam teknologi olahraga untuk
            meningkatkan performa dan inovasi sport science di Indonesia.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-semibold text-orange-600 mb-4">
            Navigasi
          </h4>

          <ul className="space-y-2 text-sm">
            {[
              { name: "Beranda", url: "/" },
              { name: "Profil Prodi", url: "/profile" },
              { name: "Prestasi", url: "/achievement" },
              { name: "Event", url: "/events" },
              { name: "Kontak", url: "/contact" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.url}
                  className="hover:text-orange-600 transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold text-orange-600 mb-4">
            Terhubung
          </h4>

          <p className="text-sm mb-4">
            Ikuti kami di media sosial:
          </p>

          <div className="flex gap-4">
            {[
              { icon: <Instagram size={20} />, url: "#" },
              { icon: <Linkedin size={20} />, url: "#" },
              { icon: <Youtube size={20} />, url: "#" },
              { icon: <Github size={20} />, url: "#" },
            ].map(({ icon, url }, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-10 h-10 flex items-center justify-center
                  rounded-full border border-gray-300
                  hover:bg-orange-600 hover:text-white
                  transition duration-300
                "
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 pt-6 border-t border-gray-200 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} <strong>Sports Engineering ITERA</strong>.
        Semua Hak Cipta Dilindungi.
      </div>

    </footer>
  );
}