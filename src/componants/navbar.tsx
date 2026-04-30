import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { itim } from "./fonts/fonts";
import { RefObject } from "react";

interface NavProps {
  aboutRef: RefObject<HTMLDivElement | null>;
  skillsRef: RefObject<HTMLDivElement | null>;
  projectsRef: RefObject<HTMLDivElement | null>;
}

export default function Nav({ aboutRef, skillsRef, projectsRef }: NavProps) {
  const scrollToElement = (ref: RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { label: "ABOUT", ref: aboutRef, color: "#FF6B6B" },
    { label: "SKILLS", ref: skillsRef, color: "#4ECDC4" },
    { label: "PROJECTS", ref: projectsRef, color: "#45B7D1" },
  ];

  return (
    <Box
      component={motion.div}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      sx={{
        display: "flex",
        position: "fixed",
        top: 20,
        left: { xs: 20, md: "50%" },
        transform: { xs: "none", md: "translateX(-50%)" },
        zIndex: 1000,
        gap: { xs: 1, md: 2 },
        padding: { xs: "8px 10px", md: "10px 20px" },
        background: "#FFF",
        border: "4px solid #000",
        boxShadow: "6px 6px 0px #000",
        borderRadius: "15px",
        alignItems: "center",
        justifyContent: "center",
        userSelect: "none",
        width: { xs: "calc(100vw - 40px)", md: "fit-content" },
        maxWidth: { xs: "calc(100vw - 40px)", md: "fit-content" },
        minWidth: 0,
        flexWrap: { xs: "wrap", md: "nowrap" },
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          background: "#FFD100",
          border: "3px solid #000",
          width: 40,
          height: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "8px",
          cursor: "pointer",
          mr: 2,
          boxShadow: "2px 2px 0px #000",
          "&:active": {
            transform: "translate(1px, 1px)",
            boxShadow: "1px 1px 0px #000",
          },
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <Typography
          className={itim.className}
          variant="h5"
          sx={{ fontWeight: 900 }}
        >
          P
        </Typography>
      </Box>

      {navItems.map((item) => (
        <Typography
          key={item.label}
          className={itim.className}
          sx={{
            cursor: "pointer",
            fontWeight: 900,
            fontSize: { xs: "0.75rem", md: "1rem" },
            padding: { xs: "4px 8px", md: "5px 12px" },
            border: "3px solid transparent",
            transition: "all 0.2s",
            whiteSpace: "nowrap",
            "&:hover": {
              background: item.color,
              border: "3px solid #000",
              boxShadow: "3px 3px 0px #000",
              borderRadius: "8px",
              color: "#FFF",
              transform: "rotate(-3deg) scale(1.1)",
            },
          }}
          onClick={() => scrollToElement(item.ref)}
        >
          {item.label}
        </Typography>
      ))}
    </Box>
  );
}
