import { CSSProperties } from "react";
import { motion } from "framer-motion";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { itim } from "./fonts/fonts";
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact, FaJava, FaPython, FaDocker } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiExpress, SiVite, SiSupabase, SiVercel, SiPostgresql, SiUnrealengine } from "react-icons/si";

const skills = [
    { id: "html", Icon: FaHtml5 },
    { id: "css", Icon: FaCss3Alt },
    { id: "js", Icon: FaJs },
    { id: "node", Icon: FaNodeJs },
    { id: "tailwind", Icon: SiTailwindcss },
    { id: "ts", Icon: SiTypescript },
    { id: "express", Icon: SiExpress },
    { id: "vite", Icon: SiVite },
    { id: "supabase", Icon: SiSupabase },
    { id: "vercel", Icon: SiVercel },
    { id: "react", Icon: FaReact },
    { id: "postgres", Icon: SiPostgresql },
    { id: "docker", Icon: FaDocker },
    { id: "java", Icon: FaJava },
    { id: "python", Icon: FaPython },
    { id: "unreal", Icon: SiUnrealengine },
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
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

    // Responsive container size based on device type.
    const containerSize = isMobile ? 200 : isTablet ? 250 : 300;
    // Base offset determines how far the orbit is from the sphere; it increases with screen size.
    const baseOffset = isMobile ? 20 : isTablet ? 30 : 40;
    // Dynamically calculate orbit radii relative to container size.
    const firstOrbitRadius = containerSize / 2 + baseOffset;
    // Increase second orbit radius by a few extra pixels (e.g., 30px) for a clear gap.
    const secondOrbitRadius = firstOrbitRadius + 55;

    const orbitRadii = [firstOrbitRadius, secondOrbitRadius];

    // Adjust icon size responsively.
    const iconSize = isMobile ? 30 : isTablet ? 40 : 45;
    const iconColor = "#A0A0A0";

    return (
        <Box
            component={motion.div}
            sx={{
                bgcolor: "#181818",
                width: containerSize,
                height: containerSize,
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                boxShadow: 5,
                border: 2,
                overflow: "visible",
            }}
            animate={{
                borderColor: [
                    "#3F3F3F",
                    "#6CA2A6",
                    "#00F7F7",
                    "#6CA2A6",
                    "#3F3F3F",
                ],
            }}
            transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeIn",
            }}
        >
            <Typography
                className={itim.className}
                sx={{
                    color: "white",
                    position: "absolute",
                    fontSize: isMobile ? 20 : isTablet ? 26 : 32,
                    textAlign: "center",
                    zIndex: 2,
                }}
            >
                My <span style={{ color: "#6CA2A6" }}>Skills</span>
            </Typography>
            {/* First orbit for even-indexed skills */}
            <Box
                component={motion.div}
                variants={orbitVariants}
                animate="clockwise"
                sx={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    transformOrigin: "center center",
                    pointerEvents: "none",
                }}
            >
                {skills.map((skill, index) => {
                    if (index % 2 === 0) {
                        const { x, y } = getSkillPosition(index, skills.length, orbitRadii[0]);
                        return (
                            <Box
                                key={skill.id}
                                sx={{
                                    position: "absolute",
                                    top: `calc(50% + ${y}px)`,
                                    left: `calc(50% + ${x}px)`,
                                    transform: "translate(-50%, -50%)",
                                    cursor: "pointer",
                                    userSelect: "none",
                                }}
                            >
                                <skill.Icon size={iconSize} color={iconColor} />
                            </Box>
                        );
                    }
                    return null;
                })}
            </Box>
            {/* Second orbit for odd-indexed skills */}
            <Box
                component={motion.div}
                variants={orbitVariants}
                animate="counterClockwise"
                sx={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    transformOrigin: "center center",
                    pointerEvents: "none",
                }}
            >
                {skills.map((skill, index) => {
                    if (index % 2 !== 0) {
                        const { x, y } = getSkillPosition(index, skills.length, orbitRadii[1]);
                        return (
                            <Box
                                key={skill.id}
                                sx={{
                                    position: "absolute",
                                    top: `calc(50% + ${y}px)`,
                                    left: `calc(50% + ${x}px)`,
                                    transform: "translate(-50%, -50%)",
                                    cursor: "pointer",
                                    userSelect: "none",
                                }}
                            >
                                <skill.Icon size={iconSize} color={iconColor} />
                            </Box>
                        );
                    }
                    return null;
                })}
            </Box>
        </Box>
    );
}
