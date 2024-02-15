"use client";
import { useEffect, useState } from "react";

interface DeviceTypeContextProps {
    isDesktop: boolean;
}

export function useDeviceType(): DeviceTypeContextProps {
    const [isDesktop, setIsDesktop] = useState(windowIsDesktop);

    function windowIsDesktop(): boolean {
        if (typeof window === "undefined") {
            return true;
        }
        return window.innerWidth >= 640;
    }

    useEffect(() => {
        function handleResize() {
            setIsDesktop(windowIsDesktop());
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return { isDesktop };
}
