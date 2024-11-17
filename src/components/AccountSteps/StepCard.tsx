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
      sx={{ backgroundColor: theme.palette.custom.cardColor }}
      p={4}
      key={title}
      role="region"
      aria-labelledby={`step-card-title-${number}`}
      aria-describedby={`step-card-description-${number}`}
      tabIndex={0}
    >
      <Box>
        <Typography
          id={`step-card-number-${number}`}
          sx={{
            fontSize: '96px',
            color: '#B2BAC6',
            fontWeight: 700,
            background: `linear-gradient(to bottom, #eee, ${theme.palette.custom.cardColor})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
          aria-hidden="true"
        >
          {number}
        </Typography>
        <Typography
          id={`step-card-title-${number}`}
          sx={{
            fontSize: '24px',
            color: theme.palette.custom.white,
            lineHeight: '1.25',
          }}
          role="heading"
          aria-level={2}
        >
          {title}
        </Typography>
        <Typography
          id={`step-card-description-${number}`}
          color={theme.palette.secondary.main}
          aria-live="polite"
        >
          {description}
        </Typography>
      </Box>
    </Grid>
  )
}

export default StepCard
