import { useTheme } from '@mui/material/styles'

const useStatStyles = () => {
  const theme = useTheme()
  return {
    container: {
      flexGrow: 1,
      paddingLeft: { xs: '16px', md: '48px', lg: '96px' },
      paddingRight: { xs: '16px', md: '48px', lg: '96px' },
      marginBottom: '48px',
    },
    cardGrid: {
      backgroundColor: theme.palette.custom.lightSky,
      padding: { xs: '36px', md: '64px' },
      borderRadius: '32px',
    },
    text: {
      backgroundColor: theme.palette.custom.lightSky,
      borderRadius: '32px',
      padding: { xs: '20px', md: '64px' },
    },
  }
}

export default useStatStyles
