import { ThemeProvider, createTheme } from "@mui/material/styles";
import {  CssBaseline } from "@mui/material";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";

const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", sans-serif',
  },
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Navbar />
        
           <Home />
        <Projects/>
       
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
