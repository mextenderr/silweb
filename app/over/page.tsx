"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import FadeInView from "../_components/FadeInView";
import { useEffect, useState } from "react";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import ContactButton from "../_components/ContactButton/ContactButton";
import Divider from "../_components/Divider/Divider";

export default function Over() {
    const [showScroll, setShowScroll] = useState<boolean>(false);
    const [showSecondText, setShowSecondText] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowScroll(true);
            setShowSecondText(true);
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

    return (
        <div className="relative h-full">
            <Image
                className="blur"
                src="/images/beige-flowers.jpg"
                alt="Overpagina"
                objectFit="cover"
                fill
            />
            <div className="blur-none flex flex-col items-center">
                <div className="relative h-screen flex flex-col justify-center gap-32 pb-10">
                    <h1 className="mt-10 sm:mt-20 text-5xl sm:text-8xl text-center w-4/5 left-0 right-0 mx-auto">
                        Magische Momenten
                    </h1>
                    <p className="w-4/5 sm:w-1/2 h-[200px] left-0 right-0 mx-auto text-xl sm:text-2xl text-center">
                        <TypeAnimation
                            sequence={[
                                "Bij SLVN Events geloven we in het creeren van magische momenten die mensen voor altijd zullen bijblijven.",
                            ]}
                            wrapper="span"
                            speed={95}
                            style={{
                                fontSize: "inherit",
                                display: "inline-block",
                            }}
                            cursor={false}
                        />
                        {showSecondText && (
                            <TypeAnimation
                                sequence={[
                                    "Onze visie is dan ook om mensen te verrassen, te verwonderen en te inspireren door middel van onze producten en diensten.",
                                ]}
                                wrapper="span"
                                speed={95}
                                style={{
                                    fontSize: "inherit",
                                    display: "inline-block",
                                }}
                            />
                        )}
                    </p>
                    <div
                        className={`absolute w-full flex justify-center bottom-3 animate-bounce transition-all duration-1000 ${
                            showScroll ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        <IoArrowDownCircleOutline size={30} />
                    </div>
                </div>
                <div className="flex flex-col gap-28 items-center mb-32 mt-8">
                    <FadeInView>
                        <div className="relative w-[200px] h-[300px] sm:w-[400px] sm:h-[500px] left-0 right-0 mx-auto">
                            <Image
                                className="rounded-2xl shadow-2xl"
                                src="/images/wensbol-openhaard.jpeg"
                                alt="De Wensbol"
                                fill
                                objectFit="cover"
                            />
                        </div>
                    </FadeInView>
                    <FadeInView>
                        <h2 className="text-center text-3xl sm:text-5xl">
                            Duidelijk doel.
                        </h2>
                    </FadeInView>
                    <FadeInView>
                        <p className="w-4/5 sm:w-1/2 left-0 right-0 mx-auto text-xl sm:text-2xl text-center">
                            Vanaf het allereerste idee na de Magische Wensbol
                            was ons doel duidelijk; we wilden producten
                            ontwikkelen die niet alleen functioneel zijn, maar
                            ook de verbeelding prikkellen en een gevoel van
                            verwondering opwekken.
                            <br />
                            Daarom hebben we ons gericht op het verbergen van de
                            technische aspecten van het product, zodat de focus
                            ligt op de magie die het brengt.
                        </p>
                    </FadeInView>
                    <FadeInView>
                        <Divider />
                    </FadeInView>
                    <FadeInView>
                        <p className="w-4/5 sm:w-1/2 left-0 right-0 mx-auto text-xl sm:text-2xl text-center">
                            Of het nu gaat om een bruiloft, een feest of een
                            ander evenement, wij proberen elk moment te
                            transformeren tot iets buitengewoons. Bij ons draait
                            alles om het creëren van magische ervaring tijdens
                            deze onvergetelijke momenten!
                            <br />
                            <br />
                            Wij werken tot in de kleinste details om elke
                            gelegenheid speciaal te maken voor iedereen. Met
                            passie en precisie zorgen we ervoor dat elke
                            ervaring uniek en onvergetelijk wordt.
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
