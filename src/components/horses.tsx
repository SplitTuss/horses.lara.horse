'use client';

import { CircleChevronRightIcon } from 'lucide-react';
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
      <div className="absolute left-4  sm:left-1/2 sm:-translate-x-1/2 w-1 bg-primary h-full" />
      {HORSE_DATA.map((horse, index) => {
        return (
          <section
            key={index}
            className={`relative flex left-2 ${index % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'} mb-12`}
          >
            <div className="md:flex absolute flex items-center sm:left-1/2 sm:-translate-x-1/2">
              <CircleChevronRightIcon
                className={` bg-purple-500 rounded-full ${index % 2 === 0 ? 'sm:transition-transform sm:rotate-180' : 'sm:justify-end '}`}
              />
              <div
                className={`sm:absolute ml-2 sm:ml-0 whitespace-nowrap font-semibold text-primary text-2xl ${index % 2 !== 0 ? 'sm:left-15' : 'sm:right-15'}`}
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
        );
      })}
    </div>
  );
}
