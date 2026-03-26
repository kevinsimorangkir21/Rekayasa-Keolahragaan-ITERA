"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function EditVisiMisi() {
  const router = useRouter();

  const [data, setData] = useState({
    title: "Visi & Misi",
    hero: "",
    visi: "",
    misi: [],
  });

  useEffect(() => {
    const saved = localStorage.getItem("visiMisiData");
    if (saved) setData(JSON.parse(saved));
  }, []);

  const handleSave = () => {
    localStorage.setItem("visiMisiData", JSON.stringify(data));
    router.push("/admin/profil/visi-misi");
  };

  return (
    <div className="max-w-3xl space-y-10">

      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">
          Edit Visi & Misi
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Kelola informasi visi dan misi program studi
        </p>
      </div>

      {/* HERO */}
      <div className="border border-gray-200 rounded-2xl p-6 space-y-4">
        <h2 className="text-sm font-medium text-gray-700">Hero</h2>

        <Input
          value={data.title}
          onChange={(val) => setData({ ...data, title: val })}
          placeholder="Judul"
        />

        <Input
          value={data.hero}
          onChange={(val) => setData({ ...data, hero: val })}
          placeholder="Hero Image URL"
        />
      </div>

      {/* VISI */}
      <div className="border border-gray-200 rounded-2xl p-6 space-y-4">
        <h2 className="text-sm font-medium text-gray-700">Visi</h2>

        <textarea
          value={data.visi}
          onChange={(e) =>
            setData({ ...data, visi: e.target.value })
          }
          placeholder="Isi visi"
          className="
            w-full
            px-4 py-3
            rounded-xl
            border border-gray-200
            text-sm
            focus:outline-none
          "
        />
      </div>

      {/* MISI */}
      <div className="border border-gray-200 rounded-2xl p-6 space-y-4">
        <h2 className="text-sm font-medium text-gray-700">Misi</h2>

        {data.misi.map((item, i) => (
          <div key={i} className="flex gap-3 items-start">

            {/* ICON SELECT */}
            <select
              value={item.icon}
              onChange={(e) => {
                const newMisi = [...data.misi];
                newMisi[i].icon = e.target.value;
                setData({ ...data, misi: newMisi });
              }}
              className="
                px-3 py-2
                rounded-xl
                border border-gray-200
                text-sm
              "
            >
              <option value="graduation">Graduation</option>
              <option value="microscope">Microscope</option>
              <option value="cog">Cog</option>
              <option value="handshake">Handshake</option>
            </select>

            {/* TEXT */}
            <input
              value={item.text}
              onChange={(e) => {
                const newMisi = [...data.misi];
                newMisi[i].text = e.target.value;
                setData({ ...data, misi: newMisi });
              }}
              placeholder="Isi misi"
              className="
                flex-1
                px-4 py-2.5
                rounded-xl
                border border-gray-200
                text-sm
                focus:outline-none
              "
            />

            {/* DELETE */}
            <button
              onClick={() => {
                const newMisi = data.misi.filter(
                  (_, index) => index !== i
                );
                setData({ ...data, misi: newMisi });
              }}
              className="
                text-gray-400
                hover:text-red-500
                text-sm
              "
            >
              ✕
            </button>

          </div>
        ))}

        {/* ADD */}
        <button
          onClick={() =>
            setData({
              ...data,
              misi: [...data.misi, { icon: "graduation", text: "" }],
            })
          }
          className="
            text-sm
            text-orange-600
            hover:underline
          "
        >
          + Tambah Misi
        </button>
      </div>

      {/* ACTION */}
      <div className="flex justify-end gap-3">

        <button
          onClick={() => router.back()}
          className="
            px-4 py-2
            rounded-full
            border border-gray-300
            text-sm
            hover:bg-gray-100
          "
        >
          Batal
        </button>

        <button
          onClick={handleSave}
          className="
            px-5 py-2.5
            rounded-full
            bg-gray-900 text-white
            text-sm
            hover:bg-gray-800
            transition
          "
        >
          Simpan
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
      "
    />
  );
}