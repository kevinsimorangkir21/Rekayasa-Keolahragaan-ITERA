"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Newspaper,
  CalendarDays,
  GraduationCap,
  Home,
  Settings,
  UserPlus,
  LogOut,
  Bell,
  ChevronDown,
  AlertCircle,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  const [openProfil, setOpenProfil] = useState(false);
  const [openAkademik, setOpenAkademik] = useState(false);

  useEffect(() => {
    if (pathname.startsWith("/admin/profil")) setOpenProfil(true);
    if (pathname.startsWith("/admin/akademik")) setOpenAkademik(true);
  }, [pathname]);

  const menus = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Edit Home", href: "/admin/home", icon: Home },

    {
      name: "Profil",
      icon: Users,
      key: "profil",
      children: [
        { name: "Sejarah", href: "/admin/profil/sejarah" },
        { name: "Visi Misi", href: "/admin/profil/visi-misi" },
        { name: "Staff Dosen", href: "/admin/profil/staff-dosen" },
        { name: "Prestasi Mahasiswa", href: "/admin/profil/prestasi" },
      ],
    },

    { name: "Berita", href: "/admin/berita", icon: Newspaper },
    { name: "Event", href: "/admin/event", icon: CalendarDays },
    { name: "Pengaduan", href: "/admin/pengaduan", icon: AlertCircle },

    {
      name: "Akademik",
      icon: GraduationCap,
      key: "akademik",
      children: [
        { name: "Kurikulum", href: "/admin/akademik/kurikulum" },
        { name: "Jadwal Kuliah", href: "/admin/akademik/jadwal" },
        { name: "Dokumen Akademik", href: "/admin/akademik/dokumen" },
        { name: "Kalender Akademik", href: "/admin/akademik/kalender" },
        { name: "Kerja Praktik", href: "/admin/akademik/kp" },
        { name: "Kuliah Kerja Nyata", href: "/admin/akademik/kkn" },
        { name: "Ujian Akhir", href: "/admin/akademik/ujian" },
      ],
    },

    { name: "Admin Account", href: "/admin/akun", icon: UserPlus },
    { name: "Pengaturan", href: "/admin/pengaturan", icon: Settings },
  ];

  const toggleDropdown = (key) => {
    if (key === "profil") setOpenProfil(!openProfil);
    if (key === "akademik") setOpenAkademik(!openAkademik);
  };

  const isOpen = (key) => {
    if (key === "profil") return openProfil;
    if (key === "akademik") return openAkademik;
  };

  return (
    <div className="bg-gray-50 min-h-screen flex">

      {/* SIDEBAR */}
      <aside className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col fixed">

        {/* HEADER SIDEBAR */}
        <div className="p-6 border-b border-gray-100">
          <h1 className="text-lg font-semibold text-gray-900">
            Admin Panel
          </h1>
          <p className="text-xs text-gray-400">
            Content Management
          </p>
        </div>

        {/* MENU SCROLL AREA */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1">

          {menus.map((menu, idx) => {
            const Icon = menu.icon;

            if (!menu.children) {
              const active = pathname === menu.href;

              return (
                <Link
                  key={idx}
                  href={menu.href}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition
                  ${
                    active
                      ? "bg-orange-500 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <Icon size={18} />
                  {menu.name}
                </Link>
              );
            }

            const activeParent = menu.children.some((c) =>
              pathname.startsWith(c.href)
            );

            return (
              <div key={idx}>
                <button
                  onClick={() => toggleDropdown(menu.key)}
                  className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm transition
                  ${
                    activeParent
                      ? "bg-orange-100 text-orange-600"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon size={18} />
                    {menu.name}
                  </div>

                  <ChevronDown
                    size={16}
                    className={`transition ${
                      isOpen(menu.key) ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen(menu.key) && (
                  <div className="ml-8 mt-1 space-y-1">
                    {menu.children.map((child, i) => {
                      const active = pathname === child.href;

                      return (
                        <Link
                          key={i}
                          href={child.href}
                          className={`block px-3 py-2 rounded-lg text-sm transition
                          ${
                            active
                              ? "bg-orange-500 text-white"
                              : "text-gray-600 hover:bg-gray-100"
                          }`}
                        >
                          {child.name}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}

        </div>

        {/* LOGOUT FIXED */}
        <div className="p-4 border-t border-gray-100">
          <button
            onClick={() => router.push("/login")}
            className="flex items-center gap-2 text-sm text-red-500"
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>

      </aside>

      {/* MAIN */}
      <div className="flex-1 ml-64">

        {/* HEADER FIXED */}
        <header className="fixed top-0 left-64 right-0 h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 z-40">
          <h2 className="text-lg font-semibold capitalize">
            {pathname.split("/").pop() || "Dashboard"}
          </h2>

          <div className="flex items-center gap-4">
            <Bell className="w-5 h-5 text-gray-500" />

            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-orange-500 text-white flex items-center justify-center rounded-full text-sm font-semibold">
                A
              </div>
              <span className="text-sm">Admin</span>
            </div>
          </div>
        </header>

        {/* CONTENT */}
        <main className="pt-20 p-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            {children}
          </div>
        </main>

      </div>
    </div>
  );
}