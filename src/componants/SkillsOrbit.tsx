import { CSSProperties, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { itim } from "./fonts/fonts";

const skills = [
    "/skills/html.png",
    "/skills/css.png",
    "/skills/js.png",
    "/skills/node.png",
    "/skills/tailwind.png",
    "/skills/ts.png",
    "/skills/express.png",
    "/skills/mui.png",
    "/skills/vite.png",
    "/skills/supabase.png",
    "/skills/vercle.png",
    "/skills/react.png",
    "/skills/postgres.png",
    "/skills/docker.png",
    "/skills/godot.png",
    "/skills/java.png",
    "/skills/python.png",
    "/skills/unreal.png",
];

const orbitVariants = {
    clockwise: {
        rotate: 360,
        transition: {
            repeat: Infinity,
            duration: 30,
            ease: "linear",
        },
    },
    counterClockwise: {
        rotate: -360,
        transition: {
            repeat: Infinity,
            duration: 30,
            ease: "linear",
        },
    },
};

const radiusDesktop = [165, 220]; // Radii for desktop
const radiusMobile = [100, 150];

function getSkillPosition(
    index: number,
    totalSkills: number,
    radius: number
): { x: number; y: number } {
    const angle = (index / totalSkills) * 2 * Math.PI;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { x, y };
}

export default function SkillsOrbit() {
    const orbitRef = useRef<HTMLDivElement | null>(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    useEffect(() => {
        const orbitElement = orbitRef.current;
        if (orbitElement) {
            (orbitElement.style as CSSProperties).transformOrigin = "center center";
        }
    }, []);

    const radii = isMobile ? radiusMobile : radiusDesktop;

    return (
        <Box component={motion.div}
            sx={{
                bgcolor: "#181818",
                width: { xs: "40%", md: "25%", lg: "20%" },
                height: { xs: "25%", md: "40%", lg: "45%" },
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                boxShadow: 5,
                border: 2,
            }}
            animate={{ borderColor: ["#3F3F3F", "#6CA2A6", "#00F7F7", "#6CA2A6", "#3F3F3F"] }} transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeIn",
            }}
        >
            <Typography className={itim.className} sx={{ color: "white", position: "absolute", fontSize: { xs: 28, md: 40, lg: 50 } }}>
                My <span style={{ color: "#6CA2A6" }}>Skills</span>
            </Typography>
            <Box
                component={motion.div}
                ref={orbitRef}
                variants={orbitVariants}
                animate="clockwise"
                sx={{ position: "absolute", width: "100%", height: "100%" }}
            >
                {skills.map((src, index) => {
                    if (index % 2 === 0) {
                        const { x, y } = getSkillPosition(index, skills.length, radii[0]);
                        return (
                            <Image
                                key={index}
                                src={src}
                                width={45}
                                height={45}
                                alt={`Skill ${index}`}
                                style={{
                                    position: "absolute",
                                    top: `calc(50% + ${y}px)`,
                                    left: `calc(50% + ${x}px)`,
                                    transform: "translate(-50%, -50%)",
                                    cursor: "pointer",
                                }}
                            />
                        );
                    }
                    return null;
                })}
            </Box>
            <Box
                component={motion.div}
                ref={orbitRef}
                variants={orbitVariants}
                animate="counterClockwise"
                sx={{ position: "absolute", width: "100%", height: "100%" }}
            >
                {skills.map((src, index) => {
                    if (index % 2 !== 0) {
                        const { x, y } = getSkillPosition(index, skills.length, radii[1]);
                        return (
                            <Image
                                key={index}
                                src={src}
                                width={45}
                                height={45}
                                alt={`Skill ${index}`}
                                style={{
                                    position: "absolute",
                                    top: `calc(50% + ${y}px)`,
                                    left: `calc(50% + ${x}px)`,
                                    transform: "translate(-50%, -50%)",
                                    cursor: "pointer",
                                }}
                            />
                        );
                    }
                    return null;
                })}
            </Box>
        </Box >
    );
}
