import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { Montserrat, Nunito } from "@next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "RevisoAI - A Personalized Studying Platform",
  description: "AI-Powered Personalized Learning for Educational success",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${nunito.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
