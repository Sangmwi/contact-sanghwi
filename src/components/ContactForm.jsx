import React, { useState } from "react";
import { Typography, TextField, Button, Box, Alert } from "@mui/material";
import usePhoneBookStore from "@/stores/usePhoneBookStore";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const { addContact } = usePhoneBookStore();
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
      <Button
        variant="contained"
        color="primary"
        sx={{ width: "100%", height: "40px", marginTop: "10px" }}
        onClick={() => {
          if (name === "" || phone === "") {
            setError("이름과 전화번호 모두 입력해주세요.");
            return;
          }
          addContact(name, phone);
          setName("");
          setPhone("");
          setError("");
        }}
      >
        추가
      </Button>
      {error && <Alert sx={{ width: "100%", marginTop: "10px" }} severity="error">{error}</Alert>}
    </Box>
  );
};

export default ContactForm;
