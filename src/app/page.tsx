'use client';

import { Horses } from '../components/horses';
import Header from '../components/header';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center">
        <div className="grid grid-cols-2 max-w-sm sm:max-w-6xl justify-between opacity-50 rounded-xl absolute">
          <img
            src="https://s3.us-east-1.amazonaws.com/images.horses.lara.horse/tralee/tralee1.JPG"
            alt="Trallee and me"
          />
          <img
            src="https://s3.us-east-1.amazonaws.com/images.horses.lara.horse/winston/Winston.jpg"
            alt="Winston and me"
          />
        </div>
        <div className="max-w-sm sm:max-w-2xl text-sm sm:text-4xl flex text-center relative mx-4 mt-50 sm:mt-90 mb-6 sm:mb-80 opacity-70 sm:opacity-50">
          I`ve created this page to honor and remember those horses who have found a special place
          in my heart. Every single one had their very own character and with that, their own
          lessons to teach!
        </div>
        <div className="max-w-sm sm:max-w-2xl mr-4">
          <Horses />
        </div>
      </main>

      <footer className="text-center m-2">
        <p>made by Lara</p>
      </footer>
    </>
  );
}
