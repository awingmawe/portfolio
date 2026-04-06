import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Rafi Setiadipura | High-End Frontend Engineering",
  description: "Portfolio of Moch Rafi Adnan Setiadipura, specializing in React, Next.js, and crafting unforgettably elegant web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${manrope.variable} font-sans antialiased bg-background text-foreground selection:bg-accent selection:text-background`}>
        {children}
      </body>
    </html>
  );
}
