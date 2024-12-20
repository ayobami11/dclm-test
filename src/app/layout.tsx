import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-quicksand"
 });

export const metadata: Metadata = {
  title: "DCLM Testimonies",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={quicksand.variable}>
      <body className="font-primary">{children}</body>
    </html>
  );
}
