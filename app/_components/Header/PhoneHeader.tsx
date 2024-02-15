import Logo from "../Logo";
import { IoClose } from "react-icons/io5";
import HeaderLinkItem from "./HeaderLinkItem";
import { BiMenuAltLeft } from "react-icons/bi";

interface PhoneHeaderProps {
    openSidebar: boolean;
    sidebarClickHandler: () => void;
}

export default function PhoneHeader({
    openSidebar,
    sidebarClickHandler,
}: PhoneHeaderProps) {
    return (
        <>
            <div className="grid grid-cols-3 w-full items-center justify-between">
                <div
                    className="ml-3 flex items-center"
                    onClick={sidebarClickHandler}
                >
                    <IoClose
                        className={`absolute hover:cursor-pointer transition-all duration-300 ${
                            openSidebar ? "mt-0 rotate-0" : "-mt-40 rotate-45"
                        }`}
                        size={50}
                        onClick={sidebarClickHandler}
                    />
                    <BiMenuAltLeft
                        className={`absolute hover:cursor-pointer transition-all duration-300 ${
                            openSidebar ? "-ml-16 rotate-45" : "ml-0 rotate-0"
                        }`}
                        size={50}
                        onClick={sidebarClickHandler}
                    />
                </div>

                <div className="left-0 right-0 mx-auto">
                    <Logo />
                </div>
            </div>
            <div
                className={`fixed top-[100px] w-full h-full bg-white z-10 transition-all duration-700 ${
                    openSidebar
                        ? "bg-opacity-95 overflow-y-hidden"
                        : "opacity-0 pointer-events-none"
                }`}
            >
                <div className="flex flex-col w-full h-full mt-20 gap-10 items-center text-4xl">
                    <HeaderLinkItem text="Home" url="/" />
                    <hr className="bg-black h-2 w-2 rounded-full"></hr>

                    <HeaderLinkItem text="Over" url="/over" />
                    <hr className="bg-black h-2 w-2 rounded-full"></hr>

                    <HeaderLinkItem text="Tarieven" url="/tarieven" />
                    <hr className="bg-black h-2 w-2 rounded-full"></hr>

                    <HeaderLinkItem text="Contact" url="/contact" />
                </div>
            </div>
            <style jsx global>{`
                body {
                    overflow: ${openSidebar ? "hidden" : "auto"};
                }
            `}</style>
        </>
    );
}
