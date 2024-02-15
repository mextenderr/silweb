import Image from "next/image";

export default function Logo() {
    return (
        <Image
            src={"/logo-placeholder-image.png"}
            alt="logo"
            width={100}
            height={100}
        />
    );
}
