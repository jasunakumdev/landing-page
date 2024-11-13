import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'

const WhyUs = () => {
  return (
    <Box>
      <Grid container p={5}>
        <Grid display="flex" justifyContent="center" size={12}>
          <Typography color="primary">WHY US</Typography>
        </Grid>

        <Grid display="flex" justifyContent="center" size={12}>
          <Typography sx={{ fontSize: { xs: '24px', md: '48px' } }}>
            Why they prefer Finpay
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default WhyUs
