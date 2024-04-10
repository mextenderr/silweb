import type { Metadata } from "next";
import { Nanum_Myeongjo } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import { Analytics } from "@vercel/analytics/react";
import Footer from "./_components/Footer";
import Link from "next/link";

const nanumMyeongjo = Nanum_Myeongjo({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
    title: "SLVN Events",
    description: "Website for Silvano",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <Link href="/images/slvn-logo.png" rel="icon" />
            </head>
            <body className={`${nanumMyeongjo.className} overflow-y-scroll`}>
                <Header />
                {children}
                <Footer />
                <Analytics />
            </body>
        </html>
    );
}
