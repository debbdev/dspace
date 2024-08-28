import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { ThemeProvider } from "@/context/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

// const spaceGrotesk = Space_Grotesk({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700"],
//   variable: "--font-spaceGrotesk",
// });

export const metadata: Metadata = {
  title: "XSpace",
  description: "XSpace-Xemplified Learning",
  icons: {
    icon: "assets/icons/xspace.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <html lang="en">
    //   <body
    //     className={`${inter.variable}
    //     ${spaceGrotesk.variable}`}
    //   >
    //     <ThemeProvider>{children}</ThemeProvider>
    //   </body>
    // </html>
    <html lang="en">
      <body
        className={`${inter.variable} 
        `}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
