import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './shadcn/Dialog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './shadcn/Carousel';
import { type CarouselApi } from './shadcn/Carousel';
import { Notes } from './notes';

interface HorseProps {
  horse: {
    name: string;
    age: string;
    breed: string;
    notes: string;
    images: Array<{ url: string; alt: string }>;
  };
}

export function HorseSection({ horse }: HorseProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [open, setOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    if (!open || !api) return;
    api.scrollTo(startIndex, true);
  }, [open, api, startIndex]);

  return (
    <>
      <div className="w-full sm:w-1/2 flex flex-col items-center mt-6 p-2">
        <p className="font-bold text-xl sm:text-2xl text-primary">{horse.name}</p>

        <Notes text={horse.notes} />

        <Dialog open={open} onOpenChange={setOpen}>
          <div className="grid grid-cols-2 items-center">
            {horse.images.map((horseImage, index) => (
              <DialogTrigger asChild key={horseImage.url}>
                <img
                  src={horseImage.url}
                  alt={horseImage.alt}
                  className="w-2xs sm:w-6xl ml-2 sm:ml-0 cursor-pointer hover:opacity-80 p-1"
                  onClick={() => setStartIndex(index)}
                />
              </DialogTrigger>
            ))}
          </div>

          <DialogContent>
            <DialogHeader>
              <DialogTitle className="flex justify-center text-xl">{horse.name}</DialogTitle>
              <div className="flex justify-center">
                {horse.age}, {horse.breed}
              </div>
            </DialogHeader>

            <Carousel setApi={setApi}>
              <CarouselContent>
                {horse.images.map((horseImage) => (
                  <CarouselItem
                    key={horseImage.url}
                    className="flex flex-col items-center justify-center"
                  >
                    <img src={horseImage.url} alt={horseImage.alt} />
                    <DialogDescription className="mt-2">{horseImage.alt}</DialogDescription>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
