import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Testimonials } from "./components/Testimonials";
import { ProjectDetail } from "./components/ProjectDetail";

const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", sans-serif',
  },
});

function AppContent() {
  const location = useLocation(); // Obtiene la ruta actual

  return (
    <>
      {/* Oculta la Navbar si la ruta es "/project-detail" */}
      {location.pathname !== "/project-detail" && <Navbar />}

      {/* Rutas para el contenido principal */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Projects />
              <Testimonials />
              <Contact />
            </>
          }
        />

        {/* Ruta para el detalle del proyecto */}
        <Route path="/project-detail" element={<ProjectDetail />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;