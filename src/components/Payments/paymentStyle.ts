import { useTheme } from '@mui/material/styles'

const usePaymentStyles = () => {
  const theme = useTheme()
  return {
    container: {
      flexGrow: 1,
      paddingLeft: { xs: '16px', md: '48px', lg: '96px' },
      paddingRight: { xs: '16px', md: '48px', lg: '96px' },
      backgroundColor: theme.palette.custom.lightSky,
      paddingBottom: { xs: '0px', md: '200px' },
    },
    searchInput: {
      padding: '0px',
      height: '54px',
      borderRadius: '12px',
      width: { xs: '100%', md: '80%' },
      maxWidth: '500px',
      backgroundColor: 'white',
    },
    cardType: {
      marginTop: '8px',
      border: `1px solid #e9e9e9`,
      borderRadius: '8px',
      padding: '8px',
      height: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: '12px',
      paddingBottom: '12px',
    },
    gridBox: {
      padding: { xs: '12px', md: '64px' },
    },
    branding: {
      width: { xs: '100%', md: '80%' },
      marginTop: '16px',
    },
    paymentContainer: {
      maxWidth: { xs: '100%', md: '100%', lg: '100%', xl: '70%' },
      padding: '32px',
      borderRadius: '16px',
    },
    invoceDetails: {
      marginTop: '8px',
      border: `1px solid #e9e9e9`,
      borderRadius: '8px',
      padding: '8px',
      paddingLeft: '16px',
    },
  }
}

export default usePaymentStyles
