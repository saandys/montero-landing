import { Gasoek_One } from "next/font/google";

// Centralizamos la fuente
export const gasoekOne = Gasoek_One({
  subsets: ['latin'],
  weight: '400',
  display: 'swap', // recomendable para mejorar el LCP
});