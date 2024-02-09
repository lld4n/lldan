import "./globals.scss";
import type { Metadata } from "next";
import React from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["100", "400", "700"],
  subsets: ["latin", "cyrillic"],
});
export const metadata: Metadata = {
  title: "lldan",
  description: "Frontend developer in Kazan",
  metadataBase: new URL("https://lldan.ru"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
