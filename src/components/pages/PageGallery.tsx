"use client";

const photos = [
  { src: "/gallery/1.jpg", caption: "yang ini lucu parah", rotate: "-rotate-3" },
  { src: "/gallery/2.png", caption: "gemes banget sih", rotate: "rotate-2" },
  { src: "/gallery/3.png", caption: "tambah sayang deh", rotate: "rotate-3" },
  { src: "/gallery/4.jpg", caption: "kesayangan aku", rotate: "-rotate-2" },
];

import PageDecorations from "../PageDecorations";

export default function PageGallery() {
  return (
    <div className="relative min-h-full flex flex-col w-full">
      {/* Background nempel di belakang dan full size */}
      <div 
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: "url('/gallery/4.jpg')" }}
      />
      {/* Overlay biar teks tetep kebaca dan elegan */}
      <div className="absolute inset-0 bg-pink-100/85 pointer-events-none" />

      <div className="relative z-10 flex flex-col justify-center flex-1 px-5 py-14 overflow-hidden">

      <PageDecorations />
      <div className="relative z-10 max-w-md mx-auto w-full">
        <div className="text-center mb-8">
          <h3 className="text-[2.2rem] font-bold text-gray-800 drop-shadow-sm">Album Kesayangan</h3>
          <p className="text-pink-400 text-sm font-semibold mt-1">koleksi muka lucu kamu</p>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-6">
          {photos.map((p, i) => (
            <div
              key={i}
              className={`relative bg-white p-2 pb-8 rounded-md shadow-lg shadow-pink-200/60 ${p.rotate} transition-transform duration-300 active:scale-105 active:rotate-0`}
            >
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-4 bg-pink-200/80 rotate-[-4deg] rounded-sm" />
              <img
                src={p.src}
                alt={p.caption}
                className="w-full aspect-[4/5] object-cover rounded-sm bg-pink-50"
              />
              <p className="absolute bottom-2.5 inset-x-0 text-center text-[10px] font-bold text-gray-500 uppercase tracking-widest">{p.caption}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 px-5 py-4 bg-white/60 backdrop-blur-sm border border-white/70 rounded-2xl shadow-sm">
          <p className="text-center text-gray-600 text-[0.95rem] font-medium leading-relaxed">
            Walaupun kita jauh, kiriman foto random dari kamu tuh selalu jadi hal yang paling aku tunggu tauu. Jangan pernah bosen kirim pap muka lucu kamu yaa, cantiiik.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}
