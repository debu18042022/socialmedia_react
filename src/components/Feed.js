import { Box, ThemeProvider } from "@mui/material";
import React from "react";
import Post from "./Post";
import { useState } from "react";
import { createTheme } from "@mui/material";
import Navbar from "./Navbar";
import { Stack } from "@mui/system";
import Sidebar from "./Sidebar";
import Add from "./Add";
import Rightbar from "./Rightbar";

const Feed = () => {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  // return (
  //   <Box flex={4} p={2}>
  //    <Post/>
  //    <Post/>
  //    <Post/>
  //    <Post/>
  //    <Post/>
  //    <Post/>
  //    <Post/>
  //   </Box>
  // );
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Box flex={4} p={2}>
            <Post />
            {/* <Post />
            <Post /> */}
          </Box>
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
};

export default Feed;
