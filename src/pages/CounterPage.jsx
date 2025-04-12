import React from "react";
import { Box } from "@mui/material";
import Counter from "@/components/Counter";

const CounterPage = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontSize: "24px",
        fontWeight: "bold",
        color: "primary.main",
      }}
    >
      <Counter />
    </Box>
  );
};

export default CounterPage;
