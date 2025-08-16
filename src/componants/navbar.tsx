import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { mirza, itim } from "./fonts/fonts";
import React, { RefObject, useRef, useState } from 'react';

const varients = {
    openTop: { y: 10, rotate: -50 },
    openBottom: { y: -10, rotate: 50 },
    dissolve: { opacity: 0 },
    closed: {},
}

interface NavProps {
    aboutRef: RefObject<HTMLDivElement>;
    skillsRef: RefObject<HTMLDivElement>;
    projectsRef: RefObject<HTMLDivElement>;
}

export default function Nav({ aboutRef, skillsRef, projectsRef }: NavProps) {
    const [clicked, setClicked] = useState(false);

    const scrollToElement = (ref: RefObject<HTMLDivElement>) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <Box component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, ease: "easeIn" }} sx={{ display: "flex", position: "relative", width: "100%", gap: 3, height: 100, alignItems: "center", color: "#A0A0A0", justifyContent: "space-between", userSelect: "none", }}>
            <Box sx={{ borderRadius: "50%", borderColor: "#75A8AB", border: "solid", width: 45, height: 45, display: "flex", alignItems: "center", justifyContent: "center", marginLeft: 5, cursor: "pointer", transition: "color 0.3s ease-in, border-color 0.3s ease-in", ":hover": { color: "#75A8AB", borderColor: "#75A8AB" } }}>
                <Typography className={itim.className} variant="h4" sx={{ lineHeight: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>P</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 3, marginRight: 5 }}>
                <Typography variant="h5" className={mirza.className} sx={{ cursor: "pointer", transition: "color 0.3s ease-in", ":hover": { color: "#75A8AB" }, display: { xs: "none", md: "block" } }} onClick={() => scrollToElement(aboutRef)}>About</Typography>
                <Typography variant="h5" className={mirza.className} sx={{ cursor: "pointer", transition: "color 0.3s ease-in", ":hover": { color: "#75A8AB" }, display: { xs: "none", md: "block" } }} onClick={() => scrollToElement(skillsRef)}>Skills</Typography>
                <Typography variant="h5" className={mirza.className} sx={{ cursor: "pointer", transition: "color 0.3s ease-in", ":hover": { color: "#75A8AB" }, display: { xs: "none", md: "block" } }} onClick={() => scrollToElement(projectsRef)}>Projects</Typography>
                <Box sx={{ display: { xs: "block", md: "none" }, width: 40, height: 40 }} onClick={() => setClicked(!clicked)}>
                    <Box component={motion.div} sx={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", gap: 0.9, justifyContent: "center", alignItems: "center", "&:hover .line": { backgroundColor: "#75A8AB" } }}>
                        <Box component={motion.div} className="line" sx={{ width: "100%", height: 4, bgcolor: "#A0A0A0" }} variants={varients} animate={clicked ? "openTop" : "closed"} />
                        <Box component={motion.div} className="line" sx={{ width: "70%", height: 3, bgcolor: "#A0A0A0" }} variants={varients} animate={clicked ? "dissolve" : "closed"} />
                        <Box component={motion.div} className="line" sx={{ width: "100%", height: 4, bgcolor: "#A0A0A0" }} variants={varients} animate={clicked ? "openBottom" : "closed"} />
                    </Box>
                    {clicked && <Box component={motion.div} initial={{ y: -200 }} animate={{ y: -96 }} sx={{ width: '100%', position: "absolute", left: 0, height: 40, }}>
                        <Box sx={{ display: "flex", width: "100%", gap: 3, height: "100%", color: "#A0A0A0", userSelect: "none", justifyContent: "center", alignItems: "center" }}>
                            <Typography variant="h5" className={mirza.className} sx={{ cursor: "pointer", transition: "color 0.3s ease-in", ":hover": { color: "#75A8AB" } }} onClick={() => scrollToElement(aboutRef)}>About</Typography>
                            <Typography variant="h5" className={mirza.className} sx={{ cursor: "pointer", transition: "color 0.3s ease-in", ":hover": { color: "#75A8AB" } }} onClick={() => scrollToElement(skillsRef)}>Skills</Typography>
                            <Typography variant="h5" className={mirza.className} sx={{ cursor: "pointer", transition: "color 0.3s ease-in", ":hover": { color: "#75A8AB" } }} onClick={() => scrollToElement(projectsRef)}>Projects</Typography>
                        </Box>
                    </Box>}
                </Box>
            </Box>
        </Box>
    );
}