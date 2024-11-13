import { useTheme } from '@emotion/react'
import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined'
import ContactlessOutlinedIcon from '@mui/icons-material/ContactlessOutlined'
import Linechart from './Linechart'
import ArrowImage from '../../assets/arrow.png'
import useStatStyles from './statStyles'

const Stats = () => {
  const theme = useTheme()
  const classes = useStatStyles()
  return (
    <Box sx={classes.container}>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6, lg: 6 }} sx={classes.cardGrid}>
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

        <Grid size={{ xs: 12, md: 6, lg: 6 }} sx={classes.cardGrid}>
          <Typography sx={{ fontSize: '32px' }}>
            Instant Withdraw your funds at any time
          </Typography>
          <Box display="flex" justifyContent="center" marginTop="36px">
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
              <img src={ArrowImage} width="80%" />
            </Box>

            <AccountBalanceOutlinedIcon
              sx={{ fontSize: '80px' }}
              color="primary"
            />
          </Box>
        </Grid>

        <Grid container size={12} sx={classes.text}>
          <Grid size={{ xs: 12, md: 4, lg: 4 }} alignSelf="center">
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
          <Grid size={{ xs: 12, md: 8, lg: 8 }}>
            <Box marginLeft="24px">
              <Typography>Summary</Typography>
              <Typography
                sx={{
                  fontSize: '34px',
                }}
              >
                $1,876,580
              </Typography>
            </Box>
            <Linechart />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Stats
