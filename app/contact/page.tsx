import Image from "next/image";
import ContactForm from "../_components/ContactForm";
import { SiFacebook, SiInstagram } from "react-icons/si";

export default function Contact() {
    return (
        <div className="flex flex-col items-center bg-slvnPinkLight">
            <Image
                src={"/background-image-placeholder.jpg"}
                alt="logo"
                width={1000}
                height={500}
                objectFit="cover"
            />
            <div className="relative flex flex-col">
                <h1 className="absolute -top-12 left-0 right-0 mx-auto text-5xl sm:text-6xl font-bold text-center">
                    Maak het magisch!
                </h1>
                <div className="mt-20 mb-16 sm:mb-28 flex flex-col items-center gap-10 sm:gap-20">
                    <p className="text-lg sm:text-2xl text-center w-10/12 sm:w-8/12 font-bold">
                        Neem gerust contact met ons op om de mogelijkheden van
                        de Magische Wensbol te bespreken! Of het nu gaat om een
                        bruiloft, een verjaardagsfeest, of een ander speciaal
                        evenement, we staan klaar om samen met jou de perfecte
                        ervaring neer te zetten.
                    </p>
                    <div className="w-10/12 flex justify-center">
                        <ContactForm />
                    </div>
                    <hr className="bg-gray-300 h-0.5 w-4/5 sm:w-1/2 left-0 right-0 mx-auto"></hr>
                    <p className="text-lg sm:text-2xl text-center w-10/12 sm:w-8/12 font-bold">
                        Natuurlijk kan je ons ook altijd even bellen, een
                        Whatsappje sturen of ons via de socials bereiken! We
                        nemen zo spoedig mogelijk contact met je op en kijken
                        ernaar uit om samen iets magisch te ontwikkelen!
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold">
                        Onze socials.
                    </h2>
                    <div className="w-full sm:w-1/2 flex justify-around">
                        <SiInstagram size={50} />
                        <SiFacebook size={50} />
                    </div>
                </div>
            </div>
        </div>
    );
}
