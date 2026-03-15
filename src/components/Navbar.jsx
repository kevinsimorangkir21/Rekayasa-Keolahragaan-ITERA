"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    {
      label: "Profil",
      children: [
        { href: "/profil/sejarah", label: "Sejarah" },
        { href: "/profil/visi-misi", label: "Visi & Misi" },
        { href: "/profil/staff-dosen", label: "Staff Dosen" },
        { href: "/profil/prestasi-mahasiswa", label: "Prestasi Mahasiswa" },
      ],
    },
    {
      label: "Akademik",
      mega: true,
      children: [
        { href: "/akademik/kurikulum", label: "Kurikulum" },
        { href: "/akademik/jadwal", label: "Jadwal Kuliah" },
        { href: "/akademik/kebutuhan-mahasiswa", label: "Kebutuhan Mahasiswa" },
        { href: "/akademik/kalender", label: "Kalender Akademik" },
        { href: "/akademik/kerja-praktik", label: "Kerja Praktik" },
        { href: "/akademik/kuliah-kerja-nyata", label: "Kuliah Kerja Nyata" },
        { href: "/akademik/ujian-akhir", label: "Ujian Akhir" },
      ],
    },
    {
      label: "Layanan",
      children: [
        { href: "/layanan/fakultas", label: "Layanan Fakultas" },
        { href: "/layanan/keuangan", label: "Layanan Keuangan" },
        { href: "/layanan/pmb", label: "Penerimaan Mahasiswa Baru" },
        { href: "/layanan/lapor-pengaduan", label: "Lapor Pengaduan" },
      ],
    },
    {
      label: "Fasilitas",
      children: [
        { href: "/fasilitas/upt-tik-itera", label: "UPT TIK ITERA" },
        { href: "/fasilitas/laboratorium", label: "Laboratorium" },
        { href: "/fasilitas/perpustakaan", label: "Perpustakaan" },
      ],
    },
    { label: "Berita", href: "/berita" },
  ];

  const isParentActive = (item) => {
    if (item.href) return pathname === item.href;
    if (item.children)
      return item.children.some((child) => pathname.startsWith(child.href));
    return false;
  };

  const openDropdown = (label) => setDropdown(label);
  const closeDropdown = () => setDropdown(null);

  return (
    <header className="fixed top-0 w-full z-50">
      <div
        className={`border-b border-gray-200 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-white"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-[72px] flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <motion.img
              src="/logo.png"
              alt="Logo"
              className="w-10 h-10"
              whileHover={{ rotate: 6, scale: 1.05 }}
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-8 text-sm font-medium items-center">
            {navLinks.map((item) => {
              const active = isParentActive(item);
              const hasChild = !!item.children;

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => hasChild && openDropdown(item.label)}
                  onMouseLeave={closeDropdown}
                >
                  <button
                    className={`flex items-center gap-1 transition ${
                      active
                        ? "text-orange-600"
                        : "text-gray-800 hover:text-orange-600"
                    }`}
                  >
                    {item.label}
                    {hasChild && <ChevronDown className="w-4 h-4 opacity-70" />}
                  </button>

                  {active && (
                    <motion.span
                      layoutId="nav"
                      className="absolute -bottom-2 h-[2px] bg-orange-600 rounded-full w-full"
                    />
                  )}

                  <AnimatePresence>
                    {hasChild && dropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className={`absolute top-full mt-3 px-4 py-4 bg-white border border-gray-200 rounded-xl shadow-xl ${
                          item.mega
                            ? "grid grid-cols-2 gap-2 min-w-[330px]"
                            : "flex flex-col min-w-[220px]"
                        }`}
                      >
                        {item.children?.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="text-gray-800 hover:text-orange-600 hover:bg-orange-50 text-sm px-3 py-2 rounded-md transition"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 bg-gray-200 rounded"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t"
            >
              <div className="flex flex-col px-6 py-4 gap-4">
                {navLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href || "#"}
                    className="text-gray-800 hover:text-orange-600"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
  );
}