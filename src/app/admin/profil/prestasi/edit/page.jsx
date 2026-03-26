"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const [data, setData] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("prestasiData");
    if (saved) setData(JSON.parse(saved));
  }, []);

  const handleSave = () => {
    localStorage.setItem("prestasiData", JSON.stringify(data));
    router.push("/admin/prestasi");
  };

  return (
    <div className="max-w-4xl space-y-8">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">
          Edit Prestasi Mahasiswa
        </h1>

        <button
          onClick={handleSave}
          className="px-5 py-2.5 rounded-full bg-gray-900 text-white text-sm hover:bg-gray-800"
        >
          Simpan
        </button>
      </div>

      {/* LIST */}
      <div className="space-y-6">

        {data.map((item, i) => (
          <div
            key={i}
            className="border border-gray-200 rounded-2xl p-6 bg-white space-y-4"
          >

            <div className="grid md:grid-cols-2 gap-4">

              <Input
                value={item.nama}
                onChange={(val) => update(data, setData, i, "nama", val)}
                placeholder="Nama"
              />

              <Input
                value={item.nim}
                onChange={(val) => update(data, setData, i, "nim", val)}
                placeholder="NIM"
              />

              <Input
                value={item.prodi}
                onChange={(val) => update(data, setData, i, "prodi", val)}
                placeholder="Prodi"
              />

              <Input
                value={item.foto}
                onChange={(val) => update(data, setData, i, "foto", val)}
                placeholder="URL Foto"
              />

            </div>

            <textarea
              value={item.prestasi}
              onChange={(e) =>
                update(data, setData, i, "prestasi", e.target.value)
              }
              placeholder="Deskripsi Prestasi"
              className="
                w-full
                px-4 py-3
                rounded-xl
                border border-gray-200
                text-sm
                focus:outline-none
                focus:border-orange-400
              "
            />

            {/* ACTION */}
            <div className="flex justify-between text-sm">

              <div className="flex gap-2">
                <button onClick={() => move(data, setData, i, -1)}>↑</button>
                <button onClick={() => move(data, setData, i, 1)}>↓</button>
              </div>

              <button
                onClick={() =>
                  setData(data.filter((_, idx) => idx !== i))
                }
                className="text-gray-400 hover:text-red-500"
              >
                Hapus
              </button>

            </div>

          </div>
        ))}

        {/* ADD */}
        <button
          onClick={() =>
            setData([
              ...data,
              {
                nama: "",
                nim: "",
                prodi: "",
                prestasi: "",
                foto: "",
              },
            ])
          }
          className="text-sm text-orange-600 hover:underline"
        >
          + Tambah Prestasi
        </button>

      </div>
    </div>
  );
}

/* INPUT */
function Input({ value, onChange, placeholder }) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="
        w-full
        px-4 py-2.5
        rounded-xl
        border border-gray-200
        text-sm
        focus:outline-none
        focus:border-orange-400
      "
    />
  );
}

/* UPDATE */
function update(data, setData, index, field, value) {
  const newData = [...data];
  newData[index][field] = value;
  setData(newData);
}

/* MOVE */
function move(data, setData, index, dir) {
  const newData = [...data];
  const target = index + dir;
  if (target < 0 || target >= newData.length) return;

  [newData[index], newData[target]] = [
    newData[target],
    newData[index],
  ];

  setData(newData);
}