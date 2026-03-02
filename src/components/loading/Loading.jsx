import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

export default function Loading() {
  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        bgcolor: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1300,
        flexDirection: "column",
      }}
    >
      <CircularProgress />
      <Typography mt={2}>Loading...</Typography>
    </Box>
  );
}
