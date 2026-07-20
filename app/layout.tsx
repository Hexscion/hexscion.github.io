import type { Metadata } from "next";
import { Outfit, Amaranth, Catamaran } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";
import { WithContext, WebSite } from "schema-dts";

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

const jsonLdWeb: WithContext<WebSite> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Aldrick Rasquinha's Portfolio",
    alternateName: "Hexscion",
    url: "https://hexscion.github.io",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://hexscion.github.io"),
  title: "Aldrick Rasquinha's Portfolio",
  description: "Frontend Developer & UI/UX Designer",
  alternates: {
    canonical: "./",
  },
  generator: "Next.js",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Aldrick Rasquinha's Portfolio",
    description: "Frontend Developer & UI/UX Designer",
    url: "https://hexscion.github.io",
    siteName: "Aldrick Rasquinha's Portfolio",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Aldrick Rasquinha's Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {  
    card: "summary_large_image",
    title: "Aldrick Rasquinha's Portfolio",
    description: "Frontend Developer & UI/UX Designer",
    images: ["/twitter-image.png"],
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
      className={cn(
        "h-full",
        "antialiased",
        outfit.variable,
        amaranth.variable,
        catamaran.variable,
      )}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col bg-light text-dark relative overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
              __html: JSON.stringify(jsonLdWeb).replace(/</g, "\\u003c"),
          }}
        />
        <Header />
        <main className="grow w-full relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
