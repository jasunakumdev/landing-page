import { Box, Typography, useTheme } from '@mui/material'
import Grid from '@mui/material/Grid2'

const Footer = () => {
  const theme = useTheme()
  const currentYear = new Date().getFullYear()
  return (
    <Box
      sx={{
        borderTop: `1px solid ${theme.palette.secondary.main}`,
      }}
    >
      <Grid display="flex" justifyContent="center" size={12} my={4}>
        <Typography>
          &copy; Finpay {currentYear}. All Rights Reserved.
        </Typography>
      </Grid>
    </Box>
  )
}

export default Footer
