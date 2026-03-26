"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const load = () => {
      const saved = localStorage.getItem("dosenData");

      if (saved) {
        setData(JSON.parse(saved));
      } else {
        const initial = [
          {
            nama: "Erny Amalia L, M.Pd.",
            jabatan: "Koordinator Prodi",
            foto: "/dosen/ErnyAmelia.jpg",
          },
          {
            nama: "Azry Ayu Nabilah, M.Pd.",
            jabatan: "Staff Dosen",
            foto: "/dosen/AzryAyu.jpg",
          },
        ];

        setData(initial);
        localStorage.setItem("dosenData", JSON.stringify(initial));
      }
    };

    load();

    // auto refresh saat balik dari edit
    window.addEventListener("focus", load);
    return () => window.removeEventListener("focus", load);
  }, []);

  return (
    <div className="space-y-10">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">
          Staff Dosen
        </h1>

        <Link
          href="/admin/profil/dosen/edit"
          className="
            px-4 py-2
            rounded-full
            border border-gray-300
            text-sm
            hover:bg-gray-100
          "
        >
          Edit
        </Link>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-4 gap-6">

        {data.map((dosen, i) => (
          <div
            key={i}
            className="
              border border-gray-200
              rounded-2xl
              overflow-hidden
              bg-white
              transition
              hover:-translate-y-1
            "
          >
            <div
              className="h-56 bg-cover bg-center"
              style={{ backgroundImage: `url(${dosen.foto})` }}
            />

            <div className="p-4 text-center">
              <h3 className="font-semibold text-gray-900 text-sm">
                {dosen.nama}
              </h3>

              <p className="text-gray-500 text-xs mt-1">
                {dosen.jabatan}
              </p>
            </div>
          </div>
        ))}

        {data.length === 0 && (
          <p className="text-gray-400 col-span-4 text-center">
            Belum ada data dosen
          </p>
        )}

      </div>

    </div>
  );
}