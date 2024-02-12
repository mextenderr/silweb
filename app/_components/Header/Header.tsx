"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Header() {
    const [showBackground, setShowBackground] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setShowBackground(scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`fixed z-20 w-full h-[100px] px-40 bg-white flex justify-between items-center transition-all duration-700 ${
                showBackground ? "bg-opacity-95" : "bg-opacity-0"
            }`}
        >
            <Image
                src={"/logo-placeholder-image.png"}
                alt="logo"
                width={100}
                height={100}
            />

            <div className="flex gap-14">
                <HeaderLinkItem scrollY={0}>Home</HeaderLinkItem>
                <HeaderLinkItem scrollY={300}>Over</HeaderLinkItem>
                <HeaderLinkItem scrollY={500}>Contact</HeaderLinkItem>
            </div>
        </div>
    );
}

function HeaderLinkItem({
    children,
    scrollY,
}: Readonly<{ children: React.ReactNode; scrollY: number }>) {
    function onClickHandler() {
        window.scrollTo({ top: scrollY, behavior: "smooth" });
    }

    return (
        <div
            className="text-2xl font-bold underline hover:cursor-pointer"
            onClick={onClickHandler}
        >
            {children}
        </div>
    );
}
