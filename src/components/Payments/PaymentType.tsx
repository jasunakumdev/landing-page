import React from 'react'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import Radio from '@mui/material/Radio'
import usePaymentStyles from './paymentStyle'

interface PaymentTypeProps {
  selectedValue: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleClick: (event: React.ChangeEvent<HTMLInputElement>) => void
  name: string
  type: string
}

const PaymentType: React.FC<PaymentTypeProps> = ({
  selectedValue,
  handleChange,
  handleClick,
  name,
  type,
}) => {
  const classes = usePaymentStyles()

  return (
    <Box
      sx={classes.cardType}
      role="group"
      aria-labelledby={`payment-type-${type}-label`}
      aria-describedby={`payment-type-${type}-description`}
    >
      <Box display="flex" justifyContent="center" alignItems="center">
        {type === 'card' ? <CreditCardIcon /> : <AccountBalanceIcon />}
        <Typography
          id={`payment-type-${type}-label`}
          px={1}
          variant="subtitle2"
          tabIndex={0}
          aria-label={`Payment method: ${name}`}
        >
          {name}
        </Typography>
      </Box>
      <Radio
        checked={selectedValue === type}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          handleChange(event)
          if (type === 'card') handleClick(event)
        }}
        value={type}
        name="radio-buttons"
        inputProps={{
          'aria-label': type === 'card' ? 'Credit Card' : 'Bank Account',
        }}
        style={{ textAlign: 'right' }}
      />
    </Box>
  )
}

export default PaymentType
