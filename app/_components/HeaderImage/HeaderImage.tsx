import Image from "next/image";

export default function HeaderImage() {
    return (
        <div className="relative w-full h-[700px]">
            <Image
                src={"/background-image-placeholder.jpg"}
                alt="logo"
                fill
                objectFit="cover"
            />
        </div>
    );
}
