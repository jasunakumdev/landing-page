import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined'
import usePlansStyles from './plansStyles'

const Plans = () => {
  const classes = usePlansStyles()
  return (
    <Box
      sx={classes.container}
      component="section"
      role="region"
      aria-labelledby="plans-section-title"
    >
      <Grid
        sx={{ marginBottom: { xs: '16px', md: 0 } }}
        display="flex"
        justifyContent="center"
      >
        <Typography
          sx={{ fontSize: { xs: '24px', md: '20px' } }}
          id="plans-section-title"
          role="heading"
          aria-level={1}
        >
          CHOOSE PLAN :
        </Typography>
      </Grid>
      <Grid container sx={classes.gridBox} spacing={3} role="list">
        <Grid
          size={{ xs: 12, md: 6, lg: 6 }}
          sx={classes.gridPlusContainer}
          component="article"
          role="listitem"
          tabIndex={0}
          aria-labelledby="plus-plan-title"
          aria-describedby="plus-plan-description"
        >
          <Typography
            id="plus-plan-title"
            role="heading"
            aria-level={2}
            sx={classes.plusText}
            color="primary"
          >
            Plus
          </Typography>
          <Box mt={8} sx={classes.fees}>
            <Typography id="plus-plan-description" sx={{ fontSize: '32px' }}>
              £2.99/month
            </Typography>
            <ArrowOutwardOutlinedIcon
              aria-hidden="true"
              sx={{ marginLeft: '8px' }}
            />
          </Box>
        </Grid>

        <Grid
          size={{ xs: 12, md: 6, lg: 6 }}
          sx={classes.premiumContainer}
          component="article"
          role="listitem"
          tabIndex={0}
          aria-labelledby="premium-plan-title"
          aria-describedby="premium-plan-description"
        >
          <Typography
            sx={classes.plusText}
            id="premium-plan-title"
            role="heading"
            aria-level={2}
          >
            Premium
          </Typography>
          <Box mt={8} sx={classes.fees}>
            <Typography id="premium-plan-description" sx={{ fontSize: '32px' }}>
              £6.99/month
            </Typography>
            <ArrowOutwardOutlinedIcon
              aria-hidden="true"
              sx={{ marginLeft: '8px' }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Plans
