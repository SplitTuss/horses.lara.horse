import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** this combines any number of className strings or style objects into one className string */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
