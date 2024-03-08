"use client";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { BsSend, BsSendArrowUp, BsSendCheck } from "react-icons/bs";

export default function ContactForm() {
    const searchParams = useSearchParams();
    const [highlightProduct, setHighlightProduct] = useState(false);

    const [loading, setLoading] = useState(false);
    const [completed, setCompleted] = useState(false);
    const [error, setError] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        product: "Wensbol Exclusive",
        message: "",
    });

    function handleProductChange(e: any) {
        setHighlightProduct(false);
        handleChange(e);
    }

    function handleChange(e: any) {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    useEffect(() => {
        if (searchParams.has("product")) {
            const product = searchParams.get("product")?.replace("-", " ");
            if (
                product === "Wensbol Exclusive" ||
                product === "Wensbol Deluxe"
            ) {
                setHighlightProduct(true);
                setFormData({
                    ...formData,
                    product: product,
                });
                window.scrollTo(0, 440);
            }
        }
    }, [searchParams]);

    async function handleSubmit(e: any) {
        e.preventDefault();
        setLoading(true);

        fetch("/api", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((data) => {
                setCompleted(true);
            })
            .catch((error) => {
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    return (
        <Suspense>
            <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-5 sm:gap-10 max-w-2xl sm:text-2xl"
            >
                <div>
                    <label
                        htmlFor="name"
                        className="block text-gray-700 font-bold mb-2"
                    >
                        Naam:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border rounded-md p-2"
                        required
                        disabled={completed || error}
                        onInvalid={(e) => {
                            const target = e.target as HTMLInputElement;
                            target.setCustomValidity("Vul hier jouw naam in.");
                        }}
                        onInput={(e) => {
                            const target = e.target as HTMLInputElement;
                            target.setCustomValidity("");
                        }}
                    />
                </div>

                <div>
                    <label
                        htmlFor="email"
                        className="block text-gray-700 font-bold mb-2"
                    >
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border rounded-md p-2"
                        required
                        disabled={completed || error}
                        onInvalid={(e) => {
                            const target = e.target as HTMLInputElement;
                            target.setCustomValidity(
                                "Vul hier jouw email adres in."
                            );
                        }}
                        onInput={(e) => {
                            const target = e.target as HTMLInputElement;
                            target.setCustomValidity("");
                        }}
                    />
                </div>

                <div>
                    <label
                        htmlFor="product"
                        className="block text-gray-700 font-bold mb-2"
                    >
                        Product:
                    </label>
                    <select
                        id="product"
                        name="product"
                        value={formData.product}
                        onChange={handleProductChange}
                        className={`w-full border bg-white rounded-md p-2 ${
                            highlightProduct && "border-green-500 shadow-xl"
                        }`}
                        required
                        disabled={completed || error}
                    >
                        <option value="Wensbol Exclusive">
                            Wensbol Exclusive
                        </option>
                        <option value="Wensbol Deluxe">Wensbol Deluxe</option>
                        <option value="Weet ik niet.">Weet ik niet.</option>
                    </select>
                </div>

                <div>
                    <label
                        htmlFor="message"
                        className="block text-gray-700 font-bold mb-2"
                    >
                        Jouw wens:
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full border rounded-md p-2"
                        required
                        disabled={completed || error}
                        onInvalid={(e) => {
                            const target = e.target as HTMLInputElement;
                            target.setCustomValidity("Vul hier jouw wens in.");
                        }}
                        onInput={(e) => {
                            const target = e.target as HTMLInputElement;
                            target.setCustomValidity("");
                        }}
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="left-0 right-0 mx-auto w-3/4 border-2 bg-gray-100 mt-10 py-2 sm:py-3 px-4 sm:px-8 rounded-full"
                    disabled={completed || loading || error}
                >
                    {completed ? (
                        <div className="flex justify-center gap-5 items-center">
                            Verzonden! <BsSendCheck />
                        </div>
                    ) : loading ? (
                        <div className="flex justify-center gap-5 items-center">
                            Verzenden... <BsSendArrowUp />
                        </div>
                    ) : (
                        <div className="flex justify-center gap-5 items-center">
                            Verzenden <BsSend />
                        </div>
                    )}
                </button>

                {completed && (
                    <p className="text-center mt-4">
                        {`Bedankt ${formData.name}! Ik heb je bericht ontvangen en zal zo snel als mogelijk contact met je opnemen.`}
                    </p>
                )}

                {error && (
                    <p className="text-center mt-4 text-red-700">
                        {`Oeps! Er ging iets mis bij het verzenden. Probeer het later nog eens. Sorry voor het ongemak.`}
                    </p>
                )}
            </form>
        </Suspense>
    );
}
