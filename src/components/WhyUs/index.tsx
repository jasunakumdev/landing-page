import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'

const WhyUs = () => {
  return (
    <Box role="region" aria-labelledby="why-us-title">
      <Grid container p={5}>
        <Grid
          display="flex"
          justifyContent="center"
          size={12}
          aria-label="Why Us Header"
        >
          <Typography component="h2" id="why-us-title" color="primary">
            WHY US
          </Typography>
        </Grid>

        <Grid
          display="flex"
          justifyContent="center"
          size={12}
          aria-label="Why They Prefer Finpay"
        >
          <Typography
            component="h3"
            sx={{ fontSize: { xs: '24px', md: '48px' }, textAlign: 'center' }}
          >
            Why they prefer Finpay
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default WhyUs
