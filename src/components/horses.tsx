'use client'

import { useState } from "react";

const HORSE_DATA = [
  {
    name: "Lovis",
    age: "16 years old",
    breed: "Arabian-Welsh Pony mix, mare",
    images: [
      {
        url: "https://s3.us-east-1.amazonaws.com/images.horses.lara.horse/lovis/lovis1.jpg",
        alt: "Lovis' face"
      },
      {
        url: "https://s3.us-east-1.amazonaws.com/images.horses.lara.horse/lovis/lovis2.JPG",
        alt: "Lovis' head"
      },
      {
        url: "https://s3.us-east-1.amazonaws.com/images.horses.lara.horse/lovis/lovis3.JPG",
        alt: "Lovis at show"
      },
    ]
  },
  {
    name: "Oz",
    age: "10 years old",
    breed: "Andalusian-Knabstrupper mix, gelding",
    images: [
      {
        url: "https://s3.us-east-1.amazonaws.com/images.horses.lara.horse/oz/oz1.jpg",
        alt: "Oz in the mud"
      },
      {
        url: "https://s3.us-east-1.amazonaws.com/images.horses.lara.horse/oz/oz2.JPG",
        alt: "Oz painted"
      },
    ]
  },
  {
    name: "Jespers Fiasko, aka Jasko",
    age: "10 years old",
    breed: "Knabstrupper, gelding",
    images: [
      {
        url: "https://s3.us-east-1.amazonaws.com/images.horses.lara.horse/jasko/jasko1.jpg",
        alt: "Jasko and me"
      },
      {
        url: "https://s3.us-east-1.amazonaws.com/images.horses.lara.horse/jasko/jasko2.JPG",
        alt: "Jasko and me loping"
      },
      {
        url: "https://s3.us-east-1.amazonaws.com/images.horses.lara.horse/jasko/jasko3.JPG",
        alt: "Jasko"
      },
    ]
  },
  {
    name: "Tralee",
    age: "12 years old",
    breed: "Irish Cob, gelding",
    images: [
      {
        url: "https://s3.us-east-1.amazonaws.com/images.horses.lara.horse/tralee/tralee1.JPG",
        alt: "Tralee and me"
      },
      {
        url: "https://s3.us-east-1.amazonaws.com/images.horses.lara.horse/tralee/tralee2.jpg",
        alt: "Tralee and me in the field"
      },
      {
        url: "https://s3.us-east-1.amazonaws.com/images.horses.lara.horse/tralee/tralee3.JPG",
        alt: "Tralee"
      },
      {
        url: "https://s3.us-east-1.amazonaws.com/images.horses.lara.horse/tralee/tralee4.JPG",
        alt: "Tralee at show"
      },
    ]
  },
  {
    name: "Pico, aka Pixel",
    age: "14 years old",
    breed: "Quarter Horse-Wels Pony mix, gelding",
    images: [
      {
        url: "https://s3.us-east-1.amazonaws.com/images.horses.lara.horse/pico/pico1.jpg",
        alt: "Pico"
      },
      {
        url: "https://s3.us-east-1.amazonaws.com/images.horses.lara.horse/pico/pico2.JPG",
        alt: "Pico and me walking"
      },
      {
        url: "https://s3.us-east-1.amazonaws.com/images.horses.lara.horse/pico/pico3.jpg",
        alt: "Pico"
      },
    ]
  },
  {
    name: "Tiana",
    age: "7 years old",
    breed: "Haflinger, mare",
    images: [
      {
        url: "https://s3.us-east-1.amazonaws.com/images.horses.lara.horse/tiana/tiana1.jpg",
        alt: "Tiana in stall"
      },
      {
        url: "https://s3.us-east-1.amazonaws.com/images.horses.lara.horse/tiana/tiana2.jpg",
        alt: "Tiana"
      },
    ]
  },
  {
    name: "Nala",
    age: "8 years old",
    breed: "unknown, mare",
    images: [
      {
        url: "https://s3.us-east-1.amazonaws.com/images.horses.lara.horse/nala/nala1.jpeg",
        alt: "Nala"
      },
      {
        url: "https://s3.us-east-1.amazonaws.com/images.horses.lara.horse/nala/nala2.jpeg",
        alt: "Nala"
      },
    ]
  },
  {
    name: "Fuchur",
    age: "14 years old",
    breed: "Noriker, gelding",
    images: [
      {
        url: "https://s3.us-east-1.amazonaws.com/images.horses.lara.horse/fuchur/fuchur1.JPG",
        alt: "Fuchur and Jimmy"
      },
      {
        url: "https://s3.us-east-1.amazonaws.com/images.horses.lara.horse/fuchur/fuchur2.jpg",
        alt: "Fuchur and me"
      },
      {
        url: "https://s3.us-east-1.amazonaws.com/images.horses.lara.horse/fuchur/fuchur3.jpg",
        alt: "Fuchur and me walking"
      },
    ]
  }
]

export function Horses() {
  const [modalData, setModalData] = useState<{imageUrl: string, caption: string} | null>(null)

  const handleImageClick = (imageUrl: string, caption: string) => {
    setModalData({imageUrl, caption});
  };

  return (
    <>
   {HORSE_DATA.map((horse, index) => (
    <section key={index}>
      <h2 className="text-purple-400">{horse.name}</h2>
      <p>{horse.age}, {horse.breed}</p>
      <div className="grid grid-cols-4 items-center justify-center">
        {horse.images.map((horseImage, index) => (
          <img
            key={index}
            src={horseImage.url}
            alt={horseImage.alt}
            width={180}
            height={38}
            className="mx-auto cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => handleImageClick(horseImage.url, horseImage.alt)}
          />
        ))}
      </div>
    </section>
    ))}
    
      {modalData && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setModalData(null)}
        >
          <div className="relative max-w-4xl max-h-full p-4">
            <span 
              className="absolute top-2 right-2 text-white text-4xl cursor-pointer hover:text-gray-300 z-10"
              onClick={() => setModalData(null)}
            >
              &times;
            </span>
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


export default Horses;
