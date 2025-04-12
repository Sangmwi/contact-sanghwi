import React, { useState } from "react";
import { Typography, TextField, Button, Box } from "@mui/material";
const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const handleAddContact = () => {
    console.log(name, phone, email);
  };
  return (
    <Box sx={{ width: "100%", height: "100%", padding: "20px 0", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Typography variant="h6">연락처 추가</Typography>
      <TextField
        id="name"
        label="이름"
        fullWidth
        margin="dense"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="phone"
        label="전화번호"
        fullWidth
        margin="dense"
        variant="outlined"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <TextField
        id="email"
        label="이메일"
        fullWidth
        margin="dense"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        sx={{ height: "40px", marginTop: "10px" }}
        onClick={handleAddContact}
      >
        추가
      </Button>
    </Box>
  );
};

export default ContactForm;
