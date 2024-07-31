import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { mirza, itim } from "./fonts/fonts";
import HamburgerIvon from "./mobile/hamburgerIvon";

export default function NavBar() {
    return (
        <Box component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, ease: "easeIn" }} sx={{ display: "flex", position: "relative", width: "100%", gap: 3, height: 150, alignItems: "center", color: "#A0A0A0", justifyContent: "space-between", userSelect: "none", }}>
            <Box sx={{ borderRadius: "50%", borderColor: "#75A8AB", border: "solid", width: 50, height: 50, display: "flex", alignItems: "center", justifyContent: "center", marginLeft: 5, cursor: "pointer", transition: "color 0.3s ease-in, border-color 0.3s ease-in", ":hover": { color: "#75A8AB", borderColor: "#75A8AB" } }}>
                <Typography className={itim.className} variant="h3">P</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 3, marginRight: 5 }}>
                <Typography variant="h5" className={mirza.className} sx={{ cursor: "pointer", transition: "color 0.3s ease-in", ":hover": { color: "#75A8AB" }, display: { xs: "none", md: "block" } }}>About</Typography>
                <Typography variant="h5" className={mirza.className} sx={{ cursor: "pointer", transition: "color 0.3s ease-in", ":hover": { color: "#75A8AB" }, display: { xs: "none", md: "block" } }}>Skills</Typography>
                <Typography variant="h5" className={mirza.className} sx={{ cursor: "pointer", transition: "color 0.3s ease-in", ":hover": { color: "#75A8AB" }, display: { xs: "none", md: "block" } }}>Projects</Typography>
                <Typography variant="h5" className={mirza.className} sx={{ cursor: "pointer", transition: "color 0.3s ease-in", ":hover": { color: "#75A8AB" }, display: { xs: "none", md: "block" } }}>Contact</Typography>
                <HamburgerIvon />
            </Box>
        </Box>
    );
}
