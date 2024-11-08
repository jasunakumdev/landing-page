import { useTheme } from '@mui/material/styles'

const usePaymentProcessStyles = () => {
  const theme = useTheme()

  return {
    container: {
      flexGrow: 1,
      paddingLeft: { xs: '16px', md: '48px', lg: '96px' },
      paddingRight: { xs: '16px', md: '48px', lg: '96px' },
    },
    gridBox: {
      backgroundColor: theme.palette.custom.lightBlue,
      boxShadow: '0px 16px 12px rgba(0, 0, 0, 0.1)',
      borderRadius: { xs: '16px', md: '16px', lg: '32px' },
      padding: { xs: '32px', md: '48px', lg: '80px' },
    },
    typographyMain: {
      fontSize: { xs: '32px', md: '48px' },
      color: theme.palette.custom.white,
      lineHeight: '1.25',
      marginBottom: '16px',
    },
    typographySecondary: {
      color: 'secondary',
      marginBottom: '16px',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: { xs: 'column', md: 'row' },
    },
    button: {
      width: {
        xs: '100%',
        sm: '100%',
        md: '100%',
        lg: '100%',
        xl: 'auto',
      },
      marginBottom: { xs: '16px', md: '16px', lg: '16px', xl: 0 },
      borderRadius: '8px',
      padding: '16px',
    },
    outlinedButton: {
      marginLeft: { xs: 0, md: 0, lg: 0, xl: '16px' },
      color: 'white',
      width: {
        xs: '100%',
        sm: '100%',
        md: '100%',
        lg: '100%',
        xl: 'auto',
      },
      borderRadius: '8px',
      padding: '16px',
    },
  }
}

export default usePaymentProcessStyles
