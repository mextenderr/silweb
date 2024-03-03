"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsForward } from "react-icons/bs";
import { IoIosArrowRoundForward } from "react-icons/io";
import { PiHandTapLight } from "react-icons/pi";
import { useInView } from "react-intersection-observer";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
    const [ref1, inView1] = useInView();
    const [ref2, inView2] = useInView();
    const [ref3, inView3] = useInView();

    const [showVideo, setShowVideo] = useState<boolean>(false);

    function onVideoClick() {
        setShowVideo(true);
    }

    return (
        <div className="relative h-full">
            <Image
                className="blur"
                src="/images/Tarievenpagina.jpg"
                alt="Tarievenpagina"
                objectFit="cover"
                fill
            />
            <div className="flex flex-col gap-20 sm:gap-36 sm:pt-[100px] pt-[80px] blur-none">
                <div className="flex flex-col gap-2 items-center">
                    <h1 className="mt-10 text-5xl sm:text-5xl font-bold text-center w-4/5 left-0 right-0 mx-auto">
                        De Wensbol
                    </h1>
                    <h2 className="text-lg">
                        <TypeAnimation
                            sequence={[
                                "Maak het magisch",
                                5000,
                                "Maak het onvergetelijk",
                                5000,
                            ]}
                            cursor={false}
                            wrapper="span"
                            speed={15}
                            style={{
                                fontSize: "inherit",
                                display: "inline-block",
                            }}
                            repeat={Infinity}
                        />
                    </h2>
                </div>
                <div className="relative w-[300px] h-[300px] rounded-full overflow-hidden shadow-2xl left-0 right-0 mx-auto">
                    <div
                        className={`absolute w-full h-full flex justify-center items-center bg-black transition-all duration-1000 ${
                            showVideo
                                ? "bg-opacity-0 opacity-0"
                                : "bg-opacity-85 hover:cursor-pointer"
                        }`}
                        onClick={onVideoClick}
                    >
                        <PiHandTapLight size={60} color="white" />
                    </div>
                    <video
                        autoPlay
                        loop
                        muted
                        disablePictureInPicture
                        className="object-cover w-full h-full z-30"
                    >
                        <source
                            src="/videos/stock-marriage-vid.mp4"
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <p
                    ref={ref1}
                    className={`w-4/5 left-0 right-0 mx-auto text-lg text-center opacity-${
                        inView1 ? 100 : 0
                    } transition-all duration-1000`}
                >
                    De Magische Wensbol, een betoverende toevoeging aan uw
                    bruiloft of partij! De wensbol biedt een complete 360-graden
                    ervaring waarbij het dus helemaal niet uitmaakt waar je
                    staat, jouw wens kan vanuit elke hoek worden ingesproken.
                </p>
                <hr className="bg-gray-300 h-0.5 w-4/5 sm:w-1/2 left-0 right-0 mx-auto" />
                <h3 className="text-2xl font-bold text-center">
                    Niet zomaar een photobooth
                </h3>
                <div className="relative w-[200px] h-[200px] left-0 right-0 mx-auto">
                    <Image
                        src="/images/magic-ball-placeholder.png"
                        alt="De Wensbol"
                        fill
                    />
                </div>
                <p
                    ref={ref2}
                    className={`w-4/5 left-0 right-0 mx-auto text-lg text-center opacity-${
                        inView2 ? 100 : 0
                    } transition-all duration-1000`}
                >
                    De wensbol biedt jou de kans om midden tussen je geliefden
                    een speciale boodschap in te spreken voor het gelukkige
                    bruidspaar. Stap om de tafel heen, vertel jouw mooiste wens
                    en laat deze deel uitmaken van de onvergetelijke dag die
                    jouw geliefden aan het beleven zijn.
                </p>
                <hr className="bg-gray-100 h-0.5 w-4/5 sm:w-1/2 left-0 right-0 mx-auto" />
                <p
                    ref={ref3}
                    className={`w-4/5 left-0 right-0 mx-auto text-3xl text-center opacity-${
                        inView3 ? 100 : 0
                    } transition-all duration-1000`}
                >
                    Dit is de plek waar de magie begint en herinneringen worden
                    gemaakt. De Wensbol, That's Magical!
                </p>
                <Link
                    href={"/contact"}
                    className="flex justify-center left-0 right-0 mx-auto w-3/5 mb-20"
                >
                    <button
                        type="button"
                        className="border-2 bg-gray-100 py-2 px-4 rounded-full"
                    >
                        <div className="flex justify-center gap-10 items-center">
                            Contact <IoIosArrowRoundForward size={30} />
                        </div>
                    </button>
                </Link>
            </div>
        </div>
    );
}
