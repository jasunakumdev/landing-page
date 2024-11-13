import Grid from '@mui/material/Grid2'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { Typography, useTheme } from '@mui/material'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import Button from '../../common/components/Button'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import React, { useState } from 'react'
import CreditCardPopover from './CreditCardPopover'
import usePaymentStyles from './paymentStyle'
import PaymentType from './PaymentType'

const Payments = () => {
  const theme = useTheme()
  const classes = usePaymentStyles()
  const [selectedValue, setSelectedValue] = useState('card')
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
    <Box sx={classes.container}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6, lg: 6 }} sx={classes.gridBox}>
          <Typography variant="h1" fontSize={'4rem'}>
            Get Paid early
          </Typography>
          <Typography variant="h2" fontSize={'3rem'} fontWeight={500}>
            save automatically
          </Typography>
          <Typography variant="h3" fontSize={'3rem'} fontWeight={500}>
            all your pay.
          </Typography>
          <Typography
            py={2}
            variant="subtitle2"
            color={theme.palette.secondary.main}
          >
            Supports small businesses with simple invoicing powerful
            integrations, and cash flow management tools.
          </Typography>

          <OutlinedInput
            id="get-started"
            type={'text'}
            placeholder="Your bussiness email"
            sx={classes.searchInput}
            endAdornment={
              <InputAdornment position="end">
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ height: '45px', marginRight: '4px' }}
                >
                  Get Started
                  <ArrowOutwardIcon style={{ paddingLeft: '4px' }} />
                </Button>
              </InputAdornment>
            }
          />
          <Grid
            py={3}
            display={'flex'}
            justifyContent="space-between"
            sx={classes.branding}
          >
            {['Klarna', 'Coinbase', 'Instacart'].map((text, index) => (
              <Typography
                key={index}
                variant="h5"
                fontWeight={text === 'Klarna' ? 700 : 600}
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
        >
          <Paper elevation={1} sx={classes.paymentContainer}>
            <Box display="flex" alignItems="center">
              <Box mr={1}>
                <AccountBalanceIcon sx={{ fontSize: '36px' }} color="primary" />
              </Box>
              <Box>
                <Typography
                  variant="subtitle2"
                  fontWeight="bold"
                  lineHeight="0.5"
                >
                  Dipa Inhouse
                </Typography>
                <Typography
                  variant="caption"
                  color={theme.palette.secondary.main}
                >
                  test@mailinator.com
                </Typography>
              </Box>
            </Box>
            <Box sx={classes.invoceDetails}>
              <Typography
                variant="caption"
                color={theme.palette.secondary.main}
              >
                Invoice
              </Typography>
              <Typography variant="h6" fontWeight={600} lineHeight="1.2">
                $1,898,7809
              </Typography>
              <Typography
                variant="caption"
                color={theme.palette.secondary.main}
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
            />
            <PaymentType
              selectedValue={selectedValue}
              handleChange={handleChange}
              handleClick={handleClick}
              name="Bank Account"
              type="bank"
            />
            <Box py={2}>
              <Button fullWidth variant="contained" color="primary">
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
