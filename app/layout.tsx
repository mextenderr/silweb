import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Nanum_Myeongjo } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import HeaderQuote from "./_components/HeaderQuote";
import ContactForm from "./_components/ContactForm";
import HeaderImage from "./_components/HeaderImage";
import ProductInfo from "./_components/ProductInfo";
import Footer from "./_components/Footer";

const nanumMyeongjo = Nanum_Myeongjo({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
    title: "Silweb",
    description: "Website for Silvano",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={nanumMyeongjo.className}>
                <Header />
                <div className="flex flex-col gap-24 bg-orange-50 items-center">
                    <HeaderImage />
                    <HeaderQuote />
                    <ProductInfo />
                    <ContactForm />
                    <Footer />
                </div>
            </body>
        </html>
    );
}
