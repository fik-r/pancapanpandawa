import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// export const BASE_URL = "http://localhost:3000"
export const BASE_URL = "https://pancapandawasukses.id"