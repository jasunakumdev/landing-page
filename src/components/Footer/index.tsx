import { Box, Typography, useTheme } from '@mui/material'
import Grid from '@mui/material/Grid2'

const Footer = () => {
  const theme = useTheme()
  const currentYear = new Date().getFullYear()
  return (
    <Box
      sx={{
        borderTop: `1px solid ${theme.palette.secondary.main}`,
        backgroundColor: theme.palette.custom.lightSky,
      }}
      component="footer"
      role="contentinfo"
      aria-label="Footer"
    >
      <Grid
        display="flex"
        justifyContent="center"
        size={12}
        sx={{ padding: '32px' }}
      >
        <Typography
          component="p"
          aria-live="polite"
          sx={{
            textAlign: 'center',
            color: theme.palette.text.primary,
            fontSize: '16px',
          }}
        >
          &copy; Finpay {currentYear}. All Rights Reserved.
        </Typography>
      </Grid>
    </Box>
  )
}

export default Footer
