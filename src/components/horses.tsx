'use client';

import { HORSE_DATA } from '@/data';
import { HorseSection } from './horseSection';
import { CircleChevronRightIcon } from 'lucide-react';

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
            <HorseSection index={index} horse={horse} />;
          </section>
        );
      })}
    </div>
  );
}
