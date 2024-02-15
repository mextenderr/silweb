"use client";
import Image from "next/image";
import HeaderLinkItem from "./HeaderLinkItem";
import Logo from "../Logo";

export default function DesktopHeader() {
    return (
        <div className="flex justify-between items-center">
            <Logo />

            <div className="flex gap-14">
                <HeaderLinkItem text="Home" url="/" />
                <HeaderLinkItem text="Over" url="/over" />
                <HeaderLinkItem text="Tarieven" url="/tarieven" />
            </div>
        </div>
    );
}
