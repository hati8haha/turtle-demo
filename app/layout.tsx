import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";

const notoSans = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  subsets: ["latin"],
});

const satoshi = localFont({
  src: './fonts/Satoshi-Variable.woff2',
  variable: '--font-satoshi'
})


export const metadata: Metadata = {
  title: "Turtle Spot Taiwan",
  description: "Turtle Spot Taiwan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body
        className={`${notoSans.variable} ${satoshi.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
