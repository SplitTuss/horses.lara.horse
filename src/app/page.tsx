'use client';

import { Horses } from '../components/horses';
import Header from '../components/header';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center">
        <div className="grid grid-cols-2 max-w-6xl justify-between opacity-50 rounded-xl absolute">
          <img
            src="https://s3.us-east-1.amazonaws.com/images.horses.lara.horse/tralee/tralee1.JPG"
            alt="Trallee and me"
          />
          <img
            src="https://s3.us-east-1.amazonaws.com/images.horses.lara.horse/winston/Winston.jpg"
            alt="Winston and me"
          />
        </div>
        <div className="text-3xl sm:text-6xl relative mt-4 sm:mt-30 opacity-70">
          Lara`s horse history
        </div>
        <div className="max-w-2xl text-2xl sm:text-4xl flex text-center relative mt-2 sm:mt-35 mb-5 sm:mb-80 opacity-70">
          This is a page about all the horses I`ve met, who have found a special place in my heart.
          Some more than others but every single one had their very own character and with that,
          their own lessons to teach me!
        </div>
        <div className="">
          <Horses />
        </div>
      </main>

      <footer className="text-center m-2">
        <p>made by Lara</p>
      </footer>
    </>
  );
}
