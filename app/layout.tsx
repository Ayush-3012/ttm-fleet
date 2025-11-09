import type { Metadata } from "next";
import "./globals.css";

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
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
