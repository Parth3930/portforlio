"use client";
import BreathingLines from "@/componants/breathingLines";
import CodeBlock from "@/componants/codeblock";
import { itim, mirza } from "@/componants/fonts/fonts";
import Nav from "@/componants/navbar";
import { Container, Box, Typography } from "@mui/material";
import SkillsOrbit from "@/componants/SkillsOrbit";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <Container maxWidth={false} disableGutters>
      <Nav />
      <BreathingLines top="0rem" right="none" time="0s" />
      {/* About */}
      <Box sx={{ display: "flex", flexDirection: "column", marginLeft: { xs: "none", md: 15 }, marginTop: { xs: 3, md: 12 }, width: { xs: "100%", md: "35%", lg: "40%" }, alignItems: { xs: "center", md: "start" }, justifyContent: { xs: "center", md: "left" }, textAlign: { xs: "center", md: "start" }, gap: { xs: 1.5, md: 1 } }}>
        <Typography variant="h2" className={itim.className} sx={{ color: "#FFFFFF" }}>
          Hey, <motion.span className={itim.className} initial={{ color: "#FFFFFF" }} animate={{ color: "#6CA2A6", transition: { delay: 0.5, duration: 1, ease: "easeIn" } }}>There!</motion.span>
        </Typography>
        <Typography className={mirza.className} sx={{ color: "#FFFFFF", fontSize: { xs: 18, md: 20 }, marginX: { xs: 2, md: 0 }, userSelect: "none" }}>
          I&apos;m Parth, a full stack developer skilled in front-end and back-end technologies. I create dynamic applications, focusing on seamless user experiences. In my spare time, I enjoy developing games with the Unreal Engine 5. Proficient in Python, Java, and other languages, with a strong interest in React, JavaScript, and clean code.
        </Typography>
        <Box sx={{ width: "100%", height: 50, display: "flex", marginTop: 1, justifyContent: { xs: "center", md: "start" } }}>
          <Box sx={{ flexDirection: "row", display: "flex", gap: 2 }}>
            <Image src="/socials/Github.png" width={45} height={45} alt="Github" style={{ cursor: "pointer" }}></Image>
            <Image src="/socials/Discord.png" width={45} height={45} alt="Discord" style={{ cursor: "pointer" }}></Image>
            <Image src="/socials/Gmail.png" width={45} height={45} alt="Gmail" style={{ cursor: "pointer" }}></Image>
            <Image src="/socials/Linkedin.png" width={45} height={45} alt="Linkedin" style={{ cursor: "pointer" }}></Image>
          </Box>
        </Box>
        <Box sx={{ boxShadow: 5, border: 2, borderColor: "#506769", display: { xs: "none", md: "flex" }, position: "absolute", right: 100, width: { md: "40%", lg: "33%" }, height: 250, bgcolor: "#1E1E1E", borderRadius: 5, flexDirection: "column" }}>
          <Box sx={{ display: "flex", width: "100%", marginTop: 1, marginLeft: 1, gap: 1 }}>
            <Box sx={{ width: 15, height: 15, bgcolor: "#FF9393", borderRadius: "50%" }}></Box>
            <Box sx={{ width: 15, height: 15, bgcolor: "#A5FFB3", borderRadius: "50%" }}></Box>
            <Box sx={{ width: 15, height: 15, bgcolor: "#D1F7FF", borderRadius: "50%" }}></Box>
          </Box>
          <CodeBlock />
        </Box>
        <BreathingLines top="25rem" right="0" time="2s" />
      </Box>
      {/* Skills */}
      <Box sx={{
        width: "100%", height: 600, display: "flex", marginTop: { xs: -5, md: 5, lg: 10 }, justifyContent: "center", alignItems: "center"
      }}>
        <SkillsOrbit />
      </Box>
    </Container >
  );
}
