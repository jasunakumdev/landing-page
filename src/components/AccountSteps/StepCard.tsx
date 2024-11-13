import { Box, Typography, useTheme } from '@mui/material'
import Grid from '@mui/material/Grid2'
import React from 'react'

type StepCardProps = {
  number: number
  title: string
  description: string
}
const StepCard: React.FC<StepCardProps> = ({ number, title, description }) => {
  const theme = useTheme()
  return (
    <Grid
      size={{ xs: 12, md: 4, lg: 4 }}
      sx={{ backgroundColor: '#0b3a4e' }}
      p={4}
    >
      <Box>
        <Typography
          sx={{
            fontSize: '96px',
            color: '#B2BAC6',
            fontWeight: 700,
            background: 'linear-gradient(to bottom, #eee, #0b3a4e)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {number}
        </Typography>
        <Typography
          sx={{
            fontSize: '24px',
            color: theme.palette.custom.white,
            lineHeight: '1.25',
          }}
        >
          {title}
        </Typography>
        <Typography color={theme.palette.secondary.main}>
          {description}
        </Typography>
      </Box>
    </Grid>
  )
}

export default StepCard
