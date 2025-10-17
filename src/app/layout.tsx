import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zapatería Montero | Reparación y restauración artesanal de calzado en Catral",
  description:
    "En Zapatería Montero cuidamos cada paso que das. Más de 20 años de experiencia reparando y restaurando zapatos, bolsos y prendas con técnicas artesanales en Catral (Alicante).",
  keywords: ["zapatería Catral", "reparación de calzado", "restauración de zapatos", "arreglo de bolsos", "taller artesanal de cuero", "zapatos a medida", "arreglos de costura"],
  openGraph: {
    title: "Zapatería Montero | Tu zapatería de toda la vida en Catral",
    description: "Dos generaciones dedicadas al arte de la reparación de calzado. Restauramos tus zapatos y artículos de piel con pasión y calidad artesanal.",
    url: "https://zapateriamontero.es",
    siteName: "Zapatería Montero",
    images: [
      {
        url: "https://zapateriamontero.es/home_image.png",
        width: 1200,
        height: 630,
        alt: "Zapatería Montero Catral",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical: "https://zapateriamontero.es",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth ">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
