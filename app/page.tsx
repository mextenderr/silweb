"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { PiHandTapLight } from "react-icons/pi";
import { TypeAnimation } from "react-type-animation";
import FadeInView from "./_components/FadeInView";

export default function Home() {
    const [showScroll, setShowScroll] = useState<boolean>(false);
    const [showVideo, setShowVideo] = useState<boolean>(false);

    useEffect(() => {
        if (showVideo) {
            setTimeout(() => {
                setShowScroll(true);
            }, 10000);
        }
    }, [showVideo]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowScroll(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    function onVideoClick() {
        setShowVideo(true);
    }

    return (
        <div className="relative h-full">
            <Image
                className="blur"
                src="/images/beige-flowers.jpg"
                alt="beige-flowers"
                objectFit="cover"
                fill
            />
            <div className="blur-none">
                <div className="relative h-screen flex flex-col justify-center gap-14">
                    <div className="flex flex-col gap-2 sm:gap-4 items-center">
                        <h1 className="mt-10 sm:mt-20 text-5xl sm:text-8xl font-bold text-center w-4/5 left-0 right-0 mx-auto">
                            De Wensbol
                        </h1>
                        <h2 className="text-lg sm:text-xl">
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
                    <div className="relative w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full overflow-hidden shadow-2xl left-0 right-0 mx-auto">
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
                            playsInline
                            className="object-cover w-full h-full z-30"
                        >
                            <source
                                src="/videos/stock-marriage-vid.mp4"
                                type="video/mp4"
                            />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div
                        className={`absolute w-full flex justify-center bottom-3 animate-bounce transition-all duration-1000 ${
                            showScroll ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        <IoArrowDownCircleOutline size={30} />
                    </div>
                </div>
                <div className="flex flex-col w-10/12 left-0 right-0 mx-auto sm:w-8/12 gap-20 sm:gap-40 mt-20 sm:mt-40">
                    <FadeInView>
                        <p className="w-4/5 left-0 right-0 mx-auto text-lg sm:text-2xl text-center">
                            De Magische Wensbol, een betoverende toevoeging aan
                            uw bruiloft of partij! De wensbol biedt een complete
                            360-graden ervaring waarbij het dus helemaal niet
                            uitmaakt waar je staat, jouw wens kan vanuit elke
                            hoek worden ingesproken.
                        </p>
                    </FadeInView>
                    <FadeInView>
                        <hr className="bg-gray-50 h-0.5 w-4/5 sm:w-1/2 left-0 right-0 mx-auto" />
                    </FadeInView>
                    <FadeInView>
                        <h3 className="text-2xl sm:text-5xl font-bold text-center">
                            Niet zomaar een photobooth
                        </h3>
                    </FadeInView>
                    <FadeInView>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-20 sm:gap-10">
                            <div className="relative w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] left-0 right-0 mx-auto">
                                <Image
                                    src="/images/magic-ball-placeholder.png"
                                    alt="De Wensbol"
                                    fill
                                />
                            </div>
                            <p className="w-4/5 sm:w-1/2 left-0 right-0 mx-auto text-lg sm:text-2xl text-center">
                                De wensbol biedt jou de kans om midden tussen je
                                geliefden een speciale boodschap in te spreken
                                voor het gelukkige bruidspaar. Stap om de tafel
                                heen, vertel jouw mooiste wens en laat deze deel
                                uitmaken van de onvergetelijke dag die jouw
                                geliefden aan het beleven zijn.
                            </p>
                        </div>
                    </FadeInView>
                    <FadeInView>
                        <hr className="bg-gray-100 h-0.5 w-4/5 sm:w-1/2 left-0 right-0 mx-auto" />
                    </FadeInView>
                    <FadeInView>
                        <p className="w-4/5 left-0 right-0 mx-auto text-3xl text-center">
                            Dit is de plek waar de magie begint en herinneringen
                            worden gemaakt. De Wensbol, That's Magical!
                        </p>
                    </FadeInView>
                    <FadeInView>
                        <Link
                            href={"/contact"}
                            className="flex justify-center left-0 right-0 mx-auto mb-24 sm:mb-44 mt-4"
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
                    </FadeInView>
                </div>
            </div>
        </div>
    );
}
