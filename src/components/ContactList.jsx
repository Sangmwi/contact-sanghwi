import React from "react";
import { Typography, List, Box, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Autocomplete from "@mui/material/Autocomplete";
import usePhoneBookStore from "@/stores/usePhoneBookStore";
import ContactItem from "@/components/ContactItem";
import { useState } from "react";

const ContactList = () => {
  const {
    phoneBook,
    searchPhoneBook,
    setSearchPhoneBook,
    clearSearchPhoneBook,
  } = usePhoneBookStore();
  const [inputValue, setInputValue] = useState('');
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        maxHeight: "60vh",
        overflow: "auto",
        scrollbarWidth: "thin",
        scrollbarColor: "primary.main",
        padding: "20px 0",
        textAlign: "center",
        border: "1px solid #e0e0e0",
        borderRadius: "10px",
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: "10px" }}>연락처 검색</Typography>
      <Autocomplete
        sx={{ width: "90%", margin: "10px auto" }}
        options={phoneBook}
        freeSolo
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        onChange={(event, value) => {
          if (value && typeof value !== "string") {
            setSearchPhoneBook(value.name); // 항목 선택
          } else if (typeof value === "string") {
            setSearchPhoneBook(value); // 수동 입력 후 Enter로 선택된 string
          }
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            setSearchPhoneBook(inputValue); // inputValue 기준으로 검색
          }
        }}
        getOptionLabel={(option) => {
          if (typeof option === "string") return option;
          return option.name;
        }}
        renderOption={(props, option) => (
          <li {...props} key={`${option.name}-${option.phone}`}>
            {option.name}
          </li>
        )}
        renderInput={(params) => <TextField {...params} label="이름 검색" />}
      />

      <List>
        {(searchPhoneBook || phoneBook).map((contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </List>
    </Box>
  );
};

export default ContactList;
