import { useEffect, useRef, RefObject } from "react";
import { itim, mirza } from "@/componants/fonts/fonts";
import Nav from "@/componants/navbar";
import { Container, Box, Typography, IconButton, Button } from "@mui/material";
import SkillsOrbit from "@/componants/SkillsOrbit";
import { motion } from "framer-motion";
import Projects from "@/componants/projects";
import Journey from "@/componants/journey";
import Footer from "@/componants/footer";
import { FaGithub, FaDiscord, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { ArrowDown } from "lucide-react";

interface HTMLLinkDescriptor extends HTMLLinkElement {
  rel: string;
}

export default function App() {
  const metaTags = {
    title: "Parth Sharma - Cool Portfolio",
    description:
      "Co-founder & CTO Yapster & HireCode. Building live SaaS platforms and high-performance backends.",
  };

  useEffect(() => {
    document.title = metaTags.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", metaTags.description);
    }

    // Update Favicon dynamically
    const link = (document.querySelector("link[rel*='icon']") ||
      document.createElement("link")) as HTMLLinkDescriptor;
    link.type = "image/svg+xml";
    link.rel = "shortcut icon";
    link.href =
      "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🚀</text></svg>";
    document.getElementsByTagName("head")[0].appendChild(link);
  }, [metaTags.title, metaTags.description]);

  const socials = [
    {
      id: "github",
      Icon: FaGithub,
      url: "https://github.com/Parth3930",
      color: "#000",
    },
    {
      id: "discord",
      Icon: FaDiscord,
      url: "https://discord.gg/sauHKcy2Zc",
      color: "#5865F2",
    },
    {
      id: "gmail",
      Icon: FaEnvelope,
      url: "mailto:sharmaparth.developer@gmail.com",
      color: "#EA4335",
    },
    {
      id: "linkedin",
      Icon: FaLinkedin,
      url: "https://www.linkedin.com/in/itzparthsharma?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      color: "#0A66C2",
    },
  ];

  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const scrollToElement = (ref: RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{ minHeight: "100vh", bgcolor: "var(--background)" }}
    >
      <Nav
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
      />

      {/* Hero Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          pt: { xs: 20, md: 25 },
          pb: 10,
          px: { xs: 2, md: 10 },
          alignItems: "center",
          textAlign: "center",
          gap: 4,
        }}
        ref={aboutRef}
      >
        <Box sx={{ position: "relative" }}>
          <Typography
            variant="h1"
            className={itim.className}
            sx={{
              fontSize: { xs: "3.5rem", md: "6rem" },
              fontWeight: 900,
              color: "#000",
              lineHeight: 1,
              textTransform: "uppercase",
              WebkitTextStroke: "2px #000",
              textShadow: "6px 6px 0px #FFD100",
            }}
          >
            HEY, I&apos;M <span style={{ color: "#FF6B6B" }}>PARTH!</span>
          </Typography>
        </Box>

        <Typography
          className={mirza.className}
          sx={{
            color: "#000",
            fontSize: { xs: 22, md: 28 },
            maxWidth: "800px",
            fontWeight: 600,
            lineHeight: 1.4,
            background: "#FFF",
            border: "4px solid #000",
            padding: "20px",
            boxShadow: "10px 10px 0px #000",
            transform: "rotate(1deg)",
          }}
        >
          Co-founder & CTO at Yapster & HireCode. Building a live SaaS platform for technical hiring and architecting high-performance backends.
        </Typography>

        <Box sx={{ display: "flex", gap: 3, mt: 4 }}>
          {socials.map(({ id, Icon, url, color }) => (
            <motion.div key={id} whileHover={{ y: -5, scale: 1.1 }}>
              <IconButton
                sx={{
                  color: "#000",
                  fontSize: { xs: 30, md: 40 },
                  bgcolor: "#FFF",
                  border: "3px solid #000",
                  boxShadow: "4px 4px 0px #000",
                  "&:hover": { bgcolor: color + "20" },
                }}
                onClick={() => window.open(url, "_blank")}
              >
                <Icon />
              </IconButton>
            </motion.div>
          ))}
        </Box>

        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <Button
            className="cartoon-btn"
            sx={{
              mt: 4,
              fontSize: { xs: "1.1rem", md: "1.4rem" },
              borderRadius: "12px",
              fontFamily: "Itim",
              padding: "12px 30px",
              background: "#FFD100",
              color: "#000",
              border: "4px solid #000",
              boxShadow: "6px 6px 0px #000",
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              textTransform: "none",
              fontWeight: 900,
              "&:hover": {
                background: "#FF6B6B",
                color: "#FFF",
                boxShadow: "3px 3px 0px #000",
                transform: "translate(3px, 3px)",
              },
              "&:active": {
                transform: "translate(5px, 5px)",
                boxShadow: "1px 1px 0px #000",
              },
            }}
            onClick={() => scrollToElement(projectsRef)}
          >
            SEE MY WORK
            <motion.div
              animate={{ y: [0, 3, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              <ArrowDown size={24} strokeWidth={3} />
            </motion.div>
          </Button>
        </motion.div>
      </Box>

      {/* Skills Section */}
      <Box sx={{ mt: 10 }} ref={skillsRef}>
        <SkillsOrbit />
      </Box>

      {/* Journey Section */}
      <Box sx={{ mt: 10 }}>
        <Journey />
      </Box>

      {/* Projects Section */}
      <Box sx={{ mt: 10, pb: 10 }} ref={projectsRef}>
        <Projects />
      </Box>

      <Footer />

      {/* Floating Sticker */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        style={{
          position: "fixed",
          bottom: 30,
          right: 30,
          background: "#9B59B6",
          color: "#FFF",
          padding: "10px 20px",
          border: "4px solid #000",
          boxShadow: "5px 5px 0px #000",
          fontWeight: 900,
          zIndex: 1000,
          transform: "rotate(10deg)",
          cursor: "pointer",
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        GO UP?
      </motion.div>
    </Container>
  );
}
