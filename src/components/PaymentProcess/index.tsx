import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import Button from '../../common/components/Button'
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined'
import usePaymentProcessStyles from './paymentProcessStyle'

const PaymentProcess = () => {
  const classes = usePaymentProcessStyles()
  return (
    <Box
      component="section"
      role="region"
      aria-labelledby="payment-process-heading"
      sx={classes.container}
    >
      <Grid container p={10} sx={classes.gridBox}>
        <Grid
          size={{ xs: 6, md: 6, lg: 6 }}
          sx={{ marginBottom: '8px' }}
          role="heading"
          aria-level={1}
        >
          <Typography
            color="primary"
            fontWeight="bold"
            id="payment-process-heading"
          >
            TRY IT NOW
          </Typography>
        </Grid>

        <Grid
          size={{ xs: 12, md: 8, lg: 8 }}
          sx={{ maxWidth: { xs: '100%', md: '100%', lg: '60%' } }}
          aria-labelledby="payment-description-title"
          aria-describedby="payment-description-details"
        >
          <Typography
            sx={classes.typographyMain}
            id="payment-description-title"
          >
            Ready to level up your payment process?
          </Typography>
          <Typography
            color="secondary"
            sx={{ marginBottom: '16px' }}
            id="payment-description-details"
          >
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
              aria-label="Get started now to explore payment options"
            >
              Get Started Now
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              sx={{ ...classes.button, marginLeft: { xl: '16px' } }}
              aria-label="Learn more about payment tools and services"
            >
              Learn More
              <ArrowOutwardOutlinedIcon
                sx={{ marginLeft: '8px' }}
                aria-hidden="true"
              />
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default PaymentProcess
