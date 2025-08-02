import { ThemeProvider } from "./contexts/ThemeContext";
import { Homepage } from "./pages";

function App() {
  return (
    <ThemeProvider>
      <Homepage />
    </ThemeProvider>
  );
}

export default App;
