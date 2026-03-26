"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [data, setData] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("dosenData");
    if (saved) {
      setData(JSON.parse(saved));
    }
  }, []);

  // SAVE
  const handleSave = () => {
    const isInvalid = data.some(
      (d) => !d.nama || !d.jabatan || !d.foto
    );

    if (isInvalid) {
      alert("Semua field harus diisi!");
      return;
    }

    localStorage.setItem("dosenData", JSON.stringify(data));
    router.push("/admin/profil/staff-dosen");
  };

  return (
    <div className="max-w-4xl space-y-8">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">
          Edit Staff Dosen
        </h1>

        <button
          onClick={handleSave}
          className="
            px-5 py-2.5
            rounded-full
            bg-gray-900 text-white
            text-sm
            hover:bg-gray-800
          "
        >
          Simpan
        </button>
      </div>

      {/* LIST */}
      <div className="space-y-6">

        {data.map((item, i) => (
          <div
            key={i}
            className="
              border border-gray-200
              rounded-2xl
              p-6
              bg-white
              shadow-sm
              space-y-4
            "
          >
            <div className="grid md:grid-cols-3 gap-4">

              <Input
                value={item.nama}
                onChange={(val) => update(data, setData, i, "nama", val)}
                placeholder="Nama"
              />

              <Input
                value={item.jabatan}
                onChange={(val) => update(data, setData, i, "jabatan", val)}
                placeholder="Jabatan"
              />

              <Input
                value={item.foto}
                onChange={(val) => update(data, setData, i, "foto", val)}
                placeholder="URL Foto"
              />

            </div>

            {/* ACTION */}
            <div className="flex justify-between text-sm">

              <div className="flex gap-2">
                <button
                  onClick={() => move(data, setData, i, -1)}
                  className="px-2 py-1 border rounded"
                >
                  ↑
                </button>
                <button
                  onClick={() => move(data, setData, i, 1)}
                  className="px-2 py-1 border rounded"
                >
                  ↓
                </button>
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
            setData([...data, { nama: "", jabatan: "", foto: "" }])
          }
          className="text-sm text-blue-600 hover:underline"
        >
          + Tambah Dosen
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
        focus:border-blue-500
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