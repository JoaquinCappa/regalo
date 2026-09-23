import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { AudioPlayer } from "@/components/AudioPlayer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "Feliz Cumpleaños, Mi Amor",
  description: "3 Años Juntos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans bg-[#0a0a0a] text-[#f5f5f0] antialiased selection:bg-white/20 selection:text-white overflow-x-hidden`}
      >
        <AudioPlayer />
        {children}
      </body>
    </html>
  );
}
