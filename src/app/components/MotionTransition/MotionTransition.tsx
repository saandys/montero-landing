import { useEffect, useRef } from "react";
import { MotionTransitionProps } from "./MotionTransition.types";
import { useInView, useAnimation, motion } from "framer-motion"
import { fadeIn } from "@/app/utils/transitions";

export function MotionTransition(props: MotionTransitionProps) {

    const {children, className} = props;

    const ref = useRef(null);
    const isInView = useInView(ref, { once: false})
    const mainControls = useAnimation()
    const slideControls = useAnimation()

    useEffect(
        () => {
            if(isInView)
            {
                mainControls.start("visible")
                slideControls.start("visible")
            }
               
        },[isInView, mainControls, slideControls]
    )
    return (
        <div ref={ref}>
            <motion.div
                variants={fadeIn()}
                initial="hidden"
                animate={mainControls}
                exit="hidden"
                className={className}>
                {children}
            </motion.div>
        </div>
    )
}