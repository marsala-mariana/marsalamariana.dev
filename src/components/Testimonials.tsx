import { Alert,Box, Button, Typography } from '@mui/material'
import image from "../assets/bodyProject.png";
import { useEffect, useState } from 'react';
import { IconGhost3Filled } from '@tabler/icons-react';
import { ReviewFormModal } from './ReviewFormModal';
import axios from 'axios';

const backendUrl = "https://marsalamariva-dev-back.onrender.com";

interface ProjectReviewType {
  _id: string;
  companyName: string;
  description: string;
  firstName: string;
  lastName: string;
  position: string;
}


export const Testimonials = () => {
  const [openAlert, setOpenAlert] = useState(false); 
  const [openModal, setOpenModal] = useState(false); 
  const [projectReviews, setProjectReviews] = useState<ProjectReviewType[]>([]);

 useEffect(() => {
   const fetchReviews = async () => {
     try {
       const response = await axios.get(`${backendUrl}/api/reviews`); 
       setProjectReviews(response.data);
     } catch (error) {
      return error
     }
   };

   fetchReviews();

   const timer = setTimeout(() => {
     setOpenAlert(true);
   }, 3000);

   return () => clearTimeout(timer);
 }, []);

 const handleYesClick = () => {
   setOpenModal(true); 
   setOpenAlert(false); 
 };

 const handleNoClick = () => {
   setOpenAlert(false);
  };
  
  return (
    <Box
      id="testimonials"
      sx={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        paddingBottom: 10,
      }}
    >
      <Box
        sx={{
          display: "flex",
          paddingTop: { xs: "150px", sm: 15 },
          justifyContent: "flex-end",
          paddingRight: { xs: "32px", sm: 7 },
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
          paddingTop: { xs: 9, sm: 15 },
          paddingLeft: { xs: 0, sm: 7 },
        }}
      >
        {projectReviews?.map((review, index) => (
          <Box
            key={index}
            sx={{
              marginBottom: 15,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
         
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingBottom: 1,
              }}
            >

              <Typography
                sx={{ fontSize: 13, fontWeight: "light", color: "white" }}
              >
                {review.companyName}
              </Typography>
            </Box>

            {/* Descripción de la reseña */}
            <Box
              sx={{
                textAlign: "center",
                marginTop: 2,
                width: { xs: "72%", sm: "48%" },
              }}
            >
              <Typography
                sx={{
                  fontSize: 12,
                  color: "white",
                  fontWeight: 300,
                  lineHeight: 2,
                }}
              >
                {review.description}
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
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  sx={{ fontSize: 10, fontWeight: 600, color: "white" }}
                >
                  {review.firstName} {review.lastName}
                </Typography>
                <Typography
                  sx={{ fontSize: 10, fontWeight: 300, color: "white" }}
                >
                  {review.position}
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
      {openAlert && (
        <Box
          sx={{
            position: "fixed",
            top: { xs: "22%", sm: 60 },
            left: { xs: "61%", sm: "78%", md: "84%" },
            transform: "translateX(-50%)",
            zIndex: 1000,
            width: { xs: "80%", sm: "47%", md: "35%" },
          }}
        >
          <Alert
            sx={{
              backgroundColor: "#AE0CA7",
              color: "white",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
            }}
            icon={<IconGhost3Filled size={20} color="white" />}
            action={
              <>
                <Button color="inherit" size="small" onClick={handleYesClick}>
                  <Typography
                    sx={{
                      fontSize: 12,
                      textTransform: "none",
                      fontWeight: 600,
                    }}
                  >
                    Sí
                  </Typography>
                </Button>
                <Button color="inherit" size="small" onClick={handleNoClick}>
                  <Typography
                    sx={{
                      fontSize: 12,
                      textTransform: "none",
                      fontWeight: 600,
                    }}
                  >
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
      {/* Modal con formulario */}
      <ReviewFormModal open={openModal} onClose={() => setOpenModal(false)} />
    </Box>
  );
}
