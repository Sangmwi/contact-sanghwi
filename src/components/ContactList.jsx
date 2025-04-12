import React, { useState } from "react";
import {
  Typography,
  List,
  Box,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Autocomplete from "@mui/material/Autocomplete";
import usePhoneBookStore from "@/stores/usePhoneBookStore";
import ContactItem from "@/components/ContactItem";

const ContactList = () => {
  const { phoneBook, searchKeyword, setSearchPhoneBook, clearSearchPhoneBook } =
    usePhoneBookStore();
  const [inputValue, setInputValue] = useState("");

  const filteredList = searchKeyword
    ? phoneBook.filter((contact) => contact.name.includes(searchKeyword))
    : phoneBook;

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
      <Typography variant="h6" sx={{ marginBottom: "10px" }}>
        연락처 검색
      </Typography>

      <Autocomplete
        sx={{ width: "90%", margin: "10px auto" }}
        options={phoneBook}
        freeSolo
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
          setSearchPhoneBook(newInputValue); // 
        }}
        onChange={(event, value) => {
          if (value && typeof value !== "string") {
            setSearchPhoneBook(value.name);
          } else if (typeof value === "string") {
            setSearchPhoneBook(value);
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
        renderInput={(params) => (
          <TextField
            {...params}
            label="이름 검색"
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "gray" }} />
                </InputAdornment>
              ),
            }}
          />
        )}
      />

      <List sx={{ width: "90%", margin: "10px auto" }}>
        {filteredList.length > 0 ? (
          filteredList.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))
        ) : (
          <Typography sx={{ mt: 2 }} color="text.secondary">
            검색 결과가 없습니다
          </Typography>
        )}
      </List>
    </Box>
  );
};

export default ContactList;
