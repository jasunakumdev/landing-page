import * as React from 'react'
import Popover from '@mui/material/Popover'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import WifiIcon from '@mui/icons-material/Wifi'
import { styled } from '@mui/material/styles'

interface CreditCardPopoverProps {
  anchorEl: HTMLElement | null
  handleClose: () => void
}

const CardContentStyle = styled(CardContent)(({ theme }) => ({
  color: 'white',
  backgroundColor: theme?.palette.primary.main,
  padding: '20px',
  height: '96px',
  width: '250px',
}))

const CardActionsStyle = styled(CardActions)(({ theme }) => ({
  backgroundColor: theme?.palette.custom.lightBlue,
  color: theme?.palette.custom.white,
  display: 'flex',
  justifyContent: 'space-between',
  padding: '20px',
}))

const CreditCardPopover: React.FC<CreditCardPopoverProps> = ({
  anchorEl,
  handleClose,
}) => {
  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      PaperProps={{
        sx: {
          borderRadius: '20px',
        },
      }}
    >
      <Card>
        <CardContentStyle>
          <Typography>Credit Card</Typography>
          <Typography variant="h5" fontWeight="600">
            234 **** ****
          </Typography>
        </CardContentStyle>
        <CardActionsStyle>
          <Typography
            sx={{ fontWeight: 'bold', fontStyle: 'italic' }}
            variant="h4"
          >
            VISA
          </Typography>
          <WifiIcon sx={{ transform: 'rotate(90deg)', fontSize: '2rem' }} />
        </CardActionsStyle>
      </Card>
    </Popover>
  )
}

export default CreditCardPopover
