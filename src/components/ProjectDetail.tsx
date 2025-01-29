import { Box, IconButton, Typography } from "@mui/material";
import image from "../assets/bodyProject.png";
import {IconArrowLeft, IconBrandAdobeIllustrator, IconBrandFigma, IconBrandWordpress, IconFileTypeCss } from "@tabler/icons-react";
//import imageRouss from "../assets/rouss.png"
import { useNavigate, useParams } from "react-router-dom";
import { projectsData } from "../utils/projectsData";


export const ProjectDetail = () => {
  const navigate = useNavigate();
   const { id } = useParams<{ id: string }>(); // Obtiene el ID desde la URL
   const project = projectsData.find((p) => p.id === id); // Busca el proyecto en los datos

   if (!project) {
     return <p>Proyecto no encontrado</p>;
   }

  
  return (
    <Box
      id="details"
      sx={{
        height: "100vh",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        paddingBottom: 20,
      }}
    >
      {/* Botón de regreso */}
      <IconButton
        onClick={() => navigate(-1)}
        sx={{
          position: "absolute",
          top: 58,
          left: 70,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.8)" },
        }}
      >
        <IconArrowLeft size={24} />
      </IconButton>
      <Box
        width="100%"
        sx={{ display: "flex", paddingTop: 20, justifyContent: "center" }}
      >
        <Box
          width="58%"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography
            sx={{
              fontSize: 15,
              color: "#19FB9B",
              textAlign: "center",
            }}
          >
            {project.nameProyect} - {project.plataforma}
          </Typography>

          {/* Contenedores de tecnologías */}
          <Box display="flex" gap={3} mb={4} flexWrap="wrap">
            {project.technologies.map((tech, index) => {
              const isUXUI =
                tech.toLowerCase().includes("ux") ||
                tech.toLowerCase().includes("ui");

              return (
                <Box
                  key={index}
                  sx={{
                    border: "2px solid",
                    borderColor: isUXUI ? "#FF1493" : "#A962FF",
                    backgroundColor: "#111111",
                    padding: "5px 16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "6px",
                  }}
                >
                  <Typography
                    sx={{ fontSize: 10, fontWeight: 500, color: "white" }}
                  >
                    {tech}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>

      {/* Contenedor principal */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: 5,
        }}
      >
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="center"
          width="58%"
        >
          {/* Imagen de fondo gris */}
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              height: 290,
              backgroundImage: `url(${project.coverImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "18px 0px 0px 18px",
            }}
          />

          {/* Caja de información */}
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              height: 290,
              backgroundColor: "#1A1A1A",
              borderRadius: "0px 18px 18px 0px",
              padding: 3,
            }}
          >
            <Box sx={{ width: "98%" }}>
              <Box
                sx={{
                  height: 176,
                  overflowY: "auto",
                  paddingRight: 1,
                  "&::-webkit-scrollbar": {
                    width: "5px",
                  },
                  "&::-webkit-scrollbar-track": {
                    background: "white",
                    borderRadius: "8px",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    background: "linear-gradient(90deg, #e100ff, #00c4ff)",
                    borderRadius: "8px",
                  },
                  "&::-webkit-scrollbar-thumb:hover": {
                    background: "#ff00ff",
                  },
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    mt: 2,
                    fontSize: 12,
                    textAlign: "justify",
                    fontWeight: 100,
                  }}
                >
                  {project.description}
                </Typography>
              </Box>
            </Box>

            {project.enlace && (
              <a
                href={project.enlace}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: 12,
                  color: "#A962FF",
                  display: "block",
                  marginTop: "10px",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
               Enlace
              </a>
            )}
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",

          alignItems: "center",

          mt: 5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 2,
            padding: 2,
            borderRadius: 2,
            justifyContent: "space-around",
            width: "58%",
            height: "55px",
            backgroundColor: "#261F264D",
          }}
        >
          <IconBrandFigma size={28} color="#7a00a3" />

          <IconBrandAdobeIllustrator size={28} color="#FF7C00" />

          <IconFileTypeCss size={28} color="#FFFFFF" />
          <IconBrandWordpress size={28} color="#21759B" />
        </Box>
      </Box>
    </Box>
  );
};
