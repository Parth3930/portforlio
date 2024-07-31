import React from 'react';
import { Box } from "@mui/material";

const skills = [
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
    "/skills/Vercle.png",
    "/skills/Java.png",
    "/skills/Python.png",
    "/skills/Godot.png",
    "/skills/Docker.png",
];

const SkillsGridMobile = () => {
    return (
        <Box sx={{
            display: { xs: "grid", sm: "none" },
            position: "absolute",
            width: "100%",
            height: "auto",
            marginTop: 6,
            gridTemplateColumns: "repeat(5, 70px)",
            gridTemplateRows: "repeat(5, 70px)",
            alignItems: "center",
            justifyContent: "center"
        }}>
            {skills.map((src, index) => (
                <Box
                    key={index}
                    sx={{
                        backgroundImage: `url(${src})`,
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        width: 60,
                        height: 60
                    }}
                />
            ))}
        </Box>
    );
}

export default SkillsGridMobile;
