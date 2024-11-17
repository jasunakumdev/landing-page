import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import React from 'react'

interface RevenueCardProps {
  title: string
  description: string
}

const RevenueCard: React.FC<RevenueCardProps> = ({ title, description }) => {
  return (
    <Grid
      size={{ xs: 12, md: 3, lg: 3 }}
      p={4}
      role="region"
      aria-labelledby={`revenue-card-title-${title}`}
      aria-describedby={`revenue-card-description-${title}`}
    >
      <Box textAlign="center">
        <Typography
          id={`revenue-card-title-${title}`}
          role="heading"
          aria-level={2}
          sx={{
            fontSize: { xs: '48px', md: '48px', lg: '96px' },
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: '24px',
          }}
          id={`revenue-card-description-${title}`}
        >
          {description}
        </Typography>
      </Box>
    </Grid>
  )
}

const Revenue = () => {
  return (
    <Box
      component="section"
      role="region"
      aria-labelledby="revenue-section-heading"
      sx={{
        flexGrow: 1,
        paddingLeft: { xs: '16px', md: '48px', lg: '96px' },
        paddingRight: { xs: '16px', md: '48px', lg: '96px' },
      }}
    >
      <Typography
        id="revenue-section-heading"
        role="heading"
        aria-level={1}
        sx={{
          fontSize: { xs: '36px', md: '48px' },
          color: 'primary.main',
          textAlign: 'center',
          fontWeight: 'bold',
          marginBottom: '32px',
        }}
      >
        Revenue Statistics
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <RevenueCard title="24%" description="Revenue Business" />
        <RevenueCard title="180k" description="In annual revenue" />
        <RevenueCard title="10+" description="Months of runway" />
      </Grid>
    </Box>
  )
}

export default Revenue
