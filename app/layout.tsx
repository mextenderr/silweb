import type { Metadata } from "next";
import { Nanum_Myeongjo } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import { Analytics } from "@vercel/analytics/react";
import Footer from "./_components/Footer";
import { Lora } from "next/font/google";

const lora = Lora({ subsets: ["latin"] });
const nanumMyeongjo = Nanum_Myeongjo({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
    title: "SLVN Events",
    description: "SLVN Events met Wensbol naar keuze",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="nl">
            <head>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
            </head>
            <body className={`${lora.className} overflow-y-scroll`}>
                <Header />
                {children}
                <Footer />
                <Analytics />
            </body>
        </html>
    );
}
