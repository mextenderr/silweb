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

    useEffect(() => {
        setTimeout(() => {
            setShowScroll(true);
        }, 10000);
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
                    <h1 className="mt-10 sm:mt-20 text-5xl sm:text-8xl font-extrabold text-center w-4/5 left-0 right-0 mx-auto">
                        Magische Momenten
                    </h1>
                    <p className="w-4/5 sm:w-1/2 h-[200px] left-0 right-0 mx-auto text-xl sm:text-2xl text-center">
                        <TypeAnimation
                            sequence={[
                                "Bij SLVN Events geloven we in het creeren van magische momenten die mensen voor altijd zullen bijblijven. Onze visie is dan ook om mensen te verrassen, te verwonderen en te inspireren door middel van onze producten en diensten.",
                            ]}
                            wrapper="span"
                            speed={60}
                            style={{
                                fontSize: "inherit",
                                display: "inline-block",
                            }}
                        />
                    </p>
                    <div
                        className={`absolute w-full flex justify-center bottom-3 animate-bounce transition-all duration-1000 ${
                            showScroll ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        <IoArrowDownCircleOutline size={30} />
                    </div>
                </div>
                <div className="flex flex-col gap-32 items-center mb-32 mt-8">
                    <FadeInView>
                        <div className="relative h-[300px] w-[300px] shadow-xl left-0 right-0 mx-auto">
                            <Image
                                src="/images/wedding-camera.jpg"
                                alt="Camera"
                                objectFit="cover"
                                fill
                            />
                        </div>
                    </FadeInView>
                    <FadeInView>
                        <h2 className="text-center text-3xl sm:text-4xl font-bold">
                            Duidelijk doel.
                        </h2>
                    </FadeInView>
                    <FadeInView>
                        <p className="w-4/5 sm:w-1/2 left-0 right-0 mx-auto text-xl sm:text-2xl text-center">
                            Vanaf het allereerste idee achter de Magische
                            Wensbol was ons doel duidelijk: we wilden een
                            product ontwikkelen dat niet alleen functioneel is,
                            maar ook de verbeelding prikkelt en een gevoel van
                            verwondering opwekt. Daarom hebben we ons gericht op
                            het verbergen van de technische aspecten van het
                            product, zodat de focus ligt op de magie die het
                            brengt.
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
