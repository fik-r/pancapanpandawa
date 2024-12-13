import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// export const BASE_URL = "http://localhost:3000/api"
// export const BASE_URL = "http://localhost:40002/api"
export const BASE_URL = "https://pancapandawasukses.id/api"

export const SECRET_KEY = 'yy7hD1QFhkZh46V';