import { Box, Typography, useTheme } from '@mui/material'
import Grid from '@mui/material/Grid2'
import TransformIcon from '@mui/icons-material/Transform'
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload'
import SecurityIcon from '@mui/icons-material/Security'
import useFuturePaymentStyles from './FuturePaymentStyle'
import FeatureBox from './FeatureBox'

const criticalStyles = {
  typographyLarge: {
    fontSize: { xs: '24px', md: '32px' },
    fontWeight: 500,
  },
}

const FuturePayment = () => {
  const theme = useTheme()
  const classes = useFuturePaymentStyles()
  return (
    <Box sx={classes.container} aria-labelledby="future-payment-title">
      <Grid container p={10} sx={classes.futurePayment}>
        <Grid size={{ xs: 12, md: 12, lg: 12 }}>
          <Typography color="primary" id="future-payment-title" mb={1}>
            FUTURE PAYMENT
          </Typography>
        </Grid>
        <Grid
          size={{ xs: 12, md: 8, lg: 8 }}
          sx={{ maxWidth: { xs: '100', md: '60%' } }}
          role="region"
          aria-labelledby="experience-title"
        >
          <Typography
            id="experience-title"
            variant="h1"
            sx={criticalStyles.typographyLarge}
          >
            Experience that grows with your scale.
          </Typography>
        </Grid>
        <Grid
          size={{ xs: 12, md: 4, lg: 4 }}
          role="region"
          aria-labelledby="system-description"
        >
          <Typography
            sx={{
              fontSize: '20px',
            }}
            color={theme.palette.secondary.main}
            id="system-description"
          >
            Design a financial operating system that works for your business and
            streamlined cash flow management
          </Typography>
        </Grid>
        <FeatureBox
          icon={
            <TransformIcon
              sx={{ fontSize: '64px' }}
              color="primary"
              aria-hidden="true"
            />
          }
          title="Free Transfers"
          description="Create a financial experienceay and automate repeat purchases by
              scheduling recurring payments"
        />

        <FeatureBox
          icon={
            <AssuredWorkloadIcon
              sx={{ fontSize: '64px' }}
              color="primary"
              aria-hidden="true"
            />
          }
          title="Multiaple Account"
          description="Run your operations with cash from your account and generate yield
              on funds stored in your account."
        />

        <FeatureBox
          icon={
            <SecurityIcon
              sx={{ fontSize: '64px' }}
              color="primary"
              aria-hidden="true"
            />
          }
          title="Unmatched security"
          description="Securely manage your finances with organization-wide MFA,
              card-locking, and account-level controls"
        />
      </Grid>
    </Box>
  )
}

export default FuturePayment
