"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { TypeAnimation } from "react-type-animation";
import FadeInView from "./_components/FadeInView";
import ContactButton from "./_components/ContactButton/ContactButton";
import Divider from "./_components/Divider/Divider";

export default function Home() {
    const [showScroll, setShowScroll] = useState<boolean>(false);
    // const [showVideo, setShowVideo] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => {
            setShowScroll(true);
        }, 500);
    }, []);

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

    // function onVideoClick() {
    //     setShowVideo(true);
    // }

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
                        <h1 className="mt-10 sm:mt-20 text-5xl sm:text-8xl text-center w-4/5 left-0 right-0 mx-auto">
                            De Wensbol
                        </h1>
                        <h2 className="text-lg sm:text-xl">
                            <TypeAnimation
                                sequence={[
                                    "Maak het magisch",
                                    2500,
                                    "Maak het onvergetelijk",
                                    2500,
                                ]}
                                cursor={false}
                                wrapper="span"
                                speed={30}
                                style={{
                                    fontSize: "inherit",
                                    display: "inline-block",
                                }}
                                repeat={Infinity}
                            />
                        </h2>
                    </div>
                    <div className="relative w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full overflow-hidden shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] left-0 right-0 mx-auto">
                        <Image
                            src="/images/wensbol-afstandschot.jpeg"
                            alt="De Wensbol"
                            fill
                            objectFit="cover"
                        />
                        {/* <div
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
                            disableRemotePlayback
                            className="object-cover w-full h-full z-30"
                        >
                            <source
                                src="/videos/stock-marriage-vid.mp4"
                                type="video/mp4"
                            />
                            Your browser does not support the video tag.
                        </video> */}
                    </div>
                    <div
                        className={`absolute w-full flex justify-center bottom-3 animate-bounce transition-all duration-1000 ${
                            !showScroll ? "opacity-0" : "opacity-100"
                        }`}
                    >
                        <IoArrowDownCircleOutline size={30} />
                    </div>
                </div>
                <div className="flex flex-col w-10/12 left-0 right-0 mx-auto sm:w-8/12 gap-20 sm:gap-40 mt-20 sm:mt-40 pb-20">
                    <div className="flex flex-col">
                        <FadeInView>
                            <p className="w-4/5 left-0 right-0 mx-auto text-lg sm:text-2xl text-center">
                                De Magische Wensbol, een betoverende toevoeging
                                aan uw bruiloft of partij! <br />
                                <br /> De Wensbol realiseert een complete 360°
                                ervaring waarbij het dus helemaal niet uitmaakt
                                waar je staat; jouw wens kan vanuit elke hoek
                                worden ingesproken.
                            </p>
                        </FadeInView>
                        <FadeInView>
                            <p className="w-4/5 left-0 right-0 mx-auto text-lg sm:text-2xl text-center">
                                <br />
                                Het schept een betoverende beleving, waarbij
                                technische aspecten subtiel verborgen blijven.
                                Ook is het een extra mooi stukje decoratie voor
                                een bruiloft, jubileum of bedrijfsevenement. De
                                Magische Wensbol transformeert elke gelegenheid
                                tot iets bijzonders.
                            </p>
                        </FadeInView>
                        <FadeInView>
                            <p className="w-4/5 left-0 right-0 mx-auto text-xl sm:text-3xl text-center my-20 italic">
                                That's Magical!
                            </p>
                        </FadeInView>
                        <FadeInView>
                            <Divider />
                        </FadeInView>
                    </div>
                    <FadeInView>
                        <h3 className="text-2xl sm:text-5xl text-center">
                            Niet zomaar een Gastenboek
                        </h3>
                    </FadeInView>
                    <FadeInView>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-20 sm:gap-10">
                            <div className="relative w-[200px] h-[300px] sm:w-[400px] sm:h-[500px] left-0 right-0 mx-auto">
                                <Image
                                    className="rounded-2xl shadow-2xl"
                                    src="/images/wensbol-afstandschot.jpeg"
                                    alt="De Wensbol"
                                    fill
                                    objectFit="cover"
                                />
                            </div>
                            <p className="w-4/5 sm:w-1/2 left-0 right-0 mx-auto text-lg sm:text-2xl text-center">
                                De Wensbol biedt jou de kans om midden tussen je
                                geliefden een speciale boodschap in te spreken
                                voor het gelukkige bruidspaar.
                                <br /> Stap om de tafel heen, vertel jouw
                                mooiste wens en laat deze deel uitmaken van de
                                onvergetelijke dag die jouw geliefden aan het
                                beleven zijn.
                            </p>
                        </div>
                    </FadeInView>
                    <FadeInView>
                        <Divider />
                    </FadeInView>
                    <FadeInView>
                        <p className="w-4/5 left-0 right-0 mx-auto text-3xl text-center">
                            Dit is de plek waar de magie begint en herinneringen
                            worden gemaakt.
                            <br /> <br />
                            SLVN Events, <i>That's Magical!</i>
                        </p>
                    </FadeInView>
                    <FadeInView>
                        <ContactButton />
                    </FadeInView>
                </div>
            </div>
        </div>
    );
}
