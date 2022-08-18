import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Add from "./components/Add";
import Feed from "./components/Feed";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Signup from "./components/Signup";
function App() {
  // const [mode, setMode] = useState("light");

  // const darkTheme = createTheme({
  //   palette: {
  //     mode: mode,
  //   },
  // });

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/feed" element={<Feed />}></Route>
        <Route path="/post" element={<Post />}></Route>
        {/* <ThemeProvider theme={darkTheme}>
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <Navbar />
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Sidebar setMode={setMode} mode={mode} />
            <Feed />
            <Rightbar />
          </Stack>
          <Add />
        </Box>
      </ThemeProvider> */}
      </Routes>
    </>
  );
}

export default App;
