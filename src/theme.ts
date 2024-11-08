import { createTheme, PaletteOptions } from '@mui/material/styles'

interface CustomPalette extends PaletteOptions {
  custom?: {
    lightBlue: string
    darkBlue: string
    lightGreen: string
    darkGreen: string
    lightRed: string
    darkRed: string
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#2A8E9E',
    },
    secondary: {
      main: '#999da0',
    },
    action: {
      active: '#000',
      hover: '#f50057',
      selected: '#f50057',
      disabled: '#ccc',
    },
    text: {
      primary: '#333',
      secondary: '#666',
      disabled: '#aaa',
    },
    error: {
      main: '#f44336',
    },
    warning: {
      main: '#ff9800',
    },
    info: {
      main: '#2196f3',
    },
    success: {
      main: '#4caf50',
    },
    custom: {
      lightBlue: '#043247',
      darkBlue: '#0288d1',
      lightGreen: '#8bc34a',
      darkGreen: '#388e3c',
      lightRed: '#e57373',
      darkRed: '#c62828',
      white: '#fff',
      lightSky: '#f5f9f9',
    },
  } as CustomPalette,
  typography: {
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
    },
  },
  spacing: 8,
})

export default theme
