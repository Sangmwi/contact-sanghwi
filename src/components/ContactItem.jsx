import React from "react";
import { ListItem, ListItemText, ListItemIcon, Avatar, Button } from "@mui/material";
import { Phone } from "@mui/icons-material";
import usePhoneBookStore from "@/stores/usePhoneBookStore";

const ContactItem = ({ contact }) => {
  const { deleteContact } = usePhoneBookStore();
  return (
    <ListItem>
      <ListItemIcon>
        <Avatar>
          <Phone />
        </Avatar>
      </ListItemIcon>
      <ListItemText
        primary={"Name: " + contact.name}
        secondary={"Tel: " + contact.phone}
      />
      <Button variant="contained" color="error" onClick={() => deleteContact(contact.id)}>
        삭제
      </Button>
    </ListItem>
  );
};

export default ContactItem;
