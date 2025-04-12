// src/theme.js
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  typography: {
    fontFamily: `'Pretendard', 'Roboto', 'sans-serif'`,
  },
  palette: {
    primary: {
      main: '#007FFF',
      dark: '#0066CC',
    },
  },
})

export default theme
