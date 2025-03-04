import type { Metadata } from "next";
import { Oswald, Inconsolata } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "DOGEGOV Memecoin | Department of Government Efficiency Memecoin Community",
  description:
    "DOGE GOV is a community-run memecoin based on the DOGE. We use the power and virality of memes to help spread the good word about DOGE's latest work.",
  // icons: "https://doge-memes.b-cdn.net/doge-thumb-1200x620.jpg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${inconsolata.variable} `}>
        <div className="bg-black text-white [--navbar-height:11vh]">
          <Navbar />
          <div className="pt-[var(--navbar-height)]">{children}</div>
        </div>
      </body>
    </html>
  );
}
