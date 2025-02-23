import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Avina Money",
            description: "Explore and compare financial products from banks and financial institutions in one place. Get detailed information to make well-informed financial decisions.",
            image: "./projects/avina.png",
            tech: ["React", "Node.js", "Supabase", "Mui", "Framer Motion"],
            link: "https://avinamoney.com/"
        },
        {
            title: "Infinity Dust",
            description: "Endless survival with a touch of retro games mixed with amazing game mechanics",
            image: "./projects/infinity_dust.png",
            tech: ["Flutter", "Dart", "Firebase", "Flame", "Supabase", "Provider"],
            link: "https://play.google.com/store/apps/details?id=com.infinity_dust"
        },
        {
            title: "Silent Crest",
            description: "Track steps, complete quests, earn rewards, and level up with Silent Crest!",
            image: "./projects/silent_crest.png",
            tech: ["Flutter", "Dart", "Firebase", "Pedometer", "Provider"],
            link: "https://play.google.com/store/apps/details?id=com.silent.fitness"
        },
    ];

    return (
        <Box
            sx={{
                py: 5,
                px: { xs: 3, md: 10 },
                position: 'relative',
            }}
        >
            <Typography
                variant="h3"
                sx={{
                    textAlign: 'center',
                    mb: 8,
                    fontWeight: 700,
                    background: '#6CA2A6',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                }}
            >
                Featured Projects
            </Typography>

            <Grid container spacing={6} justifyContent="center">
                {projects.map((project, index) => (
                    <Grid item xs={12} md={6} lg={4} key={index}>
                        <Card
                            sx={{
                                height: '100%',
                                background: '#1E1E1E',
                                borderRadius: 4,
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            <Box
                                sx={{
                                    position: 'relative',
                                    height: 200,
                                    overflow: 'hidden',
                                    borderTopLeftRadius: 16,
                                    borderTopRightRadius: 16,
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    image={project.image}
                                    alt={project.title}
                                    sx={{
                                        height: '100%',
                                        width: '100%',
                                        objectFit: 'cover',
                                        objectPosition: 'top',
                                    }}
                                />
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        borderTopLeftRadius: 16,
                                        borderTopRightRadius: 16,
                                        background: 'linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.5) 100%)',
                                    }}
                                />
                            </Box>

                            <CardContent
                                sx={{
                                    p: 4,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    flexGrow: 1, // ensure it takes available space
                                }}
                            >
                                <Typography
                                    variant="h5"
                                    gutterBottom
                                    sx={{
                                        fontWeight: 600,
                                        color: '#6CA2A6',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1,
                                    }}
                                >
                                    {project.title}
                                    <ExternalLink size={20} color="#6CA2A6" />
                                </Typography>

                                <Typography
                                    variant="body1"
                                    sx={{
                                        mb: 3,
                                        color: '#e0e0e0',
                                        lineHeight: 1.6,
                                    }}
                                >
                                    {project.description}
                                </Typography>

                                {/* This container will push the tech chips and button to the bottom */}
                                <Box sx={{ mt: 'auto' }}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            gap: 1,
                                        }}
                                    >
                                        {project.tech.map((tech, i) => (
                                            <Box
                                                key={i}
                                                sx={{
                                                    px: 2,
                                                    py: 0.5,
                                                    borderRadius: 2,
                                                    background: 'rgba(108, 162, 166, 0.1)',
                                                    color: '#6CA2A6',
                                                    fontSize: 14,
                                                    fontWeight: 500,
                                                }}
                                            >
                                                {tech}
                                            </Box>
                                        ))}
                                    </Box>

                                    <Button
                                        fullWidth
                                        variant="contained"
                                        href={project.link}
                                        target="_blank"
                                        sx={{
                                            mt: 3,
                                            py: 1.5,
                                            borderRadius: 2,
                                            background: 'linear-gradient(45deg, #6CA2A6 30%, #8cc3c5 90%)',
                                            fontWeight: 600,
                                            color: '#121212',
                                            transition: 'box-shadow 0.3s ease',
                                            '&:hover': {
                                                boxShadow: '0 0 15px rgba(108, 162, 166, 0.4)',
                                            },
                                        }}
                                    >
                                        View Project
                                    </Button>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Projects;
