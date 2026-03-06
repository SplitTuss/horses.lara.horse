'use client';

import { Notes } from './notes';
import { HORSE_DATA } from '@/data';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './shadcn/Dialog';

export function Horses() {
  return (
    <div className="relative max-w-10xl mx-auto">
      <div className="absolute left-1/2 -translate-x-1/2 w-1 bg-primary h-full hidden md:block" />
      {HORSE_DATA.map((horse, index) => (
        <section
          key={index}
          className={`relative flex justify-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} mb-12`}
        >
          <div className="hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 items-center">
            <div className="w-5 h-5 bg-purple-500 rounded-full border-4 border-purple-400" />
            <div
              className={`absolute whitespace-nowrap font-semibold text-purple-500 ${index % 2 !== 0 ? 'left-8' : 'right-8'}`}
            >
              {horse.timeline}
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-center mt-6 p-4">
            <p className="font-bold text-2xl text-purple-500">{horse.name}</p>

            <Notes text={horse.notes} />

            <div className="grid grid-cols-2 items-center">
              {horse.images.map((horseImage) => (
                <Dialog key={horseImage.url}>
                  <DialogTrigger asChild>
                    <img
                      src={horseImage.url}
                      alt={horseImage.alt}
                      width={300}
                      className="mx-auto cursor-pointer hover:opacity-80 p-1"
                    />
                  </DialogTrigger>

                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{horse.name}</DialogTitle>
                      <div>
                        {horse.age} {horse.breed}
                      </div>
                    </DialogHeader>
                    <img src={horseImage.url} alt={horseImage.alt} />
                    <DialogDescription>{horseImage.alt}</DialogDescription>
                    <DialogFooter>
                      I spent most my time with {horse.name} in {horse.timeline}
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
