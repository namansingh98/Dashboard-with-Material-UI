import { ColorModeContext } from "./theme";
import { CssBaseline,ThemeProvider } from "@mui/material";
import "./styles.css";
import { useState } from "react";
import { Topbar } from "./scenes/global/Topbar";


export default   function App() {
  const [theme,colorMode]=useState();
  return (
  <ColorModeContext.Provider value={colorMode}>
  <ThemeProvider theme={theme}>
    <CssBaseline/>
  <div className="app">
    <main className="content">
      <Topbar/>
    </main>
  </div>
  </ThemeProvider>
  </ColorModeContext.Provider>
  
  );
}