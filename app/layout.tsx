import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/ui/header-2";
import { Footer7 } from "@/components/ui/footer-7";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
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
        className={`${inter.variable} antialiased font-sans`}
      >
        <div className="min-h-screen bg-white">
          <Header />
          {children}
          <Footer7 />
        </div>
      </body>
    </html>
  );
}
