"use client"
import SkillsGrid from "@/componants/SkillsGrid";
import BreathingLines from "@/componants/breathingLines";
import CodeBlock from "@/componants/codeblock";
import { itim, mirza } from "@/componants/fonts/fonts";
import SkillsGridMobile from "@/componants/mobile/skillsGrid";
import NavBar from "@/componants/navbar";
import ProjectBlock from "@/componants/projectBlock";
import { Container, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import slides from "@/componants/data/cariosolData.json"
import ContactForm from "@/componants/contactForm";

export default function Home() {

  const [currentImage, setCurrentImage] = useState(0);
  const images = ["/skills/React.png", "/skills/ReactActive.png"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);


  return (
    <Container maxWidth={false} disableGutters>
      <NavBar />
      <BreathingLines top="0rem" right="none" time="0s" />

      {/* Intro */}
      <Box sx={{ display: "flex", flexDirection: "column", marginLeft: { xs: "none", md: 15 }, marginTop: { xs: 8, md: 12 }, width: { xs: "100%", md: "35%", lg: "40%" }, alignItems: { xs: "center", md: "start" }, justifyContent: { xs: "center", md: "left" }, textAlign: { xs: "center", md: "start" }, gap: { xs: 1.5, md: 1 }, }}>
        <Typography variant="h2" className={itim.className} sx={{ color: "#FFFFFF" }}>Hey, <motion.span className={itim.className} initial={{ color: "#FFFFFF" }} animate={{ color: "#6CA2A6", transition: { delay: 0.5, duration: 1, ease: "easeIn" } }}>There!</motion.span></Typography>
        <Typography className={mirza.className} sx={{ color: "#FFFFFF", fontSize: { xs: 18, md: 20 }, marginX: { xs: 2, md: 0 } }}>I'm Parth, a full stack developer skilled in front-end and back-end technologies. I create dynamic applications, focusing on seamless user experiences. In my spare time, I enjoy developing games with the Godot Engine. Proficient in Python, Java, and other languages, with a strong interest in React, JavaScript, and clean code.</Typography>
        <Box sx={{ boxShadow: 2, display: { xs: "none", md: "flex" }, position: "absolute", right: 100, width: { md: "40%", lg: "33%" }, height: 250, bgcolor: "#3F3F3F", borderRadius: 5, flexDirection: "column" }}>
          <Box sx={{ display: "flex", width: "100%", marginTop: 1, marginLeft: 1, gap: 1 }}>
            <Box sx={{ width: 15, height: 15, bgcolor: "#FF9393", borderRadius: "50%" }}></Box>
            <Box sx={{ width: 15, height: 15, bgcolor: "#A5FFB3", borderRadius: "50%" }}></Box>
            <Box sx={{ width: 15, height: 15, bgcolor: "#D1F7FF", borderRadius: "50%" }}></Box>
          </Box>
          <CodeBlock />
        </Box>
        <BreathingLines top="25rem" right="0" time="2s" />
      </Box>
      {/*  */}


      {/* Skills */}
      <Typography component={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 3 } }} variant="h3" className={itim.className} sx={{ position: "relative", marginLeft: 15, color: "#6CA2A6", marginTop: { xs: 15, md: 40 } }}>Skills</Typography>
      <Box sx={{ marginTop: 17, height: 400, }}>
        <BreathingLines top="2rem" right="none" time="0s" />
        <BreathingLines top="20rem" right="none" time="0s" />

        <Box sx={{ width: "100%", height: 350, position: "absolute", display: { xs: "none", md: "flex" }, justifyContent: "center", alignItems: "center" }}>
          <Box sx={{ width: 150, height: 150, bgcolor: "#3F3F3F", borderRadius: "50%", zIndex: 2, display: 'flex', justifyContent: "center", alignItems: "center" }}>
            <motion.img animate={{ rotate: 360, transition: { repeat: Infinity, duration: 4, ease: "linear" } }} src={images[currentImage]} width={100} height={100} alt="Logo" />
          </Box>
        </Box>

        <Box sx={{ marginTop: -5 }}>
          <SkillsGrid />
          <SkillsGridMobile />
        </Box>
        <Box sx={{ width: "100%", height: "50%", position: "absolute", display: { xs: "none", md: "block" } }}>
          <Box sx={{ display: "flex", marginLeft: { xs: 5, md: 32, lg: 53, }, marginTop: { xs: 5, md: 10, lg: 13.95, }, gap: 0.4 }}>
            <BreathingLines position="relative" rotate={30} time="1" />
            <BreathingLines position="relative" rotate={-30} time="1" direction="right-to-left" />
          </Box>
          <Box sx={{ display: "flex", marginLeft: { xs: 5, md: 32.4, lg: 53, }, marginTop: { xs: 5, md: 23.3, lg: 15.5, }, gap: 0.4 }}>
            <BreathingLines position="relative" rotate={150} time="1" direction="right-to-left" />
            <BreathingLines position="relative" rotate={-150} time="1" />
          </Box>
        </Box>

        <BreathingLines top="2rem" right="0" time="0s" direction="right-to-left" />
        <BreathingLines top="20rem" right="0" time="0s" direction="right-to-left" />
      </Box>
      {/*  */}

      {/* Projects */}
      <Typography component={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 3 } }} variant="h3" className={itim.className} sx={{ position: "relative", marginLeft: { xs: 12, lg: 15 }, color: "#6CA2A6", marginTop: { xs: 5, md: 20 } }}>Projects</Typography>
      <Box sx={{ display: "flex", width: "100%", marginTop: { xs: 5, lg: 15 }, gap: 5 }}>
        <BreathingLines width="20%" top="11rem" rotate={90} left={{ xs: "0", lg: "5rem" }} direction="right-to-left" />

        <Box sx={{ width: "100%", height: 310, marginTop: 3, display: "flex", justifyContent: "center", alignItems: "center" }}>
          <ProjectBlock data={slides.slides} />
        </Box>

        <BreathingLines width="20%" top="11rem" rotate={90} right={{ xs: "0", lg: "5rem" }} />
      </Box>
      <Box sx={{ width: "100%", justifyContent: "center", display: "flex" }}>
        <BreathingLines width="30%" top="2rem" />
      </Box>

      {/* Contact */}
      <Box sx={{ display: "flex", width: "100%", justifyContent: { xs: "center", md: "left" }, marginTop: { xs: 5, md: 4 } }}>
        <Typography component={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 3 } }} variant="h3" className={itim.className} sx={{ position: "relative", marginLeft: { xs: 0, lg: 15 }, color: "#6CA2A6", marginTop: { xs: 5, md: 18 } }}>Contact</Typography>
      </Box>
      <Box sx={{ display: "flex", width: "100%", justifyContent: "center", marginTop: 6 }}>
        <Box sx={{ bgcolor: "#272929", width: "90%", height: 500, display: "flex", flexDirection: "column", borderColor: "#343333", borderWidth: 5, borderRadius: 5, marginBottom: 10 }}>
          <ContactForm />
        </Box>
      </Box>
    </Container >
  );
}