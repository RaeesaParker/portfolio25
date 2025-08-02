import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { ThemeProvider } from "./contexts/ThemeContext";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { Homepage } from "./pages/Homepage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { WorkPage } from "./pages/WorkPage";

import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
