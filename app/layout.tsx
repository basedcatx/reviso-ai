import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import localFont from "next/font/local";

const nunito = localFont({
  src: [
    {
      path: "/fonts/Nunito/Nunito-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "/fonts/Nunito/Nunito-ExtraLightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "/fonts/Nunito/Nunito-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "/fonts/Nunito/Nunito-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "/fonts/Nunito/Nunito-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/Nunito/Nunito-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "/fonts/Nunito/Nunito-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "/fonts/Nunito/Nunito-Bold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "/fonts/Nunito/Nunito-BoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "/fonts/Nunito/Nunito-ExtraBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "/fonts/Nunito/Nunito-ExtraBoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "/fonts/Nunito/Nunito-Black.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "/fonts/Nunito/Nunito-BlackItalic.ttf",
      weight: "800",
      style: "italic",
    },
  ],

  variable: "--font-nunito",
});

const montserrat = localFont({
  src: [
    {
      path: "/fonts/Montserrat/Montserrat-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "/fonts/Montserrat/Montserrat-ExtraLightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "/fonts/Montserrat/Montserrat-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "/fonts/Montserrat/Montserrat-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "/fonts/Montserrat/Montserrat-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/Montserrat/Montserrat-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "/fonts/Montserrat/Montserrat-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "/fonts/Montserrat/Montserrat-Bold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "/fonts/Montserrat/Montserrat-BoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "/fonts/Montserrat/Montserrat-ExtraBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "/fonts/Montserrat/Montserrat-ExtraBoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "/fonts/Montserrat/Montserrat-Black.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "/fonts/Montserrat/Montserrat-BlackItalic.ttf",
      weight: "800",
      style: "italic",
    },
  ],

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
