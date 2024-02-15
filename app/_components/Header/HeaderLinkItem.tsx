"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderLinkItemProps {
    text: string;
    url: string;
}

export default function HeaderLinkItem({ text, url }: HeaderLinkItemProps) {
    const pathname = usePathname();

    return (
        <Link className={`${url === pathname ? "underline" : ""}`} href={url}>
            {text}
        </Link>
    );
}
