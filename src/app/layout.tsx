import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const play = Playfair_Display({
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-play",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Created by @harshvarun",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${play.className} antialiased bg-[#E2DFD2]`}
      >
        {children}
      </body>
    </html>
  );
}
