"use client";
import { useDeviceType } from "@/app/_hooks/useDeviceType";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    const { isDesktop } = useDeviceType();

    return (
        <Link href={"/"}>
            <Image
                src={"/images/slvn-logo.png"}
                alt="logo"
                width={isDesktop ? 200 : 120}
                height={isDesktop ? 200 : 120}
            />
        </Link>
    );
}
