import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Cave Fightwear | Premium Dövüş Sporları Ekipmanları",
  description: "Profesyonel dövüş sporları ekipmanları ve giyim. MMA, BJJ, Muay Thai ve daha fazlası için premium kalite ürünler.",
  keywords: ["cave fightwear", "dövüş sporları", "mma", "bjj", "muay thai", "rashguard", "maske"],
  authors: [{ name: "Cave Fightwear" }],
  openGraph: {
    title: "Cave Fightwear | Premium Dövüş Sporları Ekipmanları",
    description: "Profesyonel dövüş sporları ekipmanları ve giyim.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark" suppressHydrationWarning>
      <body
        className={`${oswald.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1 pt-16 md:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
