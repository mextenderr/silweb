import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="w-full bg-white pt-10 pb-5 z-60">
            <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-5">
                <div className="flex items-center gap-4">
                    <span className="font-semibold text-2xl">SLVN Events</span>
                </div>
                <div className="flex items-center gap-4 text-lg sm:text-xl">
                    <a href="tel:+31629052041">+31 6 29 05 20 41</a>
                </div>
                <div className="flex items-center gap-4 text-lg sm:text-xl">
                    <a href="mailto:info@slvnevents.nl">info@slvnevents.nl</a>
                </div>
                <div className="flex gap-12">
                    <a
                        href="https://www.facebook.com/people/SLVN-Events/61565671043068"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaFacebook size={35} />
                    </a>
                    <a href="https://wa.me/+31629052041">
                        <FaWhatsapp size={35} />
                    </a>
                    <a
                        href="https://www.instagram.com/slvnevents"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaInstagram size={35} />
                    </a>
                </div>
                <p className="text-xs sm:text-sm">
                    &copy; 2024 SLVN Events. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
