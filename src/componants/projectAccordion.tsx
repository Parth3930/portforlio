import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";

const ProjectsAccordion = () => {
    return (
      <Box
        sx={{
          width: "100%",
          display: { xs: "flex", md: "none" },
          paddingBottom: 4,
          position: "relative",
          marginTop: 5,
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "90%",
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Accordion sx={{ bgcolor: "#181818" }}>
            <AccordionSummary>
              <Typography variant="h5" sx={{ color: "white" }}>
                Secret Scribbles
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box
                sx={{
                  width: "100%",
                  height: 400,
                  backgroundImage: `url('/projects/SecretsMob.png')`,
                  backgroundSize: "cover",
                  borderRadius: 1,
                  backgroundPosition: "center",
                }}
              />
              <Typography
                variant="body1"
                sx={{
                  marginTop: 2,
                  color: "white", // White text color
                  lineHeight: 1.5,
                }}
              >
                <strong>Secret Scribbles</strong> - a platform designed for users to express their thoughts and ideas securely and in an organized manner. Create, manage, and share your notes seamlessly!
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ bgcolor: "#181818" }}>
            <AccordionSummary>
              <Typography variant="h5" sx={{ color: "white" }}>
                Avina
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box
                sx={{
                  width: "100%",
                  height: 400,
                  backgroundImage: `url('/projects/avinaMob.png')`,
                  backgroundSize: "cover",
                  borderRadius: 1,
                  backgroundPosition: "center",
                }}
              />
              <Typography
                variant="body1"
                sx={{
                  marginTop: 2,
                  color: "white", // White text color
                  lineHeight: 1.5,
                }}
              >
                <strong>Avina</strong> - a unified financial platform that helps users manage their money and make informed financial decisions. Explore various services offered and take control of your financial future!
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    );
};

export default ProjectsAccordion;
