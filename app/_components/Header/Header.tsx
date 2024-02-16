"use client";
import { useDeviceType } from "@/app/_hooks/useDeviceType";
import DesktopHeader from "./DesktopHeader";
import PhoneHeader from "./PhoneHeader";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    const { isDesktop } = useDeviceType();

    const [isScrolled, setIsScrolled] = useState(false);
    const [openSidebar, setOpenSidebar] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsScrolled(scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    function sidebarClickHandler() {
        setOpenSidebar(!openSidebar);
    }

    useEffect(() => {
        setOpenSidebar(false);
    }, [pathname]);

    return (
        <div
            className={`fixed z-20 w-full sm:h-[100px] h-[80px] sm:px-40 bg-white transition-all duration-700 overflow-y-hidden ${
                isScrolled || openSidebar ? "bg-opacity-95" : "bg-opacity-0"
            }`}
        >
            {isDesktop ? (
                <DesktopHeader />
            ) : (
                <PhoneHeader
                    openSidebar={openSidebar}
                    sidebarClickHandler={sidebarClickHandler}
                />
            )}
        </div>
    );
}
