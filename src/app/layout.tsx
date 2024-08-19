import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";




const quicksand = Quicksand({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "my restaurant",
  description: "Best reastaurant in the whole world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <Nav/>
        <main className="min-h-screen">
        {children}
        </main>
        <Footer/>
        </body>
      
    </html>
  );
}
