import Image from "next/image";
import ContactForm from "../_components/ContactForm";
import { SiFacebook, SiInstagram } from "react-icons/si";
import { BiMailSend, BiPhone } from "react-icons/bi";

export default function Contact() {
    return (
        <div>
            <div className="relative h-full z-10">
                <Image
                    className="blur-2xl sm:blur-3xl"
                    src="/images/rings.jpg"
                    alt="rings"
                    objectFit="cover"
                    fill
                />
                <div className="flex flex-col gap-20 sm:gap-36 sm:pt-[100px] pt-[80px] blur-none">
                    <h1 className="mt-16 text-5xl sm:text-5xl font-bold text-center w-4/5 left-0 right-0 mx-auto">
                        Maak het magisch!
                    </h1>
                    <div className="mb-16 sm:mb-28 flex flex-col items-center gap-20 sm:gap-32">
                        <p className="text-lg sm:text-2xl text-center w-10/12 sm:w-8/12 font-bold">
                            Neem gerust contact met ons op om de mogelijkheden
                            van de Magische Wensbol te bespreken! Of het nu gaat
                            om een bruiloft, een verjaardagsfeest, of een ander
                            speciaal evenement, we staan klaar om samen met jou
                            de perfecte ervaring neer te zetten.
                        </p>
                        <div className="w-10/12 flex justify-center">
                            <ContactForm />
                        </div>
                        <hr className="bg-gray-300 h-0.5 w-4/5 sm:w-1/2 left-0 right-0 mx-auto"></hr>
                        <p className="text-lg sm:text-2xl text-center w-10/12 sm:w-8/12 font-bold">
                            Natuurlijk kan je ons ook altijd even bellen, een
                            Whatsappje sturen of ons via de socials bereiken! We
                            nemen zo spoedig mogelijk contact met je op en
                            kijken ernaar uit om samen iets magisch te
                            ontwikkelen!
                        </p>
                        <p className="flex gap-4 items-center text-3xl sm:text-5xl font-bold">
                            <BiPhone size={30} />
                            <a href="tel:+31123456789">+31 (0)123 456 789</a>
                        </p>
                        <p className="flex gap-4 items-center text-3xl sm:text-5xl font-bold">
                            <BiMailSend size={30} />
                            <a href="mailto:info@example.com">
                                contact@slvn.nl
                            </a>
                        </p>
                        <hr className="bg-gray-300 h-0.5 w-4/5 sm:w-1/2 left-0 right-0 mx-auto"></hr>
                        <h2 className="text-center text-3xl sm:text-4xl font-bold">
                            Onze socials!
                        </h2>
                        <div className="w-full sm:w-1/2 flex justify-around mb-8">
                            <SiInstagram size={50} />
                            <SiFacebook size={50} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
