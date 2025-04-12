import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";
import { Box, Button } from "@mui/material";
import ContactPage from "@/pages/ContactPage";
import CounterPage from "@/pages/CounterPage";

const App = () => {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <Button onClick={() => navigate("/contact")}>연락처</Button>
          <Button onClick={() => navigate("/counter")}>카운터</Button>
        </Box>
        <Routes>
          <Route path="/" element={<Navigate to="/contact" />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/counter" element={<CounterPage />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
};

export default App;
