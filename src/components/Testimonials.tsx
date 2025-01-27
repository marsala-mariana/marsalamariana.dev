import { Alert, Avatar, Box, Button, Typography } from '@mui/material'
import image from "../assets/bodyProject.png";
import { useEffect, useState } from 'react';
import { IconGhost3Filled } from '@tabler/icons-react';


const projectReviews = [
  {
    companyLogo:
      "https://cobraperu.hiringroom.com/data/accounts/cobraperu/profile.jpg?version=",
    companyName: "Tech Innovators",
    review:
      "Before Enterpret, organizing research data took an entire day. Now, research synthesis is 83% faster - it takes just 15 minutes to pull the data and another 15 minutes to start synthesizing. Enterpret removes the manual work, allowing me to focus on strategic thinking with a clear mind.",
    avatar:
      "data:image/jpeg;base64,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",
    personName: "Juan Pérez",
    puesto: "User Research Lead, Descript",
  },

];


export const Testimonials = () => {
  const [open, setOpen] = useState(false); // Controla si la alerta se muestra

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true); // Muestra la alerta después de 3 segundos
    }, 3000); // Aparece después de 3 segundos

    return () => clearTimeout(timer); // Limpiar el timeout al desmontar el componente
  }, []);

  const handleCloseAlert = () => {
    setOpen(false); 
  };

  const handleYesClick = () => {
   
    console.log("Redirigiendo al formulario...");
    setOpen(false); 
  };

  const handleNoClick = () => {
   
    setOpen(false);
  };
  return (
    <Box
      id="testimonials"
      sx={{
        // height: "100vh",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          paddingTop: 15,
          justifyContent: "flex-end",
          paddingRight: 7,
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
          - Testimonials
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingTop: 5,
          paddingLeft: 7,
        }}
      >
        {projectReviews.map((review, index) => (
          <Box
            key={index}
            sx={{
              marginBottom: 15,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Fila con el logo de la empresa y nombre */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingBottom: 1,
              }}
            >
              <img
                src={review.companyLogo}
                alt={review.companyName}
                style={{
                  width: 30,
                  height: 30,
                  marginRight: 8,
                  borderRadius: 50,
                }}
              />
              <Typography
                sx={{ fontSize: 13, fontWeight: "light", color: "white" }}
              >
                {review.companyName}
              </Typography>
            </Box>

            {/* Descripción de la reseña */}
            <Box sx={{ textAlign: "center", marginTop: 2, width: "48%" }}>
              <Typography
                sx={{
                  fontSize: 12,
                  color: "white",
                  fontWeight: 300,
                  lineHeight: 2,
                }}
              >
                {review.review}
              </Typography>
            </Box>

            {/* Avatar y nombre de la persona */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 2,
              }}
            >
              <Avatar
                src={review.avatar}
                alt={review.personName}
                sx={{ width: 35, height: 35, marginRight: 1 }}
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  sx={{ fontSize: 10, fontWeight: 600, color: "white" }}
                >
                  {review.personName}
                </Typography>
                <Typography
                  sx={{ fontSize: 10, fontWeight: 300, color: "white" }}
                >
                  {review.puesto}
                </Typography>
              </Box>
            </Box>
            {index < projectReviews.length - 1 && (
              <Box
                sx={{
                  border: "1px solid #c3c3c30f",
                  marginTop: 10,
                  width: "60%",
                }}
              />
            )}
          </Box>
        ))}
      </Box>

      {/* Alerta */}
      {open && (
        <Box
          sx={{
            position: "fixed",
            top: 60, // Puedes ajustar esto según lo que necesites
            left: "84%",
            transform: "translateX(-50%)",
            zIndex: 1000,
            width: "35%",
          }}
        >
          <Alert
            sx={{
              backgroundColor: "#AE0CA7",
              color: "white",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center", // Para alinear el ícono con el texto
            }}
            // eslint-disable-next-line react/jsx-no-undef
            icon={<IconGhost3Filled size={20} color="white" />} // Icono de Tabler
            action={
              <>
                <Button color="inherit" size="small" onClick={handleYesClick}>
                  <Typography sx={{ fontSize: 12, textTransform: "none" }}>
                    Sí
                  </Typography>
                </Button>
                <Button color="inherit" size="small" onClick={handleNoClick}>
                  <Typography sx={{ fontSize: 12, textTransform: "none" }}>
                    No
                  </Typography>
                </Button>
              </>
            }
          >
            <Typography sx={{ fontSize: 11, fontWeight: 500 }}>
              ¿Quieres dejar tu reseña?
            </Typography>
          </Alert>
        </Box>
      )}
    </Box>
  );
}
