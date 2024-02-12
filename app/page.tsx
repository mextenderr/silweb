import Image from "next/image";
import HeaderQuote from "./_components/HeaderQuote";
import ContactForm from "./_components/ContactForm";

export default function Home() {
    return null;

    return (
        <div className="flex flex-col gap-20 bg-orange-50">
            <div className="relative w-full h-[700px]">
                <Image
                    src={"/background-image-placeholder.jpg"}
                    alt="logo"
                    fill
                    objectFit="cover"
                />
            </div>

            <div className="h-[200px] bg-gray">tesssst</div>
            <div className="h-[200px] bg-gray">tesssst</div>
            <div className="h-[200px] bg-gray">tesssst</div>
            <div className="h-[200px] bg-gray">tesssst</div>
            <div className="h-[200px] bg-gray">tesssst</div>
        </div>
    );
}
