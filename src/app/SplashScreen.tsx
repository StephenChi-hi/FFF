"use client";

import Image from "next/image";

export default function SplashScreen() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      <Image
        src="/videos/intro.gif"
        alt="Splash Animation"
        width={400}
        height={400}
        className="object-contain rounded-2xl shadow-lg"
        priority
      />
    </div>
  );
}
