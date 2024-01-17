import { Box, Container, Stack, ThemeProvider, createTheme } from "@mui/material";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import { useState } from "react";
import { theme } from './theme';


function App() {
  const [mode, setMode] = useState("dark")

  const darkTheme = createTheme({
    palette: {
    mode: mode,
  }
})
  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ position: "relative" }} bgcolor={"background.default"} color={"text.primary"}>
        <Navbar/>
        <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
          <Sidebar />
          <Feed />
          <RightBar/>
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
 )
}

export default App;
