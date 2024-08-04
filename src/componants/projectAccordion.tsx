import React, { RefObject } from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, useMediaQuery, useTheme } from "@mui/material";
import BreathingLines from './breathingLines'; // Adjust the import path as necessary


const ProjectsAccordion = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box
            sx={{ width: "100%", display: { xs: "flex", md: "none" }, paddingBottom: 4, position: "relative", marginTop: 5, justifyContent: "center" }}
        >
            <Box sx={{ width: "90%", display: "flex", flexDirection: "column", gap: 1 }}>
                <Accordion sx={{ bgcolor: "#181818" }}>
                    <AccordionSummary>
                        <Typography variant='h5' sx={{ color: "white" }}>
                            Ecommerce Web
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box
                            sx={{
                                width: "100%",
                                height: 400, // Set a fixed height for the image
                                backgroundImage: `url('/projects/storeMobile.jpg')`,
                                backgroundSize: "cover",
                                borderRadius: 1,
                                backgroundPosition: "center"
                            }}
                        />
                    </AccordionDetails>
                </Accordion>

                <Accordion sx={{ bgcolor: "#181818" }}>
                    <AccordionSummary>
                        <Typography variant='h5' sx={{ color: "white" }}>
                            Secret Scribbles
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box
                            sx={{
                                width: "100%",
                                height: 200,
                                backgroundImage: `url('/projects/store2.png')`,
                                backgroundSize: "cover",
                                borderRadius: 1,
                                backgroundPosition: "center"
                            }}
                        />
                    </AccordionDetails>
                </Accordion>

                <Accordion sx={{ bgcolor: "#181818" }}>
                    <AccordionSummary>
                        <Typography variant='h5' sx={{ color: "white" }}>
                            Discord.ide
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box
                            sx={{
                                width: "100%",
                                height: 200, // Set a fixed height for the image
                                backgroundImage: `url('/projects/store3.png')`,
                                backgroundSize: "cover",
                                borderRadius: 1,
                                backgroundPosition: "center"
                            }}
                        />
                    </AccordionDetails>
                </Accordion>

                <Accordion sx={{ bgcolor: "#181818" }}>
                    <AccordionSummary>
                        <Typography variant='h5' sx={{ color: "white" }}>
                            Fitness App
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box
                            sx={{
                                width: "100%",
                                height: 200, // Set a fixed height for the image
                                backgroundImage: `url('/projects/store4.png')`,
                                backgroundSize: "cover",
                                borderRadius: 1,
                                backgroundPosition: "center"
                            }}
                        />
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Box>
    );
};

export default ProjectsAccordion;
