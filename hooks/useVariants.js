import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const useVariants = () => {
    const imageVariants = {
        visible: { opacity: 1, scale: 4, transition: { duration: 1 } },
        hidden: { opacity: 0, scale: 0 }
    }

    return { imageVariants }
}