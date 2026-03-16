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
  const [mobileDropdown, setMobileDropdown] = useState(null);
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
        { href: "/akademik/dokumen-akademik", label: "Dokumen Akademik" },
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
    { label: "Event", href: "/event" },
  ];

  const isParentActive = (item) => {
    if (item.href) return pathname === item.href;
    if (item.children)
      return item.children.some((child) => pathname.startsWith(child.href));
    return false;
  };

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
              src="/RekayasaKeolahragaan.png"
              alt="Logo"
              className="w-25 h-25"
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
                  onMouseEnter={() => hasChild && setDropdown(item.label)}
                  onMouseLeave={() => setDropdown(null)}
                >
                  {item.href ? (
  <Link
    href={item.href}
    className={`flex items-center gap-1 transition ${
      active
        ? "text-orange-600"
        : "text-gray-800 hover:text-orange-600"
    }`}
  >
    {item.label}
  </Link>
) : (
  <button
    className={`flex items-center gap-1 transition ${
      active
        ? "text-orange-600"
        : "text-gray-800 hover:text-orange-600"
    }`}
  >
    {item.label}
    {hasChild && <ChevronDown size={16} />}
  </button>
)}
                  {active && (
                    <motion.span
                      layoutId="nav"
                      className="absolute -bottom-2 h-[2px] bg-orange-600 w-full"
                    />
                  )}

                  <AnimatePresence>
                    {hasChild && dropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="absolute top-full mt-3 px-4 py-4 bg-white border border-gray-200 rounded-xl shadow-xl flex flex-col min-w-[220px]"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="px-3 py-2 rounded-md text-sm hover:bg-orange-50 hover:text-orange-600"
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
            className="md:hidden p-2 rounded bg-gray-200"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-white border-t"
            >
              <div className="flex flex-col px-6 py-4">

                {navLinks.map((item) => {
                  const hasChild = !!item.children;

                  return (
                    <div key={item.label} className="border-b last:border-none">

                      {/* Parent */}
                      <button
                        onClick={() =>
                          hasChild
                            ? setMobileDropdown(
                                mobileDropdown === item.label
                                  ? null
                                  : item.label
                              )
                            : setMenuOpen(false)
                        }
                        className="w-full flex justify-between items-center py-3 text-left font-medium text-gray-800"
                      >
                        {item.href ? (
                          <Link href={item.href}>{item.label}</Link>
                        ) : (
                          item.label
                        )}

                        {hasChild && (
                          <ChevronDown
                            className={`transition ${
                              mobileDropdown === item.label
                                ? "rotate-180"
                                : ""
                            }`}
                            size={16}
                          />
                        )}
                      </button>

                      {/* Dropdown */}
                      <AnimatePresence>
                        {hasChild && mobileDropdown === item.label && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            className="flex flex-col pl-4 pb-3"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => setMenuOpen(false)}
                                className="py-2 text-sm text-gray-600 hover:text-orange-600"
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

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
  );
}