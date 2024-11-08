import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'

const Mission = () => {
  return (
    <Box>
      <Grid container p={5}>
        <Grid display="flex" justifyContent="center" size={12}>
          <Typography color="primary" fontWeight="bold">
            OUR MISSION
          </Typography>
        </Grid>

        <Grid display="flex" justifyContent="center" size={12} py={2}>
          <Typography sx={{ fontSize: { xs: '24px', md: '48px' } }}>
            We've helped innovate companies
          </Typography>
        </Grid>

        <Grid display="flex" justifyContent="center" size={12}>
          <Typography sx={{ fontSize: '24px' }}>
            Hundreds of all sizes and across all industries have made a big
            improvements with us.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Mission
