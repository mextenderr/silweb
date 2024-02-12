import Image from "next/image";

export default function ProductInfo() {
    return (
        <div className="flex items-center justify-center gap-12 max-w-6xl mx-auto my-12">
            <Image
                src={"/magic-ball-placeholder.png"}
                width={300}
                height={300}
                alt="magic ball"
                className="rounded-lg"
            />
            <div className="flex flex-col gap-4">
                <h2 className="text-5xl font-bold mb-4">
                    Interactieve Trouwherinnering
                </h2>
                <p className="text-gray-700 leading-relaxed">
                    Verrijk je bruiloftsbeleving met ons innovatieve
                    opname-apparaat. Jouw gasten kunnen hun liefde en goede
                    wensen delen door simpelweg in de microfoon te spreken,
                    terwijl de 360-graden camera hun oprechte uitdrukkingen
                    vastlegt. Deze interactieve herinnering voegt een
                    persoonlijke touch toe aan jullie speciale dag, waardoor
                    herinneringen ontstaan die een leven lang worden gekoesterd.
                </p>
            </div>
        </div>
    );
}
