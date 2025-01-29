import { Box, IconButton, Typography } from "@mui/material";
import image from "../assets/bodyProject.png";
import {IconArrowLeft, IconBrandAdobeIllustrator, IconBrandFigma, IconBrandWordpress, IconFileTypeCss } from "@tabler/icons-react";
import { useNavigate, useParams } from "react-router-dom";
import { projectsData } from "../utils/projectsData";
import { useEffect, useState } from "react";


export const ProjectDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find((p) => p.id === id);

   const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    // Verificar si coverImage está definido y tiene longitud
    const coverImage = project?.coverImage;
    if (Array.isArray(coverImage) && coverImage.length > 0) {
      const interval = setInterval(() => {
        setImageIndex((prevIndex) => (prevIndex + 1) % coverImage.length);
      }, 3000); // Cambia la imagen cada 3 segundos

      return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonte
    }
  }, [project?.coverImage]);

  
  return (
    <Box
      id="details"
      sx={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        paddingBottom: 6,
      }}
    >
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
        sx={{ display: "flex", paddingTop: 15, justifyContent: "center" }}
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
            {project?.nameProyect} - {project?.plataforma}
          </Typography>

          {/* Contenedores de tecnologías */}
          <Box display="flex" gap={3} mb={2} flexWrap="wrap">
            {project?.etiqueta &&
              project.etiqueta.map((tech, index) => {
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
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              height: 250,
              borderRadius: "18px 0px 0px 18px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {Array.isArray(project?.coverImage) &&
            project.coverImage.length > 0 ? (
              <Box
                sx={{
                  display: "flex",
                  height: "100%",
                  width: "100%",
                  transition: "transform 0.5s ease-in-out",
                  transform: `translateX(-${imageIndex * 100}%)`,
                  backgroundImage: `url(${project.coverImage[imageIndex]})`,
                 
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                }}
              />
            ) : (
              <img
                src={
                  Array.isArray(project?.coverImage)
                    ? project.coverImage[0]
                    : project?.coverImage
                }
                alt={project?.nameProyect}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "18px 0px 0px 18px",
                }}
              />
            )}
          </Box>

          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              height: 250,
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
                    fontSize: 10,
                    textAlign: "justify",
                    fontWeight: 100,
                    whiteSpace: "pre-line",
                  }}
                >
                  {project?.description}
                </Typography>
              </Box>
            </Box>

            {project?.enlace && (
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
            padding: 1,
            borderRadius: 2,
            justifyContent: "space-around",
            width: "58%",
            height: "40px",
            backgroundColor: "#261F264D",
          }}
        >
          <IconBrandFigma size={20} color="white" stroke-width="1" />

          <IconBrandAdobeIllustrator
            size={20}
            color="#FF7C00"
            stroke-width="1"
          />

          <IconFileTypeCss size={20} color="#FFFFFF" stroke-width="1" />
          <IconBrandWordpress size={20} color="#21759B" stroke-width="1" />
        </Box>
      </Box>
    </Box>
  );
};
