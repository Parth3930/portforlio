import { Box, Typography, Container, Divider, IconButton } from "@mui/material";
import { itim } from "./fonts/fonts";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Marquee = () => {
  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        background: "#FFD100",
        borderTop: "6px solid #000",
        borderBottom: "6px solid #000",
        py: 2,
        userSelect: "none",
        whiteSpace: "nowrap",
      }}
    >
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        style={{ display: "inline-block" }}
      >
        {[...Array(10)].map((_, i) => (
          <Typography
            key={i}
            className={itim.className}
            component="span"
            sx={{
              fontSize: "2rem",
              fontWeight: 900,
              mx: 4,
              color: "#000",
            }}
          >
            LET&apos;S BUILD SOMETHING AWESOME! 🚀 CONTACT ME TODAY! ✨
          </Typography>
        ))}
      </motion.div>
    </Box>
  );
};

export default function Footer() {
  const socialItems = [
    {
      label: "GITHUB",
      icon: FaGithub,
      color: "#000",
      url: "https://github.com/Parth3930",
    },
    {
      label: "LINKEDIN",
      icon: FaLinkedin,
      color: "#0A66C2",
      url: "https://www.linkedin.com/in/itzparthsharma",
    },
    { label: "TWITTER", icon: FaTwitter, color: "#1DA1F2", url: "#" },
    {
      label: "EMAIL",
      icon: FaEnvelope,
      color: "#EA4335",
      url: "mailto:sharmaparth.developer@gmail.com",
    },
  ];

  return (
    <Box sx={{ mt: 10 }}>
      <Marquee />

      <Box
        sx={{
          py: 10,
          background: "#FFF9E6",
          color: "#000",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <Typography
              className={itim.className}
              variant="h2"
              sx={{
                fontWeight: 900,
                mb: 4,
                fontSize: { xs: "3rem", md: "5rem" },
                WebkitTextStroke: "2px #000",
                textShadow: "8px 8px 0px #FF6B6B",
              }}
            >
              LET&apos;S <span style={{ color: "#FFD100" }}>CHAT!</span>
            </Typography>

            <Typography
              className={itim.className}
              sx={{
                fontSize: "1.5rem",
                mb: 6,
                fontWeight: 700,
                maxWidth: "600px",
                mx: "auto",
              }}
            >
              Have a cool project in mind? Or just want to talk about Unreal
              Engine 5? Slide into my DMs!
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: 3,
                mb: 8,
              }}
            >
              {socialItems.map((social) => (
                <motion.div
                  key={social.label}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IconButton
                    onClick={() => window.open(social.url, "_blank")}
                    sx={{
                      width: 80,
                      height: 80,
                      bgcolor: "#FFF",
                      border: "4px solid #000",
                      boxShadow: "6px 6px 0px #000",
                      color: "#000",
                      "&:hover": { bgcolor: social.color + "20" },
                    }}
                  >
                    <social.icon size={40} />
                  </IconButton>
                  <Typography
                    className={itim.className}
                    sx={{ mt: 1, fontWeight: 900, fontSize: "0.8rem" }}
                  >
                    {social.label}
                  </Typography>
                </motion.div>
              ))}
            </Box>
          </motion.div>

          <Divider sx={{ borderBottomWidth: 4, borderColor: "#000", mb: 6 }} />

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Typography
              className={itim.className}
              sx={{
                fontSize: "1.1rem",
                fontWeight: 900,
                background: "#FFF",
                border: "3px solid #000",
                px: 2,
                py: 0.5,
                transform: "rotate(-2deg)",
              }}
            >
              MADE BY PARTH SHARMA © 2026
            </Typography>

            <Box sx={{ display: "flex", gap: 3 }}>
              <Typography
                className={itim.className}
                sx={{
                  fontWeight: 900,
                  "&:hover": { color: "#FF6B6B" },
                  cursor: "pointer",
                }}
              >
                PRIVACY?
              </Typography>
              <Typography
                className={itim.className}
                sx={{
                  fontWeight: 900,
                  "&:hover": { color: "#4ECDC4" },
                  cursor: "pointer",
                }}
              >
                TERMS?
              </Typography>
            </Box>
          </Box>
        </Container>

        {/* Floating background stickers for the footer */}
        <Box
          component={motion.div}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          sx={{
            position: "absolute",
            top: 20,
            left: 20,
            width: 60,
            height: 60,
            border: "4px solid #000",
            borderRadius: "50%",
            bgcolor: "#4ECDC4",
            opacity: 0.3,
          }}
        />
        <Box
          component={motion.div}
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
          sx={{
            position: "absolute",
            bottom: 40,
            right: 20,
            width: 40,
            height: 40,
            border: "4px solid #000",
            bgcolor: "#FF6B6B",
            opacity: 0.3,
            transform: "rotate(45deg)",
          }}
        />
      </Box>
    </Box>
  );
}
