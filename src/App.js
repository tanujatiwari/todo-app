import { useState } from "react";
import TodoApp from "./TodoApp";
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
  const [appTheme, setAppTheme] = useState('light')
  const theme = createTheme({
    palette: {
      mode: appTheme === 'light' ? "light" : "dark",
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <TodoApp appTheme={appTheme} setAppTheme={setAppTheme} />
    </ThemeProvider>
  );
}

export default App;
