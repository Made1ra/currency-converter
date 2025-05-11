import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { BASE_URL } from "@/lib/constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function fetcher(input: string, init?: RequestInit) {
  try {
    const response = await fetch(`${BASE_URL}/${input}`, init);
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json();
  } catch (error) {
    console.error(error);
  }
}
