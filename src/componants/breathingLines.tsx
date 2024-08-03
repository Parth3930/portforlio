"use client";
import React from 'react';
import { Box } from "@mui/material";
import { motion } from "framer-motion";

interface BreathingLinesProps {
    top?: string | number | Record<string, string | number>;
    right?: string | number | Record<string, string | number>;
    left?: string | number | Record<string, string | number>;
    time?: string;
    direction?: 'left-to-right' | 'right-to-left';
    rotate?: number;
    marginRight?: string | number | Record<string, string | number>;
    position?: string;
    marginLeft?: string | number | Record<string, string | number>;
    width?: string | number | Record<string, string | number>;
}

const BreathingLines: React.FC<BreathingLinesProps> = ({
    width = "30%",
    marginLeft = "none",
    marginRight = "none",
    position = "absolute",
    top = "none",
    right = 'none',
    left = "none",
    time = "0",
    direction = 'left-to-right',
    rotate = 0
}) => {
    const leftToRight = {
        initial: { x: '-100%', opacity: 1 },
        animate: {
            x: ['-100%', '100%', '100%'],
            opacity: [1, 1, 0]
        },
    };

    const rightToLeft = {
        initial: { x: '100%', opacity: 1 },
        animate: {
            x: ['100%', '-100%', '-100%'],
            opacity: [1, 1, 0]
        },
    };

    const animationProps = direction === 'left-to-right' ? leftToRight : rightToLeft;

    return (
        <Box
            component={motion.div}
            sx={{
                position: position,
                width: { xs: "50%", md: width },
                bgcolor: "#3F3F3F",
                height: 4,
                marginTop: top,
                right: right,
                left: left,
                marginRight: marginRight,
                marginLeft: marginLeft,
                overflow: "hidden",
            }}
            initial={{ rotate: rotate }}
        >
            <Box
                component={motion.div}
                sx={{
                    width: "100%",
                    height: "100%",
                    background: 'linear-gradient(to right, #3F3F3F, #6FFFF6, #00F7F7)',
                }}
                initial={animationProps.initial}
                animate={animationProps.animate}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'linear',
                    delay: parseFloat(time)
                }}
            />
        </Box>
    );
};

export default BreathingLines;
