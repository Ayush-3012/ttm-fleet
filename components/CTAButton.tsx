"use client";
import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function CTAButton({
  href,
  children,
  variant = "primary",
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition";
  const styles =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-600/20"
      : "bg-white text-slate-900 ring-1 ring-slate-300 hover:bg-slate-50";

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}
