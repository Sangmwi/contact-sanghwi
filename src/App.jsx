import React from 'react'
import { Grid, Box } from '@mui/material'
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'

const App = () => {
  return (
    <Box sx={{ width: '100%', height: '100%', padding: '20px' }}>
      <h1>연락처 앱</h1>
      <Grid container spacing={2}>
        <Grid size={6}>
          <ContactForm />
        </Grid>
        <Grid size={6}>
          <ContactList />
        </Grid>
      </Grid>
    </Box>
  )
}

export default App
