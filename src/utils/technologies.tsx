
import { Typography } from "@mui/material";
import {
  IconBrandNextjs,
  IconBrandTypescript,
  IconBrandWordpress,
  IconFileTypeCss,
  IconBrandAdobeIllustrator,
  IconBrandFigma,
  IconBrandGithub,
  IconBrandReactNative,
  IconBrandAndroid,
} from "@tabler/icons-react";

export const technologyIcons = [
  {
    technology: "Figma",
    icon: <IconBrandFigma size={20} color="white" />,
  },
  {
    technology: "Adobe Illustrator",
    icon: <IconBrandAdobeIllustrator size={20} color="#FF7C00" />,
  },
  {
    technology: "CSS",
    icon: <IconFileTypeCss size={20} color="white" />,
  },
  {
    technology: "WordPress",
    icon: <IconBrandWordpress size={20} color="#21759B" />,
  },
  {
    technology: "Next.js",
    icon: <IconBrandNextjs size={20} color="white" />,
  },
  {
    technology: "TypeScript",
    icon: <IconBrandTypescript size={20} color="#007ACC" />,
  },
  {
    technology: "Material-UI",
    icon: (
      <Typography variant="body2" sx={{ color: "#0081CB" }}>
        Material-UI
      </Typography>
    ),
  },
  {
    technology: "GitHub",
    icon: <IconBrandGithub size={20} color="#ffffff" />,
  },
  {
    technology: "React Native",
    icon: <IconBrandReactNative size={20} color="white" />,
  },
  {
    technology: "Android Studio",
    icon: <IconBrandAndroid size={20} color="white" />,
  },
  {
    technology: "Expo",
    icon: (
      <Typography variant="body2" sx={{ color: "#ffffff" }}>
        Expo
      </Typography>
    ),
  },
  {
    technology: "Trello",
    icon: (
      <Typography variant="body2" sx={{ color: "#0079BF" }}>
        Trello
      </Typography>
    ),
  },
];
