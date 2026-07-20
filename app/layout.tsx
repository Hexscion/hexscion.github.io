import type { Metadata } from "next";
import { Outfit, Amaranth, Catamaran } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { cn } from "@/lib/utils";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "700"],
});

const amaranth = Amaranth({
  subsets: ["latin"],
  variable: "--font-amaranth",
  weight: ["400", "700"],
});

const catamaran = Catamaran({
  subsets: ["latin"],
  variable: "--font-catamaran",
  weight: ["400", "800"],
});

export const metadata: Metadata = {
  title: "Aldrick Rasquinha | Portfolio",
  description: "Frontend Developer and Tech Enthusiast Portfolio",
  icons: {
    icon: "/Icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", outfit.variable, amaranth.variable, catamaran.variable)}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col bg-light text-dark relative overflow-x-hidden">
        <Header />
        <main className="grow w-full relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
