import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";

interface PriceCardProps {
    title: string;
    subTitle: string;
    sellingPoints: string[];
    price: number;
    link: string;
}

export default function PriceCard({
    title,
    subTitle,
    sellingPoints,
    price,
    link,
}: PriceCardProps) {
    return (
        <div className="flex flex-col justify-between sm:w-[400px] w-4/5 max-w-4/5 h-[500px] rounded-3xl bg-gray-50 p-7 shadow-2xl">
            <h2 className="text-4xl font-extrabold text-center">{title}</h2>
            <h3 className="text-xl font-semibold text-center">{subTitle}</h3>
            <ul className="flex flex-col text-lg left-0 right-0 mx-auto gap-3">
                {sellingPoints.map((point) => (
                    <li key={point} className="italic">
                        <FaCheck className="inline mr-3" />
                        {point}
                    </li>
                ))}
            </ul>
            <p className="text-3xl font-bold text-center">€{price}</p>
            <Link href={link}>
                <div className="flex items-center justify-center gap-3">
                    <h4 className="italic font-bold">Vraag info op</h4>
                    <TbExternalLink size={20} />
                </div>
            </Link>
        </div>
    );
}
