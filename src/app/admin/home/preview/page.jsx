"use client";

import { useEffect, useState } from "react";

export default function PreviewHome() {

  const [data,setData] = useState(null);

  useEffect(()=>{

    const saved = localStorage.getItem("homeData");

    if(saved){
      setData(JSON.parse(saved));
    }

  },[]);

  if(!data) return <p>Loading...</p>;

  return (
    <div>

      <div
        className="h-[400px] flex items-center justify-center text-white"
        style={{
          backgroundImage:`url(${data.image})`,
          backgroundSize:"cover"
        }}
      >

        <div className="bg-black/40 p-10 rounded">

          <h1 className="text-4xl font-bold mb-4">
            {data.title}
          </h1>

          <p>
            {data.subtitle}
          </p>

        </div>

      </div>

    </div>
  );
}