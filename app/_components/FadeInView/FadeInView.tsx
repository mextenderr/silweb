import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

export default function FadeInView({ children }: { children: ReactNode }) {
    const [ref, inView] = useInView({ threshold: 0.2 });

    return (
        <div
            ref={ref}
            className={`opacity-${
                inView ? 100 : 0
            } transition-all duration-1000`}
        >
            {children}
        </div>
    );
}
