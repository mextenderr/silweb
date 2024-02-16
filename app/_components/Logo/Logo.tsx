"use client";
import { useDeviceType } from "@/app/_hooks/useDeviceType";
import Image from "next/image";

export default function Logo() {
    const { isDesktop } = useDeviceType();

    return (
        <Image
            src={"/logo-placeholder-image.png"}
            alt="logo"
            width={isDesktop ? 100 : 80}
            height={isDesktop ? 100 : 80}
        />
    );
}
