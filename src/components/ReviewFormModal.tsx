import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Modal,
} from "@mui/material";

import axios from "axios";
const backendUrl = "https://marsalamariva-dev-back.onrender.com";
interface ReviewFormModalProps {
  open: boolean;
  onClose: () => void;
}

export const ReviewFormModal: React.FC<ReviewFormModalProps> = ({
  open,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    companyName: "",
    description: "",
    firstName: "",
    lastName: "",
    position: "",
  });


   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     const { name, value } = e.target;
     setFormData((prev) => ({ ...prev, [name]: value }));
   };


   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();

     const form = new FormData();
     form.append("companyName", formData.companyName);
     form.append("description", formData.description);
     form.append("firstName", formData.firstName);
     form.append("lastName", formData.lastName);
     form.append("position", formData.position);

 
     try {
       const response = await axios.post(
        `${backendUrl}/api/reviews`,
         form,
         {
           headers: {
             "Content-Type": "multipart/form-data",
           },
         }
       );

       onClose();
        return response.data;
     } catch (error: any) {
     return error
     }
  };
  

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: { xs: "53%", sm: "50%", md: "50%" },
          left: "50%",
          transform: "translate(-50%, -50%)",
          padding: "30px",
          width: { xs: "379px", sm: "500px", md: "500px" },
          height: { xs: "438px", sm: "500px", md: "500px" },
          backgroundColor: "#0c000c",
          borderRadius: "10px",
          boxShadow: "0px -7px 24px #230f01",
          zIndex: 1300,
          overflow: "auto",
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
            fontSize: "12px",
            fontWeight: "600",
            mb: 3,
            textAlign: "center",
          }}
        >
          Deja tu reseña
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
           <TextField
            name="companyName"
            placeholder="Nombre de la empresa"
            value={formData.companyName}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            required
            sx={{
              mb: 2,
              backgroundColor: "060010",
              input: { color: "white", fontSize: 11 },
              "& .MuiOutlinedInput-root": {
                borderRadius: "10px",
                height: "32px",
                "& fieldset": { borderColor: "rgba(255, 255, 255, 0.3)" },
                "&:hover fieldset": { borderColor: "#ffb900" },
              },
            }}
          />

        
          <TextField
            name="description"
            placeholder="Descripcion"
            variant="outlined"
            value={formData.description}
            onChange={handleChange}
            multiline
            rows={3}
            fullWidth
            required
            sx={{
              mb: 2,
              backgroundColor: "rgb(91 13 92 / 25%)",
              "& .MuiInputBase-input": {
                color: "white",
                fontSize: 11,
              },
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
                "& fieldset": { borderColor: "rgba(255, 255, 255, 0.3)" },
                "&:hover fieldset": { borderColor: "#ffb900" },
              },
            }}
          />
         
          <TextField
            name="firstName"
            placeholder="Nombre"
            variant="outlined"
            value={formData.firstName}
            onChange={handleChange}
            fullWidth
            required
            sx={{
              mb: 2,
              backgroundColor: "rgb(91 13 92 / 25%)",
              input: { color: "white", fontSize: 11 },
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
                height: "32px",
                "& fieldset": { borderColor: "rgba(255, 255, 255, 0.3)" },
                "&:hover fieldset": { borderColor: "#ffb900" },
              },
            }}
          />
          <TextField
            name="lastName"
            placeholder="Apellido"
            variant="outlined"
            value={formData.lastName}
            onChange={handleChange}
            fullWidth
            required
            sx={{
              mb: 2,
              backgroundColor: "rgb(91 13 92 / 25%)",
              input: { color: "white", fontSize: 11 },
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
                height: "32px",
                "& fieldset": { borderColor: "rgba(255, 255, 255, 0.3)" },
                "&:hover fieldset": { borderColor: "#ffb900" },
              },
            }}
          />
          <TextField
            name="position"
            placeholder="Puesto"
            variant="outlined"
            value={formData.position}
            onChange={handleChange}
            fullWidth
            required
            sx={{
              mb: 2,
              backgroundColor: "rgb(91 13 92 / 25%)",
              input: { color: "white", fontSize: 11 },
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
                height: "32px",
                "& fieldset": { borderColor: "rgba(255, 255, 255, 0.3)" },
                "&:hover fieldset": { borderColor: "#ffb900" },
              },
            }}
          />
          <Button
            variant="contained"
            type="submit"
            sx={{
              background: "linear-gradient(90deg, #e100ff, #00c4ff)",
              borderRadius: 40,
              padding: "10px 20px",
              fontWeight: "bold",
            }}
          >
            <Typography
              sx={{
                fontSize: 9,
                textTransform: "none",
                fontWeight: 700,
              }}
            >
              Publicar
            </Typography>
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
