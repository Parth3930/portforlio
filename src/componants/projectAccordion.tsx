import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, useTheme } from "@mui/material";

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
              <Typography
                variant="h5"
                sx={{ color: "white" }}
                onClick={() => {
                  window.open("https://secretscribbles.vercel.app/home");
                }}
              >
                Secret Scribbles
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box
                sx={{
                  width: "100%",
                  height: 400,
                  backgroundImage: `url('/projects/Secrets.png')`,
                  backgroundSize: "cover",
                  borderRadius: 1,
                  backgroundPosition: "center",
                }}
              />
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ bgcolor: "#181818" }}>
            <AccordionSummary>
              <Typography
                variant="h5"
                sx={{ color: "white" }}
                onClick={() => {
                  window.open(
                    "https://secretscribbles.vercel.app/homehttps://sharmachemical.netlify.app/"
                  );
                }}
              >
                Ecommerce Web
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
                  backgroundPosition: "center",
                }}
              />
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ bgcolor: "#181818" }}>
            <AccordionSummary>
              <Typography variant="h5" sx={{ color: "white" }}>
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
                  backgroundPosition: "center",
                }}
              />
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ bgcolor: "#181818" }}>
            <AccordionSummary>
              <Typography variant="h5" sx={{ color: "white" }}>
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
                  backgroundPosition: "center",
                }}
              />
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    );
};

export default ProjectsAccordion;
