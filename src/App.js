import TodoApp from "./TodoApp";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [darkMode, setDarkMode] = useLocalStorage("darkTheme", false)
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <TodoApp darkMode={darkMode} setDarkMode={setDarkMode} />
    </ThemeProvider>
  );
}

export default App;
