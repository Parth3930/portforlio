import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Chip,
  IconButton,
} from "@mui/material";
import { Github, Zap } from "lucide-react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { itim } from "./fonts/fonts";
import React, { useRef } from "react";

const projects = [
  {
    title: "Yapster",
    description:
      "A social media platform for Gen Z focused on authentic connections. Built with a high-performance Rust backend and cross-platform Flutter mobile app.",
    tech: ["Flutter", "Rust", "Axum", "WebSocket", "PostgreSQL", "Kubernetes"],
    link: "https://play.google.com/store/apps/details?id=com.yapster.avina",
    color: "#FF6B6B",
    tag: "LIVE NOW",
  },
  {
    title: "Avina Marketplace",
    description:
      "Financial marketplace platform integrating Gemini AI to fetch banking data and recommend financial products in real-time.",
    tech: ["Next.js", "TypeScript", "Supabase", "Gemini AI", "Material UI"],
    link: "https://avina.money/",
    color: "#4ECDC4",
    tag: "FINTECH",
  },
  {
    title: "HireCode",
    description:
      "Interactive coding platform for technical assessments, featuring challenges, refactoring tasks, and real-time leaderboards.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    link: "https://hirecode.live/",
    color: "#45B7D1",
    tag: "WEB APP",
  },
  {
    title: "Realm",
    description:
      "P2P serverless AR Board for real-time gamified collaboration with friends. Built for interactive spatial experiences.",
    tech: ["Astro", "WebRTC", "AR", "P2P"],
    link: "https://realim.vercel.app/",
    github: "https://github.com/Parth3930/Realim",
    color: "#FFD100",
    tag: "EXPERIMENT",
  },
  {
    title: "PulseVote",
    description:
      "Discord AI agent using Mistral, providing advanced Discord features and automated community engagement capabilities.",
    tech: ["Discord.js", "Mistral AI", "Node.js", "TypeScript"],
    github: "https://github.com/Parth3930",
    color: "#9b59b6",
    tag: "AI AGENT",
  },
  {
    title: "Rusty-OS",
    description:
      "Minimal operating system written from scratch in Rust, exploring low-level systems programming and kernel development.",
    tech: ["Rust", "Assembly", "Kernel"],
    github: "https://github.com/Parth3930/Rusty-OS",
    color: "#e67e22",
    tag: "SYSTEMS",
  },
];

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const cardRef = useRef<HTMLDivElement>(null);

  // Smooth out the rotation values
  const springConfig = { damping: 20, stiffness: 200 };
  const rotateX = useSpring(
    useTransform(y, [-100, 100], [10, -10]),
    springConfig,
  );
  const rotateY = useSpring(
    useTransform(x, [-100, 100], [-10, 10]),
    springConfig,
  );

  function handleMouse(event: React.MouseEvent) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate distance from center (-100 to 100)
    const mouseX = ((event.clientX - centerX) / (rect.width / 2)) * 100;
    const mouseY = ((event.clientY - centerY) / (rect.height / 2)) * 100;

    x.set(mouseX);
    y.set(mouseY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      style={{ perspective: 1000, height: "100%" }}
    >
      {/* Event listener on a stable container to prevent stuttering */}
      <Box
        ref={cardRef}
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
        sx={{
          height: "100%",
          cursor: "pointer",
          position: "relative",
          // Invisible solid hit area to prevent stutter when the card rotates underneath
          "&::after": {
            content: '""',
            position: "absolute",
            inset: -20,
            zIndex: 0,
            background: "transparent",
          },
        }}
      >
        <motion.div
          style={{
            rotateX,
            rotateY,
            height: "100%",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Card
            sx={{
              height: "100%",
              background: "#FFF",
              border: "4px solid #000",
              boxShadow: "10px 10px 0px #000",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              overflow: "visible",
              position: "relative",
              transition: "box-shadow 0.2s",
              "&:hover": {
                boxShadow: "15px 15px 0px #000",
              },
            }}
          >
            {/* Tag Sticker */}
            <Box
              sx={{
                position: "absolute",
                top: -15,
                right: -10,
                bgcolor: "#000",
                color: "#FFF",
                px: 2,
                py: 0.5,
                borderRadius: "5px",
                zIndex: 10,
                transform: "rotate(5deg)",
                fontWeight: 900,
                fontSize: "0.8rem",
                border: "2px solid #FFF",
              }}
            >
              {project.tag}
            </Box>

            <Box
              sx={{
                height: 120,
                background: project.color,
                borderBottom: "4px solid #000",
                borderTopLeftRadius: "16px",
                borderTopRightRadius: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  width: "200%",
                  height: "200%",
                  opacity: 0.1,
                  backgroundImage: "radial-gradient(#000 20%, transparent 20%)",
                  backgroundSize: "10px 10px",
                }}
              />
              <Typography
                className={itim.className}
                variant="h3"
                sx={{
                  fontWeight: 900,
                  color: "#000",
                  transform: "rotate(-2deg)",
                  zIndex: 1,
                  fontSize: { xs: "2rem", md: "2.5rem" },
                  textAlign: "center",
                  px: 1,
                }}
              >
                {project.title}
              </Typography>
            </Box>

            <CardContent
              sx={{
                p: 3,
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                className={itim.className}
                sx={{
                  color: "#000",
                  mb: 3,
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  lineHeight: 1.3,
                }}
              >
                {project.description}
              </Typography>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 4 }}>
                {project.tech.map((tech: string, i: number) => (
                  <motion.div key={i} whileHover={{ scale: 1.1, rotate: 5 }}>
                    <Chip
                      label={tech}
                      size="small"
                      sx={{
                        bgcolor: "#FFF",
                        color: "#000",
                        border: "3px solid #000",
                        fontWeight: 900,
                        boxShadow: "3px 3px 0px #000",
                        fontFamily: "Itim",
                        cursor: "default",
                      }}
                    />
                  </motion.div>
                ))}
              </Box>

              <Box sx={{ mt: "auto", display: "flex", gap: 2 }}>
                <Button
                  fullWidth
                  variant="contained"
                  component="a"
                  href={project.link || project.github}
                  target="_blank"
                  sx={{
                    bgcolor: project.color,
                    color: "#000",
                    border: "4px solid #000",
                    boxShadow: "6px 6px 0px #000",
                    fontWeight: 900,
                    borderRadius: "12px",
                    fontSize: "1rem",
                    "&:hover": {
                      bgcolor: project.color,
                      boxShadow: "2px 2px 0px #000",
                      transform: "translate(2px, 2px)",
                    },
                  }}
                >
                  CHECK IT OUT <Zap size={18} style={{ marginLeft: 8 }} />
                </Button>
                {project.github && (
                  <IconButton
                    component="a"
                    href={project.github}
                    target="_blank"
                    sx={{
                      border: "4px solid #000",
                      boxShadow: "6px 6px 0px #000",
                      bgcolor: "#FFF",
                      borderRadius: "12px",
                      "&:hover": {
                        bgcolor: "#f0f0f0",
                        boxShadow: "2px 2px 0px #000",
                        transform: "translate(2px, 2px)",
                      },
                    }}
                  >
                    <Github color="#000" />
                  </IconButton>
                )}
              </Box>
            </CardContent>
          </Card>
        </motion.div>
      </Box>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <Box
      id="projects"
      sx={{ py: 15, px: { xs: 3, md: 10 }, position: "relative" }}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: -1,
          opacity: 0.05,
          backgroundImage: "radial-gradient(#000 10%, transparent 10%)",
          backgroundSize: "30px 30px",
        }}
      />

      <Box sx={{ textAlign: "center", mb: 10 }}>
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.5 }}
        >
          <Typography
            className={itim.className}
            variant="h2"
            sx={{
              fontWeight: 900,
              display: "inline-block",
              background: "#FFD100",
              padding: "15px 40px",
              border: "6px solid #000",
              boxShadow: "12px 12px 0px #000",
              transform: "rotate(-2deg)",
              fontSize: { xs: "2.5rem", md: "4rem" },
              mb: 2,
            }}
          >
            EPIC PROJECTS 🚀
          </Typography>
        </motion.div>
      </Box>

      {/* ✅ Masonry-style alternating grid — width only, uniform height */}
      <Box
        sx={{
          display: "grid",
          // 5-column base grid: cards span 3 or 2 columns to alternate wide/narrow
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(5, 1fr)",
          },
          gap: { xs: 4, md: 6 },
          alignItems: "stretch",
        }}
      >
        {projects.map((project, idx) => {
          const row = Math.floor(idx / 2);
          const isFirst = idx % 2 === 0;

          return (
            <Box
              key={idx}
              sx={{
                gridColumn: {
                  xs: "1 / -1",
                  sm: isFirst
                    ? "1 / span " + (row % 2 === 0 ? 3 : 2)
                    : (row % 2 === 0 ? "4 / span 2" : "3 / span 3"),
                },
                transition: "transform 0.35s cubic-bezier(.4,2,.6,1)",
                "&:hover": {
                  zIndex: 2,
                  transform: "scale(1.03) rotate(-1deg)",
                },
              }}
            >
              <ProjectCard project={project} index={idx} />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Projects;