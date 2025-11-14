import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/common/layout/Navbar";
import Footer from "@/common/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fechub.org"), // replace with real domain

  title: {
    default:
      "Fabrication & Entrepreneurship Center (FEC) | Powered by Megaplux Group",
    template: "%s | Fabrication & Entrepreneurship Center (FEC)",
  },

  description:
    "The Fabrication and Entrepreneurship Center (FEC) is a hands-on training and innovation hub that blends advanced fabrication skills with real-world business education. Backed by the Megaplux Group, we equip makers, creators, and aspiring entrepreneurs for industry-ready success.",

  keywords: [
    "Fabrication Training Nigeria",
    "Entrepreneurship Center",
    "Megaplux Group",
    "Fabgarage Ecosystem",
    "Manufacturing Skills",
    "Technical Training Lagos",
    "Business Development Nigeria",
    "FEC Nigeria",
    "Creative Industry Training",
    "Innovation Hub Africa",
  ],

  openGraph: {
    type: "website",
    url: "https://www.fechub.org",
    title:
      "Fabrication & Entrepreneurship Center (FEC) | Innovation Meets Industry",
    description:
      "A world-class center offering fabrication, creative manufacturing, and entrepreneurial training — powered by the Megaplux Group.",
    siteName: "Fabrication & Entrepreneurship Center (FEC)",
    images: [
      {
        url: "/logo.svg", // replace with your image
        width: 1200,
        height: 630,
        alt: "Fabrication and Entrepreneurship Center Banner",
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Fabrication & Entrepreneurship Center (FEC)",
    description:
      "Where creativity, fabrication, and entrepreneurship come together. Powered by the Megaplux Group.",
    images: ["/logo.svg"],
    creator: "@fec_official", // optional
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },

  alternates: {
    canonical: "https://www.fechub.org",
    languages: {
      "en-US": "https://www.fechub.org",
      "en-NG": "https://www.fechub.org",
    },
  },

  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE", // optional
    yandex: "YOUR_YANDEX_CODE",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  other: {
    "theme-color": "#ffffff",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
