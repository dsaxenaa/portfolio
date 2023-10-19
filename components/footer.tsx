"use client"

import React from "react";

export default function Footer() {
  
  return (
    <div className="bg-gray-500 h-[8rem] mb-4 p-5 dark:bg-black">
      <footer className="mb-10 px-4 text-center text-white">
      <small className="mb-2 block text-md">
        &copy; 2023 Divyansh. All rights reserved.
      </small>
      <p className="text-md">
        <span className="font-semibold">About this website:</span> built using
        React & Next.js, TypeScript, Tailwind,
        Framer Motion, React Email & Resend and Vercel hosting.
      </p>
    </footer>
    </div>
  );
}
