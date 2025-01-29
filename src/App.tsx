import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  matchPath,
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
 const location = useLocation();

 
 const isProjectDetail = matchPath("/project-detail/:id", location.pathname);

  return (
    <>
      {!isProjectDetail && <Navbar />}

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

        <Route path="/project-detail/:id" element={<ProjectDetail />} />
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