import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


import { Navbar } from "@/components/Navbar"; 
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Faruk Özgü - Frontend Developer",
  description: "Faruk Özgü'nün kişisel portfolyo sitesi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        
        <Navbar /> 
        
        {children}

        <Footer />
        
      </body>
    </html>
  );
}