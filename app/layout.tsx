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
  title: "TTM - Fleet",
  description:
    "TTM is a U.S.-based transport technology company focused on fleet management, ELD, telematics, and compliance tools. Our platform provides real-time visibility, automated reporting, and safe, efficient, data-driven operations through connected hardware, mobile apps, and analytics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-50 text-slate-900 antialiased">{children}</body>
    </html>
  );
}
