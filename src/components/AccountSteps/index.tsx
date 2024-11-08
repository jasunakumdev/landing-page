import { useTheme } from '@emotion/react'
import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'

const AccountSteps = () => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        flexGrow: 1,
        paddingLeft: { xs: '16px', md: '96px' },
        paddingRight: { xs: '16px', md: '96px' },
        backgroundColor: (theme) => theme.palette.custom.lightBlue,
      }}
    >
      <Grid
        container
        p={10}
        sx={{
          boxShadow: '0px 16px 12px rgba(0, 0, 0, 0.1)',

          padding: '80px',
        }}
        spacing={3}
      >
        <Grid size={{ xs: 12, md: 12, lg: 12 }}>
          <Typography color="primary" fontWeight="bold">
            STEP
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 12, lg: 12 }}>
          <Typography
            sx={{
              fontSize: '48px',
              color: theme.palette.custom.white,
            }}
          >
            Maximize your returns with a Reserve account that generates.
          </Typography>
        </Grid>

        <Grid
          size={{ xs: 12, md: 4, lg: 4 }}
          sx={{ backgroundColor: '#0b3a4e' }}
          p={4}
        >
          <Box>
            <Typography
              sx={{
                fontSize: '96px',
                color: '#B2BAC6',
                fontWeight: 700,
              }}
            >
              1
            </Typography>
            <Typography
              sx={{
                fontSize: '32px',
                color: theme.palette.custom.white,
              }}
            >
              Open your account
            </Typography>
            <Typography color={theme.palette.secondary.main}>
              Sign up to finpay and set up your account from the dashboard.
            </Typography>
          </Box>
        </Grid>

        <Grid
          size={{ xs: 12, md: 4, lg: 4 }}
          sx={{ backgroundColor: '#0b3a4e' }}
          p={4}
        >
          <Box>
            <Typography
              sx={{
                fontSize: '96px',
                color: '#B2BAC6',
                fontWeight: 700,
              }}
            >
              2
            </Typography>
            <Typography
              sx={{
                fontSize: '32px',
                color: theme.palette.custom.white,
              }}
            >
              Transfer your money
            </Typography>
            <Typography color={theme.palette.secondary.main}>
              Move money from to another account into and start to earning up.
            </Typography>
          </Box>
        </Grid>

        <Grid
          size={{ xs: 12, md: 4, lg: 4 }}
          sx={{ backgroundColor: '#0b3a4e' }}
          p={4}
        >
          <Box>
            <Typography
              sx={{
                fontSize: '96px',
                color: '#B2BAC6',
                fontWeight: 700,
              }}
            >
              3
            </Typography>
            <Typography
              sx={{
                fontSize: '32px',
                color: theme.palette.custom.white,
              }}
            >
              Watch your balance grow
            </Typography>
            <Typography color={theme.palette.secondary.main}>
              Accessed instantly and remain insulated from market volatility.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default AccountSteps
