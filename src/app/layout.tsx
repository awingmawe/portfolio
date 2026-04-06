import type { Metadata } from "next";
import { Syne, Space_Mono } from "next/font/google";
import { LanguageProvider } from "@/components/language-provider";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Moch Rafi Adnan Setiadipura | Frontend Developer",
  description:
    "Software Engineer with 3+ years of experience specializing in frontend development with React and Next.js. Based in Bandung, Indonesia.",
  keywords: [
    "frontend developer",
    "react developer",
    "next.js developer",
    "software engineer",
    "web developer",
    "bandung",
    "indonesia",
    "moch rafi",
  ],
  authors: [{ name: "Moch Rafi Adnan Setiadipura" }],
  openGraph: {
    title: "Moch Rafi Adnan Setiadipura | Frontend Developer",
    description:
      "Software Engineer with 3+ years of experience specializing in frontend development with React and Next.js.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${spaceMono.variable} font-sans antialiased bg-background text-foreground`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
