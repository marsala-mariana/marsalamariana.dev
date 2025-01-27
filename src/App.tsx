import { ThemeProvider, createTheme } from "@mui/material/styles";
import {  CssBaseline } from "@mui/material";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Testimonials } from "./components/Testimonials";

const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", sans-serif',
  },
 
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Navbar />
        <Home />
        <Projects />
        <Testimonials/>
        <Contact/>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
