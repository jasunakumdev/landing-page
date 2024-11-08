import { useTheme } from '@emotion/react'
import { Box, Typography, styled } from '@mui/material'
import Grid from '@mui/material/Grid2'
import TransformIcon from '@mui/icons-material/Transform'
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload'
import SecurityIcon from '@mui/icons-material/Security'
const BoxStyle = styled(Box)(({ theme }) => ({
  // flexGrow: 1,
  // paddingLeft: '96px',
  // paddingRight: '96px',
  // backgroundColor: theme.palette.custom.lightSky,

  flexGrow: 1,
  paddingLeft: theme.breakpoints.down('sm') ? '16px' : '96px', // Adjust padding for mobile
  paddingRight: theme.breakpoints.down('sm') ? '16px' : '96px', // Adjust padding for mobile
  backgroundColor: theme.palette.custom.lightSky,
}))

const FuturePayment = () => {
  const theme = useTheme()
  console.log('Theme---->', theme.breakpoints.down('md'))
  return (
    <Box
      sx={{
        flexGrow: 1,
        paddingLeft: { xs: '16px', md: '96px' },
        paddingRight: { xs: '16px', md: '96px' },
        backgroundColor: (theme) => theme.palette.custom.lightSky,
      }}
    >
      <Grid
        container
        p={10}
        sx={{
          backgroundColor: theme?.palette.custom.white,
          boxShadow: '0px 16px 12px rgba(0, 0, 0, 0.1)',
          borderRadius: '32px',
          padding: '80px',
        }}
      >
        <Grid size={{ xs: 12, md: 12, lg: 12 }}>
          <Typography color="primary" fontWeight="bold">
            FUTURE PAYMENT
          </Typography>
        </Grid>

        <Grid
          size={{ xs: 12, md: 8, lg: 8 }}
          sx={{ maxWidth: { xs: '100', md: '60%' } }}
        >
          <Typography
            sx={{
              fontSize: '48px',
            }}
          >
            Experience that grows with your scale.
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 4, lg: 4 }}>
          <Typography
            sx={{
              fontSize: '20px',
            }}
            color={theme.palette.secondary.main}
          >
            Design a financial operating system that works for your business and
            streamlined cash flow management
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 4, lg: 4 }}>
          <Box mt={8}>
            <TransformIcon sx={{ fontSize: '64px' }} color="primary" />
            <Typography fontSize="32px">Free Transfers</Typography>
            <Typography
              style={{ fontSize: '20px' }}
              color={theme.palette.secondary.main}
            >
              Create a financial experienceay and automate repeat purchases by
              scheduling recurring payments
            </Typography>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 4, lg: 4 }}>
          <Box mt={8}>
            <AssuredWorkloadIcon sx={{ fontSize: '64px' }} color="primary" />
            <Typography fontSize="32px">Multiaple Account</Typography>
            <Typography
              style={{ fontSize: '20px' }}
              color={theme.palette.secondary.main}
            >
              Run your operations with cash from your account and generate yield
              on funds stored in your account.
            </Typography>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 4, lg: 4 }}>
          <Box mt={8}>
            <SecurityIcon sx={{ fontSize: '64px' }} color="primary" />
            <Typography fontSize="32px">Unmatched security</Typography>
            <Typography
              style={{ fontSize: '20px' }}
              color={theme.palette.secondary.main}
            >
              Securely manage your finances with organization-wide MFA,
              card-locking, and account-level controls
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default FuturePayment
