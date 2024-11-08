import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined'
import usePlansStyles from './plansStyles'

const Plans = () => {
  const classes = usePlansStyles()
  return (
    <Box sx={classes.container}>
      <Grid
        sx={{ marginBottom: { xs: '16px', md: 0 } }}
        display="flex"
        justifyContent="center"
      >
        <Typography sx={{ fontSize: { xs: '24px', md: '20px' } }}>
          CHOOSE PLAN :
        </Typography>
      </Grid>
      <Grid container sx={classes.gridBox} spacing={3}>
        <Grid size={{ xs: 12, md: 6, lg: 6 }} sx={classes.gridPlusContainer}>
          <Typography sx={classes.plusText} color="primary">
            Plus
          </Typography>
          <Box mt={8} sx={classes.fees}>
            <Typography sx={{ fontSize: '32px' }}>£2.99/month</Typography>
            <ArrowOutwardOutlinedIcon />
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 6, lg: 6 }} sx={classes.premiumContainer}>
          <Typography sx={classes.plusText}>Premium</Typography>
          <Box mt={8} sx={classes.fees}>
            <Typography sx={{ fontSize: '32px' }}>£6.99/month</Typography>
            <ArrowOutwardOutlinedIcon />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Plans
