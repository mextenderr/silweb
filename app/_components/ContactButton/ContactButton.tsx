import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function ContactButton() {
    return (
        <Link
            href={"/contact"}
            className="flex justify-center left-0 right-0 mx-auto"
        >
            <button
                type="button"
                className="border-2 bg-gray-100 py-2 sm:py-3 px-4 sm:px-8 rounded-full"
            >
                <div className="flex justify-center gap-10 items-center sm:text-xl">
                    Contact <IoIosArrowRoundForward size={30} />
                </div>
            </button>
        </Link>
    );
}
