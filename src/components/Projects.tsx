import { Box, Typography } from '@mui/material'
import image  from "../assets/bodyProject.png";
import logoAdv from "../assets/logoAd.png"
import app from "../assets/mokup-app.png"
import nuvah from "../assets/nuvah.jpg"
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import mak from "../assets/MacBook.png";

export const Projects = () => {
  const navigate = useNavigate();


  const handleProjectClick = (id: string) => {
    setTimeout(() => {
      navigate(`/project-detail/${id}`);
    }, 500);
  };


  return (
    <Box
      id="projects"
      sx={{
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


      <Box
        sx={{
          display: { sm: "flex" },
          justifyContent: "center",
          gap: 1,
          marginTop: 5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: { xs: "row", sm: "column", md: "row" },
          }}
        >
       
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "300px",
              justifyContent: "space-between",
            }}
          >
        
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ rotate: 30 }}
              onClick={() => handleProjectClick("1")}
              transition={{ duration: 0.5 }}
            >
              <Box
                id="1"
                sx={{
                  width: { xs: "200px", sm: "250px", md: "250px" },
                  height: "145px",
                  backgroundColor: "#19161C",
                  borderRadius: 2,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
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
                    Website
                  </Typography>
                </Box>
              </Box>
            </motion.div>

          
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ rotate: 30 }}
              onClick={() => handleProjectClick("2")}
              transition={{ duration: 0.5 }}
            >
              <Box
                id="2"
                sx={{
                  gap: 2,
                  width: { xs: "200px", sm: "250px", md: "250px" },
                  height: "145px",
                  backgroundImage: `url(${nuvah})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: 2,
                }}
              ></Box>
            </motion.div>
          </Box>
       
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ rotate: 30 }}
            onClick={() => handleProjectClick("3")}
            transition={{ duration: 0.5 }}
          >
            <Box
              id="3"
              sx={{
                width: { xs: "195px", sm: "250px", md: "250px" },
                height: "300px",
                backgroundImage: `url(${logoAdv})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: 2,
                marginTop: { sm: "10px", md: 0 },

                marginLeft: { xs: "8px", sm: 0, md: "8px" },
              }}
            ></Box>
          </motion.div>
        </Box>

   
        <Box
          sx={{
            display: "flex",
            paddingTop: { xs: 2, sm: 0 },
            justifyContent: "center",
            flexDirection: { xs: "row", sm: "column", md: "row" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "300px",
              justifyContent: "space-between",
            }}
          >
       
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ rotate: 30 }}
              onClick={() => handleProjectClick("4")}
              transition={{ duration: 0.5 }}
            >
              <Box
                id="4"
                sx={{
                  width: { xs: "200px", sm: "250px", md: "250px" },
                  height: "145px",
                  backgroundColor: "#19161C",
                  borderRadius: 2,
                  backgroundImage: `url(${mak})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></Box>
            </motion.div>
     
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ rotate: 30 }}
              onClick={() => handleProjectClick("5")}
              transition={{ duration: 0.5 }}
            >
              <Box
                id="5"
                sx={{
                  gap: 2,
                  width: { xs: "200px", sm: "250px", md: "250px" },
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
                    ADV
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 11,
                      color: "white",
                      textAlign: "center",
                      textTransform: "capitalize",
                    }}
                  >
                    Mobile App and Website
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Box>
     
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ rotate: 30 }}
            onClick={() => handleProjectClick("6")}
            transition={{ duration: 0.5 }}
          >
            <Box
              id="6"
              sx={{
                width: { xs: "195px", sm: "250px", md: "250px" },
                height: "300px",
                backgroundImage: `url(${app})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: 2,
                marginLeft: { xs: "8px", sm: 0, md: "8px" },
              }}
            ></Box>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
}
