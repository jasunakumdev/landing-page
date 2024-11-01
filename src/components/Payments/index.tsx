import Grid from '@mui/material/Grid2'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { Typography, styled, useTheme } from '@mui/material'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import Button from '../../common/components/Button'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import Radio from '@mui/material/Radio'
import React, { useState } from 'react'
import CreditCardPopover from './CreditCardPopover'

const BoxStyle = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  paddingLeft: '24px',
  paddingRight: '24px',
  backgroundColor: theme.palette.custom.lightSky,
}))

const Payments = () => {
  const theme = useTheme()
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
    <BoxStyle>
      <Grid container spacing={2}>
        <Grid
          size={{ xs: 12, md: 6, lg: 6 }}
          sx={{
            padding: { xs: '12px', md: '64px' },
          }}
        >
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
            sx={{
              padding: '0px',
              height: '45px',
              borderRadius: '12px',
              width: '80%',
              maxWidth: '500px',
            }}
            endAdornment={
              <InputAdornment position="end">
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ height: '45px' }}
                >
                  Get Started{' '}
                  <ArrowOutwardIcon style={{ paddingLeft: '4px' }} />
                </Button>
              </InputAdornment>
            }
          />
          <Grid
            //width="80%"
            py={3}
            display={'flex'}
            justifyContent="space-between"
            sx={{
              width: { xs: '100%', md: '80%' },
            }}
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
          <Paper
            elevation={1}
            sx={{
              maxWidth: { xs: '100%', md: '60%' },
              padding: '16px',
              borderRadius: '16px',
            }}
          >
            <Box display="flex" alignItems="center">
              <Box mr={1}>
                <AccountBalanceIcon fontSize="large" color="primary" />
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
            <Box
              sx={{
                marginTop: '8px',
                border: `1px solid #e9e9e9`,
                borderRadius: '8px',
                padding: '8px',
              }}
            >
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
            <Box
              sx={{
                marginTop: '8px',
                border: `1px solid #e9e9e9`,
                borderRadius: '8px',
                padding: '8px',
                height: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '12px',
                paddingBottom: '12px',
              }}
            >
              <Box display="flex" justifyContent="center" alignItems="center">
                <CreditCardIcon />
                <Typography px={1} variant="subtitle2">
                  Credit Card
                </Typography>
              </Box>
              <Radio
                checked={selectedValue === 'card'}
                onChange={(event) => {
                  handleChange(event)
                  handleClick(event)
                }}
                value="card"
                name="radio-buttons"
                inputProps={{ 'aria-label': 'Credit Card' }}
                style={{ textAlign: 'right' }}
              />
            </Box>
            <Box
              sx={{
                marginTop: '8px',
                border: `1px solid #e9e9e9`,
                borderRadius: '8px',
                padding: '8px',
                height: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '12px',
                paddingBottom: '12px',
              }}
            >
              <Box display="flex" justifyContent="center" alignItems="center">
                <AccountBalanceIcon />
                <Typography px={1} variant="subtitle2">
                  Bank Account
                </Typography>
              </Box>
              <Radio
                checked={selectedValue === 'bank'}
                onChange={handleChange}
                value="bank"
                name="radio-buttons"
                inputProps={{ 'aria-label': 'Bank Account' }}
              />
            </Box>
            <Box py={2}>
              <Button fullWidth variant="contained" color="primary">
                Pay
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <CreditCardPopover anchorEl={anchorEl} handleClose={handleClose} />
    </BoxStyle>
  )
}

export default Payments
