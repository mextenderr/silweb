"use client";
import { useState } from "react";

export default function ContactForm() {
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

    function handleSubmit(e: any) {
        e.preventDefault();
        console.log("Form submitted:", formData);
    }

    return (
        <form onSubmit={handleSubmit} className="w-4/5 max-w-xl">
            <div className="mb-4">
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
                />
            </div>

            <div className="mb-4">
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
                />
            </div>

            <div className="mb-4">
                <label
                    htmlFor="message"
                    className="block text-gray-700 font-bold mb-2"
                >
                    Bericht:
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full border rounded-md p-2"
                    required
                ></textarea>
            </div>

            <button type="submit" className="border-2 py-2 px-4 rounded-md">
                Verstuur
            </button>
        </form>
    );
}
