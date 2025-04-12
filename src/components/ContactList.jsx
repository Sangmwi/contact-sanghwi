import React from 'react'
import { Typography, List, ListItem, ListItemText, Box } from '@mui/material'

const ContactList = () => {
  return (
    <Box sx={{ width: '100%', height: '100%', padding: '20px 0' }}>
        <Typography variant="h6">연락처 목록</Typography>
        <List>
            <ListItem>
                <ListItemText primary="이름" secondary="전화번호" />
            </ListItem>
        </List>
    </Box>
  )
}

export default ContactList
