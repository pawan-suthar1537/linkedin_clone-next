import { type ClassValue, clsx } from "clsx";
import { resolve } from "path";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const readfileasdataUrl = (file: File | Blob): Promise<string> => {
  return new Promise((resolve) => {
    const filereader = new FileReader();
    filereader.onload = () => {
      if (typeof filereader.result === "string")
        resolve(filereader.result);
    };
    filereader.readAsDataURL(file);
  });
};
