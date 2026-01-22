'use client'

import { useState } from "react";
import { Notes } from "./notes";
import { HORSE_DATA } from "@/data";

interface ModalData {
  imageUrl: string;
  caption: string;
}

export function Horses() {
  const [modalData, setModalData] = useState<ModalData | null>(null)

  const handleImageClick = (imageUrl: string, caption: string) => {
    setModalData({ imageUrl, caption });
  };

  return (
    <>
      {HORSE_DATA.map((horse, index) => (
        <section 
          key={index} 
          className="m-2">
          <div className="flex flex-col items-center border-2 border-dotted border-purple-700 rounded-xl p-4" >
            <p className="font-bold text-2xl text-purple-500">{horse.name}</p>
            <p>{horse.age}, {horse.breed}</p>

            <Notes text={horse.notes} />

            <div className="grid grid-cols-4 items-center">
              {horse.images.map((horseImage, index) => (
                <img
                  key={index}
                  src={horseImage.url}
                  alt={horseImage.alt}
                  width={180}
                  className="mx-auto cursor-pointer hover:opacity-80 p-1"
                  onClick={() => handleImageClick(horseImage.url, horseImage.alt)}
                />
              ))}
            </div>
          </div>
        </section>
      ))}
    
      {modalData && (
        <div 
          className="fixed inset-0 bg-black flex items-center justify-center"
          onClick={() => setModalData(null)}
        >
          <div className="w-[90vw] h-[80vh] flex flex-col items-center justify-center">
            <button 
              className="self-end text-stone-400 hover:text-stone-300 text-2xl cursor-pointer"
              onClick={() => setModalData(null)}
            >
              x
            </button>
            <img 
              src={modalData.imageUrl} 
              alt={modalData.caption}
              className="max-w-full max-h-full object-contain"
            />
            <div className="text-white text-center mt-2">
              {modalData.caption}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
