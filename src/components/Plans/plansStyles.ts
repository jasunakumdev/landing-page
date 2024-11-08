import { useTheme } from '@mui/material/styles'

const usePlansStyles = () => {
  const theme = useTheme()
  return {
    container: {
      flexGrow: 1,
      paddingLeft: { xs: '16px', md: '48px', lg: '96px' },
      paddingRight: { xs: '16px', md: '48px', lg: '96px' },
      marginBottom: { xs: '16px' },
    },
    gridBox: {
      padding: { xs: '8px', md: '40px' },
    },
    gridPlusContainer: {
      backgroundColor: theme.palette.custom.lightSky,
      padding: { xs: '36px', md: '48px' },
      borderRadius: '32px',
    },
    plusText: {
      fontSize: { xs: '48px', md: '64px' },
      fontWeight: 'bold',
    },
    premiumContainer: {
      backgroundColor: theme.palette.primary.main,
      padding: { xs: '36px', md: '48px' },
      borderRadius: '32px',
      color: theme.palette.custom.white,
    },
    fees: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  }
}

export default usePlansStyles
