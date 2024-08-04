import React, { RefObject, useState } from 'react';
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import BreathingLines from './breathingLines';


const Projects = () => {
    const [hoveredBox, setHoveredBox] = useState<string | null>(null);

    return (
        <Box
            sx={{ width: "100%", display: { xs: "none", md: "flex" }, justifyContent: "center", alignItems: "center", paddingBottom: 45, position: "relative" }}

        >
            <BreathingLines rotate={90} top={27.7} width={221} />
            <BreathingLines rotate={0} top={10} width={{ xs: 100, md: 150, lg: 200 }} marginLeft={{ xs: 13, lg: 25 }} time="0.2s" />

            <Box
                component={motion.div}
                initial={{ padding: 3, height: 50, width: 225 }}
                sx={{
                    position: "absolute",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    bgcolor: "#181818",
                    marginLeft: 70,
                    marginTop: 10,
                    borderRadius: 2,
                    gap: 2,
                }}
                whileHover={{ margin: 0, width: "60%", height: "100%", zIndex: 1 }}
                onMouseEnter={() => setHoveredBox('box1')}
                onMouseLeave={() => setHoveredBox(null)}
            >
                <Typography variant='h5' sx={{ color: "white", textAlign: "center" }}>
                    Ecommerce Web
                </Typography>
                {hoveredBox === 'box1' && (
                    <Box
                        sx={{
                            width: "90%",
                            height: "90%",
                            backgroundImage: `url('/projects/store.png')`,
                            backgroundSize: "cover",
                            borderRadius: 1
                        }}
                    />
                )}
            </Box>

            <BreathingLines rotate={0} top={25} width={{ xs: 100, md: 150, lg: 200 }} marginRight={{ xs: 13, lg: 25 }} time="0.3s" direction="right-to-left" />
            <Box
                component={motion.div}
                initial={{ padding: 3, height: 50, width: 225 }}
                sx={{
                    position: "absolute",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    bgcolor: "#181818",
                    marginRight: 70,
                    marginTop: 25,
                    borderRadius: 2,
                    gap: 2,
                }}
                whileHover={{ margin: 0, width: "60%", height: "100%", zIndex: 1 }}
                onMouseEnter={() => setHoveredBox('box2')}
                onMouseLeave={() => setHoveredBox(null)}
            >
                <Typography variant='h5' sx={{ color: "white", textAlign: "center" }}>
                    Secret Scribbles
                </Typography>
                {hoveredBox === 'box2' && (
                    <Box
                        sx={{
                            width: "90%",
                            height: "90%",
                            backgroundImage: `url('/projects/store2.png')`,
                            backgroundSize: "cover",
                            borderRadius: 1
                        }}
                    />
                )}
            </Box>

            <BreathingLines rotate={0} top={40} width={{ xs: 100, md: 150, lg: 200 }} marginLeft={{ xs: 13, lg: 25 }} time="0.4s" />
            <Box
                component={motion.div}
                initial={{ padding: 3, height: 50, width: 225 }}
                sx={{
                    position: "absolute",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    bgcolor: "#181818",
                    marginLeft: 70,
                    marginTop: 40,
                    borderRadius: 2,
                    gap: 2,
                }}
                whileHover={{ margin: 0, width: "60%", height: "100%", zIndex: 1 }}
                onMouseEnter={() => setHoveredBox('box3')}
                onMouseLeave={() => setHoveredBox(null)}
            >
                <Typography variant='h5' sx={{ color: "white", textAlign: "center" }}>
                    Discord.ide
                </Typography>
                {hoveredBox === 'box3' && (
                    <Box
                        sx={{
                            width: "90%",
                            height: "90%",
                            backgroundImage: `url('/projects/store3.png')`,
                            backgroundSize: "cover",
                            borderRadius: 1
                        }}
                    />
                )}
            </Box>

            <BreathingLines rotate={0} top={55} width={{ xs: 100, md: 150, lg: 200 }} marginRight={{ xs: 13, lg: 25 }} time="0.8s" direction="right-to-left" />
            <Box
                component={motion.div}
                initial={{ padding: 3, height: 50, width: 225 }}
                sx={{
                    position: "absolute",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    bgcolor: "#181818",
                    marginRight: 70,
                    marginTop: 55,
                    borderRadius: 2,
                    gap: 2,
                }}
                whileHover={{ margin: 0, width: "60%", height: "100%", zIndex: 1 }}
                onMouseEnter={() => setHoveredBox('box4')}
                onMouseLeave={() => setHoveredBox(null)}
            >
                <Typography variant='h5' sx={{ color: "white", textAlign: "center" }}>
                    Fitness App
                </Typography>
                {hoveredBox === 'box4' && (
                    <Box
                        sx={{
                            width: "90%",
                            height: "90%",
                            backgroundImage: `url('/projects/store4.png')`,
                            backgroundSize: "cover",
                            borderRadius: 1
                        }}
                    />
                )}
            </Box>
        </Box>
    );
};

export default Projects;
