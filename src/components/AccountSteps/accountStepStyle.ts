import { useTheme } from '@mui/material/styles'

const useAccountStepStyle = () => {
  const theme = useTheme()
  return {
    main: {
      flexGrow: 1,
      paddingLeft: { xs: '16px', md: '48px', lg: '96px' },
      paddingRight: { xs: '16px', md: '48px', lg: '96px' },
      backgroundColor: theme.palette?.custom.lightBlue,
    },
    conatiner: {
      boxShadow: '0px 16px 12px rgba(0, 0, 0, 0.1)',
      padding: { xs: '16px', md: '48px', lg: '80px' },
    },
  }
}
export default useAccountStepStyle
