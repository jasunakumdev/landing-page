import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import Button from '../../common/components/Button'
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined'
import usePaymentProcessStyles from './paymentProcessStyle'

const PaymentProcess = () => {
  const classes = usePaymentProcessStyles()
  return (
    <Box sx={classes.container}>
      <Grid container p={10} sx={classes.gridBox}>
        <Grid size={{ xs: 6, md: 6, lg: 6 }} sx={{ marginBottom: '8px' }}>
          <Typography color="primary" fontWeight="bold">
            TRY IT NOW
          </Typography>
        </Grid>

        <Grid
          size={{ xs: 12, md: 8, lg: 8 }}
          sx={{ maxWidth: { xs: '100%', md: '100%', lg: '60%' } }}
        >
          <Typography sx={classes.typographyMain}>
            Ready to level up your payment process?
          </Typography>
          <Typography color="secondary" sx={{ marginBottom: '16px' }}>
            Support small business with simple invoicing, powerful integrtions,
            and cash flow management tools.
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 4, lg: 4 }} sx={classes.buttonContainer}>
          <Box>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={classes.button}
            >
              Get Started Now
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              sx={{ ...classes.button, marginLeft: { xl: '16px' } }}
            >
              Learn More
              <ArrowOutwardOutlinedIcon sx={{ marginLeft: '8px' }} />
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default PaymentProcess
