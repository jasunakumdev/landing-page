import React, { useState } from 'react'
import Grid from '@mui/material/Grid2'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import Button from '../../common/components/Button'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import CreditCardPopover from './CreditCardPopover'
import usePaymentStyles from './paymentStyle'
import PaymentType from './PaymentType'

const Payments = () => {
  const classes = usePaymentStyles()
  const [selectedValue, setSelectedValue] = useState('bank')
  const [anchorEl, setAnchorEl] = React.useState<HTMLInputElement | null>(null)

  const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value)
  }

  return (
    <Box sx={classes.container} aria-label="Payments Section">
      <Grid
        container
        spacing={2}
        role="region"
        aria-labelledby="payments-header"
      >
        <Grid
          size={{ xs: 12, md: 6, lg: 6 }}
          sx={classes.gridBox}
          role="region"
          aria-label="Information about payment features"
        >
          <Typography
            id="payments-header"
            variant="h1"
            fontSize="3rem"
            tabIndex={0}
          >
            Get Paid early
          </Typography>
          <Typography
            variant="h2"
            fontSize="3rem"
            fontWeight={500}
            tabIndex={0}
          >
            Save automatically
          </Typography>
          <Typography
            variant="h3"
            fontSize={'3rem'}
            fontWeight={500}
            tabIndex={0}
          >
            All your pay.
          </Typography>
          <Typography
            py={2}
            variant="subtitle2"
            tabIndex={0}
            aria-label="Supports small businesses with simple invoicing, powerful integrations, and cash flow management tools."
          >
            Supports small businesses with simple invoicing, powerful
            integrations, and cash flow management tools.
          </Typography>

          <OutlinedInput
            id="get-started"
            type={'text'}
            placeholder="Your business email"
            aria-label="Enter your business email to get started"
            sx={classes.searchInput}
            endAdornment={
              <InputAdornment position="end">
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ height: '45px', marginRight: '4px' }}
                  aria-label="Click to get started"
                >
                  Get Started
                  <ArrowOutwardIcon style={{ paddingLeft: '4px' }} />
                </Button>
              </InputAdornment>
            }
          />
          <Grid
            py={3}
            display="flex"
            justifyContent="space-between"
            sx={classes.branding}
            aria-label="Trusted by brands like Klarna, Coinbase, and Instacart"
          >
            {['Klarna', 'Coinbase', 'Instacart'].map((text, index) => (
              <Typography
                key={index}
                variant="h5"
                fontWeight={text === 'Klarna' ? 700 : 600}
                tabIndex={0}
                aria-label={`Brand logo: ${text}`}
              >
                {text}
              </Typography>
            ))}
          </Grid>
        </Grid>

        <Grid
          size={{ xs: 12, md: 6, lg: 6 }}
          sx={{
            padding: { xs: '12px', md: '64px' },
          }}
          justifyContent="center"
          role="region"
          aria-label="Payment details and actions"
        >
          <Paper
            elevation={1}
            sx={classes.paymentContainer}
            aria-label="Payment details and actions"
          >
            <Box
              display="flex"
              alignItems="center"
              aria-label="Account information"
            >
              <Box mr={1}>
                <AccountBalanceIcon
                  sx={{ fontSize: '36px' }}
                  color="primary"
                  aria-hidden="true"
                />
              </Box>
              <Box>
                <Typography
                  variant="subtitle2"
                  fontWeight="bold"
                  lineHeight="0.5"
                  tabIndex={0}
                  aria-label="Account holder name: Dipa Inhouse"
                  id="payment-details-header"
                >
                  Dipa Inhouse
                </Typography>
                <Typography
                  variant="caption"
                  tabIndex={0}
                  aria-label="Account email: test@mailinator.com"
                >
                  test@mailinator.com
                </Typography>
              </Box>
            </Box>
            <Box sx={classes.invoiceDetails} aria-label="Invoice details">
              <Typography
                variant="caption"
                tabIndex={0}
                aria-label="Invoice label"
              >
                Invoice
              </Typography>
              <Typography
                variant="h6"
                fontWeight={600}
                lineHeight="1.2"
                tabIndex={0}
                aria-label="Amount: $1,898,7809"
              >
                $1,898,7809
              </Typography>
              <Typography
                variant="caption"
                tabIndex={0}
                aria-label="Invoice date: October 20, 2024"
              >
                October 20, 2024
              </Typography>
            </Box>

            <PaymentType
              selectedValue={selectedValue}
              handleChange={handleChange}
              handleClick={handleClick}
              name="Credit Card"
              type="card"
              aria-label="Select Credit Card payment option"
            />
            <PaymentType
              selectedValue={selectedValue}
              handleChange={handleChange}
              handleClick={handleClick}
              name="Bank Account"
              type="bank"
            />
            <Box py={2}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                aria-label="Pay button"
              >
                Pay
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <CreditCardPopover anchorEl={anchorEl} handleClose={handleClose} />
    </Box>
  )
}

export default Payments
