import type { Metadata } from "next";
import { Quicksand, DM_Serif_Display, Zen_Maru_Gothic } from "next/font/google";
import "./globals.css";

const body = Quicksand({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const display = DM_Serif_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
});

const jp = Zen_Maru_Gothic({
  variable: "--font-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Alvaro Izquierdo — Sky Notebook",
  description:
    "Personal portfolio of Alvaro Izquierdo. Photos, anime, projects, and a soft Ghibli sky.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${body.variable} ${display.variable} ${jp.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
