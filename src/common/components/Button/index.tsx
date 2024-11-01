import { ReactNode } from 'react'
import { styled } from '@mui/material/styles'
import { Button as MUIButton } from '@mui/material'
import { ButtonProps as MUIButtonProps } from '@mui/material/Button'

const RoundedButton = styled(MUIButton)(({ theme }) => ({
  borderRadius: '8px',
  textTransform: 'none',
  '&:hover': {
    borderColor: theme.palette.secondary.main,
  },
  '&:focus': {
    outline: 'none',
    borderColor: theme.palette.secondary.main,
  },
}))

type ButtonProps = {
  children: ReactNode
} & MUIButtonProps

const Button = ({ variant, children, ...rest }: ButtonProps) => {
  return (
    <RoundedButton variant={variant} {...rest}>
      {children}
    </RoundedButton>
  )
}

export default Button
