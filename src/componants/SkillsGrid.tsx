import React from 'react';
import Image from 'next/image';
import { Box } from "@mui/material";

const skillsLeft = [
    "/skills/html.png",
    "/skills/css.png",
    "/skills/javaScript.png",
    "/skills/express.png",
    "/skills/Nodejs.png",
    "/skills/TypeScript.png",
    "/skills/Bootstrap.png",
    "/skills/tailwind.png",
    "/skills/M.png",
    "/skills/Supabase.png",
    "/skills/PostgreSQL.png",
    "/skills/Vercle.png"
];

const skillsRight = [
    "/skills/Java.png",
    "/skills/Python.png",
    "/skills/Godot.png",
    "/skills/Docker.png",
];

const SkillsGrid = () => {
    return (
        <>
            <Box sx={{ display: { xs: "none", md: "grid" }, position: "absolute", marginLeft: { md: 2, lg: 5 }, width: "45%", height: 300, marginTop: 5, gridTemplateColumns: { md: "repeat(4, 70px)", lg: "repeat(4, 100px)" }, gridTemplateRows: "repeat(3, 95px)", alignItems: "center" }}>
                {skillsLeft.map((src, index) => (
                    <Box key={index} sx={{ backgroundImage: `url(${src})`, backgroundPosition: "center", backgroundRepeat: "none", backgroundSize: "cover", width: 60, height: 60 }} />))}
            </Box >

            <Box sx={{ display: { xs: "none", md: "grid" }, position: "absolute", right: 0, width: "45%", height: 300, marginTop: 5, gridTemplateColumns: { md: "repeat(4, 70px)", lg: "repeat(4, 100px)" }, gridTemplateRows: "repeat(3, 95px)", alignItems: "center", justifyContent: "right" }}>
                {skillsRight.map((src, index) => (
                    <Box key={index} sx={{ backgroundImage: `url(${src})`, backgroundPosition: "center", backgroundRepeat: "none", backgroundSize: "cover", width: 60, height: 60 }} />))}
            </Box>
        </>
    );
}

export default SkillsGrid;
