"use client";
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
                <div className="flex flex-col sm:pt-[100px] pt-[80px] blur-none">
                    <h1 className="mt-24 text-3xl sm:text-5xl text-center w-4/5 left-0 right-0 mx-auto mb-20">
                        Voor jouw unieke feest hebben wij een passende prijs
                    </h1>
                    <h3 className="text-lg sm:text-3xl text-center w-4/5 left-0 right-0 mx-auto italic mb-10">
                        De Magische Wensbol
                    </h3>
                    <div className="flex flex-col items-center sm:flex-row justify-center gap-16 sm:gap-80 mb-20">
                        <PriceCard
                            title="Exclusive"
                            subTitle="Onze welkbekende classic."
                            sellingPoints={[
                                "Unieke ervaring",
                                "Hoge kwaliteit (HD)",
                                "Onbeperkt opname",
                                "360° ervaring",
                            ]}
                            price={295}
                            link="/contact?product=Wensbol-Exclusive"
                        />
                        <PriceCard
                            title="Deluxe"
                            subTitle="Onze welkbekende classic + extra's."
                            sellingPoints={[
                                "Unieke ervaring",
                                "4K kwaliteit",
                                "Onbeperkt opname",
                                "360° ervaring",
                                "Unieke video border",
                            ]}
                            price={395}
                            link="/contact?product=Wensbol-Deluxe"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
