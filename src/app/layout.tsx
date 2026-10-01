import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { LanguageProvider } from "@/components/language-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { SoundProvider } from "@/components/sound-provider";
import { EasterEggReversiProvider } from "@/components/easter-egg-reversi";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Moch Rafi Adnan Setiadipura | Frontend Engineer",
  description:
    "Frontend Engineer with 4 years of experience specializing in React, Next.js, and end-to-end full-stack systems. Based in Bandung, Indonesia.",
  keywords: [
    "frontend engineer",
    "react developer",
    "next.js developer",
    "full stack engineer",
    "software engineer",
    "web developer",
    "typescript",
    "bandung",
    "indonesia",
    "moch rafi",
  ],
  authors: [{ name: "Moch Rafi Adnan Setiadipura" }],
  openGraph: {
    title: "Moch Rafi Adnan Setiadipura | Frontend Engineer",
    description:
      "Frontend Engineer with 4 years of experience specializing in React, Next.js, and end-to-end full-stack systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} font-sans antialiased min-h-screen bg-background text-foreground`}
      >
        <ThemeProvider>
          <LanguageProvider>
            <SoundProvider>
              <EasterEggReversiProvider>{children}</EasterEggReversiProvider>
            </SoundProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
