import { Box, Button, Typography } from "@mui/material";
import {  IconBrandGithubFilled,IconBrandLinkedinFilled } from "@tabler/icons-react";

const navOptions = [
  { text: "Home", route: "#home" },
  { text: "Projects", route: "#projects" },
  { text: "Testimonials", route: "#testimonials" },
  { text: "Contact", route: "#contact" },
];

export const Navbar = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: "none",
        zIndex: 1000,
        padding: 2,
      }}
    >
      <Box paddingInlineStart={5}>
        <IconBrandGithubFilled
          size={18}
          color="white"
          style={{ marginRight: 10 }}
        />
        <IconBrandLinkedinFilled size={18} color="white" />
      </Box>
      <Box sx={{ width: "62%" }}>
        {navOptions.map((option) => (
          <Button key={option.route} href={option.route}>
            <Typography
              sx={{
                color: "white",
                fontSize: 12,
                textTransform: "none",
                fontWeight: 500,
              }}
            >
              {option.text}
            </Typography>
          </Button>
        ))}
      </Box>
    </Box>
  );
};
