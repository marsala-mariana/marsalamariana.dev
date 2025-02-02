import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Modal,
} from "@mui/material";
import { IconCloudUpload } from "@tabler/icons-react";
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
    companyLogo: "",
    description: "",
    personalPhoto: "",
    firstName: "",
    lastName: "",
    position: "",
  });

   const [uploadedLogo, setUploadedLogo] = useState<File | null>(null);
   const [uploadedPhoto, setUploadedPhoto] = useState<File | null>(null);

   const acceptedFileTypes = "image/*";
   const maxSize = 5; 

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     const { name, value } = e.target;
     setFormData((prev) => ({ ...prev, [name]: value }));
   };

   const handleFileChange = (
     e: React.ChangeEvent<HTMLInputElement>,
     type: "logo" | "photo"
   ) => {
     const file = e.target.files?.[0];
     if (file) {
       if (type === "logo") {
         setUploadedLogo(file);
       } else {
         setUploadedPhoto(file);
       }
     }
   };

   const handleDrop = (
     e: React.DragEvent<HTMLDivElement>,
     type: "logo" | "photo"
   ) => {
     e.preventDefault();
     const file = e.dataTransfer.files[0];
     if (file) {
       if (type === "logo") {
         setUploadedLogo(file);
       } else {
         setUploadedPhoto(file);
       }
     }
   };

   const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
     e.preventDefault();
   };

   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();

     const form = new FormData();
     form.append("companyName", formData.companyName);
     form.append("description", formData.description);
     form.append("firstName", formData.firstName);
     form.append("lastName", formData.lastName);
     form.append("position", formData.position);

     if (uploadedLogo) form.append("companyLogo", uploadedLogo);
     if (uploadedPhoto) form.append("personalPhoto", uploadedPhoto);

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

          {/* Campo para el Logo */}
          <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
            <Box
              onDrop={(e) => handleDrop(e, "logo")}
              onDragOver={handleDragOver}
              sx={{
                border: "1px dashed #ccc",
                borderRadius: "8px",
                p: 2,
                textAlign: "center",
                mb: 2,
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <input
                type="file"
                style={{ display: "none" }}
                id="logoInput"
                accept={acceptedFileTypes}
                onChange={(e) => handleFileChange(e, "logo")}
              />
              <label htmlFor="logoInput" style={{ cursor: "pointer" }}>
                <Box
                  sx={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 2,
                  }}
                >
                  <IconCloudUpload size={65} strokeWidth={1} color="#ccc" />
                  <Box
                    paddingLeft={5}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <Typography sx={{ fontSize: 11 }} color="white">
                      Seleccione el logo o arrástrelo y suéltelo aquí.
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        fontSize: 11,
                        color: "rgba(255, 255, 255, 0.3)",
                        paddingTop: 1,
                      }}
                    >
                      {acceptedFileTypes}, tamaño máximo de {maxSize} MB
                    </Typography>
                  </Box>
                </Box>
              </label>
            </Box>
            {uploadedLogo && (
              <Typography sx={{ fontSize: 11, fontWeight: 300 }} color="white">
                {uploadedLogo.name}
              </Typography>
            )}
          </Box>

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
          {/* Campo para la Foto Personal */}
          <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
            <Box
              onDrop={(e) => handleDrop(e, "photo")}
              onDragOver={handleDragOver}
              sx={{
                border: "1px dashed #ccc",
                borderRadius: "8px",
                p: 2,
                textAlign: "center",
                mb: 2,
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <input
                type="file"
                style={{ display: "none" }}
                id="photoInput"
                accept={acceptedFileTypes}
                onChange={(e) => handleFileChange(e, "photo")}
              />
              <label htmlFor="photoInput" style={{ cursor: "pointer" }}>
                <Box
                  sx={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 2,
                  }}
                >
                  <IconCloudUpload size={65} strokeWidth={1} color="#ccc" />
                  <Box
                    paddingLeft={5}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <Typography sx={{ fontSize: 11 }} color="white">
                      Seleccione una foto o arrástrela y suéltela aquí.
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        fontSize: 11,
                        color: "rgba(255, 255, 255, 0.3)",
                        paddingTop: 1,
                      }}
                    >
                      {acceptedFileTypes}, tamaño máximo de {maxSize} MB
                    </Typography>
                  </Box>
                </Box>
              </label>
            </Box>
            {uploadedPhoto && (
              <Typography sx={{ fontSize: 11, fontWeight: 300 }} color="white">
                {uploadedPhoto.name}
              </Typography>
            )}
          </Box>
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
