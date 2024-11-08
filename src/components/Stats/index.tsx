import { useTheme } from '@emotion/react'
import { Box, Typography, styled } from '@mui/material'
import Grid from '@mui/material/Grid2'
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined'
import TrendingFlatOutlinedIcon from '@mui/icons-material/TrendingFlatOutlined'
import ContactlessOutlinedIcon from '@mui/icons-material/ContactlessOutlined'

const BoxStyle = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  paddingLeft: '96px',
  paddingRight: '96px',
}))

const Stats = () => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        flexGrow: 1,
        paddingLeft: { xs: '16px', md: '96px' },
        paddingRight: { xs: '16px', md: '96px' },
      }}
    >
      <Grid container xs={{ padding: { xs: '16px', md: '40px' } }} spacing={3}>
        <Grid
          size={{ xs: 12, md: 6, lg: 6 }}
          sx={{
            backgroundColor: theme.palette.custom.lightSky,
            padding: { xs: '36px', md: '64px' },
            borderRadius: '32px',
          }}
        >
          <Typography
            sx={{ fontSize: '80px' }}
            color="primary"
            fontWeight="bold"
          >
            4k+
          </Typography>
          <Typography sx={{ fontSize: '32px' }}>
            Business already running on Finpay
          </Typography>
        </Grid>

        <Grid
          size={{ xs: 12, md: 6, lg: 6 }}
          sx={{
            backgroundColor: theme.palette.custom.lightSky,
            padding: { xs: '36px', md: '64px' },
            borderRadius: '32px',
          }}
        >
          <Typography sx={{ fontSize: '32px' }}>
            Instant Withdraw your funds at any time
          </Typography>
          <Box display="flex" justifyContent="center">
            <ContactlessOutlinedIcon
              sx={{ fontSize: '80px' }}
              color="primary"
            />
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              minWidth="120px"
            >
              <TrendingFlatOutlinedIcon sx={{ fontSize: '48px', mb: 0.5 }} />
              <TrendingFlatOutlinedIcon
                sx={{ transform: 'rotate(180deg)', fontSize: '48px' }}
              />
            </Box>

            <AccountBalanceOutlinedIcon
              sx={{ fontSize: '80px' }}
              color="primary"
            />
          </Box>
        </Grid>

        <Grid
          size={12}
          sx={{
            backgroundColor: theme.palette.custom.lightSky,
            borderRadius: '32px',
            padding: '64px',
          }}
        >
          <Grid size={4}>
            <Typography
              sx={{
                fontSize: '36px',
              }}
            >
              No asset volatility
            </Typography>
            <Typography
              sx={{
                fontSize: '20px',
              }}
              color={theme.palette.secondary.main}
            >
              Generate returns on your cash reserves without making any
              investments.
            </Typography>
          </Grid>
          <Grid size={8}></Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Stats
