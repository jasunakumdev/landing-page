import { Box, Typography, useTheme } from '@mui/material'
import Grid from '@mui/material/Grid2'
import useAccountStepStyle from './accountStepStyle'
import StepCard from './StepCard'

const AccountSteps = () => {
  const theme = useTheme()
  const classes = useAccountStepStyle()

  const stepCards = [
    {
      number: 1,
      title: 'Open your account',
      description:
        'Sign up to finpay and set up your account from the dashboard.',
    },
    {
      number: 2,
      title: 'Transfer your money',
      description:
        'Move money from to another account into and start to earning up.',
    },
    {
      number: 3,
      title: 'Watch your balance grow',
      description:
        'Accessed instantly and remain insulated from market volatility.',
    },
  ]

  return (
    <Box sx={classes.main} role="main" aria-labelledby="account-steps-heading">
      <Grid
        container
        sx={classes.conatiner}
        spacing={3}
        key="account-step-grid"
      >
        <Grid size={12} key="title">
          <Typography
            color="primary"
            fontWeight="bold"
            role="heading"
            aria-level={1}
            id="steps-subheading"
          >
            STEP
          </Typography>
        </Grid>

        <Grid size={12} key="description-heading">
          <Typography
            sx={{
              fontSize: { xs: '24px', md: '48px' },
              color: theme.palette.custom.white,
            }}
            id="account-steps-heading"
            role="heading"
            aria-level={2}
          >
            Maximize your returns with a Reserve account that generates.
          </Typography>
        </Grid>

        {stepCards.map((step) => (
          <StepCard
            key={step.number}
            number={step.number}
            title={step.title}
            description={step.description}
          />
        ))}
      </Grid>
    </Box>
  )
}

export default AccountSteps
