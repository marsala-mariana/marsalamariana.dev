import { Box, Button, TextField, Typography } from '@mui/material'

import image from "../assets/bodyProject.png";
import { IconBrandWhatsappFilled, IconMailFilled, IconMapPinFilled } from '@tabler/icons-react';
export const Contact = () => {
  return (
    <Box
      id="contact"
      sx={{
        // height: "100vh",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingBottom: 20,
        position: "relative",
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
          - Contact
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          paddingTop: 5,
          justifyContent: "space-around",
          alignItems: "flex-start",
        }}
      >
        {/* columna 1*/}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Box>
            <Typography
              sx={{ color: "#AE0CA7", fontSize: 20, fontWeight: 800 }}
            >
              Drop me a message
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontSize: 11,
                fontWeight: 400,
                paddingTop: 1,
              }}
            >
              Let’s turn your ideas into something extraordinary. Get in touch!
            </Typography>
          </Box>

          <Box sx={{ display: "flex", paddingTop: 5, alignItems: "center" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "linear-gradient(90deg, #e100ff, #00c4ff)",
                borderRadius: "30%",
                width: 24,
                height: 24,
              }}
            >
              <IconBrandWhatsappFilled size={14} color="white" />
            </Box>

            <Typography sx={{ fontSize: 11, color: "white", paddingLeft: 2 }}>
              11 5580 0149
            </Typography>
          </Box>

          <Box sx={{ display: "flex", paddingTop: 3 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "linear-gradient(90deg, #e100ff, #00c4ff)",
                borderRadius: "30%",
                width: 24,
                height: 24,
              }}
            >
              <IconMailFilled size={14} color="white" />
            </Box>
            <Typography sx={{ fontSize: 11, color: "white", paddingLeft: 1 }}>
              stephaniemarsala08@gmail.com
            </Typography>
          </Box>
          <Box sx={{ display: "flex", paddingTop: 3 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "linear-gradient(90deg, #e100ff, #00c4ff)",
                borderRadius: "30%",
                width: 24,
                height: 24,
              }}
            >
              <IconMapPinFilled size={14} color="white" />
            </Box>
            <Typography sx={{ fontSize: 11, color: "white", paddingLeft: 1 }}>
              Buenos Aires, CABA.
            </Typography>
          </Box>
        </Box>

        {/* Columna 2: Formulario */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            //  height: "100px",
            //   background: "linear-gradient(135deg, #0A0216, #0C1627)",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#2b0b3a47",
              borderRadius: "16px",
              padding: "30px",
              width: "400px",
              height: "360px",
              boxShadow: "0px -7px 24px #230f01",
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: "10px",
                fontWeight: "600",
                mb: 1,
              }}
            >
              Name
            </Typography>
            <TextField
              fullWidth
              placeholder="Soni kumari"
              variant="outlined"
              sx={{
                mb: 2,
                backgroundColor: "rgb(91 13 92 / 25%)",
                input: { color: "white", fontSize: 11 },
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                  height: "32px",
                  "& fieldset": { borderColor: "rgba(255, 255, 255, 0.3)" },
                  "&:hover fieldset": { borderColor: "#ffb900" },
                },
              }}
            />

            <Typography
              sx={{
                color: "white",
                fontSize: "10px",
                fontWeight: "600",
                mb: 1,
              }}
            >
              Email
            </Typography>
            <TextField
              fullWidth
              placeholder="Soniyo344@gmail.com"
              variant="outlined"
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

            <Typography
              sx={{
                color: "white",
                fontSize: "10px",
                fontWeight: "600",
                mb: 1,
              }}
            >
              Message
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={2}
              placeholder="How can I help?"
              variant="outlined"
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

            <Button
              variant="contained"
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
                Send Message
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
