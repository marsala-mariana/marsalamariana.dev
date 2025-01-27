import { Box, Typography } from '@mui/material'
import image  from "../assets/bodyProject.png";
import logoAdv from "../assets/logoAd.png"

export const Projects = () => {

  return (
    <Box
      id="projects"
      sx={{
        //  height: "100vh",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        paddingBottom: 20,
      }}
    >
      <Box
        sx={{
          display: "flex",
          paddingTop: 15,
          paddingLeft: 7,
        }}
      >
        <Typography
          sx={{
            fontSize: 13,
            fontWeight: 900,
            color: "white",
            textTransform: "uppercase",
          }}
        >
          - Projects
        </Typography>
      </Box>

      {/* CAJA PRINCIPAL*/}
      <Box
        sx={{ display: "flex", justifyContent: "center", gap: 1, marginTop: 5 }}
      >
        {/* FILA 1*/}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "300px",
            justifyContent: "space-between",
          }}
        >
          {/* CAJA UNO*/}
          <Box
            sx={{
              width: "250px",
              height: "145px",
              backgroundColor: "#19161C",
              borderRadius: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                sx={{
                  fontSize: 18,
                  color: "#19FB9B",
                  textAlign: "center",
                }}
              >
               Rouss
              </Typography>
              <Typography
                sx={{
                  fontSize: 11,
                  color: "white",
                  textAlign: "center",
                  textTransform: "capitalize",
                }}
              >
              web site
              </Typography>
            </Box>
          </Box>
          {/* CAJA dos*/}
          <Box
            sx={{
              gap: 2,
              width: "250px",
              height: "145px",
              backgroundImage: `url('https://img.freepik.com/fotos-premium/fondo-colores-abstracto-descarga-gratuita_80983-1710.jpg')`, // Reemplaza con tu URL de imagen
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: 2,
            }}
          ></Box>
        </Box>
        {/*  FILA 2*/}
        <Box
          sx={{
            width: "250px",
            height: "300px",
            backgroundImage: `url(${logoAdv})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: 2,
          }}
        ></Box>
        {/* FILA 3*/}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "300px",
            justifyContent: "space-between",
          }}
        >
          {/* CAJA tres*/}
          <Box
            sx={{
              width: "250px",
              height: "145px",
              backgroundColor: "#19161C",
              borderRadius: 2,
              backgroundImage: `url('https://img.freepik.com/fotos-premium/fondo-colores-abstracto-descarga-gratuita_80983-1710.jpg')`, // Reemplaza con tu URL de imagen
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Box>
          {/* CAJA cuatro*/}
          <Box
            sx={{
              gap: 2,
              width: "250px",
              height: "145px",
              backgroundColor: "#19161C",
              borderRadius: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                sx={{
                  fontSize: 18,
                  color: "#F087FF",
                  textAlign: "center",
                }}
              >
                11,000
              </Typography>
              <Typography
                sx={{
                  fontSize: 11,
                  color: "white",
                  textAlign: "center",
                  textTransform: "capitalize",
                }}
              >
                Solana Hacker House participants
              </Typography>
            </Box>
          </Box>
        </Box>
        {/*  FILA 4*/}
        <Box
          sx={{
            width: "250px",
            height: "300px",
            backgroundImage: `url('https://img.freepik.com/fotos-premium/imagen-fondo_910766-187.jpg')`, // Reemplaza con tu URL de imagen
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: 2,
          }}
        ></Box>
      </Box>
    </Box>
  );
}
