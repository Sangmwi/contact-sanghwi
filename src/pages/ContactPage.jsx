import React from "react";
import { Grid, Box, Divider } from "@mui/material";
import { useNavigate, Routes, Route } from "react-router-dom";
import ContactForm from "@/components/ContactForm";
import ContactList from "@/components/ContactList";
import Counter from "@/components/Counter";

const ContactPage = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        margin: "40px 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <Grid
        container
        spacing={5}
        sx={{
          width: "80%",
          minWidth: "700px",
          maxWidth: "1000px",
          height: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid size={5}>
          <ContactForm />
        </Grid>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Grid size={5}>
          <ContactList />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactPage;
