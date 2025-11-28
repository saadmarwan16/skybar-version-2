import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import Cart from "@/components/Cart";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const openSans = Open_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Skybar Dış Ticaret | International Trade Solutions",
  description:
    "Connecting Turkish Manufacturers to the Global Market - Seamless and reliable international trade solutions across East Africa.",
  keywords:
    "International trade Turkey Africa, Turkish import export services, cargo shipping, agricultural machinery, construction materials",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${openSans.variable} antialiased`}
      >
        <div className="min-h-screen">
          <Navigation />
          {children}
          {/* <Footer /> */}
          <Cart />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
