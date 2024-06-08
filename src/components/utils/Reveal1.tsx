import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface Props {
    children: JSX.Element;
    width?: "fit-content" | "100%";
}

export const Reveal1 = ({ children, width = "fit-content" }: Props) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const mainControl = useAnimation();

    useEffect(() => {
        if (inView) {
            mainControl.start("visible");
        }
    }, [inView, mainControl]);

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0,x:75, y: 75 },
                    visible: { opacity: 1,x:0, y: 0 },
                }}
                initial="hidden"
                animate={mainControl}
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                {children}
            </motion.div>
        </div>
    );
};
