import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/common/layout/Navbar";
import Footer from "@/common/layout/Footer";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
