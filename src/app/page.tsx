"use client";
import BreathingLines from "@/componants/breathingLines";
import CodeBlock from "@/componants/codeblock";
import { itim, mirza } from "@/componants/fonts/fonts";
import Nav from "@/componants/navbar";
import { Container, Box, Typography, IconButton } from "@mui/material";
import SkillsOrbit from "@/componants/SkillsOrbit";
import { motion } from "framer-motion";
import Projects from "@/componants/projects";
import { FaGithub, FaDiscord, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { useEffect, useRef } from "react";

export default function Home() {
  // Add meta tags for SEO
  const metaTags = {
    title: "Parth Sharma - Developer Portfolio",
    description: "Explore my portfolio to see my projects, skills, and experience as a developer.",
  };

  // Set document title and description inside useEffect
  useEffect(() => {
    document.title = metaTags.title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", metaTags.description);
    }
  }, [metaTags.title, metaTags.description]); // Include metaTags dependencies

  // Socials mapping using react-icons
  const socials = [
    { id: "github", Icon: FaGithub, url: "https://github.com/Parth3930" },
    { id: "discord", Icon: FaDiscord, url: "https://discord.gg/sauHKcy2Zc" },
    { id: "gmail", Icon: FaEnvelope, url: "mailto:sharmaparth.developer@gmail.com" },
    { id: "linkedin", Icon: FaLinkedin, url: "https://www.linkedin.com/in/itzparthsharma?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  ];

  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  return (
    <Container maxWidth={false} disableGutters>
      <Nav aboutRef={aboutRef} skillsRef={skillsRef} projectsRef={projectsRef} />
      <BreathingLines top="0rem" right="none" time="0s" />
      {/* About */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginLeft: { xs: "none", md: 15 },
          marginTop: { xs: 3, md: 12 },
          width: { xs: "100%", md: "35%", lg: "40%" },
          alignItems: { xs: "center", md: "start" },
          justifyContent: { xs: "center", md: "left" },
          textAlign: { xs: "center", md: "start" },
          gap: { xs: 1.5, md: 1 },
        }}
        ref={aboutRef}
      >
        <Typography variant="h2" className={itim.className} sx={{ color: "#FFFFFF" }}>
          Hey,{" "}
          <motion.span
            className={itim.className}
            initial={{ color: "#FFFFFF" }}
            animate={{
              color: "#6CA2A6",
              transition: { delay: 0.5, duration: 1, ease: "easeIn" },
            }}
          >
            There!
          </motion.span>
        </Typography>
        <Typography
          className={mirza.className}
          sx={{
            color: "#FFFFFF",
            fontSize: { xs: 18, md: 20 },
            marginX: { xs: 2, md: 0 },
            userSelect: "none",
          }}
        >
          I&apos;m Parth, a full stack developer skilled in front-end and back-end
          technologies. I create dynamic applications, focusing on seamless user
          experiences. In my spare time, I enjoy developing games with the Unreal
          Engine 5. Proficient in Python, Java, and other languages, with a strong
          interest in React, JavaScript, and clean code.
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: 50,
            display: "flex",
            marginTop: 1,
            justifyContent: { xs: "center", md: "start" },
          }}
        >
          <Box sx={{ flexDirection: "row", display: "flex", gap: 2 }}>
            {socials.map(({ id, Icon, url }) => (
              <IconButton
                key={id}
                sx={{ color: "#A0A0A0", fontSize: { xs: 25, md: 35 } }} // smaller and grey
                onClick={() => window.open(url, "_blank")}
              >
                <Icon />
              </IconButton>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            boxShadow: 5,
            border: 2,
            borderColor: "#506769",
            display: { xs: "none", md: "flex" },
            position: "absolute",
            right: 100,
            width: { md: "40%", lg: "33%" },
            height: 250,
            bgcolor: "#181818",
            borderRadius: 5,
            flexDirection: "column",
          }}
        >
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
      <Box
        sx={{
          overflow: "hidden",
          width: "100%",
          height: "100dvh",
          display: "flex",
          marginTop: { xs: -5, md: 5, lg: 10 },
          justifyContent: "center",
          alignItems: "center",
        }}
        ref={skillsRef}
      >
        <SkillsOrbit />
      </Box>
      <Box
        sx={{
          width: "100%",
          height: 350,
          display: "flex",
          marginTop: { xs: -5, md: 5, lg: 10 },
          flexDirection: "column",
        }}
        ref={projectsRef}
      >
        <Projects />
      </Box>
    </Container>
  );
}
