import { Box, Typography, useTheme } from '@mui/material'
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
        <Grid
          size={{ xs: 12, md: 6, lg: 6 }}
          sx={classes.cardGrid}
          role="region"
          aria-labelledby="business-stats"
        >
          <Typography
            id="business-stats"
            sx={{ fontSize: '80px' }}
            color="primary"
            fontWeight="bold"
          >
            4k+
          </Typography>
          <Typography
            sx={{ fontSize: '32px' }}
            role="text"
            aria-label="Business already running on Finpay"
          >
            Business already running on Finpay
          </Typography>
        </Grid>

        <Grid
          size={{ xs: 12, md: 6, lg: 6 }}
          sx={classes.cardGrid}
          role="region"
          aria-labelledby="instant-withdraw"
        >
          <Typography sx={{ fontSize: '32px' }} id="instant-withdraw">
            Instant Withdraw your funds at any time
          </Typography>
          <Box display="flex" justifyContent="center" marginTop="36px">
            <ContactlessOutlinedIcon
              sx={{ fontSize: '80px' }}
              color="primary"
              aria-label="Contactless payment icon"
            />
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              minWidth="120px"
            >
              <img
                src={ArrowImage}
                width="80%"
                alt="Arrow representing funds transfer"
              />
            </Box>

            <AccountBalanceOutlinedIcon
              sx={{ fontSize: '80px' }}
              color="primary"
              aria-label="Account balance icon"
            />
          </Box>
        </Grid>

        <Grid
          container
          size={12}
          sx={classes.text}
          role="region"
          aria-labelledby="additional-stats"
        >
          <Grid size={{ xs: 12, md: 4, lg: 4 }} alignSelf="center">
            <Typography
              id="additional-stats"
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
              role="text"
            >
              Generate returns on your cash reserves without making any
              investments.
            </Typography>
          </Grid>
          <Grid
            size={{ xs: 12, md: 8, lg: 8 }}
            role="region"
            aria-labelledby="summary-stats"
          >
            <Box marginLeft="24px">
              <Typography id="summary-stats">Summary</Typography>
              <Typography
                sx={{
                  fontSize: '34px',
                }}
                aria-live="polite"
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
