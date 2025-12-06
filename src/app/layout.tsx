import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { LanguageProvider } from "@/components/language-provider";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
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
      <body className={`${montserrat.variable} font-sans antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
