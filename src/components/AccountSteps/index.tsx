import { useTheme } from '@emotion/react'
import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import useAccountStepStyle from './accountStepStyle'
import StepCard from './StepCard'

const AccountSteps = () => {
  const theme = useTheme()
  const classes = useAccountStepStyle()
  return (
    <Box sx={classes.main}>
      <Grid container sx={classes.conatiner} spacing={3}>
        <Grid size={12}>
          <Typography color="primary" fontWeight="bold">
            STEP
          </Typography>
        </Grid>

        <Grid size={12}>
          <Typography
            sx={{
              fontSize: { xs: '24px', md: '48px' },
              color: theme.palette.custom.white,
            }}
          >
            Maximize your returns with a Reserve account that generates.
          </Typography>
        </Grid>

        <StepCard
          number={1}
          title="Open your account"
          description="Sign up to finpay and set up your account from the dashboard."
        />
        <StepCard
          number={2}
          title="Transfer your money"
          description="Move money from to another account into and start to earning up."
        />
        <StepCard
          number={3}
          title="Watch your balance grow"
          description="Accessed instantly and remain insulated from market volatility."
        />
      </Grid>
    </Box>
  )
}

export default AccountSteps
