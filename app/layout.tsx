import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Plus_Jakarta_Sans } from 'next/font/google'

export const metadata: Metadata = {
  title: "Cuanto gano?",
  description: "Generating",
};
const plus = Plus_Jakarta_Sans({
  weight: '400',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plus.className} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
