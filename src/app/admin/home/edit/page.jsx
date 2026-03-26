"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/context/ToastContext";

export default function EditHome() {

  const router = useRouter();
  const { showToast } = useToast();

  const [data, setData] = useState({
    hero: { slides: [{ image: "" }] },
    stats: {
      title: "",
      description: "",
      items: []
    },
    impact: {
      title: "",
      subtitle: "",
      facts: []
    }
  });

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [temp, setTemp] = useState({});

  // LOAD DATA
  useEffect(() => {
    const saved = localStorage.getItem("homeData");
    if (saved) setData(JSON.parse(saved));
  }, []);

  // ================= SAVE =================
  const handleSave = () => {
    localStorage.setItem("homeData", JSON.stringify(data));

    showToast("Berhasil disimpan ✅", "success");

    setTimeout(() => {
      router.push("/admin/home");
    }, 800);
  };

  return (
    <div className="space-y-8">

      <h1 className="text-2xl font-bold">Edit Home</h1>

      {/* ================= HERO ================= */}
      <div className="bg-white p-6 rounded-xl space-y-4">
        <h2 className="font-semibold">Hero Images</h2>

        {data.hero.slides.map((s, i) => (
          <div key={i} className="flex gap-2">

            <input
              value={s.image}
              onChange={(e) => {
                const newSlides = [...data.hero.slides];
                newSlides[i].image = e.target.value;
                setData({ ...data, hero: { slides: newSlides } });
              }}
              className="flex-1 bg-gray-100 p-2 rounded"
              placeholder="Image URL"
            />

            <button
              onClick={() => {
                const newSlides = data.hero.slides.filter((_, index) => index !== i);
                setData({ ...data, hero: { slides: newSlides } });

                showToast("Slide dihapus", "error");
              }}
              className="text-red-500"
            >
              ✕
            </button>

          </div>
        ))}

        <button
          onClick={() => {
            setData({
              ...data,
              hero: { slides: [...data.hero.slides, { image: "" }] }
            });

            showToast("Slide ditambahkan");
          }}
          className="text-sm text-orange-600"
        >
          + Tambah Slide
        </button>
      </div>

      {/* ================= STATS ================= */}
      <div className="bg-white p-6 rounded-xl space-y-4">
        <h2 className="font-semibold">Stats</h2>

        <input
          value={data.stats.title}
          onChange={(e)=>setData({
            ...data,
            stats:{...data.stats,title:e.target.value}
          })}
          className="w-full bg-gray-100 p-2 rounded"
          placeholder="Title"
        />

        <textarea
          value={data.stats.description}
          onChange={(e)=>setData({
            ...data,
            stats:{...data.stats,description:e.target.value}
          })}
          className="w-full bg-gray-100 p-2 rounded"
          placeholder="Description"
        />

        {data.stats.items.map((item, i) => (
          <div key={i} className="flex gap-2">

            <div className="flex-1">
              {item.value} - {item.label}
            </div>

            <button
              onClick={()=>{
                const newItems = data.stats.items.filter((_, index)=>index!==i);
                setData({...data, stats:{...data.stats, items:newItems}});

                showToast("Stats dihapus", "error");
              }}
              className="text-red-500"
            >
              ✕
            </button>

          </div>
        ))}

        <button
          onClick={() => {
            setModalType("stats");
            setTemp({ value: "", label: "" });
            setShowModal(true);
          }}
          className="text-sm text-orange-600"
        >
          + Tambah Stats
        </button>
      </div>

      {/* ================= IMPACT ================= */}
      <div className="bg-white p-6 rounded-xl space-y-4">
        <h2 className="font-semibold">Impact</h2>

        <input
          value={data.impact.title}
          onChange={(e)=>setData({
            ...data,
            impact:{...data.impact,title:e.target.value}
          })}
          className="w-full bg-gray-100 p-2 rounded"
          placeholder="Title"
        />

        <textarea
          value={data.impact.subtitle}
          onChange={(e)=>setData({
            ...data,
            impact:{...data.impact,subtitle:e.target.value}
          })}
          className="w-full bg-gray-100 p-2 rounded"
          placeholder="Subtitle"
        />

        {data.impact.facts.map((fact, i)=>(
          <div key={i} className="flex justify-between">

            <div>{fact.title}</div>

            <button
              onClick={()=>{
                const newFacts=data.impact.facts.filter((_,index)=>index!==i);
                setData({...data,impact:{...data.impact,facts:newFacts}});

                showToast("Impact dihapus", "error");
              }}
              className="text-red-500"
            >
              ✕
            </button>

          </div>
        ))}

        <button
          onClick={() => {
            setModalType("impact");
            setTemp({ icon: "cpu", title: "", desc: "" });
            setShowModal(true);
          }}
          className="text-sm text-orange-600"
        >
          + Tambah Impact
        </button>
      </div>

      {/* SAVE */}
      <button
        onClick={handleSave}
        className="bg-orange-600 text-white px-6 py-2 rounded-lg"
      >
        Save
      </button>

      {/* ================= MODAL ================= */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

          <div className="bg-white rounded-xl p-6 w-[400px] space-y-4">

            <h2 className="font-semibold text-lg">
              Tambah {modalType}
            </h2>

            {/* STATS */}
            {modalType === "stats" && (
              <>
                <input
                  placeholder="Value"
                  className="w-full bg-gray-100 p-2 rounded"
                  onChange={(e)=>setTemp({...temp,value:e.target.value})}
                />

                <input
                  placeholder="Label"
                  className="w-full bg-gray-100 p-2 rounded"
                  onChange={(e)=>setTemp({...temp,label:e.target.value})}
                />
              </>
            )}

            {/* IMPACT */}
            {modalType === "impact" && (
              <>
                <select
                  className="w-full bg-gray-100 p-2 rounded"
                  onChange={(e)=>setTemp({...temp,icon:e.target.value})}
                >
                  <option value="cpu">CPU</option>
                  <option value="map">Map</option>
                  <option value="rocket">Rocket</option>
                </select>

                <input
                  placeholder="Title"
                  className="w-full bg-gray-100 p-2 rounded"
                  onChange={(e)=>setTemp({...temp,title:e.target.value})}
                />

                <textarea
                  placeholder="Description"
                  className="w-full bg-gray-100 p-2 rounded"
                  onChange={(e)=>setTemp({...temp,desc:e.target.value})}
                />
              </>
            )}

            {/* ACTION */}
            <div className="flex justify-end gap-2">

              <button
                onClick={()=>setShowModal(false)}
                className="px-4 py-2 text-gray-500"
              >
                Batal
              </button>

              <button
                onClick={()=>{
                  if(modalType==="stats"){
                    setData({
                      ...data,
                      stats:{
                        ...data.stats,
                        items:[...data.stats.items,temp]
                      }
                    });

                    showToast("Stats ditambahkan");
                  }

                  if(modalType==="impact"){
                    setData({
                      ...data,
                      impact:{
                        ...data.impact,
                        facts:[...data.impact.facts,temp]
                      }
                    });

                    showToast("Impact ditambahkan");
                  }

                  setShowModal(false);
                  setTemp({});
                }}
                className="bg-orange-600 text-white px-4 py-2 rounded"
              >
                Simpan
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}