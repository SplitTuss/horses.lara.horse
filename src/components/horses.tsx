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
    <div className="relative max-w-8xl mx-auto">
      <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 w-1 bg-primary/50 h-full" />
      {HORSE_DATA.map((horse, index) => {
        return (
          <section
            key={index}
            className={`relative flex left-1.5 sm:left-0 ${index % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'} pt-10 mb-12`}
          >
            <div className="flex absolute items-center sm:left-1/2 sm:-translate-x-1/2">
              <CircleChevronRightIcon
                className={`text-primary ${index % 2 === 0 ? 'sm:transition-transform sm:rotate-180' : 'sm:justify-end '}`}
              />
              <div
                className={`sm:absolute ml-2 sm:ml-0 whitespace-nowrap text-primary text-md sm:text-xl ${index % 2 !== 0 ? 'sm:left-15' : 'sm:right-15'}`}
              >
                {horse.timeline}
              </div>
            </div>

            <div className="w-full sm:w-1/2 flex flex-col items-center mt-6 p-2">
              <p className="font-bold text-xl sm:text-2xl text-primary">{horse.name}</p>

              <Notes text={horse.notes} />

              <div className="grid grid-cols-2 items-center">
                {horse.images.map((horseImage) => (
                  <Dialog key={horseImage.url}>
                    <DialogTrigger asChild>
                      <img
                        src={horseImage.url}
                        alt={horseImage.alt}
                        className="w-2xs sm:w-6xl ml-2 sm:ml-0 cursor-pointer hover:opacity-80 p-1"
                      />
                    </DialogTrigger>

                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle className="flex justify-center text-xl">
                          {horse.name}
                        </DialogTitle>
                        <div className="flex justify-center">
                          {horse.age}, {horse.breed}
                        </div>
                      </DialogHeader>
                      <img src={horseImage.url} alt={horseImage.alt} />
                      <DialogDescription className="flex text-center justify-center">
                        {horseImage.alt}
                      </DialogDescription>
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
