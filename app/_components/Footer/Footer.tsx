import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="w-full bg-white py-10 z-60">
            <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-10">
                <div className="flex items-center gap-4">
                    {/* <Image
                        src="/company-logo.png"
                        width={50}
                        height={50}
                        alt="Company Logo"
                    /> */}
                    <span className="font-semibold text-lg">SLVN</span>
                </div>
                <div className="flex items-center gap-4">
                    {/* <Image
                        src="/phone-icon.png"
                        width={20}
                        height={20}
                        alt="Phone Icon"
                    /> */}
                    <span>+31 + 12345678</span>
                </div>
                <div className="flex items-center gap-4">
                    {/* <Image
                        src="/email-icon.png"
                        width={20}
                        height={20}
                        alt="Email Icon"
                    /> */}
                    <span>contact@slvn.nl</span>
                </div>
                <div className="flex items-center gap-4">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <FaFacebook size={20} />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <FaTwitter size={20} />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={20} />
                    </a>
                </div>
                <p className="text-sm">
                    &copy; 2024 SLVN. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
