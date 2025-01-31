import React from "react";
import { Box, Typography, Button} from "@mui/material";
import fondo from "../assets/body.png";




export const Home: React.FC = () => {
  return (
    <Box
      id="home"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: { xs: "flex-start", sm: "center" },
        textAlign: "center",
        backgroundImage: `url(${fondo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        position: "relative",
        paddingTop: { xs: "56%", sm: "0%" },
      }}
    >
      {/* Contenido principal */}
      <Typography
        sx={{
          fontSize: 12,
          fontWeight: { xs: 400, sm: 800 },
        }}
        gutterBottom
      >
        PRODUCT DESIGNER
      </Typography>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          color: "#CC00ED",
          fontSize: { xs: 23, sm: 36, md: 44 },
        }}
      >
        Mariana Marsala
      </Typography>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          fontSize: { xs: 23, sm: 36, md: 44 },
        }}
      >
        Merging Technology <span style={{ color: "#ffb900" }}>and Design</span>
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{ fontSize: 12, fontWeight: 700, marginTop: 2 }}
      >
        Full Stack Developer, UX/UI Designer y Creativa Visual
      </Typography>

      <Box sx={{
        position: "absolute",
        bottom: {xs:'150px',sm:28,md:28}
      }}>
        <Button
          variant="contained"
          sx={{
            background: "linear-gradient(90deg, #e100ff, #00c4ff)",
            borderRadius: 40,
            padding: "10px 20px",
            fontWeight: "bold",
          }}
          component="a"
          href="/Currículum Marsala Mariana.pdf"
          download="Mariana_Marsala_CV.pdf"
        >
          <Typography
            sx={{
              fontSize: 12,
              textTransform: "none",
              fontWeight: 700,
            }}
          >
            Download CV
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};
