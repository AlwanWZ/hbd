import type { Metadata } from "next";
import { Fredoka, Agbalumo } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
});

const agbalumo = Agbalumo({
  variable: "--font-agbalumo",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Happy Birthday Ichin",
  description: "A special digital storybook for Ichin",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${fredoka.variable} ${agbalumo.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
