import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Car Dealership App",
  description: "Created by keyzeroc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          " bg-gradient-to-r from-amber-50 to-lime-50"
        }
      >
        <Navbar />
        <main className="p-8 pt-16 min-h-full h-full flex flex-col">{children}</main>
      </body>
    </html>
  );
}
