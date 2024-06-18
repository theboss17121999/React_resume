import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface Props {
    children: JSX.Element;
    width?: "fit-content" | "100%";
    color?: string; 
    duration?: number; 
    overflow?: string;
}

export const Reveal = ({ children, width = "fit-content", color = "#15EA3C", duration = 0.5, overflow = "hidden" }: Props) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const mainControl = useAnimation();
    const slideControl = useAnimation();

    useEffect(() => {
        if (inView) {
            mainControl.start("visible");
            slideControl.start("visible");
        }
    }, [inView, mainControl, slideControl]);

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: {overflow} }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControl}
                transition={{ duration: duration, delay: 0.25 }} // Corrected duration
            >
                {children}
            </motion.div>
            <motion.div
                variants={{
                    hidden: { left: 0 },
                    visible: { left: "100%" },
                }}
                initial="hidden"
                animate={slideControl} // Corrected animation control
                transition={{ duration: 0.5, ease: "easeIn" }}
                style={{
                    position: "absolute",
                    top: 4,
                    bottom: 4,
                    left: 0,
                    right: 0,
                    background: color,
                    zIndex: 20,
                    borderTopLeftRadius: 5,
                    borderBottomLeftRadius: 5
                }}
            >
            </motion.div>
        </div>
    );
};
