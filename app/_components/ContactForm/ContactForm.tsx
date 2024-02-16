"use client";
import { useState } from "react";
import { BsSend, BsSendArrowUp, BsSendCheck } from "react-icons/bs";

export default function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [completed, setCompleted] = useState(false);
    const [error, setError] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    function handleChange(e: any) {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

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
                />
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
                ></textarea>
            </div>

            <div className="left-0 right-0 mx-auto w-1/2">
                <button
                    type="submit"
                    className="border-2 py-2 px-4 w-full rounded-full hover:bg-black"
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
            </div>

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
    );
}
