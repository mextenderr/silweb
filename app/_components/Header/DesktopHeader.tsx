"use client";
import HeaderLinkItem from "./HeaderLinkItem";
import Logo from "../Logo";

export default function DesktopHeader() {
    return (
        <div className="flex justify-between items-center h-full">
            <Logo />

            <div className="flex gap-14 text-2xl">
                <HeaderLinkItem text="Home" url="/" />
                <HeaderLinkItem text="Over" url="/over" />
                <HeaderLinkItem text="Tarieven" url="/tarieven" />
                <HeaderLinkItem text="Contact" url="/contact" />
            </div>
        </div>
    );
}
