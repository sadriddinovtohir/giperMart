import { Box, Stack } from "@mui/material";
import React from "react";
import Header from "./header/header";
import { Outlet } from "react-router-dom";
import Footer from "./footer/footer";

export default function MainLayout() {
  return (
    <Stack justifyContent={"space-between"}>
      <Box>
        <Header />
        <main>
          <Outlet />
        </main>
      </Box>
      <Box>
        <Footer />
      </Box>
    </Stack>
  );
}
