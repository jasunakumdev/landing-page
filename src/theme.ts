import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#298e9e',
    },
    secondary: {
      main: '#999da0',
    },
  },
  typography: {
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
    },
  },
  spacing: 8,
})

export default theme
