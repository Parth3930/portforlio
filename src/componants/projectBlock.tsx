import React from 'react';
import { Box } from "@mui/material";
import slides from "@/componants/data/cariosolData.json"


interface CariosolData {
    src: string;
    alt: string;
}

interface ProjectBlockProps {
    data: CariosolData[];
}

const ProjectBlock: React.FC<ProjectBlockProps> = ({ data }) => {
    return (
        <Box sx={{ width: "100%", height: 310, marginTop: 3, display: "flex", justifyContent: "center", alignItems: "center", position: "relative", userSelect: "none", }}>
            <Box className="ProjectContainer" sx={{ width: "63%", height: "100%", display: "flex", overflow: "auto", gap: 5, paddingBottom: 2, justifyContent: "center" }}>
                {/* Render data items here */}
                {data.map((slide, index) => (
                    <img key={index} src={slide.src} alt={slide.alt} />
                ))}
            </Box>
        </Box>
    );
}

export default ProjectBlock;
