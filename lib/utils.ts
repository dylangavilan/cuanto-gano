import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const shortName = (nombre: string) => {
  if (nombre.split(' ').length > 1) {
      return nombre
          .split(' ')
          .map((word) => word.charAt(0))
          .join('') 
          .toUpperCase();
  }
  return nombre
}
export const formatNumber = (num: number) => {
  return num.toLocaleString('es-AR', {style: 'currency', currency: 'ARS'})
}