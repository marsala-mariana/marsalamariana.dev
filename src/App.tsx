import { ThemeProvider, createTheme } from "@mui/material/styles";
import {  CssBaseline } from "@mui/material";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Testimonials } from "./components/Testimonials";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProjectDetail } from "./components/ProjectDetail";

const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", sans-serif',
  },
 
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar /> {/* Navbar debe estar fuera de <Routes> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project-detail" element={<ProjectDetail />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;