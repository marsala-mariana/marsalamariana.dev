import roussFoto from "../assets/rouss.png";

import nuvahsing from "../assets/mokupNuvah.png";
import logoNu from "../assets/logo-nu.jpg";
import etiqueta from "../assets/etiquetaNuvah.jpg";

import logoAdv from "../assets/logoAd.png";
import vasos from"../assets/vasos.png";
import identiAdv from "../assets/identidadAdv.jpg"
import cartelADV from "../assets/carteladv.png";


import mosaico from "../assets/MockupMosaic.jpeg"
import mak from "../assets/MacBook.png"
import cover from "../assets/Cover.jpg"
//import screen from "../assets/Screens.jpeg"

export const projectsData = [
  {
    id: "1",
    nameProyect: "Rouss",
    plataforma: "Website",
    coverImage: roussFoto,
    technologies: ["WordPress", "Figma", "Adobe Illustrator", "CSS"],
    etiqueta: ["Design UX - UI"],
    description:
      "I started the project by conducting an in-depth research on the 'Rouss Estética' brand, analyzing its identity and target audience. \n\nBased on this, I designed the user interface (UI), creating a modern design aligned with the brand’s aesthetics and values. \n\nI also worked on creating the 'Rouss Estética' logo, ensuring it reflected its professional and elegant approach. Later, I implemented the design using WordPress, leveraging its tools and functionalities to optimize the user experience. \n\nDuring the development, I focused on improving the site's navigation and aesthetics, ensuring a user-friendly, functional, and visually appealing interface.",
    enlace: "http://roussestetica.com/",
  },
  {
    id: "2",
    nameProyect: "Nuvah",
    plataforma: "Logo",
    coverImage: [nuvahsing, etiqueta, logoNu],
    technologies: ["Adobe Illustrator"],
    etiqueta: ["Design UX - UI"],
    description:
      "For this logo, I conducted research and an interview with the brand to understand its objectives and what it wanted to convey. \n\nWith that information, I designed a simple and modern logo in Adobe Illustrator, using fresh colors that reflect the brand’s essence and its youthful, dynamic approach. It is also easy to adapt to different colors.",
  },
  {
    id: "3",
    nameProyect: "ADV",
    plataforma: "Logo",
    coverImage: [logoAdv, vasos, identiAdv, cartelADV],
    technologies: ["Adobe Illustrator"],
    etiqueta: ["Design UX - UI"],
    description:
      "For this logo, I based it on the 'A Dónde Vamos?' app, using its color scheme as a reference. \n\nI focused on playing with the abbreviation of the name, creating a design that conveys dynamism and modernity. \n\nI used Adobe Illustrator to develop a simple yet eye-catching logo that reflects the essence of the platform and is easy to recognize.",
  },
  {
    id: "4",
    nameProyect: "Software de Gestión de Comercios",
    plataforma: "Software",
    coverImage: mak,

    technologies: [
      "Adobe Illustrator",
      "Next.js",
      "TypeScript",
      "Material-UI",
      "GitHub",
    ],
    etiqueta: ["Design UX - UI", "Developer Front-end"],
    description:
      "I lead the design, development, and execution of a commerce management system using Next.js, TypeScript, and Material-UI. I oversee the project from its initial concept to full implementation, ensuring a seamless process from UX research to frontend development. \n\nTo create a user-centered experience, I conducted a comprehensive UX Research process, applying various methodologies such as brief, benchmarking, user personas, POV analysis, surveys, and interviews to deeply understand user needs. \n\nBased on these insights, I defined the MVP, structured the information architecture, and carried out exercises like card sorting, task flows, and flowcharts to optimize navigation. Once the foundation was set, I began materializing the concept through sketches, mid and high-fidelity wireframes, leading to the final high-fidelity prototype. On the development side, I built the core frontend architecture, implementing key functionalities while ensuring high performance, scalability, and maintainability. \n\nI designed responsive and accessible interfaces that enhance the user experience, leveraging Material-UI for a modern and cohesive design system. \n\nAdditionally, I automated workflows using CI/CD pipelines with GitHub Actions, improving development efficiency and deployment processes.",
    enlace: "",
  },
  {
    id: "5",
    nameProyect: "ADV",
    coverImages: mosaico,
    plataforma: "Mobile App and Website",
    technologies: [
      "Adobe Illustrator",
      "Next.js",
      "TypeScript",
      "Material-UI",
      "React Native",
      "Android Studio",
      "Expo",
      "Trello",
      "GitHub",
    ],
    etiqueta: ["Design", "Developer Front-end"],
    description:
      "I worked on developing a web platform using Next.js, TypeScript, and Material-UI. Later, I contributed to the migration of the project to a cross-platform mobile application using React Native and Expo, ensuring compatibility with web, Android, and iOS. \n\nI implemented the Google Maps Places API and geolocation features to personalize the user experience. \n\nThroughout the development process, I focused on optimizing the code by creating reusable components and improving state management with reducers. \n\nAdditionally, I worked with the development team, coordinating tasks and using Scrum, Trello, and GitHub to ensure efficient collaboration and project management. ",
    enlace: "https://www.adondevamos.club/search/suggestions",
  },
  {
    id: "6",
    nameProyect: "Design Rouss",
    coverImages: cover,
    plataforma: "Design App RoussEstetica",
    technologies: ["Adobe Illustrato", "Figma"],
    etiqueta: ["Design UX-UI", "Developer "],
    description:
      "I designed UX/UI for an application. I conducted a complete UX Research process, applying various methodologies such as brief, benchmarking, user personas, POV, surveys, and interviews to understand the user’s needs. \n\nBased on these insights, I defined the MVP, structured the information architecture, and performed card sorting, task flow, and flowchart exercises to organize the navigation. \n\nI then began materializing the proposal, developing sketches, mid and high-fidelity wireframes, ultimately creating a testable prototype to ensure an optimal user experience before implementation.",
    enlace:
      "https://www.behance.net/gallery/202518257/App-Design-UXUI-Research-and-Development",
  },
];
