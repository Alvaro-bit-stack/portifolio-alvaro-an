import type { Metadata } from "next";
import {
  Pixelify_Sans,
  Press_Start_2P,
  Zen_Maru_Gothic,
  VT323,
} from "next/font/google";
import "./globals.css";

const body = Pixelify_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const display = VT323({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
});

const pixel = Press_Start_2P({
  variable: "--font-pixel",
  subsets: ["latin"],
  weight: ["400"],
});

const jp = Zen_Maru_Gothic({
  variable: "--font-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Alvaro Izquierdo — Mugen Notebook",
  description:
    "Personal portfolio of Alvaro Izquierdo. Pixel-art anime aesthetic, the Mugen Train, and a stack of favorite shows.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${body.variable} ${display.variable} ${pixel.variable} ${jp.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
