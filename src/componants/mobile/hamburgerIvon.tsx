import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { mirza } from '../fonts/fonts';

const varients = {
    openTop: { y: 10, rotate: -50 },
    openBottom: { y: -10, rotate: 50 },
    dissolve: { opacity: 0 },
    closed: {},
}
export default function HamburgerIcon() {
    const [clicked, setClicked] = useState(false);

    return (
        <Box sx={{ display: { xs: "block", md: "none" }, width: 40, height: 40 }}>
            <Box component={motion.div} sx={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", gap: 0.9, justifyContent: "center", alignItems: "center", "&:hover .line": { backgroundColor: "#75A8AB" } }} onClick={() => setClicked(!clicked)} variants={varients}>
                <Box component={motion.div} className="line" sx={{ width: "100%", height: 4, bgcolor: "#A0A0A0" }} variants={varients} animate={clicked ? "openTop" : "closed"} />
                <Box component={motion.div} className="line" sx={{ width: "70%", height: 3, bgcolor: "#A0A0A0" }} variants={varients} animate={clicked ? "dissolve" : "closed"} />
                <Box component={motion.div} className="line" sx={{ width: "100%", height: 4, bgcolor: "#A0A0A0" }} variants={varients} animate={clicked ? "openBottom" : "closed"} />
            </Box>
            {clicked && <Box component={motion.div} initial={{ y: -200 }} animate={{ y: -96 }} sx={{ width: '100%', position: "absolute", left: 0, height: 40, }}>
                <Box sx={{ display: "flex", width: "100%", gap: 3, height: "100%", color: "#A0A0A0", userSelect: "none", justifyContent: "center", alignItems: "center" }}>
                    <Typography variant="h5" className={mirza.className} sx={{ cursor: "pointer", transition: "color 0.3s ease-in", ":hover": { color: "#75A8AB" } }}>About</Typography>
                    <Typography variant="h5" className={mirza.className} sx={{ cursor: "pointer", transition: "color 0.3s ease-in", ":hover": { color: "#75A8AB" } }}>Projects</Typography>
                    <Typography variant="h5" className={mirza.className} sx={{ cursor: "pointer", transition: "color 0.3s ease-in", ":hover": { color: "#75A8AB" } }}>Skills</Typography>
                    <Typography variant="h5" className={mirza.className} sx={{ cursor: "pointer", transition: "color 0.3s ease-in", ":hover": { color: "#75A8AB" } }}>Contact</Typography>
                </Box>
            </Box>
            }
        </Box>
    );
}
