import Image from "next/image";
import PriceCard from "../_components/PriceCard";

export default function Tarieven() {
    return (
        <div>
            <div className="relative h-full z-10">
                <Image
                    className="blur"
                    src="/images/beige-flowers.jpg"
                    alt="beige-flowers"
                    objectFit="cover"
                    fill
                />
                <div className="flex flex-col gap-20 sm:gap-36 sm:pt-[100px] pt-[80px] blur-none">
                    <h1 className="mt-16 text-3xl sm:text-5xl font-bold text-center w-4/5 left-0 right-0 mx-auto">
                        Voor jouw unieke feest hebben wij een passende prijs
                    </h1>
                    <div className="flex flex-col items-center sm:flex-row justify-center gap-16 sm:gap-80">
                        <PriceCard
                            title="Exclusive"
                            subTitle="Onze welkbekende classic."
                            sellingPoints={[
                                "Speciale dag",
                                "Hoge kwaliteit",
                                "Unieke ervaring",
                            ]}
                            price={300}
                            link="/contact?product=Wensbol-Exclusive"
                        />
                        <PriceCard
                            title="Deluxe"
                            subTitle="Onze welkbekende classic + extra's."
                            sellingPoints={[
                                "Speciale dag",
                                "Hoge kwaliteit",
                                "Fast service",
                            ]}
                            price={500}
                            link="/contact?product=Wensbol-Deluxe"
                        />
                    </div>
                    <p className="left-0 right-0 mx-auto text-center text-2xl w-4/5 mb-20">
                        Een betoverende ervaring waarbij technische aspecten
                        subtiel verborgen blijven. Of het nu een bruiloft,
                        jubileum of bedrijfsevenement betreft, onze Wensbol
                        transformeert elke gelegenheid tot iets bijzonders.{" "}
                    </p>
                </div>
            </div>
        </div>
    );
}
