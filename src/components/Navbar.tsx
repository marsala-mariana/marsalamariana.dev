import { Box, Button, Typography } from "@mui/material";
import {  IconBrandGithubFilled,IconBrandLinkedinFilled } from "@tabler/icons-react";

const navOptions = [
  { text: "Home", route: "/" },
  { text: "Projects", route: "/projects" },
  { text: "Testimonials", route: "/testimonials" },
  { text: "Contact", route: "/contact" },
];

export const Navbar = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        display: "flex",
        justifyContent: "space-between",
        alignItems: { xs: "flex-start", md: "center" },
        top: 0,
        left: 0,
        width: { xs: "auto", sm: "100%" },
        backgroundColor: "none",
        zIndex: 1000,
        padding: 2,
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Box
        sx={{
          paddingInlineStart: { xs: 2, sm: 0 , md: 0},
          width: { xs: "22%", sm: "13%", md: "4%" },
          paddingTop: { xs: '0px', sm: '7px', md:'0px'},
        }}
      >
        <a
          href="https://github.com/marsala-mariana"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandGithubFilled
            size={18}
            color="white"
            style={{ marginRight: 10 }}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/marianamarsala/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandLinkedinFilled size={18} color="white" />
        </a>
      </Box>
      <Box
        sx={{
          display: { xs: "flex" },
          justifyContent: { xs: "center" },
          width: { xs: "100%", md: "96%" },
          paddingTop: { xs: "6px", sm: 0 },
        }}
      >
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
