import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'

const Mission = () => {
  return (
    <Box
      component="section"
      role="region"
      aria-labelledby="mission-heading"
      sx={{ padding: '4rem' }}
    >
      <Grid container p={5}>
        <Grid display="flex" justifyContent="center" size={12}>
          <Typography
            id="mission-heading"
            color="primary"
            fontWeight="bold"
            role="heading"
            aria-level={1}
          >
            OUR MISSION
          </Typography>
        </Grid>

        <Grid
          display="flex"
          justifyContent="center"
          size={12}
          py={2}
          textAlign="center"
        >
          <Typography
            sx={{ fontSize: { xs: '36px', md: '48px' } }}
            id="mission-subheading"
            role="heading"
            aria-level={2}
          >
            We've helped innovate companies
          </Typography>
        </Grid>

        <Grid
          display="flex"
          justifyContent="center"
          size={12}
          textAlign="center"
        >
          <Typography
            sx={{
              fontSize: { xs: '16px', md: '24px' },
              width: { xs: '90%', md: '60%', xl: '60%' },
            }}
            color="secondary"
            id="mission-description"
            aria-describedby="mission-heading"
          >
            Hundreds of all sizes and across all industries have made a big
            improvements with us.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Mission
