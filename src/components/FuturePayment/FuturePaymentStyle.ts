import { useTheme } from '@mui/material/styles'

const useFuturePaymentStyles = () => {
  const theme = useTheme()
  return {
    container: {
      flexGrow: 1,
      paddingLeft: { xs: '16px', md: '48px', lg: '96px' },
      paddingRight: { xs: '16px', md: '48px', lg: '96px' },
      marginTop: { xs: '0px', md: '-200px' },
    },
    futurePayment: {
      backgroundColor: theme?.palette.custom.white,
      boxShadow: '0px 16px 12px rgba(0, 0, 0, 0.1)',
      borderRadius: '32px',
      padding: { xs: '40px', md: '80px' },
    },
  }
}
export default useFuturePaymentStyles
