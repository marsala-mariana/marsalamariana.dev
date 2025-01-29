import roussFoto from "../assets/rouss.png";

import nuvahsing from "../assets/mokupNuvah.png";
import logoNu from "../assets/logo-nu.jpg";
import etiqueta from "../assets/etiquetaNuvah.jpg";

import logoAdv from "../assets/logoAd.png";
import vasos from"../assets/vasos.png";
import identiAdv from "../assets/identidadAdv.jpg"
import cartelADV from "../assets/carteladv.png";

import movilAppADV from "../assets/MobileADVAPP-01.png"
import appRE from "../assets/iphone15.png"
import mokups from "../assets/15ockup.jpeg"

export const projectsData = [
  {
    id: "1",
    nameProyect: "Rouss",
    plataforma: "Website",
    coverImage: roussFoto,
    technologies: ["WordPress", "Figma", "Adobe Illustraitor", "CSS"],
    etiqueta: ["Design UX - UI"],
    description:
      "Comencé el proyecto realizando una investigación exhaustiva sobre la marca 'Rouss Estética', analizando su identidad y público objetivo.\n\nCon base en esto, diseñé la interfaz de usuario (UI), creando un diseño moderno y alineado con la estética y valores de la marca. También trabajé en la creación del logotipo de 'Rouss Estética', asegurándome de que reflejara su enfoque profesional y elegante.\n\nPosteriormente, implementé el diseño utilizando WordPress, aprovechando sus herramientas y funcionalidades para optimizar la experiencia del usuario.\n\nDurante el desarrollo, me aseguré de mejorar la navegación y la estética del sitio, garantizando una interfaz amigable, funcional y visualmente atractiva.",

    enlace: "http://roussestetica.com/",
  },
  {
    id: "2",
    nameProyect: "Nuvah",
    plataforma: "Logo",
    coverImage: [nuvahsing, etiqueta, logoNu],
    technologies: ["Adobe Illustraitor"],
    etiqueta: ["Design UX - UI"],
    description:
      "Para este logo, realicé una investigación y entrevista con la marca para entender sus objetivos y lo que quería transmitir.\n\nCon esa información, diseñé un logo simple y moderno en Adobe Illustrator, utilizando colores frescos que reflejan la esencia de la marca y su enfoque juvenil y dinámico",
  },
  {
    id: "3",
    nameProyect: "ADV",
    plataforma: "Logo",
    coverImage: [logoAdv, vasos, identiAdv, cartelADV],
    technologies: ["Adobe Illustraitor"],
    etiqueta: ["Design UX - UI"],
    description:
      "Para este logo, realicé una investigación y entrevista con la marca para entender sus objetivos y lo que quería transmitir.\n\nCon esa información, diseñé un logo simple y moderno en Adobe Illustrator, utilizando colores frescos que reflejan la esencia de la marca y su enfoque juvenil y dinámico",
  },
  {
    id: "4",
    nameProyect: "Software de Gestión de Comercios",
    plataforma: "Software",
    coverImage:
      "https://img.freepik.com/fotos-premium/fondo-colores-abstracto-descarga-gratuita_80983-1710.jpg",
    technologies: [
      "Adobe Illustraitor",
      "Next.Js",
      "Typescript",
      "Meterial-UI",
      "CI/CD con GitHub Actions",
    ],
    etiqueta: ["Design UX - UI", "Developer Front-end"],
    description:
      "Lidero el diseño, desarrollo y ejecución de un sistema de gestión de comercios utilizando Next.js, TypeScript y Material-UI. Desarrollo el código base, implementando funcionalidades clave y asegurando un rendimiento eficiente y escalable. Realizo investigación de usuarios (UX Research) para identificar necesidades y transformar insights en interfaces intuitivas y funcionales. Diseño interfaces responsivas y accesibles que optimizan la experiencia del usuario. Implemento flujos de trabajo automatizados mediante pipelines de CI/CD con GitHub Actions, mejorando la eficiencia del desarrollo.",
    enlace: "",
  },
  {
    id: "5",
    nameProyect: "ADV",
    coverImages: movilAppADV,
    plataforma: "Mobile App and Website",
    technologies: [
      "Adobe Illustraitor",
      "Next.Js",
      "Typescript",
      "Meterial-UI",
      "React Native",
      "Android Studio,",
      "Expo",
      "Trello,",
      "GitHub,",
    ],
    etiqueta: ["Design", "Developer Front-end"],
    description:
      "Diseñé y desarrollé una plataforma web con Next.js, TypeScript y Material-UI. Migré el proyecto a una aplicación móvil multiplataforma utilizando React Native y Expo, compatible con web, Android e iOS. Implementé la API de Google Maps Places y funciones de geolocalización para personalizar la experiencia del usuario. Diseñé interfaces consistentes y responsivas para las tres plataformas. Coordiné el equipo de desarrollo utilizando Scrum, Trello, y GitHub.",
    enlace: "https://www.adondevamos.club/search/suggestions",
  },
  {
    id: "6",
    nameProyect: "Design Rouss",
    coverImages:[mokups,appRE] ,
    plataforma: "Design App RoussEstetica",
    technologies: ["Adobe Illustraitor", "Figma"],
    etiqueta: ["Design UX-UI", "Developer "],
    description:
      "Diseño UX/UI para una aplicación. Llevé a cabo un proceso completo de UX Research, aplicando diversas metodologías como brief, benchmark, user personas, POV, encuestas y entrevistas para comprender las necesidades del usuario. A partir de estos hallazgos, definí el MVP, la arquitectura de información y realicé ejercicios de card sorting, task flow y flowchart para estructurar la navegación. Posteriormente, comencé a materializar la propuesta, desarrollando bocetos, wireframes en media y alta fidelidad, hasta llegar a la creación de un prototipo testeable, asegurando una experiencia de usuario óptima antes de su implementación.",
    enlace: "",
  },
];
