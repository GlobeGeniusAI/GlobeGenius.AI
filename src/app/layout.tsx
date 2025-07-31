import type { Metadata } from "next";
import { Montserrat, Lato } from "next/font/google";
import "./globals.css";
<<<<<<< HEAD
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
const geistSans = Geist({
  variable: "--font-geist-sans",
=======
import { Header } from "../components/Header";
import { Footer } from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
>>>>>>> main
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Globe Genius",
  description:
    "Plan your perfect trip with Globe Genius. Discover destinations, get personalized AI itineraries, check weather and budget, save, share, and download your travel plans.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <body className="min-h-screen flex flex-col font-sans">
        <NavBar />
        <main className="flex-grow"> {children}</main>
=======
      <body className={`${montserrat.variable} ${lato.variable} antialiased`}>
        <Header />
        {children}
>>>>>>> main
        <Footer />
      </body>
    </html>
  );
}
