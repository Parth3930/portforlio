import React from 'react';
import { Box, Typography } from "@mui/material";

const Projects = () => {
    return (
        <Box
            sx={{
                width: "100%",
                top: 50,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                alignItems: "center",
                paddingBottom: 45,
                position: "relative",
                flexDirection: "row",
                gap: 4,
            }}
        >
            <Box
                sx={{
                    width: "90%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: 2,
                    }}
                >
                    <img
                        src="/projects/Secrets.png"
                        alt="Secret Scribbles"
                        style={{
                            width: "100%",
                            height: "300px",
                            maxWidth: "500px",
                            objectFit: "cover",
                            borderRadius: "8px",
                            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
                            cursor: "pointer",
                            transition: "transform 0.2s",
                        }}
                        onClick={() =>
                            window.open("https://secretscribbles.vercel.app/", "_blank")
                        }
                        onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                        onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                    />
                </Box>
                <Typography
                    variant="body1"
                    sx={{
                        width: "90%",
                        maxWidth: "500px",
                        textAlign: "center",
                        color: "white",
                        lineHeight: 1.5, 
                    }}
                >
                    <strong>Secret Scribbles</strong> - a platform designed for users to express their thoughts and ideas securely and in an organized manner. Create, manage, and share your notes seamlessly!
                </Typography>
            </Box>

            <Box
                sx={{
                    width: "90%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: 2,
                    }}
                >
                    <img
                        src="/projects/avina.png"
                        alt="Avina"
                        style={{
                            width: "100%",
                            height: "300px",
                            maxWidth: "500px",
                            objectFit: "cover",
                            borderRadius: "8px",
                            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
                            cursor: "pointer",
                            transition: "transform 0.2s",
                        }}
                        onClick={() =>
                            window.open("https://avinamoney.com", "_blank")
                        }
                        onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                        onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                    />
                </Box>
                <Typography
                    variant="body1"
                    sx={{
                        width: "90%",
                        maxWidth: "500px",
                        textAlign: "center",
                        color: "white",
                        lineHeight: 1.5,
                    }}
                >
                    <strong>Avina</strong> - a unified financial platform that helps users manage their money and make informed financial decisions. Explore various services offered and take control of your financial future!
                </Typography>
            </Box>
        </Box>
    );
};

export default Projects;
