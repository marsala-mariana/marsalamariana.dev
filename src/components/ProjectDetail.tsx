import { Box, Typography } from "@mui/material";
import image from "../assets/bodyProject.png";
import {IconBrandGithubFilled, IconBrandTrello } from "@tabler/icons-react";
import imageRouss from"../assets/rouss.png"

export const ProjectDetail = () => {
  return (
    <Box
      id="details"
      sx={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        paddingBottom: 20,
      }}
    >
      <Box
        width="100%"
        sx={{ display: "flex", paddingTop: 15, justifyContent: "center" }}
      >
        {/* Contenedores de tecnologías */}
        <Box display="flex" gap={3} mb={4} flexWrap="wrap" width="58%">
          {[ " Design UX - UI", "WordPress"].map(
            (tech, index) => {
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
                    sx={{ fontSize: 8, fontWeight: 500, color: "white" }}
                  >
                    {tech}
                  </Typography>
                </Box>
              );
            }
          )}
        </Box>
      </Box>

      {/* Contenedor principal */}
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
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
              height: 250,
              backgroundImage: `url(${imageRouss})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "18px 0px 0px 18px",
            }}
          />

          {/* Caja de información */}
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              height: 250,
              backgroundColor: "#1A1A1A",
              borderRadius: "0px 18px 18px 0px",
              padding: 3,
            }}
          >
            <Typography
              sx={{ fontSize: 18, color: "white", fontWeight: 600, mt: 2 }}
            >
              Rouss Estetica
            </Typography>
            <Box sx={{ width: "90%" }}>
              <Typography
                sx={{
                  color: "white",
                  mt: 2,
                  fontSize: 12,
                  textAlign: "justify",
                  fontWeight: 100,
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.
              </Typography>
            </Box>

            <Typography
              sx={{ fontSize: 12, color: "#A962FF", mt: 2, fontWeight: 600 }}
            >
              Enlace
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Barra inferior con logos 
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
          <IconBrandGithubFilled size={28} color="green" />

          <IconBrandTrello size={28} color="white" />
          <Box
            sx={{
              width: "30px",
              height: "30px",
              backgroundColor: "orange",
              borderRadius: "50%",
            }}
          />
          <Typography
            color="lightgreen"
            sx={{
              border: "1px solid lightgreen",
              padding: "2px 6px",
              borderRadius: 1,
            }}
          >
            Trello
          </Typography>
        </Box>
      </Box>

*/}

    </Box>
  );
};
