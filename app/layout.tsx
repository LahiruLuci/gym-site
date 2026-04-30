import type { Metadata } from "next";
import { Bebas_Neue, Inter, Oswald } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fitness Gym - Unleash Your Power",
  description: "High-performance fitness and strength training.",
};

import { Suspense } from "react";
import PageLoader from "./components/ui/PageLoader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${inter.variable} ${oswald.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-body">
        <Suspense fallback={null}>
          <PageLoader />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
