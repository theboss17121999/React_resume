import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface Props {
    children: JSX.Element;
    width?: "fit-content" | "100%";
    y_axis?: number;
    x_axis?: number;
}

export const Reveal1 = ({ children, width = "fit-content" , y_axis = 75 , x_axis = 75}: Props) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const mainControl = useAnimation();

    useEffect(() => {
        if (inView) {
            mainControl.start("visible");
        }
    }, [inView, mainControl]);

    return (
        <div ref={ref} style={{ position: "relative", width}}>
            <motion.div
                variants={{
                    hidden: { opacity: 0,x: x_axis, y: y_axis },
                    visible: { opacity: 1,x:0, y: 0 },
                }}
                initial="hidden"
                animate={mainControl}
                transition={{ duration: 0.5, delay: 0.25, ease: "linear" , type: "tween"}}
            >
                {children}
            </motion.div>
        </div>
    );
};
