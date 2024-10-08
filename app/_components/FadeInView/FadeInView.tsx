import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

export default function FadeInView({ children }: { children: ReactNode }) {
    const [ref, inView] = useInView({ threshold: 0 });

    return (
        <div
            ref={ref}
            className={`w-full flex justify-center opacity-${
                inView ? 100 : 0
            } transition-all duration-700`}
        >
            {children}
        </div>
    );
}
