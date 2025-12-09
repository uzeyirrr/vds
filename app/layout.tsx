import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/ui/header-2";
import { Footer7 } from "@/components/ui/footer-7";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VDS Dental - Modern Diş Hekimliği",
  description: "Uzman diş hekimlerimiz ve son teknoloji ekipmanlarımızla sağlıklı gülüşlerinize kavuşun.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-white font-sans">
          <Header />
          {children}
          <Footer7 />
        </div>
      </body>
    </html>
  );
}
