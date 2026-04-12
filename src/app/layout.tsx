import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Soul Bliss — Coastal Holiday Home in Shoal Bay, NSW",
    template: "%s | Soul Bliss",
  },
  description:
    "Escape to a stunning coastal holiday home just steps from Shoal Bay beach. Soul Bliss is a 4-bedroom double-storey retreat in Port Stephens, NSW — where the ocean meets the mountains.",
  keywords: [
    "Shoal Bay holiday home",
    "Port Stephens accommodation",
    "coastal retreat NSW",
    "Shoal Bay beach house",
    "Soul Bliss",
    "21 Victor Parade",
  ],
  openGraph: {
    title: "Soul Bliss — Coastal Holiday Home in Shoal Bay, NSW",
    description:
      "A stunning coastal retreat just steps from Shoal Bay beach. Dolphins at dawn, sunsets over the headland.",
    type: "website",
    locale: "en_AU",
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
      className={`${playfair.variable} ${lato.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
