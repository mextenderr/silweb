"use client";
import Image from "next/image";
import ContactForm from "../_components/ContactForm";
import { BiMailSend, BiPhone } from "react-icons/bi";
import Divider from "../_components/Divider/Divider";
import FadeInView from "../_components/FadeInView";
import { Suspense } from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
    return (
        <Suspense>
            <div>
                <div className="relative h-full z-10">
                    <Image
                        className="blur sm:blur-3xl"
                        src="/images/beige-flowers.jpg"
                        alt="rings"
                        objectFit="cover"
                        fill
                    />
                    <div className="flex flex-col gap-20 sm:gap-36 sm:pt-[100px] pt-[80px] blur-none">
                        <h1 className="mt-16 text-5xl sm:text-7xl text-center w-4/5 left-0 right-0 mx-auto">
                            Maak het magisch!
                        </h1>
                        <div className="mb-16 sm:mb-28 flex flex-col items-center gap-20 sm:gap-32">
                            <div className="flex flex-col items-center -mt-9 sm:-mt-12">
                                <p className="text-lg sm:text-2xl text-center w-10/12 sm:w-8/12">
                                    Neem gerust contact met ons op om de
                                    mogelijkheden van de Magische Wensbol te
                                    bespreken! Of het nu gaat om een bruiloft,
                                    een verjaardagsfeest, of een ander speciaal
                                    evenement, we staan klaar om samen met jou
                                    de perfecte ervaring neer te zetten.
                                </p>
                                <p className="text-sm sm:text-xl text-center w-10/12 sm:w-8/12 mt-16 mb-6 italic">
                                    Binnen 24 uur nemen wij contact met u op.
                                </p>
                                <div className="w-10/12 flex justify-center">
                                    <ContactForm />
                                </div>
                            </div>
                            <Divider />
                            <FadeInView>
                                <p className="text-lg sm:text-2xl text-center w-10/12 sm:w-8/12">
                                    Natuurlijk kan je ons ook altijd even
                                    bellen, een Whatsappje sturen of ons via de
                                    socials bereiken.
                                    <br /> <br />
                                    Wij kijken er naar uit om samen iets magisch
                                    te ontwikkelen!
                                </p>
                            </FadeInView>
                            <div className="flex flex-col gap-8 sm:gap-24">
                                <FadeInView>
                                    <p className="flex gap-4 items-center text-2xl sm:text-5xl font-bold">
                                        <BiPhone size={30} />
                                        <a href="tel:+31629052041">
                                            +31 6 29 05 20 41
                                        </a>
                                    </p>
                                </FadeInView>
                                <FadeInView>
                                    <p className="flex gap-4 items-center text-2xl sm:text-5xl font-bold">
                                        <FaWhatsapp size={30} />
                                        <a href="https://wa.me/+31629052041">
                                            +31 6 29 05 20 41
                                        </a>
                                    </p>
                                </FadeInView>
                                <FadeInView>
                                    <p className="flex gap-4 items-center text-2xl sm:text-5xl font-bold">
                                        <BiMailSend
                                            className="mt-1.5 sm:mt-3.5"
                                            size={30}
                                        />
                                        <a href="mailto:info@slvnevents.nl">
                                            info@slvnevents.nl
                                        </a>
                                    </p>
                                </FadeInView>
                            </div>
                            <Divider />
                            <FadeInView>
                                <h2 className="text-center text-3xl sm:text-5xl">
                                    Onze socials
                                </h2>
                            </FadeInView>
                            <FadeInView>
                                <div className="w-full sm:w-1/2 flex justify-center gap-16 sm:gap-32 mb-8">
                                    <a
                                        href="https://www.facebook.com/people/SLVN-Events/61565671043068"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaFacebook size={70} />
                                    </a>
                                    <a
                                        href="https://www.instagram.com/slvnevents"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaInstagram size={70} />
                                    </a>
                                </div>
                            </FadeInView>
                        </div>
                    </div>
                </div>
            </div>
        </Suspense>
    );
}
