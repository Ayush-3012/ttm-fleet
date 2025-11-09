import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TTM - Fleet",
  description:
    "TTM is a U.S.-based transport technology company focused on fleet management, ELD, telematics, and compliance tools. Our platform provides real-time visibility, automated reporting, and safe, efficient, data-driven operations through connected hardware, mobile apps, and analytics.",
  keywords: [
    "fleet management",
    "ELD",
    "fleet tracking",
    "TTM",
    "transport telematics",
  ],
  openGraph: {
    title: "TTM Fleet — Fleet Management Platform",
    description:
      "Track, manage, and optimize fleets with TTM’s connected platform.",
    url: "https://ttm-fleet.vercel.app/",
    siteName: "TTM Fleet",
    type: "website",
  },
  metadataBase: new URL("https://ttm-fleet.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
