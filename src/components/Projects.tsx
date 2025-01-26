import { Box, Typography } from '@mui/material'
import React from 'react'
import image  from "../assets/bodyProject.png";

export const Projects = () => {
  return (
    <Box
      id="projects"
      sx={{
        height: "100vh",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
     
        position: "relative",
      }}
    >
      <Box sx={{
        display: 'flex',
        paddingTop: 15,
      paddingLeft:7
      }}>
        <Typography sx={{
          fontSize: 13,
          fontWeight: 900,
          color: 'white',
         textTransform:'uppercase'
       }}> - Projects</Typography>  
      </Box>
     
      <Box>
        
      </Box>
    </Box>
  );
}
