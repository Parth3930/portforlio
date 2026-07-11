import { motion } from "framer-motion";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { itim } from "./fonts/fonts";
import {
  FaJs,
  FaNodeJs,
  FaReact,
  FaDocker,
  FaRust,
  FaPython,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiSupabase,
  SiPostgresql,
  SiFlutter,
  SiDart,
  SiFirebase,
  SiRedis,
  SiKubernetes,
  SiTerraform,
  SiNextdotjs,
  SiGooglecloud,
  SiScylladb,
  SiWebrtc,
  SiVercel,
  SiNetlify,
  SiExpress,
  SiMui,
  SiFramer,
  SiOpenai,
} from "react-icons/si";

const skills = [
  { id: "rust", Icon: FaRust, color: "#DEA584" },
  { id: "ts", Icon: SiTypescript, color: "#3178C6" },
  { id: "nextjs", Icon: SiNextdotjs, color: "#000000" },
  { id: "flutter", Icon: SiFlutter, color: "#02569B" },
  { id: "dart", Icon: SiDart, color: "#0175C2" },
  { id: "react", Icon: FaReact, color: "#61DAFB" },
  { id: "node", Icon: FaNodeJs, color: "#339933" },
  { id: "postgres", Icon: SiPostgresql, color: "#4169E1" },
  { id: "redis", Icon: SiRedis, color: "#DC382D" },
  { id: "scylla", Icon: SiScylladb, color: "#3B5998" },
  { id: "supabase", Icon: SiSupabase, color: "#3ECF8E" },
  { id: "firebase", Icon: SiFirebase, color: "#FFCA28" },
  { id: "docker", Icon: FaDocker, color: "#2496ED" },
  { id: "k8s", Icon: SiKubernetes, color: "#326CE5" },
  { id: "terraform", Icon: SiTerraform, color: "#7B42BC" },
  { id: "gcp", Icon: SiGooglecloud, color: "#4285F4" },
  { id: "webrtc", Icon: SiWebrtc, color: "#333333" },
  { id: "vercel", Icon: SiVercel, color: "#000000" },
  { id: "netlify", Icon: SiNetlify, color: "#00C7B7" },
  { id: "express", Icon: SiExpress, color: "#000000" },
  { id: "mui", Icon: SiMui, color: "#007FFF" },
  { id: "framer", Icon: SiFramer, color: "#0055FF" },
  { id: "tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
  { id: "js", Icon: FaJs, color: "#F7DF1E" },
  { id: "python", Icon: FaPython, color: "#3776AB" },
  { id: "openai", Icon: SiOpenai, color: "#412991" },
];

export default function SkillsOrbit() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ py: 10, textAlign: "center", overflow: "visible" }}>
      <Typography
        className={itim.className}
        variant="h2"
        sx={{
          fontWeight: 900,
          display: "inline-block",
          background: "#4ECDC4",
          padding: "10px 30px",
          border: "5px solid #000",
          boxShadow: "10px 10px 0px #000",
          transform: "rotate(2deg)",
          mb: 8,
          color: "#000",
        }}
      >
        THINGS I KNOW
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          justifyContent: "center",
          maxWidth: "1000px",
          mx: "auto",
          px: 2,
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.2, rotate: index % 2 === 0 ? 10 : -10 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: index * 0.05,
            }}
          >
            <Box
              sx={{
                width: isMobile ? 80 : 100,
                height: isMobile ? 80 : 100,
                background: "#FFF",
                border: "4px solid #000",
                boxShadow: "6px 6px 0px #000",
                borderRadius: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s",
                "&:hover": {
                  background: skill.color + "20",
                },
              }}
            >
              <skill.Icon size={isMobile ? 40 : 50} color={skill.color} />
            </Box>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
}
