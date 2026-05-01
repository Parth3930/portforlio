import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import { itim } from "./fonts/fonts";

const milestones = [
  {
    year: "2026",
    title: "HIRECODE DEVELOPMENT",
    description:
      "Currently building HireCode, a technical assessment platform for developers, as part of Avina's product suite. Working on advanced features and scaling infrastructure.",
    color: "#FF6B6B",
  },
  {
    year: "2025",
    title: "YAPSTER SCALE-UP",
    description:
      "Developing the complete backend using Rust (Axum, Rocket) and mobile app with Flutter. Implementing Kubernetes auto-scaling on Google Cloud.",
    color: "#FFD100",
  },
  {
    year: "2024",
    title: "CTO @ AVINA",
    description:
      "Leading technology decisions across the stack for Avina's products, including Yapster and HireCode. Architecting full-stack systems and DevOps pipelines.",
    color: "#4ECDC4",
  },
  {
    year: "2024",
    title: "REALM & PULSEVOTE",
    description:
      "Launched Realm, a serverless P2P AR collaboration board, and PulseVote, an AI-powered Discord agent using Mistral.",
    color: "#45B7D1",
  },
  {
    year: "2023",
    title: "AVINA MVP",
    description:
      "Started development of Avina's initial MVP using Next.js and Supabase, laying the foundation for products like Yapster and HireCode.",
    color: "#9b59b6",
  },
];

const Journey = () => {
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            className={itim.className}
            variant="h2"
            sx={{
              fontWeight: 900,
              display: "inline-block",
              background: "#FF6B6B",
              padding: "10px 30px",
              border: "5px solid #000",
              boxShadow: "10px 10px 0px #000",
              transform: "rotate(-1deg)",
              color: "#FFF",
              mb: 4,
            }}
          >
            MY STORY SO FAR
          </Typography>
        </Box>

        <Box sx={{ position: "relative" }}>
          {/* SQUIGGLY LINE */}
          <Box
            sx={{
              position: "absolute",
              left: { xs: 20, md: "50%" },
              top: 0,
              bottom: 0,
              width: 8,
              bgcolor: "#000",
              transform: { md: "translateX(-50%)" },
              borderRadius: "10px",
            }}
          />

          {milestones.map((milestone, index) => (
            <Box
              key={index}
              component={motion.div}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100 }}
              sx={{
                display: "flex",
                justifyContent: index % 2 === 0 ? "flex-start" : "flex-end",
                mb: 8,
                position: "relative",
                width: "100%",
              }}
            >
              {/* Dot */}
              <Box
                sx={{
                  position: "absolute",
                  left: { xs: 20, md: "50%" },
                  top: 30,
                  width: 30,
                  height: 30,
                  bgcolor: milestone.color,
                  border: "4px solid #000",
                  borderRadius: "8px",
                  transform: "translateX(-50%) rotate(45deg)",
                  zIndex: 2,
                  boxShadow: "4px 4px 0px #000",
                }}
              />

              <Box
                sx={{
                  width: { xs: "calc(100% - 70px)", md: "42%" },
                  ml: { xs: 8, md: 0 },
                  p: 3,
                  bgcolor: "#FFF",
                  border: "4px solid #000",
                  boxShadow: `${index % 2 === 0 ? "-8px" : "8px"} 8px 0px #000`,
                  borderRadius: "15px",
                  textAlign: index % 2 === 0 ? { md: "right" } : "left",
                  transform: `rotate(${index % 2 === 0 ? "-1deg" : "1deg"})`,
                }}
              >
                <Typography
                  className={itim.className}
                  variant="h5"
                  sx={{
                    color: milestone.color,
                    fontWeight: 900,
                    mb: 1,
                    WebkitTextStroke: "1px #000",
                  }}
                >
                  {milestone.year}
                </Typography>
                <Typography
                  className={itim.className}
                  variant="h4"
                  sx={{ color: "#000", fontWeight: 900, mb: 1 }}
                >
                  {milestone.title}
                </Typography>
                <Typography
                  className={itim.className}
                  variant="h6"
                  sx={{ color: "#333", lineHeight: 1.4, fontWeight: 600 }}
                >
                  {milestone.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Journey;
