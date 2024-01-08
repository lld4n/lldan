import "./globals.scss";
import type { Metadata } from "next";
import React from "react";
import Head from "next/head";

export const metadata: Metadata = {
  title: "lldan",
  description: "Frontend developer in Kazan",
  icons: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
