"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import FadeInView from "../_components/FadeInView";

export default function Over() {
    return (
        <div className="relative h-full">
            <Image
                className="blur-2xl"
                src="/images/pink-flowers.jpg"
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
                            speed={50}
                            style={{
                                fontSize: "inherit",
                                display: "inline-block",
                            }}
                        />
                    </p>
                </div>
                <div className="flex flex-col gap-32 items-center mb-32">
                    <FadeInView>
                        <div className="relative h-[300px] w-[300px] shadow-xl">
                            <Image
                                src="/images/wedding-camera.jpg"
                                alt="Camera"
                                objectFit="cover"
                                fill
                            />
                        </div>
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
                </div>
            </div>
        </div>
    );
}
